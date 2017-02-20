$(function () {
	//alert(1)
	//跳转回首页
	$(".cart_title").click(function(){
		open("index.html","_self")
	})
    //购物车页面    
  
       //alert($.cookie("carts"))
       var arr = JSON.parse($.cookie("carts"));
       var html="";
       for(var i in arr){
       	  // alert(arr[i])
       	  //alert(arr.length)
       	  var product=arr[i];
          /*价格转化为数字类型*/
       	  var price=product.price.replace(/[^0-9]/ig,""); 
       	  //alert(price)
       	  html+="<li>"+
       	         "<input type='checkbox' />"+
       	         "<span><img style='width:115px;height:116px;display:block;position:absolute;left:85px;top:0;' src="+"'"+product.src+"'"+"/></span>"+
       	         "<span>"+product.name+"</span>"+
       	         "<span>"+product.price+"</span>"+
       	         "<span>"+product.num+"</span>"+
       	         "<span>"+price*product.num+"元</span>"+
       	         "<button>删除</button>"
       	        +"</li>"
       }
       //alert(html)
       $(".cart_list").html(html);       
       
       $(".cart_list li").on("click","button",function(){
       	    //删除cookies中信息 删除商品
       	    var index = $(this).parent().index();
            var arr = JSON.parse($.cookie("carts"));
       	    //alert(arr)
       	    arr.splice(index,1);
       	    //alert(arr)
     	    $.cookie("carts",JSON.stringify(arr));
     	    $(this).parent().remove();
       })
    
       
        
})
