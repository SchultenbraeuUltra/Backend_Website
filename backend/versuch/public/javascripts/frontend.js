console.log("Frontend geladen");

var adresse = 'http://ai-info.informatik.hs-fulda.de:443/htdocs/start.html';
var CHANGE = "1";

var myWindow = window.open(adresse, "fenster"); //"_self", dann öffnet es sich im selben Tab
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

//alle 3 sek: diesen request abfragen
setInterval(load, 3000);

function load() {
	check(); 
	if(CHANGE) {
		const url = 'ai-info.informatik.hs-fulda.de:443/users/adresse';
		Http.open("GET", url);
		Http.send();
	}
}

Http.onreadystatechange = (e) =>{
	if (Http.readyState === 4 && Http.status === 200) {
		console.log(Http.responseText + "This is a test");
		adresse = Http.responseText;
        //hier wird website mit parametern von datenbank als url festgelegt
        window.open(adresse, "fenster");
	}

}


//HIER IST EIN KOMMENTAR FÜR JACKIE :D



function check() {
	const url = 'ai-info.informatik.hs-fulda.de:443/users/change';
	HttpChanged.open("GET", url);
	HttpChanged.send();
}

HttpChanged.onreadystatechange = (f) =>{
	if (HttpChanged.readyState === 4 && HttpChanged.status === 200) {
		CHANGE = ("1" == HttpChanged.responseText);
	}
	
}

//Idee:
//var adresse = RESTT CAL => localhost:3000/users/adresse
//myWindow.open(adresse);