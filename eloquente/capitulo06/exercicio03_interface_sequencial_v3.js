function ArraySeq(array){
	this.array = array;

};

function RangeSeq(from, to){
	this.from = from;
	this.to = to;
};

function logFive(Object){

	if (Object instanceof ArraySeq){
		Object.array.forEach(function(value){
			console.log(value);
		});
	}
	
	if(Object instanceof RangeSeq){

		if(Object.from < Object.to){
			if(Object.to - Object.from >= 5){ 
				var i = 5;
				while(i>0){
					console.log(Object.from);
					Object.from++;
					i--;
				}
			}
			else{
				while(Object.from<=Object.to){
					console.log(Object.from);
					Object.from++;
				}
			}
		}else return null;	
	}
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104