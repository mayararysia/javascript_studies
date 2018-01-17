/*Exercício 02 - com o byName*/

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

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function filter(array, func) {
  var copy = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]))
      copy.push(array[i]);
  }
  return copy;
}

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

function hasKnownMother(ancestry){
 	var array =	ancestry.filter(function(person){
 		return byName[person.name].mother != null && byName[person.name].bornMother != null;
	 }).map(ageDif);
 	return array;
}

function ageDif(person) { 
  return (person.died - person.born) - (person.born - person.bornMother);
}

var array = hasKnownMother(ancestry);
array
average(hasKnownMother(ancestry));
