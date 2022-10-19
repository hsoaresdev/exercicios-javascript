function repetir(elemento, repeticao){
    let newArray = []
    for(let i = 0; i < repeticao; i++){
        newArray.push(elemento)
    }
    return console.log(newArray)
}

repetir(7,3)
repetir("código", 2)