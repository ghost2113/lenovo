$(function(){
	
	$(".login_open").click(function(){
		$(".login_bg").css("display","block")
	});
	$(".login_bg_close").click(function(){
		$(".login_bg").css("display","none")
	});
	//选项卡
    $(".login_title h3").eq(0).click(function(){
    	$(this).addClass("login_title_h3");
    	$(".login_title h3").eq(1).removeClass("login_title_h3");
    	
    	$(".login_name_phone1").css("display","block");
    	$(".login_phone2").css("display","none")
    	
    	$(".login_pass_phone1").css("display","block");
    	$(".login_code_value").css("display","none")
    	$(".login_code").css("display","none")

    })
    $(".login_title h3").eq(1).click(function(){
    	$(this).addClass("login_title_h3");
    	$(".login_title h3").eq(0).removeClass("login_title_h3");
    	
    	$(".login_name_phone1").css("display","none");
    	$(".login_phone2").css("display","block")
    	
    	$(".login_pass_phone1").css("display","none");
    	$(".login_code_value").css("display","block")   	
    	$(".login_code").css("display","block");

    })
    //与服务器端验证
    $(".login_submit").click(function(){ 
/*    	alert($('.login_name_phone1').val())
    	alert($('.login_pass_phone1').val())*/
    	        $.post("js/testif.php", {
                	"user": $('.login_name_phone1').val(),
                	"password": $('.login_pass_phone1').val()
                }, function(res) {
                	//alert(res);
                	if(res == 1) {
                		alert("登录成功");
                	} else {
                		alert("登录失败");
                	}
                }) 
    })

                
                

    $(".btn").click(function(){
    	var val=$(".input2").val();
		var txt=$(".deng-s").text().replace(/\s+/g,"");
    	if(val.toLocaleLowerCase()==txt.toLocaleLowerCase()){
			$.post("js/testif.php",{"user":$(".input1").val(),"password":$(".input3").val()},function (res) {
                    //alert(res);
                    if(res == 1){
                        alert("登录成功")
                    }else{
                        alert("登录失败")
                    }
                })
		}else{
			alert("验证码错误")
		}

    	
    })
    //验证手机号
    
/*    $(".login__phone2").blur(function(){
    	alert($(this).value)
/*    	if(!/^1[34578]\d{9}$/.test($(this).val()){
    		alert(1);
    	}
    	else{
    		alert(1);
    	}
    })*/
    
    
    
    
    //login验证码
/*    function createValidateCode(){				
				var arr =[];//保存每个生成随机字符
				while(arr.length<4){
					//使用ascII码  数字48-57  字母65-90 97-122
					var n = getRandom(48,122);
					if((n>=48&&n<=57)||(n>=65&&n<=90)||(n>=97&&n<=122)){
						arr.push(String.fromCharCode(n));
					}
				}
				
				$(".login_code").html(arr.join(""));			
			}
			
			window.onload = function(){
				createValidateCode();
			}
			
			function getRandom(start,end){
				var d = end+1-start;
				return Math.floor(Math.random()*d+start);
			}
			
            $(".login_code").click(function(){
            	createValidateCode();
            })*/
})
