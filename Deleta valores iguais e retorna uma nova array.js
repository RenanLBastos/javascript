function destroyer(arr) {
    let valorRemovido = Object.values(arguments).slice(1); //esta variavel guarda os valores removidos para depois comparar com arr.
    for (let i = 0; i < arr.length;i++)//loop no indice da array
     {
      for (let j = 0; j < valorRemovido.length; j++)//loop para o indice do valor removido
       {
         if (arr[i] === valorRemovido[j]) //verifica se os valores são identicos 
         {
           delete arr[i] //se o valor for identico usamos delete para remover da arr
         }
         }
    }
    return arr.filter(item => item !== null);// retorna a array modificada criada pelo delete.
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);