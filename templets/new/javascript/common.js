function readCookie(a){var b="";var c=a+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(c);if(offset!=-1){offset+=c.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}b=unescape(document.cookie.substring(offset,end))}}return b}function writeCookie(c,d,a){var b="";if(a!=null){b=new Date((new Date()).getTime()+a*3600000);b="; expires="+b.toGMTString()}document.cookie=c+"="+escape(d)+b+"; path=/; domain=.cnmo.com;"}$(function(){var a=readCookie("systemId");var e=readCookie("systemName");var c=readCookie("systemUrl");var g=readCookie("productName");var h=readCookie("spic");if(a!=""){var d='<div class="model_img"><a><img width="25" height="38" src="'+h+'"></a></div><p>'+g+"</p><p><span>ϵͳ��</span>"+e+'<em>[</em><a href="http://app.cnmo.com/setting/c=pro&p=1">���Ļ���</a>]</p>';$("#myModelView").html(d);var b=$("#currentPlatformId").val();if(0!=b&&(a!=b)){$("#setProTips div.tip").html('��ǰӦ�ò��ʺ����Ļ��ͣ�<a href="'+c+'">ȥ'+e+'Ӧ��</a><i class="act" id="knowSetPro">close</i>');$("#setProTips").show();$("#knowSetPro").click(function(){$("#setProTips").css({display:"none"})})}}else{var f=readCookie("knowSetPro");$("#setProTips div.tip").html('���û��ͣ����ɽ�������ϵͳӦ�ã�<i class="act" id="knowSetPro">close</i>');if(f=="yes"){$("#setProTips").hide();writeCookie("knowSetPro","yes","24")}else{$("#setProTips").show()}$("#knowSetPro").click(function(){$("#setProTips").css({display:"none"});writeCookie("knowSetPro","yes","24")})}});$(function(){var a=readCookie("systemId");var d=readCookie("systemName");var c=readCookie("systemUrl");var e=readCookie("productName");var b=$("#currentPlatformId").val();$(".download_cmputer").click(function(h){if((0!=b)&&(b!=a)&&(a!="")){$("body").append('<div class="overlay-mask"></div>');$("body").append('<div class="mod_popup" id="noSysTip"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box1 clearfix"><div class="popup_img"></div><p>��ǰӦ�ò��ʺ����Ļ���ȷ����Ҫ������</p><a href="'+c+'" class="sys_btn">ȥ'+d+'Ӧ��</a><a  class="download_btn">��Ȼ����</a></div></div></div>');$(".overlay-mask").show();$("#noSysTip").show();var i=($(window).width()-310)/2+"px";var f=(h.pageY-200)+"px";$("#noSysTip")[0].style.top=f;$("#noSysTip")[0].style.left=i;$("#noSysTip").children("div").find(".act").click(function(){$("#noSysTip").remove();$(".overlay-mask").remove()});$(".download_btn").click(function(){var j=$("#downloadInfo").attr("locationurl");if(1==b){window.open(j)}else{location.href=j}})}else{var g=$("#downloadInfo").attr("locationurl");if(1==b){window.open(g)}else{location.href=g}}});$(".download_phone").click(function(g){var i;i=$("#downloadInfo").attr("img2wUrl");if((0!=b)&&(b!=a)&&(a!="")){$("body").append('<div class="overlay-mask"></div>');$("body").append('<div class="mod_popup" id="noSysTip1"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box1 clearfix"><div class="popup_img"></div><p>��ǰӦ�ò��ʺ����Ļ���ȷ����Ҫ������</p><a href="'+c+'" class="sys_btn">ȥ'+d+'Ӧ��</a><a  class="download_btn">��Ȼ����</a></div></div></div>');$(".overlay-mask").show();$("#noSysTip1").show();var h=($(window).width()-310)/2+"px";var f=(g.pageY-200)+"px";$("#noSysTip1")[0].style.top=f;$("#noSysTip1")[0].style.left=h;$("#noSysTip1").children("div").find(".act").click(function(){$("#noSysTip1").remove();$(".overlay-mask").remove()});$(".download_btn").click(function(k){$("#noSysTip1").remove();if(1==b){$("body").append('<div id="noSysTip2" class="mod_popup"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box2"><dl><dt></dt><dd><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ʹ�ö�ά�����ص��ֻ�</p><img width="147" height="147" src="https://chart.googleapis.com/chart?cht=qr&chs=147x147&choe=UTF-8&chld=L|0&chl='+i+'">&nbsp;&nbsp;<a target="_blank" href="http://soft.cnmo.com/11/118288.html">����鿴���ʹ�ö�ά��</a></dd></dl></div></div></div>')}else{$("body").append('<div id="noSysTip2" class="mod_popup"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box2"><dl><dt>����һ��</dt><dd><a class="sys_btn" id="showji oro">�ֻ�����</a></dd></dl><dl><dt>��������</dt><dd><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ʹ�ö�ά�����ص��ֻ�</p><img width="147" height="147" src="https://chart.googleapis.com/chart?cht=qr&chs=147x147&choe=UTF-8&chld=L|0&chl='+i+'">&nbsp;&nbsp;<a target="_blank" href="http://soft.cnmo.com/11/118288.html">����鿴���ʹ�ö�ά��</a></dd></dl></div></div></div>')}$("#noSysTip2").show();var l=($(window).width()-310)/2+"px";var j=(k.pageY-200)+"px";$("#noSysTip2")[0].style.top=j;$("#noSysTip2")[0].style.left=l;$("#noSysTip2").children("div").find(".act").click(function(){$("#noSysTip2").remove();$(".overlay-mask").remove()});$("#showji").click(function(){var m=$("#downloadInfo").attr("appid");$.ajax({type:"POST",url:"http://app.cnmo.com/index.php?c=ajax&a=GetMobileUrl",data:"appId="+m,success:function(n){window.open(n)}})})})}else{if(1==b){$("body").append('<div class="overlay-mask"></div>');$("body").append('<div id="noSysTip1" class="mod_popup"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box2"><dl><dt></dt><dd><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ʹ�ö�ά�����ص��ֻ�</p><img width="147" height="147" src="https://chart.googleapis.com/chart?cht=qr&chs=147x147&choe=UTF-8&chld=L|0&chl='+i+'">&nbsp;&nbsp;<a target="_blank" href="http://soft.cnmo.com/11/118288.html">����鿴���ʹ�ö�ά��</a></dd></dl></div></div></div>');$(".overlay-mask").show();$("#noSysTip1").show();var h=($(window).width()-310)/2+"px";var f=(g.pageY-200)+"px";$("#noSysTip1")[0].style.top=f;$("#noSysTip1")[0].style.left=h;$("#noSysTip1").children("div").find(".act").click(function(){$("#noSysTip1").remove();$(".overlay-mask").remove()})}else{$("body").append('<div class="overlay-mask"></div>');$("body").append('<div id="noSysTip1" class="mod_popup"><div class="popup_layer"><div class="tit">��ʾ</div><i class="act">close</i><div class="popup_box2"><dl><dt>����һ��</dt><dd><a class="sys_btn oro">�ֻ�����</a></dd></dl><dl><dt>��������</dt><dd><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ʹ�ö�ά�����ص��ֻ�</p><img width="147" height="147" src="https://chart.googleapis.com/chart?cht=qr&chs=147x147&choe=UTF-8&chld=L|0&chl='+i+'">&nbsp;&nbsp;<a target="_blank" href="http://soft.cnmo.com/11/118288.html">����鿴���ʹ�ö�ά��</a></dd></dl></div></div></div>');$(".overlay-mask").show();$("#noSysTip1").show();var h=($(window).width()-310)/2+"px";var f=(g.pageY-200)+"px";$("#noSysTip1")[0].style.top=f;$("#noSysTip1")[0].style.left=h;$("#noSysTip1").children("div").find(".act").click(function(){$("#noSysTip1").remove();$(".overlay-mask").remove()});$(".sys_btn").click(function(){if(1==b){var j=$("#downloadInfo").attr("locationurl");window.open(j)}else{var k=$("#downloadInfo").attr("appid");$.ajax({type:"POST",url:"http://app.cnmo.com/index.php?c=ajax&a=GetMobileUrl",data:"appId="+k,success:function(l){window.open(l)}})}})}}})});$(function(){var e=new Array(),c="",a="",d="",b="";e[0]="";e[1]="����";e[2]="����ô��";e[3]="һ���";e[4]="����Ŷ";e[5]="̫����";$(".comments_area span.star_big").mousemove(function(f){c=f.pageX-$(this).offset().left;a=Math.ceil((c/84)*100);d=Math.ceil(c/84*5);a=Math.ceil(a/20)*20;c=a+"%";$(this).children("em").css("width",c);$("#evalText").html(e[d])}).mouseout(function(){$(this).children("em").css("width",(Math.ceil(($("#scoreNum").val())/5*100)+"%"));$("#evalText").html(e[$("#scoreNum").val()])}).click(function(){$("#scoreNum").val(d);$(this).children("em").css("width",c);$("#evalText").html(e[d]);$("#word").html("")})});$(function(){$("#submitForm").mouseover(function(){$(this).attr("class","btn_sub_hover")}).mouseout(function(){$(this).attr("class","btn_sub")}).click(function(){if(0==$("#scoreNum").val()){$("#word").html("<font color='red'>�����Ǵ����</font>");return false}if($("#content").val()==""){$("#word").html("<font color='red'>��û��������������</font>");return false}})});$(document).ready(function(){var a=document.URL;$.ajax({url:"http://comments.cnmo.com/userstatus.php",dataType:"jsonp",jsonp:"callback",success:function(e){var b=e.uid||"";var g=e.username||"";var c=e.registerurl||"";var f=e.loginurl||"";var j=e.logout||"";var d=e.homeurl||"";var h=e.pmurl||"";var i="";if(g==""||typeof(g)=="undefined"){}else{i+='<dl><dt>��ӭ����</dt><dd><a href="'+d+'" target="_blank">'+g+'</a><a href="'+h+'" target="_blank">����Ϣ</a><a href="'+d+'" target="_blank">���˿ռ�</a><a target="_self" href="'+j+"&backurl="+a+'">�˳�</a></dd></dl><dl style="padding:5px;"><dd><label class="label_1" for="check_1"><input id="check_1" class="cbox" type="checkbox" name="ni" value="1">��������</label></dd></dl>';$("#userLogin").html(i)}}})});$(function(){$(window).click(function(){if($("#search div").length){$("#search div:last").hide()}})});