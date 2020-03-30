var parola = prompt("Inserisci una parola")
function check_palindroma(){
  if(parola.split("").reverse().join("") === parola){
    var msg = "Parola Palindroma"
  }else{
    var msg = "Parola Non Palindroma"
  }
  document.getElementById('mio_id').innerHTML = msg;
}
check_palindroma(parola)
