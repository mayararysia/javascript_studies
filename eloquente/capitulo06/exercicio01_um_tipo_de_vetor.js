function Vector(x, y){
   this.x = x;
   this.y = y;
};

Vector.prototype.plus = function(get) {
    return new Vector(this.x + get.x, this.y + get.y);
};

Vector.prototype.minus = function(get) {
    return new Vector(this.x - get.x, this.y - get.y);
};

Object.defineProperty(Vector.prototype, "length", {
  	get: function() { return Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2)); }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

