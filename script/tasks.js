'use strict'
var l = console.log;

Array.prototype.groupBy = function(fn) {
	var resultObj = {}

	if(!fn){

		this.forEach(num => {
			if(!resultObj[num]) resultObj[num] = []

			resultObj[num].push(num)	
		})	

	} else {

		this.forEach(num => {
			var result = fn(num);

			if(!resultObj[result]) resultObj[result] = []

			resultObj[result].push(num)	
		})

	}

	return resultObj;
}



l([1,2,3,2,4,1,5,1,6].groupBy());


l([1,2,3,2,4,1,5,1,6].groupBy(
    function(_) {return _ % 3;}
))