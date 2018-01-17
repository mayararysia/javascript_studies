/*escrever a média de idades para cada século individualmente.*/

var ancestry = [
  {"name": "Carolus Haverbeke", "sex": "m", 
  "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", 
  "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", 
  "born": 1683, "died": 1724, "father": "Frederik de Rycke", 
  "mother": "Laurentia van Vlaenderen"},
  {"name": "Philibert Haverbeke", "sex": "m",
   "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m",
   "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m",
   "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", 
  "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", 
  "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", 
  "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m",
   "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f",
   "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Lieven van Haverbeke", "sex": "m", 
  "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}
 ]


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function reduce(array, combine, start){
	var current = start;
	for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  	return current;
}

function map(array, transform){
	mapped = [];
	for(var i = 0; i< array.length; i++) mapped.push(transform(array[i]));
	return mapped;
}

function filter(array, func) {
  var copy = [];
  for (var i = 0; i < array.length; i++) {
    if (func(array[i]))
      copy.push(array[i]);
  }
  return copy;
}

function groupBy (ancestry, func){

	var byCentury = ancestry.filter(func).map(function(person){
		return {
			"century": Math.ceil(person.died/100),
		 	"age": (person.died - person.born)
		}
	});
	return byCentury;
}

function past(array, element){
	if(array.length!=0){
		for (var i = 0; i<array.length; i++) {
			if(array[i] == element) return false;
		}
	}
	return true;
}

var pastArray = [];
var byCentury = groupBy (ancestry, function(person){
		return person.born != null && person.died != null;
});

var copy = byCentury;

byCentury.forEach(function(person){
	var array = [];
	for (var i = 0; i<copy.length; i++) {
		if(copy[i].century == person.century && past(pastArray, person.century))
			array.push(copy[i].age);
	}

	pastArray.push(person.century);
	if(array.length!=0){
		var value = average(array);
		console.log(person.century +' : '+value);
	}
});