'use strict'
var l = console.log;

Number.prototype.add = function(n) {
	return this + n
};

Number.prototype.subtract = function(n) {
	return this - n
};

Number.prototype.multiply = function(n) {
	return this * n
};
Number.prototype.divide = function(n) {
	return this / n
};
Number.prototype.square = function() {
	return this * this
};

l((0).add(2))
l((5).subtract(1))
l((3).multiply(2))
l((10).divide(5))
l((5).square())
l((3).add(5).multiply(2))