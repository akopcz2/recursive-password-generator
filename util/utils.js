/**
 * @param {int} letterCount - Number of letters you want the word to consist of
 * @param {array} wordList - Wordlist Array -  json response from fetch
 */

exports.generateWord = (letterCount, wordList) => {
    let self = this;
    var count;
    var result = '';
    for (count = letterCount; count > 0; count--) {
        result += wordList[Math.floor(Math.random() * wordList.length)].word;
        result = (count <= 1) ? result = result + '-' : result = result + '.';
    };
    return result;
};

/**
 * @param {int} difficulty - Length of numerical values in password
 */
exports.generateNumbers = (difficulty) => {
    var count;
    var result = 0;
    for (count = difficulty; count > 0; count--){
        result = (count >= difficulty) ? result = Math.floor(Math.random() * 9) + 0 : result += `${Math.floor(Math.random() * 9) + 0 }`;
    } 
    return result;
};
