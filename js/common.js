$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(700).fadeOut("slow"); 
});

$(document).ready(function(){
$('.js-scrolltoid').scrollToID({
  speed: 1000, //expressed in Milliseconds
  offset: 30   //in pixels
});

		$(function(){
    $('#Container').mixItUp();
});

	function heightDetect(){
	$(".hTitle").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
	heightDetect();
});

	$('.scroll').scrollToID({
  speed: 1000, //expressed in Milliseconds
  offset: 30   //in pixels
});

	$(".menu").click(function(){
		$(".menuInner").fadeIn();
	});
		$(".menuInner li").click(function(){
		$(".menuInner").hide();
	});

})