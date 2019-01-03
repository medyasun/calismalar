var crypto = require ("crypto-js");

var mesaj ="Şifrelenecek key";
var key="123abc!";

var sifreliMesaj=crypto.AES.encrypt(mesaj,key);

console.log("Şifreli Metin: " + sifreliMesaj);

var bytes=crypto.AES.decrypt(sifreliMesaj,key);

var decryptedMesaj= bytes.toString(crypto.enc.Utf8);

console.log(bytes);