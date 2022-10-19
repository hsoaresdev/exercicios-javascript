function nomeDoMes(numero){
    switch(numero){
        case 1: console.log('Janeiro')
        break 
        case 2: console.log('Fevereiro')
        break 
        case 3: console.log('Março')
        break 
        case 4: console.log('Abril')
        break 
        case 5: console.log('Maio')
        break 
        case 6: console.log('Junho')
        break 
        case 7: console.log('Julho')
        break 
        case 8: console.log('Agosto')
        break 
        case 9: console.log('Setembro')
        break 
        case 10: console.log('Outubro')
        break 
        case 11: console.log('Novembro')
        break 
        case 12: console.log('Dezembro')
        break 
        default: console.log('Mês inválido')
    }
}

//nomeDoMes(1)
//nomeDoMes(4)
//nomeDoMes(14)

function receberNomedoMes(numero){
    const meses = ['Janeiro','Fevereiro','Março','Abril', 'Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    if(numero > 12){ console.log('Mês inválido')
    }
    const encontrarIndex = numero - 1 
    meses.forEach((mes, indice) => {
        if(encontrarIndex === indice){
            console.log(`${mes}`)
        }
    })
}

receberNomedoMes(1)
receberNomedoMes(5)
receberNomedoMes(16)
