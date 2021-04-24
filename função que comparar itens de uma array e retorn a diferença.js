function diffArray(arr1, arr2) {
    var newArr = [] //acumulador
    function comparar(primeiro, segundo) {
      for (let i = 0; i < primeiro.length; i++) // varre a string
      {
        if (segundo.indexOf(primeiro[i]) === -1) //se o indice da primeiro não esta na segunda
        {
          newArr.push(primeiro[i]) //coloca o indice diferente no acumulador
        }
      }
    }
    comparar(arr1, arr2); // compara as string
    comparar(arr2, arr1);
    return newArr; // retorna a nova string
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);