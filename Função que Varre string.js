function truncateString(str, num) {
    var cortada = str.slice(0 , num);
    //slice é usado para cortar uma parte da string
    var pontos = "...";
    if (str.length > num) {
      //se a largura da string for maior que o numero fornecido
        return cortada + pontos
        //retorna os caracteres equilavente ao numero fornecido mais os 3 pontos (...)
        } else {
          //se não retorna toda a string completa.
          return str
        }
        }
  
  truncateString("A-tisket a-tasket A green and yello basket", 8);
