function calcularSalario(horasMes, valorHora){
    const x = horasMes * valorHora
    const liquido = x * (1 - 0.3)
    return console.log(`Salário igual a R$ ${x}, sendo o valor líquido de R$ ${liquido}`)
    
}

calcularSalario(150, 40.5)