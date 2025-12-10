// Fonction récursive pour calculer la factorielle
function factorielle(n) {
  // Cas de base : si n = 0, retourner 1
  if (n === 0) {
    return 1;
  } 
  // Cas récursif : n * factorielle(n - 1)
  else {
    return n * factorielle(n - 1);
  }
}

// Tester la fonction avec plusieurs exemples
console.log("factorielle(5) = " + factorielle(5));   // 120
console.log("factorielle(0) = " + factorielle(0));   // 1
console.log("factorielle(3) = " + factorielle(3));   // 6
console.log("factorielle(7) = " + factorielle(7));   // 5040

// Demander un nombre à l'utilisateur
let n = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
console.log("factorielle(" + n + ") = " + factorielle(n));