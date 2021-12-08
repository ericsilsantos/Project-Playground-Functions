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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};