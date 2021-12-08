// Desafio 10
function techList(lista, nome) {
  let listObjTech=[]
  let key,key2=1;
  let aux;
  //ordena a lista recebida
  for(key in lista){
    for(key2 in lista){
      if(lista[key2-1]>lista[key2]){
        aux=lista[key2-1]
        lista[key2-1]=lista[key2]
        lista[key2]=aux
      }
    }
  }
  //cria a lista de objetos e a preenche
  for(let index=0;index<lista.length; index+=1){
    let objTech={
      tech: lista[index]  ,
      name: nome
    }
    listObjTech[index]= objTech;
  }
  //verifica se a lista está vazia
  if(listObjTech.length===0){
    return "Vazio!"
  }
  else{
    return listObjTech
  }
}

// Desafio 11
function generatePhoneNumber(lista) {
  if(lista.length!==11){
    return("Array com tamanho incorreto.")
  }
  let contador=1
  for (let index=0;index<lista.length;index+=1){
    if (lista[index]<0 || lista[index]>9 || contador>=3){
      return("não é possível gerar um número de telefone com esses valores")
    }
    contador=1
    for(let index2=index+1;index2<lista.length;index2+=1){
      if(lista[index]===lista[index2]){
        contador+=1
      }
    }
  }
  return(gerarNumero(lista))
}
//criei uma função para criar uma string com a formatação de um numero de telefone
function gerarNumero(lista){
    let numero="("
    for(let index=0; index<lista.length; index+=1){
      switch(index){
        case 2:
          numero+=") "
          break
        case 7:
          numero+="-"
      }
      numero+=lista[index]
    }
    return numero;
}

// Desafio 12
function triangleCheck(ladoUm,ladoDois,ladoTres) {
  if(!(ladoUm<(ladoDois+ladoTres) && ladoUm>Math.abs(ladoDois-ladoTres))){
      return false
  }else if(!(ladoDois<(ladoUm+ladoTres) && ladoDois>Math.abs(ladoUm-ladoTres))){
    return false
  }else if(!(ladoTres<(ladoDois+ladoUm) && ladoTres>Math.abs(ladoDois-ladoUm))){
    return false
  }
  return true
}

// Desafio 13
function hydrate(bebida) {
  let expressao=/\d+/g;
  let coposDeBebidas=bebida.match(expressao)
  if(coposDeBebidas.length==1 && coposDeBebidas[0]==1){
    return("1 copo de água")
  }else{
    let contador=0
    for(let index=0;index<coposDeBebidas.length;index+=1){
      contador+=parseInt(coposDeBebidas[index])//parseInt transforma as string em inteiro
    }
    return(contador+" copos de água")
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};