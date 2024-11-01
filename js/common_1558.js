
// 主內容區塊
var mainSwiper = new Swiper('.main', {
	direction: 'vertical',
	speed:600,
	slidesPerView: 0, //顯示數量
	mousewheel: true, //滑鼠滾輪
	observer:true,  //修改swiper自己或子元素的时候，自动初始化swiper
	observeParents:true,    //修改swiper的父元素时，自动初始化swiper
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	resistanceRatio: 0, //抵抗率 預設0.85
	initialSlide: 0, //初始險是第幾個
	clickable: true,
	// followFinger: false, //拖移時不動 放開後才切換
	effect: 'flip',
	flipEffect: {
		slideShadows : false,
		limitRotation : true,
		crossFade: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: { //鍵盤控制
		enabled: true,
		onlyInViewport: true,
	},
	navigation: {
		nextEl: '.page_next',
	},
	breakpoints: {
		1023: {
			grabCursor: true, //游標為手掌
		}
	},
	on: {
		progress: function(progress){
			// console.log(this.progress);
			// console.log('card00: ',this.slides[0].progress);
			// console.log('card01: ', this.slides[1].progress);
			console.log('card10: ', this.slides[10].progress);

			var card0 = this.slides[0].progress;
			var card1 = this.slides[1].progress;
			var card2 = this.slides[2].progress;
			var card3 = this.slides[3].progress;
			var card4 = this.slides[4].progress;
			var card8 = this.slides[8].progress;
			var card9 = this.slides[9].progress;
			var card10 = this.slides[10].progress;

			if (card0 >= 0.1) {
				// console.log('000');
				$('.page01 .s2, .page02 .s2, .page09 .s2').removeClass('visb');
			}
			if (card1 >= 0.8) {
				$('.page01 .s2').addClass('visb');
			}
			if (card2 >= 0.01 ) {
				$('.page01 .s2').removeClass('visb');
			}

			if (card2 >= 0.8) {
				$('.page02 .s2').addClass('visb');
			}
			if (card3 >= 0.01) {
				console.log('bb');
				$('.page02 .s2').removeClass('visb');
			}

			if (card9 >= 0.8) {
				$('.page09 .s2').addClass('visb');
			}
			if (card10 >= 0.01) {
				console.log('bb');
				$('.page09 .s2').removeClass('visb');
			}
		}, 
		slideChangeTransitionStart: function() {
			updateNavTop();
		}
	}
});

// 選單
var navTop = new Swiper('#navTop', {
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	freeMode: true,
	slidesPerView: 6.98, //顯示數量
	// slideToClickedslide: true,
	observer:true,  //修改swiper自己或子元素的时候，自动初始化swiper
	observeParents:true,    //修改swiper的父元素时，自动初始化swiper
	breakpoints: {
		359: {
			slidesPerView: 2.9,
		},
		767: {
			slidesPerView: 3.9,
		},
		992: {
			slidesPerView: 5.9,
		},
		// when window width is <= 1023px
		1023: {
			slidesPerView: 4.9,
		}
	},
	on: {
		tap: function() {
			mainSwiper.slideTo(navTop.clickedIndex, 500);
		}
	}
});

// 選單高亮移動控制
function updateNavTop() {
	$('#navTop .active-nav').removeClass('active-nav')
	var activeNav = $('#navTop .swiper-slide').eq(mainSwiper.activeIndex).addClass('active-nav');
	
	if (!activeNav.hasClass('swiper-slide-visible')) {
		console.log(1);
		if (activeNav.index() > navTop.activeIndex) {
			// console.log('2',2);
			// var thumbsPerNav = Math.floor(navTop.width / activeNav.width()) - 2
			// navTop.slideTo(activeNav.index() - thumbsPerNav)
			navTop.slideTo(activeNav.index(), 300);
		} else {
			// console.log('3',3);
			// navTop.slideTo(activeNav.index())
			var thumbsPerNav = Math.floor(navTop.width / activeNav.width()) - 2
			navTop.slideTo(activeNav.index() - thumbsPerNav)
		}
	}
};
// 內容多卡輪播
var swiper2 = new Swiper('.s2-1', {
	slidesPerView: 3.2,
	slidesPerColumn: 2,
	navigation: {
		nextEl: '.page01 .s2-next',
		prevEl: '.page01 .s2-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 3.2,
		},
	},
});
// 內容多卡輪播
var swiper3 = new Swiper('.s2-2', {
	slidesPerView: 3.2,
	slidesPerColumn: 2,
	navigation: {
		nextEl: '.page02 .s2-next',
		prevEl: '.page02 .s2-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 3.2,
		},
	},
});
// 內容多卡輪播
var swiper3 = new Swiper('.s2-3', {
	slidesPerView: 3.2,
	slidesPerColumn: 2,
	navigation: {
		nextEl: '.page09 .s2-next',
		prevEl: '.page09 .s2-prev',
	},
	breakpoints: {
		767: {
			slidesPerView: 3.2,
		},
	},
});

// 跳到指定卡
$('a.page03').click(function () {
	mainSwiper.slideTo(4, 600, false); 
	navTop.slideTo(4, 600, false);
	updateNavTop();
});
$('a.page04').click(function () {
	mainSwiper.slideTo(5, 600, false);
	navTop.slideTo(5, 600, false);
	updateNavTop();
});
$('a.page06').click(function () {
	mainSwiper.slideTo(7, 600, false);
	navTop.slideTo(7, 600, false);
	updateNavTop();
});
$('a.page07').click(function () {
	mainSwiper.slideTo(8, 600, false);
	navTop.slideTo(8, 600, false);
	updateNavTop();
});
$('a.page08').click(function () {
	mainSwiper.slideTo(9, 600, false);
	navTop.slideTo(9, 600, false);
	updateNavTop();
});
$('a.page09').click(function () {
	mainSwiper.slideTo(10, 600, false);
	navTop.slideTo(10, 600, false);
	updateNavTop();
});

// 側選單
$('.right_menu .arrow_box').click(function () {
	$('.right_menu .arRight').toggleClass('rotate');
	$('.right_menu .menu_box').toggleClass('gohide');
});
$('.left_menu .arrow_box').click(function () {
	$('.left_menu .arLeft').toggleClass('rotate');
	$('.left_menu .menu_box').toggleClass('gohide');
});
$('li.subevent a, .m1').click(function () {
	$('#bestEvent, .m2').removeClass('show');
	$('#moreEvent, .m1').toggleClass('show');
});
$('li.bestevent a, .m2').click(function () {
	$('#moreEvent, .m1').removeClass('show');
	$('#bestEvent, .m2').toggleClass('show');
	
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.right_menu, .left_menu').addClass('subfixed');
	} else {
		$('.right_menu, .left_menu').removeClass('subfixed');
	}
});
// youtube
var $videoSrc;
$('.video-btn').click(function () {
	$videoSrc = $(this).data("src");
});
$('#movie').on('shown.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
});
$('#movie').on('hide.bs.modal', function (e) {
	$("#video").attr('src', $videoSrc);
});


// 影像地圖RWD
// $('map').imageMapResize();
