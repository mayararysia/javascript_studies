function reverseArray(array){
	var novoArray = [];
	
	for(var i = (array.length-1); i>=0; i--){
		novoArray.push(array[i]); 
	} 
	return novoArray;
}

//função reverseArray modificada
function reverseArray(array){
	var novoArray = [], i = 0;
	while(i<array.length){
		novoArray.unshift(array[i]);
		i++;
	}
	return novoArray;
}

function reverseArrayInPlace(array){
	var qtd = array.length/2;
	var aux, i, j;
	qtd = Math.floor(qtd);
	i = 0;
	j = array.length - 1;
	
	while(i<qtd){
		aux = array[i];
		array[i] = array[j];
		array[j] = aux;
		i++;
		j--;
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]