var computerChoicepc1 = Math.floor(Math.random() * 2) + 1;
var computerChoicepc2
if (computerChoicepc1 === 1){
computerChoicepc1 = "Pc 1 sceglie Pari";
computerChoicepc2 = "Pc 2 sceglie Dispari"
}else{
computerChoicepc1 = "Pc 1 sceglie Dispari";
computerChoicepc2 = "Pc 2 sceglie Pari"
}
alert(computerChoicepc1);
alert(computerChoicepc2)
var somma = 0;
var msg;
for (var i = 0; i < 2; i++) {
  var numeroGenerato = getRandomNumber(1, 5);
  somma = somma + numeroGenerato;
  console.log(numeroGenerato);
}
console.log(somma);
if (somma % 2 == 0) {
  msg = "Il computer che ha scelto pari ha vinto"
}else{
  msg = "Il computer che ha scelto dispari ha vinto"
}
document.getElementById('mio_id').innerHTML = msg;
function getRandomNumber(min, max){
  var result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
}
