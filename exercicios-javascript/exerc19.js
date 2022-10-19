function calcularMedia (nums){
    let resultado = nums.reduce((acumulador, valor) => acumulador + valor)/nums.length
    return console.log(resultado)
}
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3