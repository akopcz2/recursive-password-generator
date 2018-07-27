let randomPass = require('./pw.js');
let userPassword = new randomPass(5,2);
userPassword.init().then((value) => {
    const userPassword = value;
    console.log(userPassword);
});
