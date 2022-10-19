function recerberMelhorEstudante (obj){
    let AlunosENotas = []
    let maiorMedia = 0

    Object.entries(obj).forEach(a => {
        const chave = 0, valor = 1
        const ArrayNotasAluno = a[valor]

    let MediaAluno = ArrayNotasAluno.reduce((acumulador,valor) =>
    acumulador +valor)/ArrayNotasAluno.length

    const newObj = { 
        nome: a[chave],
        media: MediaAluno
        }
        Object.defineProperty(newObj, 'notas', { 
            enumerable: false, 
            writable: false,  
            value: ArrayNotasAluno
        })
        if(maiorMedia <= MediaAluno){
            maiorMedia = MediaAluno
        }
        AlunosENotas.push(newObj)
    })
    const melhorEstudante = AlunosENotas.filter(a => a.media === maiorMedia)
    return melhorEstudante            
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })) // retornará { nome: "Mariana", media: 7.875 }