//falha na unidade de multiplicador
function MultiplicatorUnitFailure() {}

//multiplicidade primitiva
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

//multiplicação confiável
function reliableMultiply(a, b) {
  for(;;)
   { 
	  var result = primitiveMultiply(a, b);
	  try{ 
	  	return result;
	  }catch(error){
	  	if(!(error instanceof MultiplicatorUnitFailure)) 
	  		return error;
	  }	  
    }
}

console.log(reliableMultiply(8, 8)); // 64