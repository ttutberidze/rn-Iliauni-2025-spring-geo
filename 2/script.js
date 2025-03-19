var validator = require('validator');

validator.isEmail('foo@bar.com'); //=> t
console.log(validator.isEmail('foobar.com'))