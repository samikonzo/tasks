'use strict'
var l = console.log;

function compareVersions(version1, version2) {
	var v1 = version1.split('.'),
		v2 = version2.split('.');

	for(var i = 0; i < v1.length; i++){
		if(v2[i] == undefined) return true
		if(+v1[i] > +v2[i]) return true	
		if(+v2[i] > +v1[i]) return false
	}	

	if(v2.length > v1.length) return false;

	return true
}



l(compareVersions("11", "10"));
l(compareVersions("11", "11"));
l(compareVersions("10.4.6", "10.4"));
l(compareVersions("10.4", "11"));
l(compareVersions("10.4", "10.10"));
l(compareVersions("10.4.9", "10.5"));