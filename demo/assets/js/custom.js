(function ($) {
	"use strict";
	/*================================
        Loader
    ==================================*/
	// var preloader = $('.page_loader');
	// $(window).on('load', function () {
	// 	$(this).remove();
	// });
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

   $('.servicelink').click(function(){
	window.location = "./services.html";
   });

}(jQuery));