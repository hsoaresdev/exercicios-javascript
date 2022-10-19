function checarAnoBissexto(ano){
   const bissexto = ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0
   if(bissexto){ 
       return true
   }else{
    return false
   }
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))
console.log(checarAnoBissexto(1600))
console.log(checarAnoBissexto(1500))
console.log(checarAnoBissexto(1996))