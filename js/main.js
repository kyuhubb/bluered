let blurloc = -15;
let bluris = true;
var body = document.getElementsByTagName('body')[0];

document.addEventListener("keydown", function(event) {
    if (event.key == "F11") {
    	if( window.innerHeight == screen.height){
			body.style.width = '60vw';
    	}else{
			body.style.width = '80vw';
    	}
    }
})

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       v.currentTime = v.currentTime - 5;
    }
    else if (e.keyCode == '39') {
       v.currentTime = v.currentTime + 5;
    }

}

function switchblur(){
	if(bluris == true){
		bluris = false;
		document.getElementById('blurboy').style.display = 'none';
	}else{
		bluris = true;
		document.getElementById('blurboy').style.display = 'block';
	}
}

function blurplus(){
	blurloc--;
	document.getElementById('blurboy').style.top = blurloc+'vh';
}

function blurminus(){
	blurloc++;
	document.getElementById('blurboy').style.top = blurloc+'vh';
}

function geturl(){
	var url = $_GET('url');
	url = url.replace("watch?v=", "embed/")
	document.getElementsByTagName('iframe')[0].src = url;
}