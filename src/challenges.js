// Desafio 1
compareTrue(true,false)
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
  let key=1;
  let maior=array[0]; //se o array tiver apenas um elemento, por consequencia ele será o maior número
  for (key in array){
    if(maior<array[key]){
      maior=array[key]
    }
  }
  key=0;
  let repeticaoMaior=0;
  for (key in array){
    if(maior === array[key]){
      repeticaoMaior+=1;
    }
  }
  return(repeticaoMaior)
  //OBS: tentei resolver de uma forma diferente (tinha esquecido da existencia do for/in), porém, mesmo funcionando, estava com uma complexidade muito grande.
  /*for(let index=0; index<array.length; index+=1){
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
  }*/
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
function encode(variavel) {
  for(let index=0; index<variavel.length; index+=1){
    switch(variavel[index]){
      case "a":
        variavel=variavel.replace("a","1");
        break;
      case "e":
        variavel=variavel.replace("e","2");
        break;
      case "i":
        variavel=variavel.replace("i","3");
        break;
      case "o":
        variavel=variavel.replace("o","4");
        break;
      case "u":
        variavel=variavel.replace("u","5");
        break;
    }
  }
  return variavel
  //daria pra fazer essa função sem usar switch/case, apenas o replace
}
function decode(variavel) {
  for(let index=0; index<variavel.length; index+=1){
    switch(variavel[index]){
      case "1":
        variavel=variavel.replace("1","a");
        break
      case "2":
        variavel=variavel.replace("2","e");
        break
      case "3":
        variavel=variavel.replace("3","i");
        break
      case "4":
        variavel=variavel.replace("4","o");
        break
      case "5":
        variavel=variavel.replace("5","u");
        break
    }
  }
  return variavel
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
