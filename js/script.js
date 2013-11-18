// JavaScript Document

$(function(){
	
	//弹出层
	$("#mtbwin").click(function(){
		 $("#overlay").show();
		 $("#win").show();
	});
	$("#close").click(function(){
		
		$("#overlay").hide();
		$("#win").hide();
		
	});
	
	$(".onc_adel").click(function(){
		 $("#overlay").show();
		 $("#win").show();
	});
	
	//展开合并效果
	var lastOne;
    $(".mttree_li").click(function () {
        if (lastOne) {
            $(lastOne).find("img").attr("src", "images/ico01.gif");
        }

        if ($(this).next().is(":visible")) {
            $(this).find("img").attr("src", "images/ico01.gif");
        }
        else {
            $(this).find("img").attr("src", "images/ico02.gif");
        }

        $(this).next().slideToggle(300).end().siblings(".mttree_li").next().slideUp();

         lastOne = this;
    });
	
	$(".mttree_liteli span").click(function(){
		
		$(".mttree_liteli span").removeClass("dspan");
	   	$(this).addClass("dspan");

	});
	
	//模拟下拉框adduser
	$(function(){
		  $("body").bind("click",function(e){
			 e=window.event?window.event:e;
			 var e_tar=e.srcElement?e.srcElement:e.target;
			  $(".so_liapv").hide();
			}) ;

		$(".so_liapv").find("a").click(function(){
		   var aval=$(this).html();
		   $(this).parents(".aduser_teinp:first").find(">input").val(aval); 
		 
		}); 
		  
		  
		$(".aduser_sel").click(function(ev){
			
			if($(this).next().is(":visible"))
			{
				$(this).next().hide();
			}
			else
			{
				$("body").click() ;
				$(this).next().show();
			}
			
			ev.stopPropagation();	
		});
	  });
	//模拟下拉框adduser   END
	//模拟下拉框 Bebz二级01
	$(function(){
		  $("body").bind("click",function(e){
			 e=window.event?window.event:e;
			 var e_tar=e.srcElement?e.srcElement:e.target;
			  $(".mtso_liapv").hide();
			}) ;

		$(".mtso_liapv").find("a").click(function(){
		   var aval=$(this).html();
		   $(this).parents("li:first").find(">input").val(aval); 
		 
		}); 
		  
		  
		$(".mmts_inp01").click(function(ev){
			
			if($(this).next().is(":visible"))
			{
				$(this).next().hide();
			}
			else
			{
				$("body").click() ;
				$(this).next().show();
			}
			
			ev.stopPropagation();	
		});
	  });
	//模拟下拉框 Bebz二级01  END
	//模拟下拉框 Bebz二级02
	$(function(){
		  $("body").bind("click",function(e){
			 e=window.event?window.event:e;
			 var e_tar=e.srcElement?e.srcElement:e.target;
			  $(".mt2so_liapv").hide();
			}) ;

		$(".mt2so_liapv").find("a").click(function(){
		   var aval=$(this).html();
		   $(this).parents("li:first").find(">input").val(aval); 
		 
		}); 
		  
		  
		$(".mmts_inp02").click(function(ev){
			
			if($(this).next().is(":visible"))
			{
				$(this).next().hide();
			}
			else
			{
				$("body").click() ;
				$(this).next().show();
			}
			
			ev.stopPropagation();	
		});
	  });
	//模拟下拉框 Bebz二级02  END
	
	
});



//
