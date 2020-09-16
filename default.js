$(function(){
	
	//window높이값을 section에 적용
	var ht=$(window).height();
	$('.section, .bg').innerHeight(ht);
	$(window).resize(function(){
		var ht=$(window).height();
		$('.section, .bg').innerHeight(ht);
	});
    
    //메뉴버튼 클릭시 부드럽게 이동
	$('.gnb li').click(function(e){
		e.preventDefault();
		var ht=$(window).height();
		var i=$(this).index();
		$('html, body').stop().animate({scrollTop:ht*i},1400);
	
	});

	var Top=$('#header').offset().top;
	$(window).scroll(function(){
		var scrollT=$(document).scrollTop();
		if(scrollT>Top){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
	});
	var current=0;
	//webportfolio 슬라이더
	$('.next').click(function(e){
		e.preventDefault();
		current++;
		if(current>2){current=2}
		webmove()
	});
	$('.prev').click(function(e){
		e.preventDefault();
		current--;
		if(current<0){current=0}
		webmove()
	});

	function webmove(){
		var d=1200*current*-1;
		$('.web_list').stop().animate({left:d},600);
	
	}
	//web design guide
	$('.site-guide').click(function(e){
		e.preventDefault();
		$(this).parent().next().show();
		$('body').css({overflow:'hidden'});
	});
    //grephic portfolio
	$('.list>li>a').click(function(e){
		e.preventDefault();
		$(this).next().show();
		$('body').css({overflow:'hidden'});
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.g_overlay, .overlay').hide();
		$('body').css({overflow:'scroll'});
	});

	//skill graph
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		console.log(scroll);
		if(scroll>=3000){
			$('.gr_wrap:eq(0) .gr_bar').animate({width:'90%'},1500);
			$('.gr_wrap:eq(1) .gr_bar').animate({width:'100%'},1500);
			$('.gr_wrap:eq(2) .gr_bar').animate({width:'80%'},1500);
			$('.gr_wrap:eq(3) .gr_bar').animate({width:'60%'},1500);
		}
	});

	
});













