(function(a){a.extend({photoShow:function(e,h,f,i,j){var c=j.start_item||0;var l=j.cssClass||"cur";var k=j.showNum||5;var b=c;var g=f.length;var d={side:function(n){f.eq(b).removeClass(l);i.eq(b).css("display","none");if(n>(g-1)){b=0}else{if(n<0){var m=g-1;b=m}else{b=n}}f.eq(b).addClass(l);i.eq(b).css("display","")},showAndDisplayPhoto:function(n){var m=f.index(f.filter(":visible:last"));var p=f.index(f.filter(":visible:first"));if((b==m)&&(m<(g-1))&&(n==1)){f.eq(m+1).attr("style","display:list-item;");f.eq(p).attr("style","display:none")}else{if((m==(g-1))&&(n==1)){f.filter(":lt("+k+")").siblings().hide().end().show()}}if((b==p)&&(p>0)&&(n==2)){f.eq(m).attr("style","display:none");f.eq(p-1).attr("style","display:list-item;")}else{if((g>k)&&(p==0)&&(n==2)){var o=g-k-1;f.filter(":gt("+o+")").siblings().hide().end().show()}}}};f.eq(c).addClass(l);i.eq(c).css("display","");e.click(function(){d.showAndDisplayPhoto(2);d.side(b-1)});h.click(function(){d.showAndDisplayPhoto(1);d.side(b+1)});f.click(function(){var m=f.index(this);d.side(m)})}})})(jQuery);$(document).ready(function(){$.photoShow($("#prevBtn,#mainContent .ico_uppic"),$("#nextBtn,#mainContent .ico_nextpic"),$("#smallPicArr li"),$("#mainContent .app_pic"),{start_item:0})});