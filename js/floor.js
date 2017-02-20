$(function(){
	 /********************************** 楼层**********************************************/
    $.getJSON("js/floor.json",function (res) {	
    	alert(res)
    	//alert(res)获取json数据成功
    	for(var i=0;i<res.length;i++){
    		 //alert(res[i].title[1].ul)
    		//alert(1)楼层数等于res中对象个数
    		$subfloor=$("<div></div>");
    		$subfloor.addClass("subfloor");
    		$subfloor.attr("name","subfloor")
    		$("#floor").append($subfloor);
    		
    		//title
    		$floor_title=$("<div></div>");
    		$floor_title.addClass("floor_title");
    		
    		$h3=$("<div></div>");
    		$h3.addClass("h3");
    		$h3.html(res[i].title[0].h3);    		
    		$floor_title.append($h3);
    		
    		$floor_title_nav=$("<div></div>");
    		$floor_title_nav.addClass("floor_title_nav");
    		
            $span=$("<span></span>");
            $floor_title_nav.append($span);
    		for(var j=0;j<res[i].title[1].ul.length;j++){
	   		    $a=$("<a href='#'></a>");
	   		    $a.html(res[i].title[1].ul[j])
	    		$floor_title_nav.append($a);

    		}
    		$floor_title.append($floor_title_nav);
    		
    		$subfloor.append($floor_title);

    		
    		//content
    		$floor_content=$("<div></div>");
    		$floor_content.addClass("floor_content");
    		
    		$floor_left=$("<div></div>");
    		$floor_left.addClass("floor_left");
    		$a=$("<a href='#'></a>");
    		$img=$("<img src=''/>");
    		$img.attr("src",res[i].content[0].img);
    		$a.append($img);
    		$floor_left.append($a);		
    		$subfloor.append($floor_left);
    		
    		$floor_right=$("<div></div>");
    		$floor_right.addClass("floor_right");
    		//为floor_right创建元素
    		//alert(res[i].content[1].floor_img.length)
    		for(var h=0;h<res[i].content[1].floor_img.length;h++){
    			$floor_img=$("<div></div>");
    			$floor_img.addClass("floor_img");
    			$a=$("<a href='#'></a>");
    			$img=$("<img src=''/>");
    		    $img.attr("src",res[i].content[1].floor_img[h].img);
    		   // alert(res[i].content[1].floor_img[h].img)获取图片地址
    		    $a.append($img);
    			$floor_img.append($a);
    			
    			$p1=$("<p></p>");
    			$p1.addClass("p1");
    			$p1.html(res[i].content[1].floor_img[h].p1)
    			$p2=$("<p></p>");
    			$p2.addClass("p2");
    			$p2.html(res[i].content[1].floor_img[h].p2)
    			$p3=$("<p></p>");
    			$p3.addClass("p3");
    			$p3.html(res[i].content[1].floor_img[h].p3)
    			$floor_img.append($p1);
    			$floor_img.append($p2);
    			$floor_img.append($p3);
    			$floor_right.append($floor_img);
    		} 		
    		
    		
    		$subfloor.append($floor_right);
    		$subfloor.append($floor_content);
    		
    	}
    })
})
