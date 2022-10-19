function removerPropriedade(obj, atributo){
    const copia = Object.assign({}, obj)
    delete copia[atributo]
    
    return console.log(copia)
}

removerPropriedade({a: 1, b:2}, "a")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao")