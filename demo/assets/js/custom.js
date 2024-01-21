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
   $('.dropmenutoogle').click(function(){
	$('.dropdown').toggleClass('show');
   });

	if( $('.grids').length){ 
		setTimeout(() => {
			$(".grids").imagesLoaded(function () {
				$('.grids').masonry({
					itemSelector: '.projimg'
				});
			});
		}, 600);
		$('.nav-pills button').click(function(){
			setTimeout(() => {
				$('.grids').masonry({
					itemSelector: '.projimg'
				});
			}, 200);
		});
	}
   
	$('.servicelink').click(function(){
	 window.location = "./services.html";
	});
	$('.servicelinkprojects').click(function(){
	 window.location = "../services.html";
	});
	$('.navbar .dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
	  }, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp()
	  });

}(jQuery));