function media(...numeros){
    if(numeros[0] === undefined) return 0;    
    var total = numeros.map(n => parseFloat(n)).reduce( (a, b) => a+b );    
    return total / numeros.length;
}