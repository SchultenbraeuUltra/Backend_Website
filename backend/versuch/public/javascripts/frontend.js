

console.log("Frontend geladen");

var adresse = "https://www.hs-fulda.de";
var CHANGE = "1";

var myWindow = window.open(adresse, self); //"_self", dann öffnet es sich im selben Tab
const Http = new XMLHttpRequest();
const HttpChanged = new XMLHttpRequest();

//alle 3 sek: diesen request abfragen
setInterval(load, 3000);

function load() {
	check(); 
	if(CHANGE) {
		const url = 'ai-info.informatik.hs-fulda.de:443';
		Http.open("GET", url);
		Http.send();
        console.log(1);
	}
}

Http.onreadystatechange = function(){
	if (Http.readyState === 4 && Http.status === 200) {
		console.log(Http.responseText);
		adresse = Http.responseText;
        //hier wird website mit parametern von datenbank als url festgelegt
        window.open(adresse,self);
        console.log(4);
	}

}

function check() {
	const url = 'ai-info.informatik.hs-fulda.de:443';
	HttpChanged.open("GET", url);
	HttpChanged.send();
    console.log(2);
}

HttpChanged.onreadystatechange = function(){
	if (HttpChanged.readyState === 4 && HttpChanged.status === 200) {
		CHANGE = ("1" == HttpChanged.responseText);
        console.log(3);
	}
	
}


//Idee:
//var adresse = RESTT CAL => localhost:3000/users/adresse
//myWindow.open(adresse);