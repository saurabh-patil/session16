Saurabh
function visibility(source) 
		{
			var personal_div=document.getElementById("personal");
			var educational_div=document.getElementById("educational");

			if(source==2)
			{
				if(educational_div.style.display=='block')
				{
					educational_div.style.display='none';
					personal_div.style.display='block';
				}
				else
				{
					educational_div.style.display='block';
					personal_div.style.display='none';
				}
			}
			
		}
function show_input()
		{
			
			var e= document.getElementById("other");
			var inputbox=document.getElementById("other_hobby");
			if(e.checked==true)
			{
				inputbox.style.display='block';
				
			}
			else
			{
				inputbox.style.display='none';
				
			}
		}
function valname()
{
	var x=document.getElementById("fname").value;
	var pattern=/\d/;
	if(x.length>4)
	{
		var res=pattern.test(x);
		if(res==false)
		{
			alert(" Not Error");
		}
		else
		{
			alert("Error");
		}
		
	}
}
var attrib="";
$(document).ready(function(){
	$("ul li:first").click(function(){
			$("#animating_label").hide(1000);
	});
	
	$("td").hover(function(){
			$("label").animate({
            width: '150px'});
	},function()
	{
		$("label").animate({
            width: '100px'});
	});
	
	$("input").focus(function(){
	
		attrib=$(this).attr("placeholder");
		$(this).css("background-color","#f7e1f1");
		$(this).attr("placeholder","Typing....!");
	});
	$("input").blur(function()
	{
		$(this).css("background-color","#ffffff");
		$(this).attr("placeholder",attrib);
		attrib="";
		
	});
	
});
