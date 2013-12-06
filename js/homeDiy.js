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
		var u = $("#scroll2"),
			li = u.find("li"),
			len = li.length,
			l = $("#pre"),
			r = $("#next"),
			n = 0,
			num = parseInt(len/5);
		
		u.css("width", len*228);
		
		an(0);
		
		l.click(function(){
			n<=0 ? n=0 : n--
			an(n);
		})
		
		r.click(function(){
			n>=num ? n=num : n++
			an(n);
		})
		
		
		function an(n){
			console.log(n)
			u.animate({"left":n*-1140},200);
		}
		
		
	})();
	
	
})