document.getElementById('button').onclick = function sendData(){
  var name = document.getElementById("name").value;
  var footNumber = document.getElementById("footNumber").value;
  var year = document.getElementById("year").value;
  var result = ((footNumber * 2 + 5) * 50 - year) + 1770;

// Affichage du resultat dans une boîte d'alerte
alert('Résultat : ' + result);
}














