var storage = require("node-persist");
storage.initSync();
var argv = require("yargs")

    .command('create','Yeni bir hesap oluşturur!',function(yargs){
            yargs.options({
                name: {
                        demand: true,
                        alias: 'n',
                        description: 'Hesap adı.',
                        type: 'string'
                },
                username: {
                    demand: true,
                    alias: 'u',
                    description: 'kullanıcı adı',
                    type: 'string'
                },
                password: {
                        demand: true,
                        alias: 'p',
                        description: 'Parola',
                        type: 'string'
                }
            }).help('help');
    })
    .command('get','Hespa bilgilerini görüntüler!',function(yargs){
        yargs.options({
            name: {
                    demand: true,
                    alias: 'n',
                    description: 'Hesap adı.',
                    type: 'string'
            }
        }).help('help');
    }).help('help')
    .argv;

    var command = argv._[0];
    if(command === 'create' && typeof argv.name!== 'undefined' && typeof argv.username!== 'undefined' && typeof argv.password!=='undefined'&& argv.name.length>0 && argv.username.length>0 && argv.password.length>0){
        var createdAccount =  createAccount({
            name : argv.name,
            username: argv.username,
            password: argv.password
        });
        console.log(createdAccount);

    } else{console.log('hata')}




/*
    account.name : Twitter
    account.username : User123!
    account.password : Password123!
*/

// Array...

function createAccount(account) {

    // Onceki kayitlari al // getItemSync
    var accounts = storage.getItemSync("accounts");
    
    // Eger onceki kayit yoksa.. array olustur...
    if(typeof accounts === 'undefined'){
        accounts = [];
    }
    // account verisini array icerisine kaydet...
    accounts.push(account);

    // setItemSync kalıcı olarak kaydet...
    storage.setItemSync("accounts", accounts);

    return account;
}

function getAccount(accountName) {
    
    // getItemSync ile veriyi getirmek... (Array)
    var accounts = storage.getItemSync("accounts");
    var matchedAccount;

    // forEach butun kayitlari dolasarak accountName bulunacak..
    accounts.forEach(function(account){
        if(account.name === accountName){
            matchedAccount = account;
        }
    })
    // return 
    return matchedAccount;
}


/*
createAccount({
    name : 'Twitter',
    username : 'test@gmail.com',
    password : '567567657!'
});
*/

/* var twitterAccount = getAccount("Facebook");

console.log(twitterAccount); */