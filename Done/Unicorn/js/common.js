$(document).ready(function(){

	$(".mixitup li").click(function(){
		$(".mixitup li").removeClass("active");
		$(this).addClass("active");

	});

	$('#Container').mixItUp();

	var lis = document.getElementById('cElem');
	for(var i = 0; i < lis.length; i++){
		lis[i].style.position = 'relative';
		var span = document.createElement('span');
		span.style.cssText = 'position:absolute;left:0;top:0;';
		span.innerHTML = i + 1;
		lis[i].appendChild(span);
	}
 
 var width = 350;
 var count = 1;

 var carousel = document.getElementById('carousel');
 var list = carousel.querySelector('.cards');
 var listElem = carousel.querySelectorAll('#cElem');

 var position = 0;

 carousel.querySelector('.right').onclick = function() {
 	position = Math.min(position + width * count, 0)
 	list.style.marginLeft = position + 'px';
 };

 carousel.querySelector('.left').onclick = function() {
 	position = Math.max(position - width * count, -width * (listElem.length - count));
      list.style.marginLeft = position + 'px';
 };
});

$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	
	$(".hamb").click(function(){
		$(".menu").toggle("slow");
});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
