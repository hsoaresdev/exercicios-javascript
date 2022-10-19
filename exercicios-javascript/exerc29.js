function segundoMaior(array){
    let MaiorNumero = Math.max(...array)
    //console.log(MaiorNumero)
    let ExcluiMaior = array.filter(valor => valor < MaiorNumero)
    //console.log(ExcluiMaior)
    let segundoMaiorNumero = Math.max(...ExcluiMaior)
    return console.log(segundoMaiorNumero)
}

segundoMaior([12, 16, 1, 5]) // deve retornar 12
segundoMaior([8, 4, 5, 6]) // deve retornar 6