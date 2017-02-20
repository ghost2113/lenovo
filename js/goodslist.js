$(function(){
	//("json中数据过大，只能加一个商品，单击 智能数码  里面的商品可以加多个")
	$.getJSON("data/goodslist.json",function(data){
		//获取json中数据   
        (function () {
            var html = "";
            for(var i in data){
                var item = data[i];
                html += "<span data-abc='"+i+"'>"+item.name+"</span>";
            }
            $(".goods_nav").html(html);
        })();
        
        //给选项添加不同的事项  点击后出现不同的内容
        (function(){
 /**************************单击左边目录项 显示右边 所有产品信息**************************************/
             $(".goods_nav").on("click","span",function(){
             	$(".goods_nav span").css("background","#6F6F6F");
             	$(this).css("background","#000");
             	//alert($(this).data("abc"));             	
           	    var dataabc = $(this).data("abc");
           	    var list = data[dataabc].list;
                //alert(list)
                
                // 给ul 设个标志
                $(".shoplist").data("abc",dataabc);                
                var html=""
                for(var i in list){
                	var product = list[i];
                	//alert(list[i].src)
               	    html+="<li>"+
                	      "<img src="+"'"+product.src+"'"+"/>"+
                	      "<p class='pp1'>"+product.name+"</p>"+
                	      "<p class='pp2'>"+product.price+"</p>"+
                	      "<button>"+"加入购物车"+"</button>"
                	+"</li>";                	
                }
                $(".shoplist").html(html);                
  
 
 
/**************************点击加入购物车  保存cookies**************************************/             
                
                $(".shoplist li").on("click","button",function(){
                	//获得json数据的下标
                	var key = $(".shoplist").data("abc");              
                	//获得一个分类下的所有产品
                	var array=data[key].list;
                	//获得每一个商品的信息
                	var product = array[$(this).parent().index()];
                	var tmparray = [];
                	var has=false;
                	//保存多个cookies 防止新保存cookies覆盖原先cookies值；            	
                    if($.cookie("carts")){
                        tmparray = JSON.parse($.cookie("carts"));
                    }                    
                    for(var i in tmparray){
                    	var item=tmparray[i];
                    	if(item.id==product.id){
                    		item.num++;
                    		has=true;
                    	}
                    }
                    if(!has){
                    	product.num=1;
                        tmparray.push(product);  
                    } 
                    //alert(JSON.stringify(product))
                    //tmparray.push(product);
                    //alert(tmparray)
                    //alert(tmparray)
                	var str=JSON.stringify(tmparray);
                    $.cookie("carts",str,{expires:7});                    
                    //alert(JSON.parse($.cookie("carts")).length)
                    $(".header_sale a").html(JSON.parse($.cookie("carts")).length)
                })
/**************************点击加入购物车  保存cookies  end**************************************/   

/********************************购物页面点击商品弹出另一个页面s 并保存cookies***********************************/
                $(".shoplist li").on("click","img",function(){
                	var key = $(".shoplist").data("abc");                 	
                	//获得一个分类下的所有产品
                	var array=data[key].list;
                	//获得每一个商品的信息
                	var product = array[$(this).parent().index()];
                	//alert(typeof product);
                	var str = JSON.stringify(product);
                	//alert(str)
                	$.cookie("goods",str,{expires:7,path:'/'});
                	//alert($.cookie("goods"))
                	open("http://127.0.0.1:8020/%E8%81%94%E6%83%B3/goodsinformation.html");					
				}) 
/********************************购物页面点击商品弹出另一个页面end*********************************************** */				
             })
             
/*******************************单击左边目录项 显示右边 所有产品信息end**************************************/             
        })()
        $(".goods_nav span").eq(0).trigger("click");
	})
	//logo返回首页 

    	$("#logo").click(function(){
    		open("index.html","_self");
    		
    	})

})
