const lista = [1, 2, 3, 4, 5]

function primeiroEUltimo(array){
    let primeiroElemento = array.shift()
    let ultimoElemento = array.pop()
    
    return console.log([primeiroElemento, ultimoElemento])
}

primeiroEUltimo(lista)