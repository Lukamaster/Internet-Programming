// JavaScript Document

function removecolor() {
	
	var x = document.getElementById("colorSelect");
	console.log(x.value);
	
	if(x.value == "Red") {
		x.remove(0);
	}
	else if(x.value == "Green") {
		x.remove(1);
	}
	else if(x.value == "White") {
		x.remove(2);
	}
	else {
		x.remove(3);
	}
}