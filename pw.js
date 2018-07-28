
const fetch = require('node-fetch');
let generateWord = require('./util/utils.js').generateWord;
let generateNumbers = require('./util/utils.js').generateNumbers;

/** 
 * Generates a Password by using a wordgame wordlist - Examples of a password look like abbot.sadly-37
 * Words in password are sepearted by a  '.' and appended with a '-' and a random Int between 01 - 99
 * @param {int} numberOfLetters number of letters you want the word to have
 * @param {int} difficulty complexity level 1 being the lowest
 */

class GeneratePassword {
    constructor(numberOfLetters, difficulty) {
      this.numberOfLetters = numberOfLetters;
      this.difficulty = difficulty;
      this.wordList;
      this.init = this.init.bind(this);
    }
    async init(){
        const listFetched = await this.fetchList();
        const resultGenerator = await this.randomize();
        return resultGenerator;
    }
    async fetchList(){
        try {   
            let response = await fetch(`https://www.wordgamedictionary.com/word-lists/${this.numberOfLetters}-letter-words/${this.numberOfLetters}-letter-words.json`);
            let json = await response.json();
            this.wordList = json;
        }
        catch(e){
            console.log('Error', e);
        }
    }
    async randomize(difficulty) {
        try {
            let words = await generateWord(this.difficulty, this.wordList);
            let numbers = await generateNumbers(this.difficulty);
            let combined = words + numbers;
            return combined;
        }
        catch(e) {
            console.log('ERROR', e);
        }
    };
  }

module.exports = GeneratePassword;
