var storage = require("node-persist");
storage.initSync();
argv = require("yargs").argv;

/* function createAccount(account){
  var accounts = storage.getItemSync("accounts");

  if(typeof accounts === 'undefined'){
    accounts=[];
  }
  accounts.push(account);
  storage.setItemSync("accounts", accounts);
  return account;
}



//console.log(argv.name);





if(typeof argv.name !== 'undefined' && argv.surname !== 'undefined'){
  createAccount ({name: argv.name, surname: argv.surname});
}
 */



function getAccount(accountName) {
  var accounts = storage.getItemSync("accounts");
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account.surname;
    }
  })
  return matchedAccount;
}

if (typeof argv.hesap !== 'undefined') {
  console.log(getAccount(argv.hesap));
}