function ArraySeq(array){
	this.array = array;
	this.index = -1;
};

function RangeSeq(from, to){
	this.from = from;
	this.to = to;
	this.near = from;
};

ArraySeq.prototype.show = function(){
	if(this.next()) return this.array[this.index];
	else return false;
};

ArraySeq.prototype.next = function() {
	this.index++;
	return !(this.index > this.array.length-1);
};

RangeSeq.prototype.show = function(){
	if(this.from < this.to) return this.next();		
	else return false;
};

RangeSeq.prototype.next = function(){
	if(this.near == this.to){
		console.log(this.near);
		return false;
	}
	return this.near++;
};

function logFive(Object){
	for (var i = 0; i < 5; i++) {
		var show = Object.show();
		if(show == false) break;
		console.log(show);
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