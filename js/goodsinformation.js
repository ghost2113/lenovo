$(function(){
	 //alert($.cookie("goods"))
	//放大镜
	(function(){
	//强制图片放大比例
	var bigImageW = $(".box").width()/$(".mask").width()*$(".box").width();
	var bigImageH = $(".box").height()/$(".mask").height()*$(".box").height();
	//alert($(".mask img").width())
	//设置放大后图片的尺寸
	$(".mask img").width(bigImageW);
	$(".mask img").height(bigImageH);
	
	
	$(".box").mouseenter(function(){
		$(".mask").css("display","block");
	})
	$(".box").mouseleave(function(){
		$(".mask").css("display","none");
	})
	
    $(".box").mousemove(function(evt){
    	//console.log(evt.clientX);
    	var offsetX=evt.clientX-$(".box").offset().left-$(".mask").width()/2;
    	var offsetY=evt.clientY-$(".box").offset().top-$(".mask").height()/2;
    	//alert(offsetX)
    	if(offsetX<-50){
        	offsetX=-50;
        }else if(offsetX>$(".box").width()-$(".mask").width()+50){
        	offsetX=$(".box").width()-$(".mask").width()+50;
        }
        if(offsetY<-50){
        	offsetY=-50;
        }else if(offsetY>$(".box").height()-$(".mask").height()+50){
        	offsetY=$(".box").height()-$(".mask").height()+50;
        }
    	$(".mask").css("left",offsetX);
    	$(".mask").css("top",offsetY);
        
        var num=$(".box").width()/$(".mask").width();
        $(".mask img").css("left",(-offsetX-50)*num);
        $(".mask img").css("top",(-offsetY-50)*num);        
    })
	})()
	
	
	//从json数据中获得信息
  
	    var str=JSON.parse($.cookie("goods"));
	        $(".name").html(str.name);
	        $(".goods_remind").html(str.remind);
	        $(".price").html(str.price.replace(/[^1-9]/ig,""));
	        $(".box img").attr("src",str.src)
	        var html="";
	    for(var i =0;i<str.subimg.length;i++){
	    	//alert(str.subimg.length)
	    	html+="<li style="+"'background:url("+str.subimg[i]+") no-repeat'"+">"
	    	    +"</li>";
	    	    //alert(html);
	    }
	    $(".imglist ul").css("width",100*str.subimg.length);
	    $(".imglist ul").html(html);
	    //点击轮播图片 改变放大镜图片
	    $(".imglist ul").on("click","li",function(){
	    	//alert($(this).index())
	    	//alert(str.upimg[$(this).index()])
	    	$(".box img").attr("src",str.upimg[$(this).index()])
	    })
	
	//图片轮播选项
	

		var long=(str.subimg.length-5)*100;
		//alert(long)
	    $(".pre").click(function(){
	    	//alert(Number($(".imglist ul").css("left").replace("px","")))
       	  $(".imglist ul").css("left",Number($(".imglist ul").css("left").replace("px",""))-100);
       	  if($(".imglist ul").css("left").replace("px","")<-long){
       	  	   $(".imglist ul").css("left",-long);
       	  }
       })
	    $(".next").click(function(){
	    	//alert(Number($(".imglist ul").css("left").replace("px","")))
       	  $(".imglist ul").css("left",Number($(".imglist ul").css("left").replace("px",""))+100);
       	  if($(".imglist ul").css("left").replace("px","")>0){
       	  	   $(".imglist ul").css("left",0);
       	  }
       })
	
       
})
