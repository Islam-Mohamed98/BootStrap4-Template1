$(function () {

	'use strict';
	// Adjust Slider Height
	var winH = $(window).height(),
		navH = $('.navbar').innerHeight();
	$('.slider, .carousel-item').height( winH - navH);
	$(window).resize(function () {
		var winH = $(window).height(),
		navH = $('.navbar').innerHeight();
		$('.slider, .carousel-item').height( winH - navH);
		});
});