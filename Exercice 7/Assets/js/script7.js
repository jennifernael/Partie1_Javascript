document.getElementById('button').onclick = function sendData(){
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;

      if(year > 18){
        alert('Vous êtes majeur, bienvenue !');
      }else{
        alert('Attention erreur, vous êtes mineur !');
     }
  }