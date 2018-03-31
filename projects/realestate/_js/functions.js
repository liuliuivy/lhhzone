var menuOpen = false;

function toggleMenu(div){
	if(menuOpen == false){
		slideMenuIn(div);
	}else{
		slideMenuOut(div);
	}
}
function slideMenuIn(div){
	var divName = document.getElementById(div);
	var currentPos = parseInt(divName.style.top);
	var finalPos = 0;
	var distance = Math.abs(finalPos - currentPos);
	var ratio = 5;
	var speed = 50;
	var move = distance / ratio;
	
	if(distance >= ratio){
		divName.style.top = (currentPos + move) + 'px';
		setTimeout(function(){slideMenuIn(div);}, speed);
	}else{
		divName.style.top = finalPos + 'px';
		menuOpen = true;
	}
}
function slideMenuOut(div){
	var divName = document.getElementById(div);
	var currentPos = parseInt(divName.style.top);
	var finalPos = -220;
	var distance = Math.abs(finalPos - currentPos);
	var ratio = 5;
	var speed = 50;
	var move = distance / ratio;
	
	if(distance >= ratio){
		divName.style.top = (currentPos - move) + 'px';
		setTimeout(function(){slideMenuOut(div);}, speed);
	}else{
		divName.style.top = finalPos + 'px';
		menuOpen = false;
	}
}

function checkForm(){
	var formfields = new Array();
	formfields[0] = "name";
	formfields[1] = "email";
	formfields[2] = "phone";
	formfields[3] = "message";
	var good = true;
	var msg = '&msg=';
	for (var i = 0; i < formfields.length; i++) {
		var div = document.getElementById(formfields[i]);
		if(div.value == ''){
			div.style.backgroundColor = '#ffc1c1';
			good = false;
		}else{
			div.style.backgroundColor = '#ffffff';
			msg += formfields[i]+': '+div.value+"\n\n";
		}
	}

	if(good == true){
		sendmail(msg);
	}
}

function createRequest(){
	var xmlhttp = false;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
		if(xmlhttp.overrideMimeType){
			xmlhttp.overrideMimeType('text/xml');
		}
	} else if(window.ActiveXObject){
		try{
			xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e){
			try{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
			}
		}
	}
	if(!xmlhttp) {
		return false;
	}else{
		return xmlhttp;
	}
}

function sendmail(msg){
	var url = '_php/submit.php';
	var xmlhttp = createRequest();
	if(!xmlhttp) {
		return false;
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState==4){
			document.getElementById("result").innerHTML = 'Thank you. I will contact you as soon as possible.';
			setTimeout(formReset,5000);
		}
	}
	// POST STUFF
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Content-length", msg.length);
	xmlhttp.setRequestHeader("Connection", "close");
	xmlhttp.send(msg);
}

function formReset(){
	document.getElementById("projectRequest").reset();
	document.getElementById("result").innerHTML = '<a href="#page4" onclick="checkForm();" id="btSubmit"></a>';
}