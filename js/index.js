isPhone = window.matchMedia('screen and (max-device-width: 450px) and (max-device-height: 950px)').matches;

window.onload = init;
window.addEventListener("touchmove", show, false);
document.onwheel = show;

function init() {
	document.getElementById('mainHolder').style.marginTop = "125vh";
	document.getElementById('logo').style.marginTop = "100vh";

	if (isPhone) {
		switchEN();
	}
}

function show() {
	document.getElementById('mainHolder').style.marginTop = "10vh";
	document.getElementById('logo').style.marginTop = (isPhone ? "90vh" : "88vh");
}

function switchAR() {
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