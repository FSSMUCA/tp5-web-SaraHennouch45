
function totalAvecRemise(total, remise) {
  let totalFinal = total - (total * remise / 100);
  return totalFinal;
}
let totalHT = parseFloat(prompt("Entrez le total HT :"));
let remisePourcent = parseFloat(prompt("Entrez la remise en % :"));
let totalFinal = totalAvecRemise(totalHT, remisePourcent);
console.log("Le total final est : " + totalFinal + " DH");