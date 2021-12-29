var myMessage = document.getElementById('message');

function showMessage(){
	//apply class name "show" to message
	myMessage.className = "show";

}


//show message afer 3 seconds
setTimeout(showMessage, 3000);



