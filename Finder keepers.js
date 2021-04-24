function findElement(arr, func) {
  let num = 0;
  //declara o num
  for (let i = 0; i < arr.length; i++) {
      //largura da array
    num = arr[i];
    //atribui todo o valor da array para num do loop
    if (func(num)) {
        //retorna o numero quando encontrado na função pela array
      return num
      
    }
  }
  //se não retorna undefined
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);