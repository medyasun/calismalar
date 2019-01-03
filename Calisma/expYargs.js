argv = require("yargs").argv;

var command=argv._[0];



if(command === 'hello' && typeof argv.name !== 'undefined' && argv.surname !== 'undefined'){
  console.log('Hello ' + argv.name + ' '+ argv.surname);

}