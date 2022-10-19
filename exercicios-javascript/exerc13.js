function filtrarNumeros(array){
    return array.filter(function(elemento){
        return typeof elemento === "number"
    })
}

console.log(filtrarNumeros(["Java", 1, "2", "web", 20]))
console.log(filtrarNumeros(["a", "c"]))