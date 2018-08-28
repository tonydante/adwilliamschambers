 $(document).ready(function(){
	$(".inline").colorbox({inline:true, transition: 'none', width:"75%"});
	$(".mappop").colorbox({iframe:true, transition: 'none', width:"75%"});
	if($(window).width()<700){
		$( ".dallas-num  .first-num" ).wrapInner( "<a href='tel:2146289500'></a>");
		$( ".dallas-num  .second-num" ).wrapInner( "<a href='tel:2146289505'></a>");
		$( ".aus-num  .first-num" ).wrapInner( "<a href='tel:5126850200'></a>");
		$( ".aus-num  .second-num" ).wrapInner( "<a href='tel:8668151912'></a>");
		$( ".phone span" ).wrapInner( "<a href='tel:2146289502'></a>");
	}



var usAg = navigator.userAgent;

if(usAg.indexOf("NT 6.1") != -1) {

	var iesvg = $('.iesvg');
	var regsvg = $('.regsvg');
    var ua = window.navigator.userAgent;
    if (ua.indexOf("Trident/7.0") > 0 || ua.indexOf("Trident/6.0") > 0 || ua.indexOf("Trident/5.0") > 0) //ie 11, 10, 9 on windows 7
    {
     $('.regsvg').hide();
			$('.iesvg').show();
    }
    else
    {
	   $('.regsvg').hide();
		 $('.iesvg').show();
    }

}





	/*ANIMATION */
	$("body").addClass("desktop");
	if ($(".desktop").length) {
	if ($(".home").length) {
	}
	var scrollsettings = $(window).height()+$(window).height()/8;

	if ($(".home").length) 
	{
		// $("#header.home-header").addClass("opacity0")
		// $(".rslides").addClass("opacity0")
		// $(".desc").addClass("opacity0")
		// $("#footer").addClass("opacity0")

		window.setTimeout(function() {
			// $("#header.home-header").removeClass("opacity0").addClass("animated fadeIn")
			$("#header.home-header").addClass("animated fadeIn")
		},200);

		window.setTimeout(function() {
			$(".rslides").addClass("animated fadeIn")
		},900);
		window.setTimeout(function() {
			$(".desc").addClass("animated fadeInLeft slow")
		}, 2000);
		window.setTimeout(function() {
			$("#footer").addClass("animated fadeInUp slow")
		}, 3500);
		$(document).on("scroll",function(){
			if ($("#footer").not('.animated'))
			{
				if ($(document).scrollTop() > $("#footer").offset().top - scrollsettings){
					$("#footer").addClass("animated fadeInUp")
				}
			}
		});

		// $(document).on("scroll",function(){
		// 	if ($(document).scrollTop() > $("#footer").offset().top - scrollsettings){
		// 		$("#footer").removeClass("opacity0").addClass("animated fadeInUp")
		// 	}
		// });
	}
	// if($(window).width()>1400){
	// 	window.setTimeout(function() {
	// 		$("#footer").removeClass("opacity0").addClass("animated fadeInUp slow")
	// 	}, 4000);
	// }

	// $('li.not-click').hover(function() {
	// 	if($(this).has('ul'))
	// 	{
	// 		$(this).has('ul').toggleClass('active-ul');
	// 	}
	// });
	// $('li.not-click').click(function() {
	// 	if($(this).has('ul'))
	// 	{
	// 		$(this).has('ul').toggleClass('active-ul');
	// 	}
	// });
	
	if($(window).width()<640){
		
	}
	
	};

});

