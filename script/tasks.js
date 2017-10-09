'use strict'
var l = console.log;

function sum(a,b){
	if(arguments.length < 2){

		var savedArgs = [].slice.call(arguments);
		return function(){
			var concatedArgs = savedArgs.concat([].slice.call(arguments))			
			return sum.apply(null, concatedArgs);
		}

	} else {
		return a + b
	}
}


l(sum(2,3))
l(sum(3)()()()(2))