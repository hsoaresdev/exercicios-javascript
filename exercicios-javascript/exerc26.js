function removerVogais(string){
   const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

   vogais.forEach(vogal => string = string.replace(vogal, ''))
   return console.log(string)
}

removerVogais("Cod3r") 
removerVogais("Fundamentos") 