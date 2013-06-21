var player = new player_proxy();
var first = false;
var quiet = false;
var currentchannel = 0;
var songID;
var songType;
var songArr = [];

player.bind_btn({//绑定BOTTON
    play: "play_btn",  //播放
    pause: "pause_btn", //暂停
    stop: "stop_btn", //停止
    pre: "pre_btn", //上一首
    next: "next_btn"//下一首
});

function GetSongByChannel(channel) {
    for (var i = 0; i < songArr.length; i++) {
        var item = songArr[i];
        if (item.c == channel) {
            return item.s;
        }
    }
}

function SongIsInit(channel) {
    for (var i = 0; i < songArr.length; i++) {
        var item = songArr[i];
        if (item.c == channel) {
            return true;
        }
    }
    return false;
}


function GetFullFormat(time) {
    if (time.toString().length == 1) {
        return "0" + time;
    }
    return time;
}

function GetTime(time) { 
  return GetFullFormat(time.getMinutes()) + ":" + GetFullFormat(time.getSeconds());
}

function Comment() {
    $(".fm_pingl").toggle();   
}

function CommentCreateCallback(responseText) {
    $("#txtComment").val("");
    if (responseText.status) {
        $("#ListMessage").html('<font color="red">评论成功...</font>');
    } else {
        switch (obj.resCode) {
            case "00":
                $("#ListMessage").html("系统出错");
                break;
            case "01":
                $("#ListMessage").html("验证码输入有误，请重新输入");
                break;
            case "02":
                $("#ListMessage").html("请先登录");
                break;
            case "03":
                $("#ListMessage").html("您的留言速度过快");
                break;
            case "04":
                $("#ListMessage").html("留言内容不能为空");
                break;
            case "05":
                $("#ListMessage").html("您的留言中有非法信息，留言失败！");
                break;
            case "06":
                $("#ListMessage").html("留言内容过长");
                break;
            case "07":
                $("#ListMessage").html("对方已经将您设置为黑名单用户，您不能给歌曲留言");
                break;
        }
    }
    var commenthide = setInterval(function() {
        $(".fm_pingl").hide("slow");
        $("#ListMessage").html("");
        clearInterval(commenthide);
    }, 1000);
}

function CmmentCreate() {
  var content = "songID=" + songID + "&songType=" + songType + "&txtContent=" + $("#txtComment").val();
  $("#ListMessage").html('<font color="red">提交中...</font>');
  Submit("CommentCreate", content,CommentCreateCallback, "json");
}

//进步改变后,执行的函数
player.on_progress_change(function(lp, ppr, ppa, pt, tt) {
    var currentTime = new Date();
    var totalTime = new Date();
    currentTime.setTime(pt);
    totalTime.setTime(tt);
    var message = GetTime(currentTime) + '| ' + GetTime(totalTime);
    if (lp != 100) message = "缓冲..." + lp + "% ";
    $(".fm_d2").html(message);
});



//指定播放
function Play(key) {
    player.play(key);   
}

//提交数据
function Submit(command, content, CallBack, responseDataType) {
    $.ajax({ type: "POST", url: "/Handler.ashx?command=" + command, dataType: responseDataType, data: content, success: function(responseText) {
        CallBack(responseText);
    }, error: function() {
        alert("出错啦！");
    }
    });
}

function HTMLEncode2(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
}
function HTMLDecode2(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    return s;
}


//播放回调函数
function play_callback(song) {
    $(".fm_d1").html('<strong><a href="http://' + song.type + '.5sing.com/'+song.key+'.html" target="_blank">' + song.name + '</a></strong> - <a href="http://' + song.userid + '.5sing.com" target="_blank">' + song.nickname + '</a>');
    $(".fhd").html('<a href="http://' + song.type + '.5sing.com/' + song.key + '.html" target="_blank"><h3><strong> ' + song.name + '</strong> </h3></a><div class="fm_shouc"><a href="###" onclick="javascript:AddMusicBox(' + song.key + ',\'' + song.type + '\',\'' + song.name + '\',' + song.userid + ')">收藏此歌</a></div><div class="fm_comm"><a class="fm_comm1" href="###" onclick="javascript:Comment()">快速评论</a>已经有<em>' + song.comment + '</em>个人评论过了！</div>');
    $("#channel_"+song.channel+" li").removeAttr("class");
    $("#song_" + song.key).attr("class", "fm_clo");
    $("#ListGC").html(HTMLDecode2(song.gc));
    $("#ListSongName").html('评论歌曲：<strong>' + song.name + '</strong>');
    songID = song.key;
    songType = song.type;    
}


function ListPlayerSongCallBack(responseText) {
    var songhtml = "";
    var obj_arr=responseText;
    var channel = 0;
   
    for (var i = 0; i < responseText.length; i++) {
        var song = responseText[i];
        channel = song.channel;
        var index = (i + 1) > 9 ? (i + 1) : "0" + (i + 1);
        songhtml += '<li id="song_'+song.key+'"><em>' + index  + '</em> <a href="###" onclick="javascript:Play('+song.key+')">' + song.name + '</a> - <a href="http://' + song.userid + '.5sing.com" target="_blank">' + song.nickname + '</a></li>';
    }
    if (!SongIsInit(channel) && channel >0) {
        var songchannel = { "c": channel, "s": obj_arr };
        songArr.push(songchannel);
    }
    $("#ch_" + channel).attr("class", "fm_recom2");
    $("#channel_" + channel).html(songhtml);
    player.add_dataarr(obj_arr);
    player.init("player", play_callback);    
}


function ListPlayerSong(channel) {
   if (currentchannel != channel) {
        $(".fm_list ul").hide();
        $(".fm_list h4").attr("class", "fm_recom1");
        currentchannel = channel;
        $("#channel_" + channel).show();
        if (!SongIsInit(channel)) {
            Submit("PlayerSongByChannel", "Channel=" + channel, ListPlayerSongCallBack, "json");
        } else {
            ListPlayerSongCallBack(GetSongByChannel(channel));
        }
    } else {
    if ($("#ch_" + channel).attr("class") == "fm_recom1") {
        $("#channel_" + channel).show();
        $("#ch_" + channel).attr("class", "fm_recom2");
    } else {
        $("#channel_" + channel).hide();
        $("#ch_" + channel).attr("class", "fm_recom1");
    }
    } 
}

function ListPlayerChannelCallBack(responseText) {
    var channelHtml = '<div class="fm_pingl" style="display:none">';
    channelHtml += '<dl>';
    channelHtml += '<dt id="ListSongName"></dt>';
    channelHtml += '<dd><textarea cols="40" rows="5" id="txtComment"></textarea></dd>';
    channelHtml += '<dd><span id="ListMessage"></span> <input class="fm_bnt_post" href="###" onclick="javascript:CmmentCreate()"  type="button" value="发表评论" /> <input type="button" value="取消"  href="###" onclick="javascript:Comment()"/></dd>';
    channelHtml += '</dl>';
    channelHtml += '</div>';

    for (var i = 0; i < responseText.length; i++) {
        var channel = responseText[i];
        if (i == 0) {
            ListPlayerSong(channel.id);
        }
        channelHtml += '<div class="fm_list">';
        channelHtml += '<h4 class="fm_recom1" id="ch_' + channel.id + '" onclick="javascript:ListPlayerSong(' + channel.id + ')"><a href="###" >' + channel.name + '</a></h4>';
        channelHtml += '<ul id="channel_' + channel.id + '">';
        channelHtml += '</ul>';
        channelHtml += '</div>';
    }
    $("#ListChannel").html(channelHtml);
}

function ListPlayerChannel() {
    Submit("PlayerChannel", "", ListPlayerChannelCallBack, "json");
}



$(document).ready(function() {
    $(".fm_d1").html("音乐无处不在，快乐随之而来!");
    $(".fm_syin li").each(function(index) {
        $(this).click(function() {
            player.set_volume((index + 1) * 10);
            $(".fm_syin li").each(function(index1) {
                if (index1 <= index)
                    $(".fm_syin li:eq(" + index1 + ")").attr("class", "");
                else
                    $(".fm_syin li:eq(" + index1 + ")").attr("class", "fm_k");
            });
        });
    });

    $(".fm_sound").click(function() {
        quiet = !quiet;
        
        player.control_sound(quiet);
        if (quiet) {
            $(".fm_sound").html('<img src="http://static.5sing.com/images/lf_03.gif" title="静音">');
        } else {
            $(".fm_sound").html('<img src="http://static.5sing.com/images/fm_03.gif" title="开启">');
        }
    });

    $("#play_btn").mouseover(function() {
        $(".fm_info").show();
        if (!first) {
            first = true;
            ListPlayerChannel();
        }
    });

    $("#pause_btn").mouseover(function() {
        $(".fm_info").show();
        if (!first) {
            first = true;
            ListPlayerChannel();
        }
    });
    
    $(".fm_info").hover(null, function() {
        $(".fm_info").hide();
    });

});


 
 
