

## Wordlist Password Generator

Uses words found within the worldlists on the site [https://www.wordgamedictionary.com/word-lists/]

```javascript
let randomPass = require('./pw.js');
let userPassword = new randomPass(5,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});
/* This would return something like abbot.sadly-37 */
```