function estaEntre(numero, minimo,maximo, inclusivo){
    if(numero >= minimo && numero <= maximo && inclusivo === true || numero >= maximo && numero <= minimo && inclusivo === true){
        return true
    } else{return false}
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))