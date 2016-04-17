$(document).ready(function () {
	
$(".menu").click(function(){
  $(this).toggleClass("open");
});

$(".menu-a").click(function(){
	if ($(".menu_inner").is(":visible")){
		$(".menu_inner").fadeOut(600);
	}
	else{
		$(".menu_inner").fadeIn(600);
	};

});
	
$(".butt").click(function(){
		$(".demo").fadeIn(600);
});
$(".demo").click(function(){
		$(".demo").fadeOut(600);
});
});
