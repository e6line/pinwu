// JavaScript Document







$(document).ready(function(){
	
	//DiyTopBanner Show
	var ic_i = 0;
	setInterval(change,3000);
	function change(){
		ic_i++;
		if(ic_i<3){
			$(".changePic"+(ic_i+1)).show();
		}else{
			ic_i=0;
			$(".changePic1").fadeIn(800);
		}
		$(".changePic"+ic_i).fadeOut(800);
	}
	
	
	
	//Diy-function
	(function() {
		var u = $("#s-pic-list"),
			li = u.find("li"),
			len = li.length,
			l = $("#l-b"),
			r = $("#r-b"),
			b = $("#big-pic"),
			n = 0;
		
		u.css("width", len*175);
		
		an(0);
			
		li.click(function(){
			var i = $(this).index();
			n = i;
			an(n);
		})
		
		l.click(function(){
			n<=0 ? n=0 : n--
			an(n);
		})
		
		r.click(function(){
			n>=len-1 ? n=len-1 : n++
			an(n);
		})
		
		function an(n){
			li.removeClass("active").eq(n).addClass("active");
			b.attr("src", li.eq(n).find("img").attr("data-big"));
			u.animate({"left":n*-175},200);
		}
		
		
	})();
	
	
})