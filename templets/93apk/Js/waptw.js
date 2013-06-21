/* waptw.com 20101203
 *
 *
*/
$(document).ready(function(){

//搜索框文字效果
var tipTxt = "请输入您想查找的软件名称"; //"请输入您想查找的软件名称";
$(".J-sech-txt").bind("focus",function(){
	$(this).val("").removeClass("grey1");
}).bind("blur",function(){
	if($(this).val().length == 0){
		$(this).val(tipTxt).addClass("grey1");	
	};
});
$(".J-sech-btn",this).bind("click",function(){
	var $str = $(this).siblings(".J-sech-txt").val()
	if($str == tipTxt){
		alert(tipTxt);
		return false;
	}else if($.trim($str).length == 0){
		alert(tipTxt);
		$(this).siblings(".J-sech-txt").addClass("grey1").val(tipTxt);
		return false;
	};	
});

//首页十大必备选项卡
$(".J-tab .tab").find("li").each(function(i){
	var $tabPanel = $(".panel").find("ul");
	$(this).hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$tabPanel.eq(i).css({
			display: "block"	
		}).siblings().css({
			display: "none"	
		});
	});	
});

//cookie
function cookieView(){
	var cookie_view = $.cookie("view");	
	var cookie_eid = $.cookie("edition");
	var poptips = function(){
		$.cookie("view","1",{path:'/',expries:1});
		$(".pop-tips").show();
	};
	if(cookie_view || cookie_eid){
		return false;
	}else{
		setTimeout(poptips,2000);
	};
};
if($(".J-cookie").length){
	cookieView();
};

$(".J-pop-close2").click(function(){
	$(this).parents(".pop-tips").hide();	
});

//收藏夹
function addBookmark(){	
	var title = document.title.toString();
	var url = "http://www.waptw.com" //document.location.toString();
	if(document.all){
		window.external.addFavorite(url, title);
	}else if(window.sidebar){
		window.sidebar.addPanel(title,url, "");
	};
};
$(".J-bookmark").click(function(){
	addBookmark();
});

$(".J-pop-txt",this).bind("click",function(){
	$(this).parents(".sel").siblings(".pop-txt").show();
	$(".J-pop-panel").find(".pop-txt").css({top:"145px"});
	return false;
}).bind("mouseout",function(){
	$(".pop-txt").fadeOut(500);	
})

/*
 * 弹出层效果
 */
var $popType

//调用弹出层
$(".J-overlayer,.J-poplayer").click(function(){
	$popType = "."+$(this).attr("rel");
	if($(this).hasClass("J-overlayer")){
		overLayer();
	};
	popLayer($popType);
	return false;
});

//弹出层
function popLayer($popType){
	var $scroll = $(window).scrollTop();
	var $popPanel = $($popType);
	var panelHeight = $popPanel.height();
	var panelWidth = $popPanel.width();
	var position = $(this).offset();
	
	var winHeight = $(window).height();
	var winWidth = $(window).width();	
	$popPanel.fadeIn("fast").css({
		top:winHeight/2-panelHeight/2+$scroll,
		left:winWidth/2-200
	});
	//阴影效果
	$(".shardow").remove();
	$("<div></div>").addClass("shardow").css({
		position: "absolute",
		display: "none",
		top: winHeight/2-panelHeight/2+$scroll+3,
		left: winWidth/2-200+3,
		width: panelWidth,
		height: panelHeight
	}).appendTo("body").fadeIn("fast");	
};

//关闭面板
$(".J-pop-close").click(function(){
	if($idiv){
		$idiv.remove();
	};
	$(".J-pop-bug").hide();
	$(".J-pop-panel").hide();
	$(".shardow").remove();
	if($.browser.msie){
		$("select").show();
	};
});
$(".J-pop-close").hover(function(){
	$(this).css({backgroundPosition:"-27px 0"});	
},function(){
	$(this).css({backgroundPosition:"0 0"});	
});

//遮罩效果
var $idiv = $("<div class='overlayer'></div>");
function overLayer(){
	var $fullHeight = $("#wrapper").height();
	if($.browser.msie && $.browser.version == "6.0"){
		$("select").filter(function(){
			return $(this).parents($popType).length == 0;
		}).hide();
	};
	$idiv.css({
		position:"absolute",
		top:"0",
		left:"0",
		width:"100%",
		height:$fullHeight,
		backgroundColor:"#000",
		zIndex:"100",
		opacity:"0.3"		
	});
	$idiv.appendTo("body");
	return false;
};

//刷新vcode
$(".J-vcode").click(function(){
	var date = new Date(),
		imgSrc = "http://www.waptw.com/util/verificode/"+date.getTime();
	$(".auth-img").find("img").attr("src",imgSrc);
	return false;
});

//机型列表显示
$(".J-toggleMore").each(function(){
	var $dl =$(this).find("dl");
	var $dd =$(this).find("dd");
	//限制dl个数
	var limitNum = 9;
	if( $dl.length > limitNum){
		var $moreList = $(this).find("dl:gt("+limitNum+")");
		$moreList.hide();
		$("<div></div>").addClass("show-all").text("点击显示详细机型列表").appendTo(this);
		$(".show-all").live("click",function(){
			if($($moreList).is(":hidden")){
				$moreList.show();
				$(".show-all").text("点击隐藏详细机型列表").css({backgroundPosition:"5px -228px"});
			}else{
				$moreList.hide();
				$(".show-all").text("点击显示详细机型列表").css({backgroundPosition:"5px -188px"});	
			};	
		});
	};
	//限制dd个数
	var $moredd = $dd.filter(function(){
		return $(this).height()>54
	});
	$moredd.height(54).css({overflow: "hidden"}).append("<div class='s-more'>...[查看更多]</div>");
});

//机型列表显示开关
$(".s-more",this).click(function(){
	if($(this).parents("dd").height() == 54){
		$(this).parents("dd").height("auto");
		$(this).addClass("k");
		$(this).text("[隐藏更多]");
	}else{
		$(this).parents("dd").height("54");
		$(this).removeClass("k");
		$(this).text("...[查看更多]");	
	};
});

});//jquery end