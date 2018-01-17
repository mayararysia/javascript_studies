var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce (arrays){
  var array = [];
  for (var i = 0; i < arrays.length; i++)
  	array = array.concat(arrays[i]);
  return array;
}

// → [1, 2, 3, 4, 5, 6]