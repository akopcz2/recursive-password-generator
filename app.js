let randomPass = require('wordlist-password-generator');
/** 
 * (5) Number of letters you want to word to have
 * (2) Levels of depth - 2 Yield 2 words and 2 numbers
 * */
let userPassword = new randomPass(5,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});