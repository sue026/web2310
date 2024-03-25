$(function() {
	$('.gnb_open').click(function() {
		$(this).parent('nav').addClass('fixed_gnb')
	})

	//GNB
	$('.gnb li').click(function() {
		var pagePos = $(this).index()
		$('html, body').animate({
			scrollTop : $('section').eq(pagePos).offset().top
		})
	})
	//gnb 스타일
	$(window).scroll(function() {
		if($(window).scrollTop() > 0) {
			$('nav').addClass('fixed_gnb')
		}
		if($(window).scrollTop() <= 0) {
			$('nav').removeClass('fixed_gnb')
		}
	})
	// home에서 마우스 휠
	$('#home').on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera) delta = -delta;
    }
    else if (event.detail)
      delta = -event.detail / 3;
		var moveTop = $(window).scrollTop();
		//var elmSelecter = $('section').eq(index);
		// 마우스휠을 위에서 아래로
		if (delta < 0) {moveTop = $('#portfolio').offset().top;}
		// 마우스휠을 아래에서 위로
		//else {moveTop = $('#home').offset().top;}
		// 화면 이동 0.8초(800)
		$("html,body").stop().animate({
			scrollTop: moveTop + 'px'
		}, {
			duration: 500, complete: function () {}
		});
	});
	// home에서 학생작품 바로가기
	$('#home button').click(function() {
		$('html, body').animate({
			scrollTop : $('#student').offset().top
		})
	})

	//포트폴리오 썸네일 필터링
	$('.filter_contents ul').isotope({});

	$('.filter_menu li').click(function() {
		var filterValue = $(this).attr('data-filter');
		$('.filter_contents ul').isotope({filter: filterValue});

		$('.filter_menu li').removeClass('active')	;
		$(this).addClass('active');
	})


})//ready()