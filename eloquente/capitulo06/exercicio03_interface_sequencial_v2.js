function ArraySeq(array){
	this.array = array;

};

function RangeSeq(from, to){
	this.from = from;
	this.to = to;
};

ArraySeq.prototype.show = function(){
	var i = 0;
	this.array.forEach(function(value){
		i++;
		if(i<=5) console.log(value);
		else return;
	});
};

RangeSeq.prototype.show = function(){

	if(this.from < this.to){
			if(this.to - this.from >= 5){ 
				var i = 5;
				while(i>0){
					console.log(this.next());
					i--;
				}
			}
			else{
				while(this.from <= this.to)
					console.log(this.next());
				
			}
		}else return null;	
};

RangeSeq.prototype.next = function(){
	return this.from++;
};

function logFive(Object){
	Object.show();
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