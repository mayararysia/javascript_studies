function equalArrays(array1, array2){
	var tamanhoArray = array1.length, igual = 0, cont;
	var a = [], b = [];

	if(tamArrays(array1, array2)){

		for (i=0; i<tamanhoArray; i++){

			if(typeof array1[i] === "object") a = getProps(array1[i]);
		
			if(typeof array2[i] === "object") b = getProps(array2[i]);
		
			if(a!=null && b!=null){
				if(compObjInterno(a, b, array1[i], array2[i])) igual++;
				else return false;
			}
			else if(array1[i] == array2[i]) igual++;			
		}
		if(igual == tamanhoArray) return true;
		else return false;
	}else return false;
}

function tamArrays(array1, array2){
	if(array1.length == array2.length) return true;
	else return false;
}

function forInValues(obj){
	var array = [];
	for (var prop in obj) array.push(obj[prop]);
	return array;
}
function getProps(obj){
	array = [];
	return array = Object.getOwnPropertyNames(obj);
}

function comp(array1, array2){
	var cont = 0, i;
	for (i=0; i<array1.length; i++)	if(array1[i] == array2[i]) cont++;
	return cont;
}

function compObjInterno(array1, array2, obj, obj2){
	var cont, a = [], b = [];
	if(tamArrays(array1, array2)){
		cont = comp(array1, array2);
		if(cont == array1.length){
			a = forInValues(obj);
			b = forInValues(obj2);

			if(tamArrays(a, b)){
				cont = comp(a, b);
				if(cont == a.length) return true;
				else return false;
			}
			else return false;						
		}
		else return false;
	}
	else return false;
}

function deepEqual(obj1, obj2){
	var array1 = [], array2 = [];
	var iguais;

	if((typeof obj1 === "object"  && obj1 != null) && (typeof obj2 === "object"  && obj2 != null)){

		array1 = getProps(obj);
		array2 = getProps(obj2);
		iguais = equalArrays(array1, array2);

		if(iguais){
			array1 = forInValues(obj1);
			array2 = forInValues(obj2);
			iguais = equalArrays(array1, array2);
			if(iguais) return true;
			else return false;
		}else return false;
	}
	else return false;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
