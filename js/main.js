$(function(){
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else {
			pageN=4;
		}

		$("#gnb ul li").removeClass("active");
		$("#gnb ul li").eq(pageN).addClass("active");

		$(".mobile_menu li").removeClass("active");
		$(".mobile_menu li").eq(pageN).addClass("active");

		$(".controller li").removeClass("active");
		$(".controller li").eq(pageN).addClass("active");

		if(pageN == 1 || pageN ==2 || pageN ==3){
			$(".pc_menu").addClass("dark");
			$("#gnb").addClass("dark");
			$(".copy").addClass("dark");
			$(".controller li").addClass("dark");
			$(".global_tabs").addClass("dark");
		}
		else{
			$(".pc_menu").removeClass("dark");
			$("#gnb").removeClass("dark");
			$(".copy").removeClass("dark");
			$(".controller li").removeClass("dark");
			$(".global_tabs").removeClass("dark");
		}

		if(pageN == 0){
			$(".download_pc").removeAttr("style").removeClass("bright");
			$(".download_mobile").removeAttr("style").removeClass("bright");
		}
		else if(pageN == 3){
			$(".download_pc").hide().removeClass("bright");
			$(".download_mobile").hide().removeClass("bright");
		}
		else{
			$(".download_pc").removeAttr("style").addClass("bright");
			$(".download_mobile").removeAttr("style").addClass("bright");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#header").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$("#gnb ul li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".controller li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});

	var videoUrl=["video0", "video1"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var video=document.getElementById("my_video");
	video.muted=true;
	video.play();

	function videoDimmed(){
		$(".media video").hide().css({opacity:0});

		setTimeout(function(){
			$(".media video").show().animate({opacity:1}, 300);
		}, 300);
	}

	videoDimmed();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.play();
		videoDimmed();
	});

	var projectN=0;

	$(".project:first").addClass("active");

	$(".project .title_area").click(function(e){
		e.preventDefault();
		var project=$(this).parents(".project");

		if(projectN != project.index()){
			ptojectN=project.index();
			$(".project").removeClass("active");
			project.addClass("active");

			var projectY=$(this).offset().top-60;
			$("html").animate({scrollTop:projectY}, 800);
		}
	});

	function mobileLink(){
		if(isMobile){
			$("a.project1").attr({href:"project1/mobile/index.html"});
		}
		else{
			$("a.project1").attr({href:"project1/pc/index.html"});
		}
		$("a.project2").attr({href:"project2/index.html"});
	}

	mobileLink();

	$(".global_tabs").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("body").toggleClass("fixed");
		$(".floating_menu").toggleClass("active");
	});
	$("#gnb ul li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}
		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".mobile_menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		$(".global_tabs").removeClass("active");
		$("body").removeClass("fixed");
		$(".floating_menu").removeClass("active");

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});
});