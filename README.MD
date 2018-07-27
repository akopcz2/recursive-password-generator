

## Wordlist Password Generator

Uses words found within the worldlists on the site [https://www.wordgamedictionary.com/word-lists/]

```javascript
let randomPass = require('wordlist-password-generator');
let userPassword = new randomPass(5,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});
/* This would return something like abbot.sadly-37 */
```

#### To Do
1. Allow for upload of custom wordlist