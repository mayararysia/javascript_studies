/*
	Zero é par.
Um é ímpar.
Para todo outro número N, sua paridade é a mesma de N - 2.
*/

 function isEven(N) {
 	if(N<0) N = N*(-1); //transforma em positivo
    if(N == 0) return true;
	if(N == 1) return false;
    else
      return N = isEven(N-2);
 }
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??