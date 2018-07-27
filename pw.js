
const fetch = require('node-fetch');
/** Generates a Password by using a wordgame wordlist - Examples of a password look like abbot.sadly-37
 * Words in password are sepearted by a  '.' and appended with a '-' and a random Int between 01 - 99
 * @param {integer} numberOfLetters number of letters you want the word to have
 * @param {integer} difficulty complexity level 1 being the lowest
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

    generateWord(difficulty) {
        let self = this;
        var count;
        var result = '';
        for (count = difficulty; count > 0; count--) {
            result += this.wordList[Math.floor(Math.random() * this.wordList.length)].word;
            result = (count <= 1) ? result = result + '-' : result = result + '.';
        };
        return result;
    };

    generateNumbers(difficulty) {
        var count;
        var result = 0;
        for (count = difficulty; count > 0; count--){
            result = (count >= difficulty) ? result = Math.floor(Math.random() * 9) + 0 : result += `${Math.floor(Math.random() * 9) + 0 }`;
        } 
        return result;
    };

    async randomize(difficulty) {
        try {
            let words = await this.generateWord(this.difficulty);
            let numbers = await this.generateNumbers(this.difficulty);
            let combined = words + numbers;
            return combined;
        }
        catch(e) {
            console.log('ERROR', e);
        }
    };
  }

module.exports = GeneratePassword;
