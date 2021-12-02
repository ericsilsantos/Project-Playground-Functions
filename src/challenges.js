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
function highestCount(array) {
  let x=1;
  for(let index=0; index<array.length; index+=1){
    for(let index2=index+1; index2<=array.length; index2+=1){
      if(array[index]<array[index2] ){
        x=1;
        break
      }else if(array[index]===array[index2]){
        x+=1
      }
      if(index!=array.length && index2==array.length){
        return x;
      }
    }
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta;
  //Math.abs Retorna o módulo, ou valor absoluto, de um número (|x|).
  if((Math.abs(mouse-cat1))<(Math.abs(mouse-cat2)) && (cat1!==cat2)){
    resposta="cat1"
  }else if((Math.abs(mouse-cat1))>(Math.abs(mouse-cat2)) && (cat1!==cat2)){
    resposta="cat2"
  }else{
    resposta="os gatos trombam e o rato foge"
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayAux=[];
  for(let index=0; index<array.length; index+=1){
    arrayAux[index]=array[index];
    if((array[index]%3)===0){
      arrayAux[index]="fizz"
    }
    if((array[index]%5)===0){
      arrayAux[index]="buzz"
    }
    if(((array[index]%3)===0)&&((array[index]%5)===0)){
      arrayAux[index]="fizzBuzz"
    }
    if(((array[index]%3)!==0)&&((array[index]%5)!==0)){
      arrayAux[index]="bug!"
    }
  }
  return arrayAux
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
