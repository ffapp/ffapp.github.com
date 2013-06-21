var IsLogin = getCookie("5sing_auth");
var Client = "";
var n = 0;
var m = 0;

function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；
    if (str_length < len) {
        return str;
    }
}

//设置复选框
function setCboxValue(ostr, isC, ostr2) {
    var obj = document.getElementsByName(ostr);
    var obj2 = document.getElementsByName(ostr2);
    for (var i = 0; i < obj2.length; i++) {
        if (isC == 1)
            obj2[i].checked = true;
        else
            obj2[i].checked = false;
    }
    for (var i = 0; i < obj.length; i++) {
        if (isC == 1)
            obj[i].checked = true;
        else
            obj[i].checked = false;
    }

}
function setCboxValue2(ostr, ostr2, n) {
    var obj2 = document.getElementsByName(ostr2);
    var obj = document.getElementsByName(ostr);
    if (n == 1) {
        if (obj2[0].checked == true)
        { obj2[1].checked = true; }
        else {
            obj2[1].checked = false;
        }
    }
    else {
        if (obj2[1].checked == true) {
            obj2[0].checked = true;
        }
        else {
            obj2[0].checked = false;
        }
    }
    for (var i = 0; i < obj.length; i++) {
        if (obj2[0].checked == true)
            obj[i].checked = true;
        else
            obj[i].checked = false;
    }

}

function getCboxValue(ostr) {
    var vstr = '';
    var obj = document.getElementsByName(ostr);
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked == true) {
            if (obj[i].value != '') {
                if (vstr == '')
                    vstr = obj[i].value;
                else
                    vstr = vstr + '$' + obj[i].value;
            }
        }
    }
    return vstr;
}
function getCboxValueOne(ostr) {
    var vstr = '';
    var obj = document.getElementsByName(ostr);
    var n = obj.length;
    if (n > 1) n = 1;
    for (var i = 0; i < n; i++) {
        if (obj[i].checked == true) {
            if (obj[i].value != '') {
                if (vstr == '')
                    vstr = obj[i].value;
                else
                    vstr = vstr + '$' + obj[i].value;
            }
        }
    }
    return vstr;
}

function LianBo(obj, input) {
    var vStr = getCboxValue(input);
    if (vStr == "")
        alert("您没有选择播放歌曲!");
    else {
        document.getElementById(obj).href = 'http://mb.5sing.com?id=' + vStr;
        document.getElementById(obj).target = '_blank';
    }
}


function go(n, obj, href) {
    var vStr = document.getElementById(obj).value;
    if (vStr == "")
        alert('页码不能为空！');
    else {
        if (isNaN(vStr))
            alert('您输入的不是数字！');
        else
            if (parseInt(vStr) < 1 || (vStr) > n)
            alert('您输入的数字超出范围了！');
        else {
            var page = parseInt(vStr);

            href = href + "_" + page + ".shtml";
            window.location.href = href;
        }
    }
}

function Dron_ScrollBox(uid) {
    var Glo_Nun = 0;
    this.scrollBox = document.getElementById(uid);
    this.scrollBoxHeight = this.scrollBox.clientHeight;
    this.scrollBoxInner = this.scrollBox.innerHTML;
    this.scrollCol = this.scrolln = 0;
    this.setScroll = function() {
        this.scrollBox.scrollTop = this.scrollCol + this.scrolln;
        if (this.scrolln == this.scrollBoxHeight)
            return this.addScroll()
        else
            this.scrolln++;
        var o = this;
        function m() { o.setScroll(); }
        setTimeout(m, 20);
    }
    this.addScroll = function() {
        Glo_Nun++;
        if (Glo_Nun == 5) {
            this.scrollBox.innerHTML = this.scrollBoxInner;
            Glo_Nun = 0;
        }
        this.scrollBox.innerHTML += "<br />" + this.scrollBoxInner;
        this.scrollCol = this.scrollBox.scrollTop;
        this.scrolln = 0;
        var o = this;
        function m() { o.setScroll(); }
        setTimeout(m, 4000);
    }
    this.init = this.addScroll;
}
function lie() {

    $(function() {
        var $firstNode = $('#scrollBoxo>a');
        $firstNode.eq(n).removeAttr("display");
        $firstNode.eq(n).fadeOut('slow', function() {

            var index = (n + 1);
            if (index == $("#scrollBoxo>a").length) index = 0;
            $firstNode.eq(index).fadeIn("slow");

            m++;
            if (m >= $("#scrollBoxo>a").length) {
                n = 0;
                m = 0
            }
            else {
                n++;
            }
        });
    });
}
setInterval('lie()', 3000);

function copyToClipboard(txt, msg) {
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", txt);
        alert(msg);
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        window.location = txt;
    } else if (window.netscape) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

        } catch (e) {
            alert("如果您正在使用FireFox！\n请在浏览器地址栏输入'about:config'并回车\n然后将'signed.applets.codebase_principal_support'设置为'true'");
        }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip)
            return;
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans)
            return;
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip)
            return false;
        clip.setData(trans, null, clipid.kGlobalClipboard);
        alert(msg)
    }
}

function Submit(url, command, parameter, funCallBack, responseDataType) {
    $.ajax({ async: true, type: "POST", url: url + "?Command=" + command, dataType: responseDataType, data: parameter, success: function(responseObj) {
        funCallBack(responseObj);
    }, error: function() { alert("出现错误"); }
    });
}

function GetJSON(url, paramete, funCallBack) {
    $.getJSON(url + "?jsoncallback=?", paramete,
    function(data) {
        funCallBack(data);
    });
}

function UserStatusCallBack(obj) {
    if (obj.status) {
        //用户信息
        Client = obj.user.client;
        var htm = '';
        if (!obj.user.login) {
            htm += '<li><a href="http://www.5sing.com/login.aspx?url=' + window.location.href + '" title="登录">[请登录]</a>&nbsp;&nbsp;</li>';
            htm += '<li><a href="http://www.5sing.com/reg" target="_blank" title="免费注册">[免费注册]</a>&nbsp;&nbsp;</li>';
            htm += '<li class="qq_login"><a title="使用QQ账号登录" target="_blank" href="http://www.5sing.com/login.aspx?do=user_qzone_login">QQ登录</a></li> ';
            htm += '<li class="weibo_login"><a title="使用微博登录" target="_blank" href="http://www.5sing.com/login.aspx?do=user_sina_login">微博登录</a></li> ';

        } else {
            htm += '<li><a href="http://' + obj.user.userid + '.5sing.com" target="_blank" title="' + obj.user.nickname + '">' + obj.user.nickname + '</a> | </li>';
            if (obj.user.totalmessage > 0) {
                htm += '<li class="m_new"><a href="http://member.5sing.com/Message/Note.aspx" target="_blank" title="你有新消息">消息<img src="http://static.5sing.com/images/new.gif" width="23" height="11" alt="新消息" />(' + obj.user.totalmessage + ')</a> | </li>';
            }
            htm += '<li><a href="http://member.5sing.com" target="_blank" title="管理中心">管理中心</a> | </li>';
            htm += '<li><a href="http://www.5sing.com/Logout.aspx" title="安全退出">安全退出</a></li>';

            if ($(".log_member").val() != undefined) {
                var log_htm = '';
                log_htm += '<dl>';
                log_htm += '<dt><a href="http://' + obj.user.userid + '.5sing.com" target="_blank" title="' + obj.user.nickname + '"><img src="' + obj.user.img1 + '" width="50" height="50" alt="' + obj.user.nickname + '" /></a></dt>';
                if (obj.user.content == "") {
                    log_htm += '<dd><cite id="citeEdit"></cite><a class="ser_name" href="http://' + obj.user.userid + '.5sing.com" target="_blank" title="' + obj.user.nickname + '">' + obj.user.nickname + '</a></dd>';
                    log_htm += '<dd id="ddStatus"><a href=\"http://member.5sing.com/Hp/Status.aspx\" target="_blank" title=\"查看更多状态\">你可以更新微博, 让粉丝们知道你在做什么...</a></dd>';
                }
                else {
                    log_htm += '<dd><cite id="citeEdit">' + obj.user.edittime + '更新</cite><a class="ser_name" href="http://' + obj.user.userid + '.5sing.com" target="_blank" title="' + obj.user.nickname + '">' + obj.user.nickname + '</a></dd>';
                    log_htm += '<dd id="ddStatus"><a href=\"http://member.5sing.com/Hp/Status.aspx\" target="_blank" title=\"查看更多状态\">' + cutstr(obj.user.content, 60) + '</a></dd>';
                }
                log_htm += '</dl>';
                log_htm += '<div class="log_post"><span></span><input class="log_doing" type="text" id="txtStatus4Index" size="20" onclick="if ($(\'#txtStatus4Index\').val() == \'我来说两句...\') $(\'#txtStatus4Index\').val(\'\');" value="我来说两句..." /><input type="button" class="log_do_pt" id="button" name="button" onclick="StatusSubmit4Index();" value="发布" /></div>';

                $(".log_member").show();
                $(".log_reg").hide();
                $(".log_member").html(log_htm);
            }
            var tgUrl = 'http://' + obj.user.userid + '.5sing.com';
            var tgText = 'HI～ 我是' + obj.user.nickname + '！这里是我的音乐主页'+tgUrl+'<br>我已经在#5sing#上传了' + obj.user.totalsong + '首歌曲，有' + obj.user.totalfriend + '位好友和' + obj.user.totalfans + '位粉丝啦，快来听我的新歌吧！';
            var tgText2 = 'HI～ 我是' + obj.user.nickname + '！这里是我的音乐主页' + tgUrl + '我已经在#5sing#上传了' + obj.user.totalsong + '首歌曲，有' + obj.user.totalfriend + '位好友和' + obj.user.totalfans + '位粉丝啦，快来听我的新歌吧！';
          
            var tgHtml = '<h3><strong>喜欢音乐吗？</strong><em>5SING是你获得粉丝支持成为最新走红音乐人的音乐基地。</em></h3>'
            tgHtml += '<p>'+tgText+'</p>';
            tgHtml += '<div class="fenxiang"><em>分享到：</em>';
            tgHtml += '<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(tgUrl) + '" class="fx_06" target="_blank" title="分享到QQ空间">QQ空间</a>';
            tgHtml += '<a href="http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(tgText2) + '&url=' + tgUrl + '&source=bookmark&appkey=3432766229" class="fx_01" target="_blank" title="分享到新浪微博">新浪微博</a>';
            tgHtml += '<a href="http://v.t.qq.com/share/share.php?title=' + encodeURIComponent(tgText2) + '&url=' + tgUrl + '&appkey=edcceb2d877d4ec4ac9bb7705434ca17&site=中国原创音乐基地" class="fx_02" target="_blank" title="分享到腾讯微博">腾讯微博</a>';
            tgHtml += '<a href="http://t.sohu.com/third/post.jsp?title=' + encodeURIComponent(tgText2) + '&url=' + tgUrl + '&content=utf-8" class="fx_03" target="_blank" title="分享到搜狐微博">搜狐微博</a>';
            tgHtml += '<a href="http://t.163.com/article/user/checkLogin.do?info=' + encodeURIComponent(tgText2) + '" class="fx_04" target="_blank" title="分享到网易微博">网易微博</a>';
            tgHtml += '<a href="http://share.renren.com/share/buttonshare.do?link=' + tgUrl + '&title=' + encodeURIComponent(tgText2) + '" class="fx_05" target="_blank" title="分享到人人网">人人网</a>';
			tgHtml += '</div>';
			$(".it_r").html(tgHtml);
        }
        $("#UserInfo").html(htm);
    }
}

function UserStatus() {
    GetJSON("http://www.5sing.com/Handler.ashx", "Command=UserStatus&url="+window.location, UserStatusCallBack);
}

function MainNav(index) {
    $(".main_nav").children().eq(index).attr("class", "ft");
}

function MainNav09(index) {
    $(".nav_lt").children().eq(index).attr("class", "n_ft");
}

function SubNav(index) {
    $(".sub_nav").children().eq(index).attr("class", "ft");
}

function EncodeUtf8(s1) {
    var s = escape(s1);
    var sa = s.split("%");
    var retV = "";
    if (sa[0] != "") {
        retV = sa[0];
    }
    for (var i = 1; i < sa.length; i++) {
        if (sa[i].substring(0, 1) == "u") {
            retV += Hex2Utf8(Str2Hex(sa[i].substring(1, 5)));

        }
        else retV += "%" + sa[i];
    }

    return retV;
}

function Str2Hex(s) {
    var c = "";
    var n;
    var ss = "0123456789ABCDEF";
    var digS = "";
    for (var i = 0; i < s.length; i++) {
        c = s.charAt(i);
        n = ss.indexOf(c);
        digS += Dec2Dig(eval(n));

    }
    //return value;   
    return digS;
}
function Dec2Dig(n1) {
    var s = "";
    var n2 = 0;
    for (var i = 0; i < 4; i++) {
        n2 = Math.pow(2, 3 - i);
        if (n1 >= n2) {
            s += '1';
            n1 = n1 - n2;
        }
        else
            s += '0';

    }
    return s;

}
function Dig2Dec(s) {
    var retV = 0;
    if (s.length == 4) {
        for (var i = 0; i < 4; i++) {
            retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
        }
        return retV;
    }
    return -1;
}
function Hex2Utf8(s) {
    var retS = "";
    var tempS = "";
    var ss = "";
    if (s.length == 16) {
        tempS = "1110" + s.substring(0, 4);
        tempS += "10" + s.substring(4, 10);
        tempS += "10" + s.substring(10, 16);
        var sss = "0123456789ABCDEF";
        for (var i = 0; i < 3; i++) {
            retS += "%";
            ss = tempS.substring(i * 8, (eval(i) + 1) * 8);
            retS += sss.charAt(Dig2Dec(ss.substring(0, 4)));
            retS += sss.charAt(Dig2Dec(ss.substring(4, 8)));
        }
        return retS;
    }
    return "";
}


function Search() {
    var category = $("#slCategory").val();
    var key = EncodeUtf8($("#txtKey").val());
    var url = "http://sou.5sing.com/sbz.aspx?key=";
    $("#form1").attr("action", "http://sou.5sing.com");

    if (category == "原创") {
        url = "http://sou.5sing.com/syc.aspx?key=";
    } else if (category == "翻唱") {
        url = "http://sou.5sing.com/sfc.aspx?key=";
    } else if (category == "伴奏") {
        url = "http://sou.5sing.com/sbz.aspx?key=";
    } else if (category == "会员") {
        url = "http://sou.5sing.com/smember.aspx?key=";
    }
    url = url + key;

    $("#form1").attr("action", url);
    return true;
}

$(document).ready(function() {
    $("#btSearch").click(function() {
        Search();
    });
    $("#txtKey").keydown(function(event) {
        if (event.keyCode == 13) {
            Search();
        }
    });
    UserStatus();
});


function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    if (arr) {
        return unescape(arr[2]);
    }
    else
        return null;
}

function AddFriendCallBack(res) {
    switch (res.resCode) {
        case "-1":
            alert("请先登录");
            break;
        case "00":
            alert("加为好友成功");
            break;
        case "01":
            alert("该用户已经在您的好友列表");
            break;
        case "02":
            alert("添加失败");
            break;
        case "03":
            alert("不能把自己添加到好友列表中");
            break;
        case "04":
            alert("此用户还在您的黑名单中");
    }
}
function AddFriend(userID) {
    GetJSON("http://member.5sing.com/Common/Hy.ashx", "type=AddFriend_Maybe&UserID=" + userID, AddFriendCallBack);
}

function AddMusicBoxCallback(obj) {
    switch (obj.resCode) {
        case "00":
            alert("歌曲收藏成功");
            break;
        case "01":
            alert("该歌曲已经成功收藏到您的音乐盒");
            break;
        case "02":
            alert("您还未登录网站，登录之后才能收藏歌曲");
            break;
    }
}

function AddMusicBox(SongID, SongType, SongName, UserID) {
    GetJSON("http://www.5sing.com/Handler.ashx", "Command=AddMusicBox&SongType=" + SongType + "&SongID=" + SongID + "&SongName=" + SongName + "&UserID=" + UserID, AddMusicBoxCallback);
}

function Collect(input) {
    var vStr = getCboxValue(input);
    if (vStr == "")
        alert("您没有选择收藏歌曲!");
    else {
        CollectSong(vStr);
    }
}

function CollectSong(val) {
    GetJSON("http://www.5sing.com/Handler.ashx", "Command=AddMusicBox2&id=" + val, AddMusicBoxCallback);
}

function OtherMenu() {
    $("#othermenu").toggle();
}

function UploadMenu() {
    $("#uploadmenu").toggle();
}

function bookmark(title, url) {
    if (document.all)
        window.external.AddFavorite(url, title);
    else if (window.sidebar)
        window.sidebar.addPanel(title, url, "")
}

function StatusSubmit4IndexCallBack(res) {
    $("#txtStatus4Index").val("我来说两句...");
    $("#button").attr("disabled", "");

    if (parseInt(res.resCode) == 0) {
        $("#citeEdit").html(res.time + '更新');
        $("#ddStatus").html('<a href=\"http://member.5sing.com/Hp/Status.aspx\" target="_blank" title=\"查看更多状态\">' + cutstr(res.content, 60) + '</a>');
    }
    else {
        alert("同样的微博你刚发布过了！修改修改再发布吧！");
    }   
}

function StatusSubmit4Index() {
    var content = $("#txtStatus4Index").val();
    if (content == "" || content == "我来说两句...") {
        alert("输入点什么吧！");
        return false;
    }
    $("#button").attr("disabled", "true");
    GetJSON("http://Member.5sing.com/Common/Message.ashx", "Command=StatusCreate&txtStatus=" +escape(content), StatusSubmit4IndexCallBack);
}

function AddSingerCallBack(obj) {
    switch (obj.resCode) {
        case "00":
            alert("已提交申请，请等待网站审核");
            break;
        case "01":
            alert("你已经音乐人了");
            break;
        case "02":
            alert("您已经提交了音乐人申请，请等待审核");
            break;
        case "03":
            alert("您还未登录网站，登录之后才能申请加入");
            break;
    }
}

function AddSinger() {
    GetJSON("http://www.5sing.com/Handler.ashx", "Command=AddSinger", AddSingerCallBack);
}