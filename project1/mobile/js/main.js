$(function(){
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 55){
			$(".top, .go_top").addClass("scrolled");
		}
		else{
			$(".top, .go_top").removeClass("scrolled");
		}
	});

	$(".tab").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".menu").addClass("active");
			$("body").addClass("fixed");
			$(".dim").addClass("active");
		}
		else{
			$(this).removeClass("active");
			$(".menu").removeClass("active");
			$("body").removeClass("fixed");
			$(".dim").removeClass("active");
		}
	});

	$(".dim").click(function(){
		$(".menu").removeClass("active");
		$("body").removeClass("fixed");
		$(".dim").removeClass("active");
		$(".tab").removeClass("active");
	});


	$("#mobile_menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#mobile_menu > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#mobile_menu ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});

	$(".go_top").click(function(e){
		e.preventDefault();
			$("html").animate({scrollTop : 0}, 300);
	});

	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
		on: { 
			init: function(){
				$(".main_slider .account .current").text(this.activeIndex+1);
				$(".main_slider .account .total").text(this.slides.length);
			},
			slideChange: function(){
				$(".main_slider .account .current").text(this.activeIndex+1);
				$(".main_slider .account .total").text(this.slides.length);
			},
		},
	});


	var content_slider = new Swiper(".new_slider .swiper-container", {
        slidesPerView: 2.5,
		spaceBetween: 8,
		pagination: {
			el: ".new-swiper-pagination",
        },
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
    	},
    });

	var content_slider = new Swiper(".best_slider .swiper-container", {
        slidesPerView: 2.5,
		spaceBetween: 12,
		pagination: {
			el: ".best-swiper-pagination",
        },
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 5
			}
    	},
    });
});


