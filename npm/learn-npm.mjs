import validator from 'validator';
import chalk from 'chalk';
console.log(validator.isEmail('sandhika@gmail.c'));
console.log(validator.isMobilePhone('0782345678','id-ID'));
console.log(validator.isNumeric('0782345678'));
console.log(chalk.italic.bgBlue.black('HelloWorld!'));
