'use strict'
var l = console.log;

var Singleton = function(){
   if(Singleton.instance) return Singleton.instance
     
   Singleton.instance = this;
};



var obj1 = new Singleton();
var obj2 = new Singleton();

l(obj1 == obj2)

obj1.test = 1;
l(obj2.test == 1)

