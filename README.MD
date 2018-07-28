

## Wordlist Password Generator

Uses words found within the worldlists on the site [https://www.wordgamedictionary.com/word-lists/]

**Single Dependecy**
Node-Fetch and using a node version with ASYNC compatability

```javascript
let randomPass = require('wordlist-password-generator');
/** 
 * (5) Number of letters you want to word to have
 * (2) Levels of depth | 2 words and 2 numbers
 * */
let userPassword = new randomPass(5,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});
/* This would return something like abbot.sadly-37 */
```

#### To Do
1. Allow for upload of custom wordlist