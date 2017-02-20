$(function() {	
/*轮播图*/
	$(".box ul").append($(".box ul li").eq(0).clone());
	var timer = null;
	var count = 0;
	var k = 0;
	timer = setInterval(autoPlay, 2000);

	function autoPlay() {
		count++;
		if(count == 7) {
			$(".box ul").css("left", 0) //一定要加上这句 不然无法无缝连接
			count = 1;
		}
		//$(".box ul").animate({"left":-count*500},1000);
		$(".box ul").animate({
			"left": -count * 770
		}, 1000);

		k++;
		if(k == 6) {
			k = 0;
		}
		$(".box ol li").eq(k).addClass("current").siblings().removeClass("current");
	}

	$(".box ol li").click(function() {
		$(this).addClass("current").siblings().removeClass("current");
		var k = $(this).index();
		//alert(k)
		//$(".box ul").animate({"left":-k*500},1000)
		count = k; //这一步    单击之后  使动画从当前位置继续轮播 而不是回到单击之前位置轮播
		$(".box ul").animate({
			"left": -k * 770
		})
	})

	$(".box").mouseenter(function() {
		clearInterval(timer);
	})
	$(".box").mouseleave(function() {
		timer = setInterval(autoPlay, 2000);
	})
    //右按钮
	$(".next").click(function() {
		count++;
		$(".box ul").animate({
			"left": -count * 770
		}, 1000);
		if(count == 6) {
			count = 0;
			$(".box ul").css("left", 0)
		}
		var a = count;
		if(a == 7) {
			a = 6;
		}
		$(".box ol li").eq(a).addClass("current").siblings().removeClass("current");
	})
	
	 //左按钮
	$(".last").click(function() {

		if(count == 0) {
			count = 6;
		}
		count--;
		$(".box ul").animate({
			"left": -count * 770
		}, 1000);

		var a = count;
		//					if(a==0){
		//						a=1;
		//					}
		$(".box ol li").eq(a).addClass("current").siblings().removeClass("current");
	})
	
	
	
/*watch上下轮播*/
    var num=0;
    setInterval(function(){
   	num++;
    	if(num==3){
    		num=1;
    		$(".subimgauto ul").css("top",0);
    	}
    	$(".subimgauto ul").animate({"top":-num*60},1000);
    },2000)
    
    
    
/*menu从json获取数据   */ 
    
    $("#menusideleft>li").mouseover(function(){
        $("#menusideleft>li").removeClass("sidelist");
    	$(this).addClass("sidelist");

    	$thatindex=$(this).index();
    	    if($thatindex==4){
    	    	
    	    }
    	//alert($thatindex)
    	    $list_cont = $("<div><div>");
    	    $list_cont.addClass("list_cont");
    	    $(".menu").append($list_cont);

    	    $list_lt = $("<div></div>");
    	    $list_lt.addClass("list_lt");
    	    $list_cont.append($list_lt);

    	    $list_rt = $("<div></div>");
    	    $list_rt.addClass("list_rt");
    	    $list_cont.append($list_rt);

    	    $a =$("<a href='#'></a>");
    	    $a.addClass("aa");
    	    $list_rt.append($a);
    	    $img=$("<img src=''/>");
    	    $img.addClass("myimg");
    	    $a.append($img);
    	    
    	    $a = $("<a href='#'></a>");
    	    $a.addClass("aa");
    	    $list_rt.append($a);
    	    $img=$("<img src=''/>");
    	    $img.addClass("myimg");
    	    $a.append($img);
    	    
    	    
    	    if($thatindex==3){
    	    	$(".menu .list_cont").css("display","none")
    	    }
	    $.getJSON("js/index.json",function (res) {	    	    	
	    	for(var k=0;k<res[$thatindex].result.length;k++){
	    	    $list_lta=$("<div></div>");
	    	    $list_lta.addClass("list_lta");
                $list_lt.append($list_lta);
                
                $p=$("<p></p>");
                $p.html(res[$thatindex].result[k].title);
                $list_lta.append($p);
                $ul=$("<ul></ul>");
                $ul.addClass("clearfix");
                $list_lta.append($ul);
                
                for(var a=0;a<res[$thatindex].result[k].content.length;a++){
                	$li=$("<li></li>");
	                $ul.append($li);
	                
	                $a = $("<a href='#'></a>");
	                $a.html(res[$thatindex].result[k].content[a])
	                $li.append($a);
                }             
 
	    	}
	    	  $(".list_rt a img").eq(0).attr({src:res[$thatindex].img[0]});  
    	      $(".list_rt a img").eq(1).attr({src:res[$thatindex].img[1]});  	
	    })
	    /********************************选项卡效果*******************************/
	   
	    $("#menusideleft>li").eq($(this).index()).mouseleave(function(){
	    	//alert($(this).index())
            var id;
	    	//id = setTimeout(function(){
	    		$(".menu .list_cont").css("display","none");
	    		$("#menusideleft>li").removeClass("sidelist");
	    		//$("#menusideleft>li").removeClass("sidelist");
	    	//},1000)
	    		/*if($(".list_cont").mouseover()){
	    		clearTimeout(id);
	    	$(".list_cont").mouseleave(function(){
	        	    $(".menu .list_cont").css("display","none");
	            })
	    	}*/
/*	        $(".list_cont").mouseover(function(){
	        	clearTimeout(id);
	            $(".list_cont").mouseleave(function(){
	        	    $(".menu .list_cont").css("display","none");
	        	    //alert(1)
	            })
	        })*/  		       
       })
	    $("#menusideleft>li").click(function(){
	    	open("http://127.0.0.1:8020/%E8%81%94%E6%83%B3/goodslist.html")
	    })
   })        	
 
    //购物车 显示数量
    $(".header_sale").click(function(){
    	open("http://127.0.0.1:8020/%E8%81%94%E6%83%B3/shopcart.html")
    })
    if($.cookie("carts")){
    	//$("header_sale a").html()
    	//alert(JSON.parse($.cookie("carts")).length)
    	$(".header_sale a").html(JSON.parse($.cookie("carts")).length)
    	//alert(JSON.parse($.cookie("carts")).length)
    }else{
    	$(".header_sale a").html(0)
    }     	
    
    //nav_box 下拉列表
   $(".nav_box li").eq(1).mouseenter(function(){
    	$(".hotgoods_list").slideDown();
    })
      $(".nav_box li").eq(1).mouseleave(function(){
    	$(".hotgoods_list").slideUp();
    })
    $(".nav_box li").eq(6).mouseenter(function(){
    	$(".service_list").slideDown();
    })
      $(".nav_box li").eq(6).mouseleave(function(){
    	$(".service_list").slideUp();
    })
    //今日推荐
    
})

