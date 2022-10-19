function somarNumeros (array){  
   const resultado = array.reduce((acumulador, valor) => acumulador + valor);
   console.log(resultado)  
}


somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])