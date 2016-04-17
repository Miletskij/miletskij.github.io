$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function () {

$(".dalee").click(function(){
		$(".news_full").fadeIn(600);
});
$(".news_full").click(function(){
		$(".news_full").fadeOut(600);
});

});



