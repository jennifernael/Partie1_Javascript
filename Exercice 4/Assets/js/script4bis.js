document.getElementById('button').onclick = function sendData(){
    // on note le onclick ici avec juste un ID dans le html dans le bouton
  var name = document.getElementById("name").value;
  var firstName = document.getElementById("firstName").value;
  var city = document.getElementById("city").value;
  alert('Bonjour ' + firstName + '\n' + name + '\n' + city);
  // attention ce n'est pas un slash mais un anti-slash \n
}


