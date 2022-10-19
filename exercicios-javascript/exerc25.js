function buscarPalavrasSemelhantes(termo, frase){
   const result = frase.filter(palavra => palavra.includes(termo))
   return console.log(result)
}
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) 
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) 