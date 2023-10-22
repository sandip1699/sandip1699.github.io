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