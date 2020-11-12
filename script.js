function multiply(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  console.log(multiply(2, multiply(2,3)));
  console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction