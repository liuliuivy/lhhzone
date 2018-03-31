<?php
$author = 'M';
$title = 'Sunshine Real Estate';
$description = 'Real estate agency offering housing business services.';
$url = 'http://www.sunshinerealestate.com';
$keywords = 'REAL ESTATE, HOUSING, RENTING, DECORATION';
$copyright = '&#9400; '.date("Y").' Sunshine RealEstate , Inc., All Rights Reserved.';
$preview = $url.'/_imgs/_icons/Avatar.jpg';
$icon = '_imgs/_icons/favicon.ico';
?>

<meta charset="utf-8">
<meta name="author" content="<?php echo $author;?>" />
<meta name="developer" content="<?php echo $author;?>" />
<meta name="designer" content="<?php echo $author;?>" />
<meta name="description" content="<?php echo $description;?>" />
<meta name="URL" content="<?php echo $url;?>" />
<meta name="keywords" content="<?php echo $keywords;?>" />
<meta name="copyright" content="<?php echo $copyright;?>" />

<meta property="og:title" content="<?php echo $title;?>" />
<meta property="og:url" content="<?php echo $url;?>" />
<meta property="og:description" content="<?php echo $description;?>" />
<meta property="og:site_name" content="<?php echo $title;?>"/>
<meta property="og:type" content="website"/>	
<meta property="og:image" content="<?php echo $preview;?>"/>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<title><?php echo $title;?></title>

<link rel="canonical" href="<?php echo $url;?>" />
<link rel="image_src" href="$preview" />
<link rel="shortcut icon" href="<?php echo $icon;?>" type="image/x-icon" />
<link rel="stylesheet" type="text/css" media="" href="_css/styles.css" />
<script src="_js/functions.js" language="javascript"></script>