var array = [0,1,2,3,4,5,6,7,8,9];

function range (start, end){
	return array.slice(start, end+1);
}

function sum(array) {
	var soma=0;
	for(var i=0; i<array.length; i++){
		soma = soma+array[i];
	}

	return soma;
}

//função range modificada:
function range (start, end, salt){
	var array2 = [];
	var i;
	if(salt==null)	return array.slice(start, end+1);
	else{
		if(salt<0) for(i=start; i>=end; i=i+salt) array2.push(array[i]);
		else for(i=start; i<end; i=i+salt) if(i<=end-1) array2.push(array[i]);
		
		return array2;
	}
}

//função range usando o objeto arguments
function range (start, end, salt){
	var array2 = [];
	var i;
	if(arguments.length == 3){
	
		if(salt<0) for(i=start; i>=end; i=i+salt) array2.push(array[i]);
		else for(i=start; i<end; i=i+salt) if(i<=end-1) array2.push(array[i]);
		
		return array2;
	}
	else{
		return array.slice(start, end+1);
	}
}

console.log(range(1, 10, 2));

console.log(sum(range(1, 10)));

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
