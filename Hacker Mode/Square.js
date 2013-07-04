var a=0,b=0,c=0,d=0,t=10;var e=true,f,g,h;var delay=100;
var str=location.search;
var strarray=str.split("=");
var speed=strarray[1];
delay/=speed;
function square()
{
	if(e==true)
	{
		a+=t;d=0;
		document.getElementById("dot").style.top=(150)+"px";
		document.getElementById("dot").style.left=(650-a)+"px";
		if(document.getElementById("dot").style.left==(350+t)+"px")
		{f=true;e=false;}
	}
	else if(f==true)
	{
		b+=t;a=0;
		document.getElementById("dot").style.top=(150+b)+"px";
		document.getElementById("dot").style.left=(350)+"px";
		if(document.getElementById("dot").style.top==(450-t)+"px")
		{g=true;f=false;}
	}
	else if(g==true)
	{
		c+=t;b=0;
		document.getElementById("dot").style.top=(450)+"px";
		document.getElementById("dot").style.left=(350+c)+"px";
		if(document.getElementById("dot").style.left==(650-t)+"px")
		{h=true;g=false;}
	}
	else if(h==true)
	{
		d+=t;c=0;
		document.getElementById("dot").style.top=(450-d)+"px";
		document.getElementById("dot").style.left=(650)+"px";
		if(document.getElementById("dot").style.top==(150+t)+"px")
		{e=true;h=false;}
	}
}
var timer=setInterval("square()",delay);