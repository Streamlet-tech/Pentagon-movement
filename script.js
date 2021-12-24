$(document).ready(function(){

	$('.top-left').click(function(){
		$('.center').animate({
			left: '100%',
			top: '100%',
		});
		$('.top-left').animate({
			left: '100%',
			top: '100%',
		});
    $('.top-right').animate({
			left: '100%',
			top: '100%',
		});
    $('.bot-left').animate({
			left: '100%',
			top: '100%',
		});
    $('.bot-right').animate({
			left: '100%',
			top: '100%',
		});
	setInterval(function (){
	window.location.assign("top-left-c.html");
	}, 375);
	});


  $('.top-right').click(function(){
		$('.center').animate({
			left: '0%',
			top: '100%',
		});
		$('.top-left').animate({
			left: '0%',
			top: '100%',
		});
    $('.top-right').animate({
			left: '0%',
			top: '100%',
		});
    $('.bot-left').animate({
			left: '0%',
			top: '100%',
		});
    $('.bot-right').animate({
			left: '0%',
			top: '100%',
		});
		setInterval(function (){
			window.location.assign("top-right-c.html");
			}, 375);
	});

  $('.bot-right').click(function(){
		$('.center').animate({
			left: '0%',
			top: '0%',
		});
		$('.top-left').animate({
			left: '0%',
			top: '0%',
		});
    $('.top-right').animate({
			left: '0%',
			top: '0%',
		});
    $('.bot-left').animate({
			left: '0%',
			top: '0%',
		});
    $('.bot-right').animate({
			left: '0%',
			top: '0%',
		});
		setInterval(function (){
			window.location.assign("bot-right-c.html");
			}, 500);
	});

  $('.bot-left').click(function(){
		$('.center').animate({
			left: '100%',
			top: '0%',
		});
		$('.top-left').animate({
			left: '100%',
			top: '0%',
		});
    $('.top-right').animate({
			left: '100%',
			top: '0%',
		});
    $('.bot-left').animate({
			left: '100%',
			top: '0%',
		});
    $('.bot-right').animate({
			left: '100%',
			top: '0%',
		});
		setInterval(function (){
			window.location.assign("bot-left-c.html");
			}, 500);
	});


	$('.center, .top-left-arr, .top-right-arr, .bot-right-arr, .bot-left-arr').click(function(){
    $('.center').animate({
			left: '50%',
			top: '50%'
		});
		$('.top-left').animate({
			left: '50%',
			top: '50%',
		});
    $('.top-right').animate({
			left: '50%',
			top: '50%',
		});
    $('.bot-left').animate({
			left: '50%',
			top: '50%',
		});
    $('.bot-right').animate({
			left: '50%',
			top: '50%',
		});
		$('.content-overlay').addClass('animate__fadeOut');

	setTimeout(function (){
			window.location.assign("index.html");
			}, 500);
	
	});

});
