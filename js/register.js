$(function(){
	$(".register_open").click(function(){
		//alert(1)
		$(".register_bg").css("display","block");
	})
	$(".register_title button").click(function(){
		$(".register_bg").css("display","none");
	})
	//注册验证
/*	(function(){})()*/
		$("#register_content input").blur(function(){
			//验证手机号
			if($(this).is("#name")){
				if(/^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/.test(this.value)||/^1[34578]\d{9}$/.test(this.value)){
					$(".errormsg_name").html("用户名符合要求");
				}
				else{
					$(".errormsg_name").html("请输入正确的格式");	
				}
			}
			//验证密码
			if($(this).is("#password")){
				if(/^[\w\.\_]{8,20}$/.test(this.value)){
					$(".errormsg_password").html("密码符合要求");
				}
				else{
					$(".errormsg_password").html("请输入正确密码的格式");	
				}
			}
			if($(this).is("#password_check")){
			    if($("#password_check").value==$("#password").value){
					//alert($("#password_check").val())
					//alert($("#password").val())
	                $(".errormsg_password_check").html("两次密码一致");
			    }else{
			    	$(".errormsg_password_check").html("两次密码不一致");
			    }
			}
		})
		//验证码
		
		    function createValidateCode(){				
				var arr =[];//保存每个生成随机字符
				while(arr.length<4){
					//使用ascII码  数字48-57  字母65-90 97-122
					var n = getRandom(48,122);
					if((n>=48&&n<=57)||(n>=65&&n<=90)||(n>=97&&n<=122)){
						arr.push(String.fromCharCode(n));
					}
				}
				
				$(".code").html(arr.join(""));			
			}
			
			window.onload = function(){
				createValidateCode();
			}
			
			function getRandom(start,end){
				var d = end+1-start;
				return Math.floor(Math.random()*d+start);
			}
			
            $(".changecode").click(function(){
            	createValidateCode();
            })
            $(".codevalue").blur(function(){
/**/            if($(".code").html().toLowerCase()==$(".codevalue").val().toLowerCase()){
            		$(".coderesult").html("验证码输入正确");
            	}
            	else{
            		createValidateCode();
            		$(".coderesult").html("验证码输入错误");
            	}
            	//alert($(".code").html().toLowerCase())
            	//alert($(".codevalue").val().toLowerCase())
            })
            
	        $(".submit").click(function(){

/*	        	$(".errormsg_name").html("用户名符合要求");$(".errormsg_password").html("密码符合要求");
	        	$(".coderesult").html("验证码输入正确"); $(".errormsg_password_check").html("两次密码一致");*/
	        	if($(".errormsg_name").html()=="用户名符合要求"&&
	        	   $(".errormsg_password").html()=="密码符合要求"&&
	        	   $(".coderesult").html()=="验证码输入正确"&&
	        	   $(".errormsg_password_check").html()=="两次密码一致")
	        	{
	        		alert("注册成功");
	        		if($("#check").prop("checked")){
	        			//cookie；alert(1)
	        			//$.cookie('the_cookie', 'the_value', { expires: 7, path: '/' });
	        		    $.cookie("name",$("#name").val(),{expires: 7, path: '/' });
	        	        $.cookie("password",$("#password").val(),{expires: 7, path: '/' });
	        		}
	        	}
	        	else{
	        		alert("请重新输入");
	        	}
	        })
	        	
	        
})
