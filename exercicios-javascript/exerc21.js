function menorNumero(nums){
    const minimo = Math.min(...nums)
    return console.log(minimo)
}

menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
