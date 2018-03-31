//onepagejs.js

$('document').ready(function() {
	
   $('.navigation-fixed').click(function() {
		
		$('.nav-menu').toggle();
      		
		});
		
   $('.navigation-fixed-top').click(function() {
   
      $('.nav-menu-top').toggle(); 
    
    });
		
	$('.nav-menu').mouseover(function() {
		
		$(this).css('display', 'block');
		
		});
		
	$('.nav-menu').mouseout(function() {
		
		$(this).css('display', 'none');
		
		});
	$('.nav-menu a').click(function() {
	
     $('.nav-menu').css('display', 'none');	 
 	 });
	
	$('.nav-menu-top').mouseover(function() {
		
		$(this).css('display', 'block');
		
		});
		
	$('.nav-menu-top').mouseout(function() {
		
		$(this).css('display', 'none');
		
		});
	$('.nav-menu-top a').click(function() {
	
     $('.nav-menu-top').css('display', 'none');	 
 	 }); 
	});
	
$('document').ready(function() {

$('.one').click(function() {

  $('.homepage').css('display', 'block');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');

});

$('.two').click(function() {

  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'block');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');


});

$('.three').click(function(){
	
  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'block');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');
	
	});

$('.four').click(function(){
	
  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'block');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');

});

$('.five').click(function(){

  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'block');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');

});

$('.six').click(function(){

  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'block');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'none');

});

$('.seven').click(function(){

  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'block');
  $('.testimonials').css('display', 'none');

});

$('.eight').click(function(){
 
  $('.homepage').css('display', 'none');
  $('.about1').css('display', 'none');
  $('.about2').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.menu1').css('display', 'none');
  $('.menu2').css('display', 'none');
  $('.menu3').css('display', 'none');
  $('.testimonials').css('display', 'block');

 });

});