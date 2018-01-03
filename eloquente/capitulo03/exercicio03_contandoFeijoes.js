function countBs (string) {
	var counter=0, index;
	for(index=0; index<string.length; index++){
		if(string.charAt(index) == "B") counter++;
	}
	return counter;
}

function countChar (string, caracter) {
	var counter=0, index;
	for(index=0; index<string.length; index++){
		if(string.charAt(index) == caracter) counter++;
	}
	return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4