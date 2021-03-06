$(function(){
  var perNum1 = 65;
  var perNum2 = 70;
  var perNum3 = 65;

    $('.graph_in:eq(0)').circleProgress({
      value: perNum1/100,
        startAngle:300,
        size:160,
		thickness: 35,
       fill:{color:["#9b9b9b"]},
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:false

        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum1 * progress) + '<i>%</i>');
        });

		$('.graph_in:eq(1)').circleProgress({
      value: perNum2/100,
        startAngle:300,
        size:160,
		thickness: 35,
        fill:{color:["#9b9b9b"]},
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:false

        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum2 * progress) + '<i>%</i>');
        });

		$('.graph_in:eq(2)').circleProgress({
      value: perNum3/100,
        startAngle:300,
        size:160,
		thickness: 35,
        fill:{color:["#163f54"]},
        animation:{
          duration:2200,
            easing:"swing"
        },
        lineCap : "butt",
        reverse:false

        }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(perNum3 * progress) + '<i>%</i>');
        });


    });
