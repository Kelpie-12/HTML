// JavaScript source code
function loadFile() {
	let request = new XMLHttpRequest();	//Constructor
	request.onreadystatechange = function () {

		if (this.readyState == 4 && this.statusText == "OK") {
		
			
			document.getElementById("response").innerHTML = this.responseText;	
		
			formatXML(this.responseXML);
		}
	};
	request.open("GET", "DataBase.xml", true);
	
	request.send();


}

//console.log(xmlResponse);

function formatXML(file) {
	console.log(file);
	let group = file.getElementsByTagName("group");
	console.log(group);
	console.log(group[0].childNodes[0].nodeValue);
	console.log("\n-------------------------\n");
	let elements = file.documentElement.childNodes;
	for (let i = 0; i < elements.length; i++) {
		console.log(elements[i].childNodes);
	}
}