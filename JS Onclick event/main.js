

function seUpEvents(){


	var content = document.getElementById("content");
	var button = document.getElementById("show-more");


	button.onclick = function() {

		if(content.className == "open"){
			//shrink box
			content.className = "";
			button.innerHTML = "show More";
		} else {
			//expand the box
			content.className = "open";
			button.innerHTML = "show Less";
		}
	};

};

/*only loaad the javascript scrip once the entire html document 
has been loaded into the browser if we are argeting html as above*/


window.onload = function(){
	seUpEvents();

};


