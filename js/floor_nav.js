        $(function () {
            $("#floor_nav > li").click(function () {
            	//alert($(this).index())
               
                $("html,body").animate({"scrollTop": $("[name='subfloor']").eq($(this).index()).offset().top});
                //$("#floor_nav > li").eq($(this).index()).addClass("floor_nav_a").siblings().removeClass("floor_nav_a");
                //alert($("[name='subfloor']").eq(4).offset().top);
                
            })
   
/*           $(window).scroll(function () {
                var scrollTop = $("body").scrollTop();
                //console.log(scrollTop);

                $("[name='subfloor']").each(function (index) {
                	//alert($("#floor_nav > li").length)
                    if (scrollTop >$(this).offset().top -50){
                    	$("#floor_nav > li").eq($(this).index()).addClass("floor_nav_a").siblings().removeClass("floor_nav_a")
                    	//$("#floor_nav > li").eq(1).removeClass("floor_nav_a");
                    	console.log($(this).index())
                    }
                })

            })*/ 
           
            
            
            
            
            //sidebar_right
            $("#sidebar_right li").eq(0).mouseover(function(){
            	//$(".sidebar_hidden1").toggle()
            	$(".sidebar_hidden1").animate({opacity:"1"},200);
            	//$(".sidebar_hidden1").fadeIn("fast");
            })
            $("#sidebar_right li").eq(0).mouseleave(function(){
            	//$(".sidebar_hidden1").toggle()
            	$(".sidebar_hidden1").animate({opacity:"0"},200);
            })
            
            $("#sidebar_right li").eq(1).mouseover(function(){
            	//$(".sidebar_hidden1").toggle()
            	$(".sidebar_hidden2").animate({opacity:"1"},200);
            })
            $("#sidebar_right li").eq(1).mouseleave(function(){
            	//$(".sidebar_hidden1").toggle()            	
            	$(".sidebar_hidden2").animate({opacity:"0"},200);
            })
            
            $("#sidebar_right span").click(function(){
            	$("html,body").animate({"scrollTop":"0"});
            })
            
            
            
            //6F特殊效果
            $(".sixthfloor li a").mouseenter(function(){            	
            	$(this).css("box-shadow","0 0 20px 4px");           
            })
            $(".sixthfloor li a").mouseleave(function(){            	
            	$(this).css("box-shadow","0 0 0 0");           
            })
            
            //楼层图片效果
            $("#floor").mouseenter(function(){
	            //alert($(".subfloor").length);
/*            	$(".subfloor img").mouseover(function(){
            		alert(1)
            		
            	})*/
            	$(".subfloor .floor_img  img").mouseover(function(){
            		$(this).addClass("effect1");
            	})
            	$(".subfloor .floor_img  img").mouseout(function(){
            		$(this).removeClass("effect1");
            	})
            	
            	$(".subfloor .floor_left  img").mouseover(function(){
            		$(this).addClass("effect2");
            	})
            	$(".subfloor .floor_left  img").mouseout(function(){
            		$(this).removeClass("effect2");
            	})
            })
            //
           // alert(document.getElementsByClassName("subfloor").length);
        })        
