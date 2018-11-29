var colorRed = document.getElementById('red');
var colorGreen = document.getElementById('green');
var colorBlue = document.getElementById('blue');
var colorText = document.getElementById('title');

var colorDiv = document.getElementById('colorDiv');

function changeColor(){
	//var colorRed = document.getElementById('red').value;
	//var colorGreen = document.getElementById('green').value;
	//var colorBlue = document.getElementById('blue').value;

	//var colorDiv = document.getElementById('colorDiv');
	colorDiv.style.backgroundColor = `rgb(${colorRed.value}, ${colorGreen.value}, ${colorBlue.value})`;
	colorDiv.style.borderColor = `rgb(${colorRed.value}, ${colorGreen.value}, ${colorBlue.value})`;
}

setInterval(changeColor, 1);

