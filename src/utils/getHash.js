//Forma de consegir el Id del elemento que se mande a llamar

  /*
  location > accde a la locacion 
  hash > optener el hash
  slice(1) > eliminar el primer elmt
  toLocaleLOWC > accd siempre en min.
  split('/') > convertir a arreglo, eliminar los slash
  [1] > accder a la posicion 1
  || > significa ó
  */
const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;