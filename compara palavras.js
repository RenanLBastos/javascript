//essa função compara se todas as letras da primeira palavra estão na segunda.

function mutation(arr) {
    let segunda = arr[1].toLowerCase();
    let primeira = arr[0].toLowerCase();
    //primeiro deixa ambas as palavras minusculas.
   for (let i = 0; i < segunda.length; i++)
   //fazemos um for loop varrendo todas as palavras.
   {
      if (primeira.indexOf(segunda[i]) < 0) return false
      //se todas as letras da segunda palavra não estiverem na primeira, retornará falso.
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
  console.log(mutation(["Mary", "Army"]))