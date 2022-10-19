function inverter(obj){
    const objInvertido = {}

    Object.entries(obj).forEach(a => {
        const chave = 0, valor = 1

        objInvertido[a[valor]] = a[chave]
    })
    return console.log(objInvertido)
}

inverter({a: 1, b: 2, c: 3})