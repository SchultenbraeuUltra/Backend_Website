console.log("Frontend geladen");

var adresse = "https://www.hs-fulda.de";
var CHANGE = "1";

var myWindow = window.open(adresse, "fenster"); //"_self", dann öffnet es sich im selben Tab
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

//alle 3 sek: diesen request abfragen
setInterval(load, 3000)

function load() {
	check(); 
	if(CHANGE) {
		const url = 'http://localhost:3000/users/adresse';
		Http.open("GET", url);
		Http.send();
	}
}

Http.onreadystatechange = (e) => {
	if (Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
		console.log(Http.responseText);
		adresse = Http.responseText;
		window.open(adresse, "fenster");
	}

}

function check() {
	const url = 'http://localhost:3000/users/change';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = (f) => {
	if (HttpChanged.readyState === XMLHttpRequest.DONE && HttpChanged.status === 200) {
		CHANGE = ("1" == HttpChanged.responseText);
	}
	
}

//Idee:
//var adresse = RESTT CAL => localhost:3000/users/adresse
//myWindow.open(adresse);

