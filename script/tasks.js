'use strict'
var l = console.log;


var make_lazy = function (f) {
  var args = [].slice.call(arguments,1);
  var result = f.apply(null, args);
  
  return function(){
    return result
  }
};