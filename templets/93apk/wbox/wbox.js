(function($){$.fn.wBox=function(options){var defaults={opacity:0.5,drag:false,title:'wBox弹出框',noTitle:false,html:'',callBack:null,isImage:false,images:[],left:300,top:400,iframeWH:{width:400,height:300},setPos:false,overlay:true,isFrame:false,imageTypes:['png','jpg','jpeg','gif']};var YQ=$.extend(defaults,options);init();var wBoxHtml='\
        <div id="wBox" style="display:none;"> \
          <div class="popup"> \
            <table> \
              <tbody> \
                <tr class="imgRemove"> \
                  <td class="tl"/><td class="b"/><td class="tr"/> \
                </tr> \
                <tr> \
                  <td class="b imgRemove"/> \
                  <td class="body">'+(YQ.noTitle?'':'<table class="title imgRemove"><tr><td class="dragTitle"><div class="itemTitle">'+YQ.title+'</div></td>\
                                  <td width="20px" title="关闭窗口"><div class="close"></div></td></tr></table> ')+'</div> \
                    <div class="content"> \<div class=\'wBox_loading\'><img src=\'/wbox/loading.gif\'/></div>\
                    </div> \
                  </td> \
                  <td class="b imgRemove"/> \
                </tr> \
                <tr class="imgRemove"> \
                  <td class="bl"/><td class="b"/><td class="br"/> \
                </tr> \
              </tbody> \
            </table> \
          </div> \
        </div>';var Loading=$("<div class='wBox_loading'><img src='/wbox/loading.gif'/></div>");var imgObj=[];var imgNum=0;var B=null;var C=null;var E=null;$(this).click(function(){B?B.remove():null;C?C.remove():null;YQ.overlay?B=$("<div id='wBox_overlay' class='wBox_hide'></div>").hide().addClass('wBox_overlayBG').css('opacity',YQ.isImage?0.8:YQ.opacity).dblclick(function(){close();}).appendTo('body').fadeIn(300):null;C=$(wBoxHtml).appendTo('body');handleClick(this.href);return false;});function handleClick(what){var con=C.find(".content");if(YQ.isImage){C.find('.imgRemove').remove();C.find('.content').css({'padding':'10px','background-color':'#FFFFFF'});Loading.appendTo(con);var lt=calPosition(370);C.css({left:lt[0],top:lt[1]});imgHandle()}
else
if(YQ.isFrame){ifr=$("<iframe name='wBoxIframe' style='width:"+YQ.iframeWH.width+"px;height:"+YQ.iframeWH.height+"px;' scrolling='no' frameborder='0' src='"+what+"'></iframe>");ifr.appendTo(con);ifr.load(function(){try{$(".wBox_loading").remove();$t=$(this).contents();$t.find('.wBoxClose').click(close);fH=$t.height();fW=$t.width();w=$(window);newW=Math.min(w.width()-40,fW);newH=w.height()-25-(YQ.noTitle?0:30);newH=Math.min(newH,fH);if(!newH)
return;var lt=calPosition(newW);C.animate({left:lt[0],top:lt[1]},1000);$(this).animate({height:newH,width:newW},1000);}
catch(e){}});}
else
if(what!==window.location.href&&what){if(what.match(/#/)){var url=window.location.href.split('#')[0]
var target=what.replace(url,'');con.append($(target).clone(true).show());}
else
if(what.match(Exp)){var image=new Image();Loading.appendTo(con);image.onload=function(){w=image.width<100?100:image.width;h=image.height<100?100:image.height+24;var lt=calPosition(w);imgC=$('<div class="image"><img src="'+image.src+'" /></div>');C.css({left:lt[0],top:lt[1]})
Loading.remove();con.html(imgC.hide().fadeIn());}
image.src=what;}
else{Loading.appendTo(con);con.load(what,function(){Loading.remove();$(this).find('.wBoxClose').click(close);});}}
else{con.html(YQ.html);}
afterHandleClick();}
function imgHandle(){for(var i=YQ.images.length;i--;){imgObj[i]=new Image();i?null:imgObj[0].onload=function(){Loading.fadeOut(300,imgAjax);}
imgObj[i].src=YQ.images[i];}}
function imgAjax(){var tImg=imgObj[imgNum],con=C.find(".content").html(Loading.show());w=tImg.width<100?100:tImg.width;h=tImg.height<100?100:tImg.height+24;var lt=calPosition(w);var speed=w*2<900?900:w*2;var imgC=$("<div id='IMG'><img src='"+tImg.src+"' id='imgURL'/><div class='imgBTN'><a href='' id='imgPrev' title='点击查看上一张图片'></a><a id='imgNext' href='' title='点击查看下一张图片'></a></div></div>");imgC.find("#imgPrev").click(function(){imgPrev();return false;}).next().click(function(){imgNext();return false;});C.animate({left:lt[0],top:lt[1]},speed).find(".body").animate({height:h,width:w},speed,function(){con.html(imgC.hide().fadeIn());Loading.stop().hide();})}
function imgNext(){++imgNum===YQ.images.length?imgNum=0:null;imgAjax()}
function imgPrev(){--imgNum<0?imgNum=YQ.images.length-1:null;imgAjax()}
function init(){var imageTypes=YQ.imageTypes.join('|')
Exp=new RegExp('\.'+imageTypes+'$','i');var iA=['/wbox/titleBG.png','/wbox/wbox.png','/wbox/close.png','/wbox/loading.gif','/wbox/btn-prev.gif','/wbox/btn-next.gif'];var v=[];for(var i=iA.length;i--;){v[i]=new Image();v[i].src=iA[i];}}
function afterHandleClick(){setPosition();C.find('.close').click(function(){close()}).hover(function(){$(this).addClass("on");},function(){$(this).removeClass("on");});$(document).unbind('keydown.wBox').bind('keydown.wBox',function(e){if(e.keyCode===27)
close();return true});YQ.drag?drag():null;typeof YQ.callBack==='function'?YQ.callBack():null;}
function setPosition(){var lt=calPosition($("#wBox").width());$("#wBox").css({left:lt[0],top:lt[1]}).show();var $w=___getPageSize();B?B.height($w[1]).width($w[0]):null;}
function ___getPageSize(){var xScroll,yScroll;if(window.innerHeight&&window.scrollMaxY){xScroll=window.innerWidth+window.scrollMaxX;yScroll=window.innerHeight+window.scrollMaxY;}
else
if(document.body.scrollHeight>document.body.offsetHeight){xScroll=document.body.scrollWidth;yScroll=document.body.scrollHeight;}
else{xScroll=document.body.offsetWidth;yScroll=document.body.offsetHeight;}
var windowWidth,windowHeight;if(self.innerHeight){if(document.documentElement.clientWidth){windowWidth=document.documentElement.clientWidth;}
else{windowWidth=self.innerWidth;}
windowHeight=self.innerHeight;}
else
if(document.documentElement&&document.documentElement.clientHeight){windowWidth=document.documentElement.clientWidth;windowHeight=document.documentElement.clientHeight;}
else
if(document.body){windowWidth=document.body.clientWidth;windowHeight=document.body.clientHeight;}
if(yScroll<windowHeight){pageHeight=windowHeight;}
else{pageHeight=yScroll;}
if(xScroll<windowWidth){pageWidth=xScroll;}
else{pageWidth=windowWidth;}
pageWidth=Math.max(pageWidth,windowWidth);pageHeight=Math.max(pageHeight,windowHeight);arrayPageSize=new Array(pageWidth,pageHeight);return arrayPageSize;};function calPosition(w){var $win=$(window);if(YQ.setPos){l=YQ.left;t=YQ.top;}
else{l=($win.width()-w)/2;t=$win.scrollTop()+$win.height()/10;}
return[l,t];}
function drag(){var dx,dy,moveout;var T=C.find('.dragTitle').css('cursor','move');T.bind("selectstart",function(){return false;});T.mousedown(function(e){dx=e.clientX-parseInt(C.css("left"));dy=e.clientY-parseInt(C.css("top"));C.mousemove(move).mouseout(out).css('opacity',0.8);T.mouseup(up);});function move(e){moveout=false;win=$(window);if(e.clientX-dx<0){l=0;}
else
if(e.clientX-dx>win.width()-C.width()){l=win.width()-C.width();}
else{l=e.clientX-dx}
C.css({left:l,top:e.clientY-dy});}
function out(e){moveout=true;setTimeout(function(){moveout&&up(e);},10);}
function up(e){C.unbind("mousemove",move).unbind("mouseout",out).css('opacity',1);T.unbind("mouseup",up);}}
function close(){if(C){B?B.remove():null;C.find('.body').stop();C.remove();}}
$('.wBoxClose').click(close);$(window).resize(function(){setPosition();});};})(jQuery);