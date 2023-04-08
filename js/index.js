isPhone = window.matchMedia('screen and (max-device-width: 450px) and (max-device-height: 950px)').matches;

window.onload = init;
window.addEventListener("touchmove", show, false);
document.onwheel = show;

window.addEventListener('resize', adjustDynamicValue);

var hasShown = false;

var isContributor = false;
var mainLeft;
var mainRight;
var contributorLeft;
var contributorRight;

function init() {

	mainLeft = document.getElementById('mainLeft').innerHTML;
	mainRight = document.getElementById('mainRight').innerHTML;
	contributorLeft = document.getElementById('contributorLeft').innerHTML;
	contributorRight = document.getElementById('contributorRight').innerHTML;

	adjustDynamicValue();

	if (isPhone) {
		document.getElementById('mainHolder').style.marginTop = "270%";
		document.getElementById('logo').style.marginTop = "225%";
		document.getElementById('contributorHolder').style.marginTop = "-5vh";
		switchEN();
	}
	else {
		document.getElementById('mainHolder').style.marginTop = "125%";
		document.getElementById('logo').style.marginTop = "100%";
	}
}

function show() {

	if (!hasShown) {
		hasShown = true;
		adjustDynamicValue();
	}
}

function switchContributor() {
	if (isContributor) {
		document.getElementById('mainLeft').innerHTML = mainLeft;
		document.getElementById('mainRight').innerHTML = mainRight;
		document.getElementById('contributor').innerHTML = "CONTRIBUTORS";
		document.getElementById('contributorEN').innerHTML = "CONTRIBUTORS";
		document.getElementById('contributorAR').innerHTML = "المساهمون";
	}
	else {
		document.getElementById('mainLeft').innerHTML = contributorLeft;
		document.getElementById('mainRight').innerHTML = contributorRight;
		document.getElementById('contributor').innerHTML = "CURATIORIAL STATEMENT";
		document.getElementById('contributorEN').innerHTML = "CURATIORIAL STATEMENT";
		document.getElementById('contributorAR').innerHTML = "البيان الفني";
	}
	isContributor = !isContributor;
}

function switchAR() {

	document.getElementById('contributorEN').style.fontSize = "0";
	document.getElementById('contributorAR').style.fontSize = "1.5vh";

	document.getElementById('switchEN').style.display = "block";
	document.getElementById('switchAR').style.display = "none";

	document.getElementById('mobileEnglishTitle').style.display = "none";
	document.getElementById('mobileArabicTitle').style.display = "block";

	document.getElementById('mainRight').style.display = "block";
	document.getElementById('mainLeft').style.display = "none";

	document.getElementById('mobileInfoSignature').style.fontFamily = "Graphik Arabic Web Regular";
	document.getElementById('mobileLeftLeft').innerText = "مايو - 16 نوفمبر 2023";
	document.getElementById('mobileLeftRight').innerText = " 20";
	document.getElementById('mobileRightSignature').innerText = "جناح البحرين الوطني";

}

function switchEN() {

	document.getElementById('contributorEN').style.fontSize = "1.5vh";
	document.getElementById('contributorAR').style.fontSize = "0";

	document.getElementById('switchEN').style.display = "none";
	document.getElementById('switchAR').style.display = "block";

	document.getElementById('mobileEnglishTitle').style.display = "block";
	document.getElementById('mobileArabicTitle').style.display = "none";

	document.getElementById('mainLeft').style.display = "block";
	document.getElementById('mainRight').style.display = "none";

	document.getElementById('mobileInfoSignature').style.fontFamily = "Graphik Web";
	document.getElementById('mobileLeftLeft').innerText = "BAHRAIN NATIONAL PAVILION";
	document.getElementById('mobileLeftRight').innerText = "";
	document.getElementById('mobileRightSignature').innerText = "May 20 - November 16 2023";

}

function adjustDynamicValue() {
	var foregroundHolder = document.getElementsByClassName('foregroundHolder');
	for (var i = 0; i < foregroundHolder.length; i++) {
		foregroundHolder.item(i).style.marginTop = (window.innerHeight * 0.25) + 'px';
	}
	if (isPhone) {
		document.getElementById('contributorHolder').style.marginTop = "5%";
	}
	if (hasShown) {
		document.getElementById("mainHolder").style.marginTop = (window.innerHeight * 0.1) + 'px';
		document.getElementById('logo').style.marginTop = (isPhone ? (window.innerHeight * 0.90) + 'px' : (window.innerHeight * 0.90) + 'px');
	}
}