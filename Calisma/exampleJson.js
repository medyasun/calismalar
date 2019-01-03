var person ={
  name:'Mehmet',
  soyad:'Sungur'
};

console.log(person);
console.log(typeof person);

var jsonObject = JSON.stringify(person);

console.log(jsonObject);
console.log(typeof jsonObject);

var reobject = JSON.parse (jsonObject);
console.log(reobject);
console.log(typeof reobject);
