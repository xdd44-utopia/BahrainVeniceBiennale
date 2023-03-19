window.onload = init;
document.onkeydown = show;

function init() {
	document.getElementById('leftHolder').style.marginTop = "25vh";
	document.getElementById('middleHolder').style.marginTop = "25vh";
	document.getElementById('rightHolder').style.marginTop = "25vh";
	document.getElementById('mainHolder').style.marginTop = "100vh";
	document.getElementById('logo').style.marginTop = "100vh";
}

function show() {
	document.getElementById('leftHolder').style.marginTop = "28vh";
	document.getElementById('middleHolder').style.marginTop = "28vh";
	document.getElementById('rightHolder').style.marginTop = "28vh";
	document.getElementById('mainHolder').style.marginTop = "10vh";
	document.getElementById('logo').style.marginTop = "calc(100vh - 120px)";
}

$(document).bind('mousewheel', show);