// création de la fonction (choix du nom libre : ici sendData)
function sendData(){
  // le getElementById permet de cibler l'ID précis
  var name = document.getElementById("name").value;
  var firstName = document.getElementById("firstName").value;
  var city = document.getElementById("city").value;
  
  alert('Bonjour ' + firstName + '\n' + name + '\n' + city);
  // attention ce n'est pas un slash mais un anti-slash \n
}
