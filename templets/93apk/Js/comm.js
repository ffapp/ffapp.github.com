
function EncodeUtf8(s1)   
 {   
	 var s = escape(s1);   
	 var sa = s.split("%");   
	 var retV ="";   
	 if(sa[0] != "")   
	 {   
		retV = sa[0];   
	 }   
	 for(var i = 1; i < sa.length; i ++)   
	 {   
		  if(sa[i].substring(0,1) == "u")   
		  {   
			  retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));   
				 
		  }   
		  else retV += "%" + sa[i];   
	 }   
		
	 return retV;   
 }  
 function Str2Hex(s)   
 {   
     var c = "";   
     var n;   
     var ss = "0123456789ABCDEF";   
     var digS = "";   
     for(var i = 0; i < s.length; i ++)   
     {   
        c = s.charAt(i);   
        n = ss.indexOf(c);   
        digS += Dec2Dig(eval(n));   
             
     }   
     //return value;   
     return digS;   
 }   
 function Dec2Dig(n1)   
 {   
     var s = "";   
     var n2 = 0;   
     for(var i = 0; i < 4; i++)   
     {   
        n2 = Math.pow(2,3 - i);   
        if(n1 >= n2)   
        {   
           s += '1';   
           n1 = n1 - n2;   
         }   
        else  
         s += '0';   
            
     }   
     return s;   
        
 }   
 function Dig2Dec(s)   
 {   
     var retV = 0;   
     if(s.length == 4)   
     {   
         for(var i = 0; i < 4; i ++)   
         {   
             retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);   
         }   
         return retV;   
     }   
     return -1;   
 }    
 function Hex2Utf8(s)   
 {   
    var retS = "";   
    var tempS = "";   
    var ss = "";   
    if(s.length == 16)   
    {   
        tempS = "1110" + s.substring(0, 4);   
        tempS += "10" +  s.substring(4, 10);    
        tempS += "10" + s.substring(10,16);    
        var sss = "0123456789ABCDEF";   
        for(var i = 0; i < 3; i ++)   
        {   
           retS += "%";   
           ss = tempS.substring(i * 8, (eval(i)+1)*8);   
              
              
              
           retS += sss.charAt(Dig2Dec(ss.substring(0,4)));   
           retS += sss.charAt(Dig2Dec(ss.substring(4,8)));   
        }   
        return retS;   
    }   
    return "";   
 }  

  function go(n,obj,href)
{
	var vStr=document.getElementById(obj).value;
	if(vStr=="")
		alert('页码不能为空！');	
	else
	{
		if (isNaN(vStr))
			alert('您输入的不是数字！');
		else
			if( parseInt(vStr)<1 || (vStr) >n )
				alert('您输入的数字超出范围了！');
			else
			{
				var page=parseInt(vStr);
				
				if(page==1)
				{
					window.location.href="/index.shtml";
				}
				else
				{				 
					href=href+"_"+page+".shtml";
					window.location.href="/"+href;
				}
			}
	}
}

function singseek(type, key)
{
    var seek_url = "http://sou.5sing.com/sbz.aspx?key=";
    switch (type) {
        case "0": //伴奏
            seek_url = "http://sou.5sing.com/sbz.aspx?key=";
            break;
        case "1": //原创
            seek_url = "http://sou.5sing.com/syc.aspx?key=";
            break;
        case "2": //翻唱
            seek_url = "http://sou.5sing.com/sfc.aspx?key=";
            break;
        case "3": //会员
            seek_url = "http://sou.5sing.com/smember.aspx?key=";
            break;
    }
	var Glo_url = seek_url;
	Glo_url = Glo_url + key;  //EncodeUtf8(document.getElementById("txtKey").value);
//document.getElementById("herfseek").href=Glo_url;
window.open(Glo_url);
}

function ycSearch() {
    var key = EncodeUtf8($("#txt_key").val());
    var url = "http://sou.5sing.com/syc.aspx?key=";
    url = url + key;
    $("#ycForm").attr("action", url);
    return true;
}
function fcSearch() {
    var key = EncodeUtf8($("#txt_key").val());
    var url = "http://sou.5sing.com/sfc.aspx?key=";
    url = url + key;
    $("#fcForm").attr("action", url);
    return true;
}
function bzSearch() {
    var key = EncodeUtf8($("#txt_key").val());
    var url = "http://sou.5sing.com/sbz.aspx?key=";
    url = url + key;
    $("#bzForm").attr("action", url);
    return true;
}

$(document).ready(function() {
    $("#bt_Search").click(function() {
    bzSearch();
    });
});