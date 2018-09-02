document.getElementById("heading").innerHTML =
	localStorage["title"] || "Just write";

document.getElementById("content").innerHTML =
	localStorage["text"] || "Text is automatically saved";

setInterval(function() {
	localStorage["title"] = document.getElementById("heading").innerHTML;
	localStorage["text"] = document.getElementById("content").innerHTML; 
}, 1000);