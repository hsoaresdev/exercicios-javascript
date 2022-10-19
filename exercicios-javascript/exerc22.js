function funcaoDaSorte(numero){
    const min = 1
    const max = 10
    const sortearNumero = Math.floor(Math.random()*(max - min + 1) + min)

    console.log(sortearNumero)

    return (numero === sortearNumero ? 
        `Parabéns! O número sorteado foi o ${sortearNumero}` :
        `Que pena! O número sorteado foi o ${sortearNumero}`
    )

}

console.log(funcaoDaSorte(10)) 
console.log(funcaoDaSorte(5)) 
console.log(funcaoDaSorte(5))