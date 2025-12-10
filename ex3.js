let input = prompt("Veillez entrer un nombre:");
let nombre =parseFloat(input);

 if (isNaN(nombre)){
    alert("Ce n'est pas un nombre valide !");
 }else{
    if (nombre < 0 ){
        alert("Nombre négatif");
 }else if (nombre <= 10){
        alert("Petit");
  }else if ("nombre<= 50"){
      alert ("moyen");
      }else if ("nombre>50"){
      alert ("grand");
      }else 
      alert ("tres grand");
 }