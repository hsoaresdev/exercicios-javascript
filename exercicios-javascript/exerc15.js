//criar uma função que receba o array e retorne os valores e indices que são pares

function receberPares(array){
    return array.filter(function(valor, indice){
        if(valor % 2 === 0 && indice % 2 === 0){
            return valor
        }
    })
}

console.log(receberPares([1, 2, 3, 4]))
console.log(receberPares([10, 70, 22, 43]))