document.getElementById("contact-button").onclick = function(){
	
	if(formErr()===""){
		document.getElementById('return-error').innerHTML="";
		document.getElementById('return-success').innerHTML='Submit Succsessfully!';
	}else{
		document.getElementById('return-success').innerHTML="";
		document.getElementById('return-error').innerHTML=formErr();
	}

}

function formErr() {
	var err="";
	var email = document.getElementById("contact-email").value;
    if(!isValidateEmail(email)){
		err += ("Not a valid e-mail address!");
	}
	return err;
}
function isValidateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }else{
		return true;
	}
}