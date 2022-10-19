function filtrarDigitos(array, qtdDigito){
    return array.filter(numero => String(numero).length === qtdDigito)
}

console.log(filtrarDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarDigitos([5, 9, 1, 125, 11], 1))