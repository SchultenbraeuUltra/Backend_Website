

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
		const url = 'https://jsonplaceholder.typicode.com/todos/1';
		Http.open("GET", url);
		Http.send();
	}
}

Http.onreadystatechange = function(){
	if (Http.readyState === 4 && Http.status === 200) {
		console.log(Http.responseText);
		adresse = Http.responseText;
		window.open(adresse, "fenster");
	}

}

function check() {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = function(){
	if (HttpChanged.readyState === 4 && HttpChanged.status === 200) {
		CHANGE = ("1" == HttpChanged.responseText);
	}
	
}


//Idee:
//var adresse = RESTT CAL => localhost:3000/users/adresse
//myWindow.open(adresse);