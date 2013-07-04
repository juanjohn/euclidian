var t=0;
        function circle() 
		{
            t+=0.07;
            document.getElementById("dot").style.top=300+(200*Math.cos(t))+"px";
            document.getElementById("dot").style.left=500+(200*Math.sin(t))+"px";
	
		}
			var timer=setInterval("circle()",20);
        