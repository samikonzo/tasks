'use strict'
var l = console.log;

/*
head [x] = x
tail [x] = []
init [x] = []
last [x] = x
*/



function head(arr){
	return arr[0]
}

function tail(arr){
	return arr.slice(1)
}

function init(arr){
	return arr.slice(0, -1)
}

function last(arr){
	return arr[arr.length-1]
}



l(head([5,1]))
l(tail([1]))
l(init([1,5,7,9]))
l(last([7,2]))