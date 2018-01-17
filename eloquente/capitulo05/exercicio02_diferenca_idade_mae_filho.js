/*Exercício02 - sem o byName*/

var ancestry = [
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956, 
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme", "bornMother": 1852},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel", "bornMother": 1808}
]


function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function filter(array, func) {
  var copia = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]))
      copia.push(array[i]);
  }
  return copia;
}

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

function hasKnownMother(ancestry){
 	var array =	ancestry.filter(hasMother).map(ageDif);
 	return array;
}

function hasMother(person) {
 	var array = Object.getOwnPropertyNames(person);
 	var has = 0;
	for (var i = 0; i < array.length; i++) {
		if(array[i] == "mother" && person.mother != null) 
			has++;
		if(array[i] == "bornMother" && person.bornMother != null)
			has++;
	}
	return has == 2;
}

function ageDif(person) { 
  return (person.died - person.born) - (person.born - person.bornMother);
}

average(hasKnownMother(ancestry));

