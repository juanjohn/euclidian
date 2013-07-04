var t=0;var delay=100;
var str=location.search;
var strarray=str.split("=");
var speed=strarray[1];
delay/=speed;
	function circle() 
	{
    	t+=0.05;
        document.getElementById("dot").style.top=300+(200*Math.cos(t))+"px";
        document.getElementById("dot").style.left=500+(200*Math.sin(t))+"px";
	}
var timer=setInterval("circle()",delay);