//Slider

$(document).ready(function(){
	$(".slider-for").slick({
		autoplay: true,
		infinite: true,
		dots: true,
		autoplaySpeed: 5000,
		infinite: true,
		slide: "div",
		cssEase: "linear",
		arrows: false,
		asNavFor: ".slider-nav",
	});

	$(".slider-nav").slick({
		autoplay: false,
		infinite: true,
		dots: false,
		autoplaySpeed: 5000,
		prevArrow: "none",
		nextArrow: "none",
		infinite: true,
		slide: "div",
		cssEase: "linear",
	});
	$(".slider-team").slick({
		autoplay: true,
		infinite: true,
		dots: true,
		dotsClass: "dots",
		autoplaySpeed: 5000,
		infinite: true,
		slide: "div",
		cssEase: "linear",
	});

//
// Scroll
//
	$('.arrow__down').on("click", function () {
		$anchor = $(this);
		$('body,html').animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		return false;
	});


})