$(function(){
		

	//메뉴버튼 클릭시 부드럽게 이동
	$('.gnb li').click(function(e){
	e.preventDefault();
	var ht=$(window).height();
	var i=$(this).index();
	$('html, body').stop().animate({scrollTop:ht*i},1400);
	});



	//grephic portfolio
	$('.graphic_pic>li>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

	   
	   //webdesign portfolio
		//fiat
	$('.photo .fiat>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});
		//unilever

	$('.photo .uni>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

	//sema
	$('.photo .sema>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

	//Acne
	$('.photo .acne>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

		//moleskine
	$('.photo .mole>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

	$('.photo .fifth>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});


});























