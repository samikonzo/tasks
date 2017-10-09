'use strict'
var l = console.log;


function ranks(arr) {
	var currentPlace = 1,
		placeObj = {};

	arr.slice().sort( (a,b) => b - a).forEach(item => {
		if(!placeObj[item]) placeObj[item] = currentPlace
		currentPlace++
	})

	return arr.map(item => {
		return placeObj[item];
	})
}




l(ranks([9,3,6,10]))
l(ranks([3,3,3,3,3,5,1]))