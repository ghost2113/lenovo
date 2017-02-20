$(function(){
	//头部表单下拉
	$(".header_phone").mouseenter(function(){
		//alert(111);
		$(".header_phone a").css("background-position","-211px -5px")
		$(".header_phone_slide").slideDown();
	})
	$(".header_phone").mouseleave(function(){
		$(".header_phone a").css("background-position","-196px -5px")
		$(".header_phone_slide").slideUp();
	})
    $(".header_title").mouseenter(function(){
    	$(".header_title a").css("background-position","-211px -5px")
		//alert(111);
		$(".header_title_content").slideDown();
	})
	$(".header_title").mouseleave(function(){
		$(".header_title a").css("background-position","-196px -5px")
		$(".header_title_content").slideUp();
	})
/*	购物车    */
})
