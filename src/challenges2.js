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
function generatePhoneNumber() {
  // seu código aqui
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