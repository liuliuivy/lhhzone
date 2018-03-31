<?php
$msg = '';
foreach($_POST as $k=>$v){
	$msg .= $k .': '. addslashes($v)."\n\n";
}
@mail("info@sunshinerealestate.com", "New Housing Request - ".date("d-m-Y / H:i:s"), $msg, "From: Sunshine Real Estate <no-reply@sunshinerealestate.com>");
echo 1;
?>