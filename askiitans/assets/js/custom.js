(function ($) {
	"use strict";
	/*================================
        Loader
    ==================================*/
	var preloader = $('.page_loader');
	$(window).on('load', function () {
		$('.page_loader').addClass('hideloader');
	});
	/*================================
	        WOW active
	==================================*/
	new WOW().init();
  /* ====================================
      Nav Fixed On Scroll
   ======================================= */
   var $window = $(window);
   $window.scroll(function() {
	   var $scroll = $window.scrollTop();
	   var $navbar = $(".site-headers");
	   if ($scroll >= 400) {
		   $navbar.addClass("fixed");
	   } else {
		   $navbar.removeClass("fixed");
	   }
   });

$('.menubtn').click(function(){
	$('body').addClass('opensidebar');
});   
$('.sideopenbg').click(function(){
	$('body').removeClass('opensidebar');
});   
$('.signup').click(function(){
	$('.loginwrappr').removeClass('active');
	$('.signupwrapper').addClass('active');
});   
$('.login').click(function(){
	$('.signupwrapper').removeClass('active');
	$('.loginwrappr').addClass('active');
});   
$('.logwithphone').click(function(){
	$(this).removeClass('activeitem');
	$('.loginwithphone').addClass('activation');
	$('.loginwithemail').removeClass('activation');
	$('.logwithemail').addClass('activeitem');
});   
$('.getotp').click(function(){
	$('.otpnumber').addClass('active');
	$('.inpunumber').removeClass('active');
});
$('.sendothernub').click(function(){
	$('.otpnumber').removeClass('active');
	$('.inpunumber').addClass('active');
});
$('.logwithemail').click(function(){
	$(this).removeClass('activeitem');
	$('.loginwithphone').removeClass('activation');
	$('.loginwithemail').addClass('activation');
	$('.logwithphone').addClass('activeitem');
});   

//    input 
function checkForInput(element) {
	// element is passed to the function ^
	const $label = $(element).siblings('label');
	if ($(element).val().length > 0) {
	  $label.addClass('has-value');
	} else {
	  $label.removeClass('has-value');
	}
  }
  $('.form-control').each(function() {
	checkForInput(this);
  });
  $('.form-control').on('change keyup', function() {
	checkForInput(this);  
  });


}(jQuery));