// Desafio 1
function compareTrue(primeiro,segundo) {
  if(primeiro===true && segundo===true){
      return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return((base*height)/2)
}

// Desafio 3
function splitSentence(splitSentence) {
  let aux= [];
  let aux2="";
  let num=0;
  for (let index = 0; index < splitSentence.length; index+=1){
    if(splitSentence[index]!==" "){
      aux2+=splitSentence[index]
    }else{
      aux[num]=aux2;
      num+=1;
      aux2="";
    }
  }
  aux[num]=aux2;
  return aux;
}

// Desafio 4
function concatName(array) {
  let nome = array[array.length-1]+', '+ array[0]
  return nome
}

// Desafio 5
function footballPoints(wins, ties) {
  let points =(wins*3)+ties;
  return(points);
  //ou também pode ser - > return ((wins*3)+(ties));
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
