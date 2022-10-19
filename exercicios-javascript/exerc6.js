function inverso(entrada){
    const tipo = typeof entrada
    if(tipo === "number"){
        return -entrada
    }
    if(tipo === "boolean"){
        return !entrada            
    }
    if(tipo === "string"){
        return 'Entrada retornará booleano ou números, mas o parâmetro é do tipo string'
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))