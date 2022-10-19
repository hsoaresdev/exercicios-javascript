function areaDoTriangulo(base, altura){
    let area = (base*altura)/2
    return console.log(area.toFixed(2))
}

areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59