import validator from 'validator';
import chalk from 'chalk';
import yargs from 'yargs';





console.log(validator.isEmail('sandhika@gmail.c'));
console.log(validator.isMobilePhone('0782345678','id-ID'));
console.log(validator.isNumeric('0782345678'));

console.log(chalk.italic.bgBlue.black('HelloWorld!'));

// console.log(argv)
yargs.command('add', 'Menambah contact baru', ()=>{}, (argv) => {
  console.log(argv.nama)
})

yargs.parse();