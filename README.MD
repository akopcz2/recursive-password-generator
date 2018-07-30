

## Wordlist Password Generator

Uses words found within the worldlists on the site [https://www.wordgamedictionary.com/word-lists/]

**Single Dependecy**
Node-Fetch

**Uses Async**
Compatible with Node versions >=7.6 (containing default ASYNC)

```javascript
let randomPass = require('wordlist-password-generator');
/** 
 * (4) Number of letters you want to word to have | Max = 12
 * (2) Levels of depth | 2 words and 2 numbers 
 * */
let userPassword = new randomPass(4,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});
/* This would return something like lahs.guru-10 */
```

#### To Do
1. Allow for upload of custom wordlist