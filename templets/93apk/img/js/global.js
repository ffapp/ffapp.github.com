/*
Project Name:机锋市场
Developed By:poyue
Date Created:2010 11 30
Last Updated:2011 01 11 17:31
Copyright:mAPPn
*/
var doc=document;
var ie=document.all;
var Sys = {};var ua = navigator.userAgent.toLowerCase();var s;(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	//if (Sys.ie) if (Sys.firefox) if (Sys.chrome) if (Sys.opera) if (Sys.safari)
var $id = function(id){return "string" == typeof id ? doc.getElementById(id) : id};
var forEach=function(array,callback,thisObject){if(array.forEach){array.forEach(callback,thisObject);}else{for(var i=0,len=array.length;i<len;i++){callback.call(thisObject,array[i],i,array);}}}
var $tag= function(tag,id){if(id){return id.getElementsByTagName(tag)}else{return doc.getElementsByTagName(tag)}};
var setCss=function(el,css){if(ie){el.style.cssText=css}else{el.setAttribute("style",css)}};
var hide=function(el){el.style.display="none"};
var show=function(el){el.style.display=""};
var moveTo=function(o,b,e){var b,e,d=30,t=0;c=e-b;function start(){o.style.left=Math.ceil(Tween.Quart.easeOut(t,b,c,d))+"px";if(t<d){t++; moveStart=setTimeout(start,10);}}start();}//End move
var moveTo2=function(o2,b2,e2){var b2,e2,d2=30,t2=0;c2=e2-b2;function start2(){o2.style.top=Math.ceil(Tween.Quart.easeOut(t2,b2,c2,d2))+"px";if(t2<d2){t2++; moveStart2=setTimeout(start2,20);}}start2();}//End move
var bindEvent=function(elem,type,fn){if(elem.attachEvent){var typeRef="_"+type;if(!elem[typeRef]){elem[typeRef]=[];}for(var i in		elem[typeRef]){if(elem[typeRef][i]==fn){return;}}elem[typeRef].push(fn);elem["on"+type]=function(){for(var i in this[typeRef]){this[typeRef][i].apply(this,arguments);}}}else{elem.addEventListener(type,fn,false);}};
var removeEvent=function (elem,type,fn){if(elem.detachEvent){if(elem["_"+type]){for(var i in elem["_"+type]){if(elem["_"+type][i]==fn){elem["_"+type].splice(i,1);break;}}}}else{elem.removeEventListener(type,fn,false);}};
$ready=(function(){var load_events=[],load_timer,script,done,exec,old_onload,init=function(){done=true;clearInterval(load_timer);while(exec=load_events.shift())exec();if(script)script.onreadystatechange='';};return function(func){if(done)return func();if(!load_events[0]){if(document.addEventListener)document.addEventListener("DOMContentLoaded",init,false);if(/WebKit/i.test(navigator.userAgent)){load_timer=setInterval(function(){if(/loaded|complete/.test(document.readyState))init();},10);}old_onload=window.onload;window.onload=function(){init();if(old_onload)old_onload();};}load_events.push(func);}})();
var stopDefault=function (e) {if ( e && e.preventDefault )e.preventDefault();else{window.event.returnValue = false}return false;} ;
var Tween={Quart: {easeOut: function(t,b,c,d){return -c * ((t=t/d-1)*t*t*t - 1) + b;}},Back: {easeOut: function(t,b,c,d,s){if (s == undefined) s = 1.70158;return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;}},Bounce: {easeOut: function(t,b,c,d){if ((t/=d) < (1/2.75)) {return c*(7.5625*t*t) + b;} else if (t < (2/2.75)) {return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;} else if (t < (2.5/2.75)) {return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;} else {return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;}}}};
var triggerC=function(el){if(document.all) {el.click();}else{var evt = doc.createEvent("MouseEvents"); evt.initEvent("click",true,true);el.dispatchEvent(evt);};};
var sidetoggle=function(el,n){var elP=el.parentNode;var elPP=elP.parentNode;$tag("a",elP)[0].className="hi";$tag("a",elP)[1].className="hi";hide($tag("ul",elPP)[0]);hide($tag("ul",elPP)[1]);show($tag("ul",elPP)[n]);el.className="current";};

var toggle1229=function(o,t){
	if(o.style.display=="none"){
		setCss(o,"display:bolck;overflow:hidden;zoom:1")
		t.style.background="url(css/images/t_bg_1229.png) no-repeat -9px 0px";
		
	}
	else{o.style.display="none";t.style.background="url(css/images/t_bg_1229.png) no-repeat 0px 0px";}

}
var k_list=function(){
	var o=$id("k_list_outer_inner");
	var list=$tag("ul",o)
	var nur=list.length;
	var c=-669;
	var h="";
	var key=1;
	var next=$id("list_1_right");
	var pre=$id("list_1_left");
	var nurbox=$id("nur_list_1");
	for(var i=nur;i--;){h+='<a href="###"></a>'};
	nurbox.innerHTML=h;
	nurbox.style.width=nur*14+"px"
	var nura=$tag("a",nurbox);
	var nuraL=nura.length;
	nura[0].className="current";
	next.onclick=function(){
		
		if(nur>1&key<nur){
			key++;
			var end=(key-1)*c;
			moveTo(o,o.offsetLeft,end)
			if(key>1&key<nur){
				setCss(next,"background:url(css/images/holder_2.png) no-repeat -20px -30px;) no-repeat");
				setCss(pre,"background:url(css/images/holder_2.png) no-repeat 8px -30px;) no-repeat");
			}
			if(key==nur){setCss(next,"");setCss(pre,"background:url(css/images/holder_2.png) no-repeat 8px -30px;) no-repeat");}

			
			for(var k=nuraL;k--;){nura[k].className=""}
			nura[key-1].className="current"
		}
	}
	pre.onclick=function(){
		if(nur>1&key>1){
			key--;
			var end=(key-1)*c;
			moveTo(o,o.offsetLeft,end);
			if(key==1){setCss(pre,"");}
			for(var k=nuraL;k--;){nura[k].className=""}
			nura[key-1].className="current"
		}
	}
	
	
};


var album=function(){

	var key3=0;
	var toMoveLength=669;
	var toMove=$id("tomove");
	var toMoveNur=toMove.getElementsByTagName("li").length;
	var nurListOuter=$id("nur");
	var nurList=nurListOuter.getElementsByTagName("a");
	var nurListLength=nurList.length;

	function turnTo(index){
		var end=-1*index*toMoveLength;
		var currentLeft=toMove.offsetLeft;
		moveTo(toMove,currentLeft,end);
		forEach(nurList,function(o,i){
			o.className="hi"
			}
		)
		nurList[index].className="on";
		key3=index;
	}

	function once(){
		for(i=0;i<nurListLength;i++){
			nurList[i].setAttribute("index",i);
			nurList[i].onmouseover=function(){
				if(TimeMachineTimer){window.clearTimeout(TimeMachineTimer)};
				window.clearTimeout(TimeMachineTimer2);
				window.clearTimeout(moveStart);
				turnTo(this.getAttribute("index"));
			
			}
			nurList[i].onmouseout=function(){
				if(TimeMachineTimer){window.clearTimeout(TimeMachineTimer)};//每隔两秒跳到下一个图片
				window.clearTimeout(TimeMachineTimer2);
				TimeMachine(2000);
			}
		}
	}
	var TimeMachine=function(t){
		
		function TimeMachineStart(){
			if(key3<toMoveNur-1){
				key3++;	
			}
			else{key3=0;}
			turnTo(key3);
			TimeMachineTimer = setTimeout(TimeMachineStart,t);
		}
		TimeMachineTimer2=setTimeout(TimeMachineStart,t)
		
	}

	TimeMachine(4000);
	setTimeout(once,4000)

};


var sawShow=function(){
	var o=$id("sawshow_2");
	var toScroll=$tag("dd",o);
	var nur=toScroll.length;
	var key=0;
	var h=241;
	if(nur>1){
			var html=toScroll[0].innerHTML;
			html="<dd>"+html+"</dd>";
			o.innerHTML+=html;
			function run(){
					if(key<nur){
						key++;
						var e=-h*key;
						var b=-h*(key-1);
						moveTo2(o,b,e);
						
					}
					else{
						key=0;
						o.style.top="0";
					}
					setTimeout(run,4000);
				}
				setTimeout(run,4000)
			
	}
};



function tabit(n){

	var tab=$tag("li",$id(n));
	var tabL=tab.length;
	forEach(tab, function(o, i){
			o.onclick=function(){
				
					for(k=tabL;k--;){
						tab[k].className="hi";
						hide($id(n+"_"+k));
					}
				o.className="current";
				show($id(n+"_"+i))
				
			}
		}
	)

 }

 var rating = function(sN, sNBox) {

     var add_score = $id(sN).getElementsByTagName("li");
     var key = 0;
     var score;
     var sl = add_score.length;
     for (i = 0; i < sl; i++) {
         add_score[i].index = i;
         add_score[i].onmouseover = function() {
             for (j = 0; j < sl; j++) {
                 add_score[j].className = "";
             }

             for (k = 0; k < this.index + 1; k++) {
                 add_score[k].className = "o1";
             }


         };
         add_score[i].onmouseout = function() {
             if (key == 0) {
                 for (k = 0; k < this.index + 1; k++) {
                     add_score[k].className = "";
                 }
             }
             else {

                 for (j = 0; j < sl; j++) {
                     add_score[j].className = "";
                 }

                 for (k = 0; k < score; k++) {
                     add_score[k].className = "o";
                 }
             }

         };
         add_score[i].onclick = function() {

             key = 1;
             for (k = 0; k < this.index + 1; k++) {
                 add_score[k].className = "o";
                 if ($id(sNBox)) { $id(sNBox).value = this.index + 1; }
                 score = this.index + 1;
             }
             document.getElementById("hidScore").value = score;

         };


     }

 }




$ready(function(){
	if($id("sawshow_2")){sawShow()}
})
$ready(function(){
	if($id("tomove")){album()}
})


$ready(function(){
	if($id("k_list_outer_inner")){k_list()}

})
$ready(function(){if($id("tab_1229")){tabit("tab_1229")}})

$ready(function(){if($id("rate1117")){rating("rate1117","ProductDetail1_add_score_holder")}})


/*软件截图 开始*/
var SawShow = function(container, distance) {
    var index = 0;
	var container=$id(container);
    var nur = $id(container).getElementsByTagName("img").length/3;
	nur=Math.ceil(nur);

    $id("shot0106_left").onclick = function() { if (index > 0) { index--; runL(); } };
    $id("shot0106_right").onclick = function() { if (index < nur-1) { index++; runR(); } };

    function runL() {
        var outSet = $id(container).offsetLeft;
        e = -index * distance;
        moveTo(container, outSet, e);
    };
    function runR() {
        e = -index * distance;
        var outSet = $id(container).offsetLeft;
		//alert(e)
        moveTo(container, outSet, e);
    };

} /*软件截图 结束*/

$ready(function(){
	if($id("shot0106")){SawShow("shot0106",590);}
	
})


var LightBox_p=function(box,bg,s){
	this.box=box;
	this.bg=bg;
	this.s=s;
	this.w=this.box.offsetWidth;
	this.h=this.box.offsetHeight;
	this.left=(document.documentElement.clientWidth-this.w)/2;
	if (Sys.ie||Sys.firefox||Sys.opera){this.top=(document.documentElement.clientHeight-this.h)/2+document.documentElement.scrollTop;}else{this.top=(document.documentElement.clientHeight-this.h)/2+document.body.scrollTop;}
}

LightBox_p.prototype={
	open:function(){
			var that=this;
			var bg=that.bg;
			var s=that.s;
			var box=that.box;
			var close=that.close;
			
		function run(){
			show(box);
			var w=box.offsetWidth;
			var h=box.offsetHeight;
			var cas=h-document.documentElement.clientHeight;
			var left=(document.documentElement.scrollWidth-w)/2;
			if(cas<0){
				if (Sys.ie||Sys.firefox||Sys.opera){
					var top=(document.documentElement.clientHeight-h)/2+document.documentElement.scrollTop;
					setCss(box,"left:"+left+"px;top:"+top+"px");
				}
				else{
					var top=(document.documentElement.clientHeight-h)/2+document.body.scrollTop;
					setCss(box,"left:"+left+"px;top:"+top+"px");
				}
			}
			else{
				setCss(box,"left:"+(document.documentElement.scrollWidth-w)/2+"px;top:"+document.documentElement.scrollTop+"px");
				if (Sys.ie||Sys.firefox||Sys.opera){
					setCss(box,"left:"+left+"px;top:"+document.documentElement.scrollTop+"px");
				}
				else{
					setCss(box,"left:"+left+"px;top:"+document.body.scrollTop+"px");
				}
			}
			setCss(bg,"width:"+document.documentElement.scrollWidth+"px;height:"+document.documentElement.scrollHeight+"px");
			show(bg);
		}
		run();
		bindEvent(window,"resize",run);//当页面resize时冲刷 记得在close时删除绑定
		bindEvent(s,"click",function(e){stopDefault(e),close(box,bg);removeEvent(window,"resize",run)});
	},
	close:function(e1,e2){
		hide(e1);
		hide(e2);
	}
}




