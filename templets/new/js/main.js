
function Share(link, content, pic) {
    var url = "";
    switch (link) {
        case "sina": //分享到新浪微博
            url = "http://v.t.sina.com.cn/share/share.php?title=" + encodeURIComponent(document.title.substring(0, 25) + "　　" + content.substring(0, 100)) + "&url=" + encodeURIComponent(location.href) + "&pic=" + pic;
            break;
        case "qq": //分享到腾讯微博
            url = "http://v.t.qq.com/share/share.php?title=" + encodeURIComponent(document.title.substring(0, 25) + "　　" + content.substring(0, 100)) + "&url=" + encodeURIComponent(location.href) + "&pic=" + pic;
            break;
        case "kaixin001":
            url = "http://www.kaixin001.com/repaste/share.php?rtitle=" + encodeURIComponent(document.title.substring(0, 25)) + "&rurl=" + encodeURIComponent(location.href) + "&rcontent=" + encodeURIComponent(content.substring(0, 100));
            break;
        case "renren":
            url = "http://share.renren.com/share/buttonshare.do?link=" + encodeURIComponent(location.href) + "&title=";
            break;
        case "qzone":
            url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(location.href) + "&title=" + content.substring(0, 100);
            break;
        case "doubian":
            url = "http://shuo.douban.com/!service/share?image=&href=" + encodeURIComponent(location.href) + "&name=" + content.substring(0, 100);
            break;

    }
    window.open(url, "_blank", "scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes");
}




function appScore(num) {
    switch (num) {
        case 1: $get("starnum").innerHTML = "很差";
            break;
        case 2: $get("starnum").innerHTML = "较差";
        break;
    case 3: $get("starnum").innerHTML = "一般";
         break;
     case 4: $get("starnum").innerHTML = "较好";
        break;
    case 5: $get("starnum").innerHTML = "推荐";
        break;
            
    }
    $get("div_appscore").style.width = num * 35 + "px";
}

function clickScore(num) {
    $get("start").innerHTML = num;
}

function selScore() {
    var num = parseInt($get("start").innerHTML);
    switch (num) {
        case 1: $get("starnum").innerHTML = "很差";
            break;
        case 2: $get("starnum").innerHTML = "较差";
            break;
        case 3: $get("starnum").innerHTML = "一般";
            break;
        case 4: $get("starnum").innerHTML = "较好";
            break;
        case 5: $get("starnum").innerHTML = "推荐";
            break;
    }
    $get("div_appscore").style.width = num * 35 + "px";
}

function starlength() {
    var stars = $(".star .star1");
    var nums = $(".star .starnum");
    for (var i = 0; i < stars.length; i++) {
        var k = parseInt(nums[i].innerHTML) <= 2 ? 0 : parseInt((parseInt(nums[i].innerHTML) - 2) / 4);
        var w = parseFloat(nums[i].innerHTML) / 5 * 68 + k;
        if(w>68)
        {
            w=68;
        }
        stars[i].style.width = w + "px";

    }
}

function SetNo(id, leftnum, topnum) {
    var divs = $("#" + id + " > div");
    var left = -370 + leftnum;
    var top = 5 + topnum;
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundPosition = left + "px " + top + "px";
        top -= 30;
    }
    if (divs.length > 0) {
        divs[divs.length - 1].style.borderBottomWidth = "0px"
    }
}


GetEvent = function () {
    //同时兼容ie和ff的写法
    if (navigator.userAgent.toLowerCase().indexOf("msie") > -1) return window.event;
    func = GetEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof (arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

function $get(id) {
    return document.getElementById(id);
}


function showcategory(id, obj,p) {
var clist = obj.parentNode.getElementsByTagName("div");
for (var i = 0; i < clist.length - 1; i++) {
clist[i].className = "tab2";
}
obj.className = "tab1";

var category = 'iPhone'
if (document.getElementById("category_" + id).innerHTML.replace(/\s+/g, "") == "" && obj.flag != "1") {
obj.flag = "1";
DataService.App360WebService.GetAppList(id,category, returnfun, ajaxOnFailedHandle, p);
}
}



