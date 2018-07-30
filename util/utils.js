exports.generateWord = (difficulty, wordList) => {
    console.log(wordList , ' Inside util');
    let self = this;
    var count;
    var result = '';
    for (count = difficulty; count > 0; count--) {
        result += wordList[Math.floor(Math.random() * wordList.length)].word;
        result = (count <= 1) ? result = result + '-' : result = result + '.';
    };
    return result;
};

exports.generateNumbers = (difficulty) => {
    var count;
    var result = 0;
    for (count = difficulty; count > 0; count--){
        result = (count >= difficulty) ? result = Math.floor(Math.random() * 9) + 0 : result += `${Math.floor(Math.random() * 9) + 0 }`;
    } 
    return result;
};
