var media_player_proxy = function(p_playId) {

    var med_html = '';
    med_html += ' <object id="media_player" width="0" height="0" ';
    med_html += 'classid="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,7,1112"';
    med_html += 'align="baseline" border="0" standby="Loading Microsoft Windows Media Player components"';
    med_html += 'type="application/x-oleobject">';
    med_html += ' <param name="URL" value="">';
    med_html += '<param name="autoStart" value="true">';
    med_html += '<param name="invokeURLs" value="false">';
    med_html += '<param name="playCount" value="100">';
    med_html += '<param name="defaultFrame" value="datawindow">';
    med_html += '</object>';

    if ($("#" + p_playId).html() == "") {
        $("#" + p_playId).html(med_html);
        $("#" + p_playId).hide();
    }

    var _play = document.getElementById("media_player");
    var _progress_change;
    var _sound_complete;

    var progress_change = function() {
        if (_progress_change) {
            //进度改变事件
            //lp:已下载百分数; ppr:; ppa:已播放百分数 pt:播放时间; tt:总时间
            var lp = _play.network.downloadProgress;
            var ppr;
            if (_play.playState == 3) {
                var ppa = Number(_play.controls.currentPosition) / Number(_play.currentMedia.duration) * 100;
                var pt = Number(_play.controls.currentPosition) * 1000;
                var tt = Number(_play.currentMedia.duration) * 1000;
                _progress_change(lp, ppr, ppa, pt, tt);

                if (Number(_play.currentMedia.duration - _play.controls.currentPosition) < 0.3) {

                    if (_sound_complete) {
                        _sound_complete();
                    }
                }
            }
        }
    }
    //改变路径(私)
    var change = function(p_url) {
        _play.URL = p_url;
        _play.controls.play();
    }

    //播放
    this.play = function() {
        _play.controls.play();
    },
    //改变并播放
     this.changeAndPlay = function(p_url) {
         change(p_url);
         _play.controls.play();
     }
    //暂停
    this.pause = function() {
        _play.controls.pause();
    },
    //停止
     this.stop = function() {
         _play.controls.stop();
     },
    //设置音量
     this.volume = function(p_value) {
         _play.settings.volume = p_value
     },
    //设置进度
     this.playHead = function(p_num) {
         //p_num 百分比
         _play.controls.currentPosition = Math.ceil(p_num / 100 * _play.currentMedia.duration);
         progress_change();
     },
    //进度改变事件
     this.onProgressChange = function(p_handler) {
         _progress_change = p_handler;
     },
    //播放完成事件
     this.onSoundComplete = function(p_handler) {
         _sound_complete = p_handler;
     },
    //播放加载事件
     this.mPlayer = function(p_obj) {
         if (p_obj) {
             p_obj.ready();
         }
         window.setInterval(progress_change, 1000);
     }
}


var player_proxy = function() {
    var _datalist = [];    //音乐列表
    var _btn_obj;          //按钮对象
    var _show_state = -1;    //-1:没有音乐 0:正在播入 1:暂停中 2:已停止
    var _progress_change;
    var _player;
    var _play_index = -1;    //播放序号
    var _volume = 50;    //默认音量
    var _play_handler;
    var _is_no_sound = false;
    var _play_pattern = 2; //播放模式 0:单曲循环; 1:顺序; 2:循环; 3:随机
    var _data_change_handler;    //单乐数据改变事件
    var _Auto = true; //是否自动播放第一首歌


    //根据序号播放歌曲
    var play_index = function(index) {
        if (_datalist.length > 0) {
            var url = _datalist[index]["filepath"];
            _player.changeAndPlay(url);
            _play_index = index;
            _Auto = true;
            if (_play_handler) {
                _play_handler(_datalist[index]);
            }
        }
    }

    //播放第一首
    var play_first = function() {
        if (_datalist.length > 0) {
            play_index(0);
        }
    }

    //播放下一首
    var play_next = function() {
        var n = get_play_index_num();
        if (n < _datalist.length) {
            play_index(n);
        }
        else {
            play_index(0);
        }
    }



    //播放上一首
    var play_previous = function() {
        var n = get_play_index_num(true);
        if (n >= 0) {
            play_index(n);
        }
    }

    var show_play_btn = function() {
        $("#" + _btn_obj["play"]).hide();
        $("#" + _btn_obj["pause"]).show();
        $("#" + _btn_obj["stop"]).show();
    }

    var show_pause_btn = function() {
        $("#" + _btn_obj["play"]).show();
        $("#" + _btn_obj["pause"]).hide();
        $("#" + _btn_obj["stop"]).show();
    }

    var show_stop_btn = function() {
        $("#" + _btn_obj["play"]).show();
        $("#" + _btn_obj["pause"]).hide();
    }

    //验证Key是否存在
    var check_key = function(key) {
        for (var i = 0; i < _datalist.length; i++) {
            var item = _datalist[i];
            if (item.key == key) {
                return true;
            }
        }
        return false;
    }

    var get_play_index_num = function(is_pre) {
        var i = _play_index;
        if (is_pre) {
            switch (_play_pattern) {
                case 0:
                    break;
                case 1:
                    i -= 1;
                    break;
                case 2:
                    i -= 1;
                    if (i < 0) {
                        i = 0;
                    }
                    play_index(i);
                    break;
                case 3:
                    i = parseInt(Math.random() * (_datalist.length - 1));
                    break;
            }
        }
        else {
            switch (_play_pattern) {
                case 0:
                    break;
                case 1:
                    i += 1;
                    break;
                case 2:
                    i += 1;
                    if (i >= _datalist.length) {
                        i = 0;
                    }
                    play_index(i);
                    break;
                case 3:
                    i = parseInt(Math.random() * (_datalist.length - 1));
                    break;
            }
        }
        return i;
    }

    //控制静音状态
    this.control_sound = function(p_has) {
        if (p_has == undefined) {
            return _is_no_sound;
        }
        _is_no_sound = p_has;
        if (_is_no_sound) {
            _player.volume(0);
        } else {
            _player.volume(_volume);
        }
    },
    //播放进度事件
    this.on_progress_change = function(fun) {
        if (_progress_change) {
            _progress_change = function() {
                _progress_change();
                fun();
            }
        }
        else {
            _progress_change = fun;
        }
    },
    //获得正在播放歌曲对象
    this.get_active_music = function() {
        if (_play_index != -1 && _datalist.length > 0) {
            return _datalist[_play_index];
        }
        return null;
    },
    //播放
    this.play = function(p_key) {
        for (var i = 0; i < _datalist.length; i++) {
            if (p_key == _datalist[i].key) {
                play_index(i);
            }
        }
    },
    this.play_first_music = function() {
        play_first();
    },
    //增加歌曲 必须字段 key: 音乐标识； filepath： 路径； name: 音乐名
    this.add_data = function(p_key, p_name, p_filepath) {
        var obj = { key: p_key, filepath: p_filepath, name: p_name };

        var result_obj = [];
        var is_add = false;
        if (!check_key(obj.key)) {
            _datalist.push(obj);
            result_obj.push(obj);
            is_add = true;
        }
        if (_data_change_handler) {
            _data_change_handler(is_add, result_obj);
        }
    },
    //增加歌曲(批量)
    this.add_dataarr = function(p_obj_arr) {

        var is_add = false;
        var result_obj = [];
        _datalist = [];

        for (var i = 0; i < p_obj_arr.length; i++) {
            if (!check_key(p_obj_arr[i].key)) {
                _datalist.push(p_obj_arr[i]);
                result_obj.push(p_obj_arr[i]);
                is_add = true;
            }
        }
        if (_data_change_handler) {
            _data_change_handler(is_add, result_obj);
        }

        return is_add;
    },
    //删除歌曲
    this.delete_data = function(p_key) {
        var index = -1;
        for (var i = 0; i < _datalist.length; i++) {
            var item = _datalist[i];
            if (item.key == p_key) {
                index = i;
            }
        }
        var key = -1;
        if (index != -1) {
            key = _datalist[index].key;
            if (_data_change_handler) {
                _data_change_handler(true, [{ key: key}], true);
            }
            _datalist.splice(index, 1);
        }
        else {
            if (_data_change_handler) {
                _data_change_handler(false, { key: key }, true);
            }
        }
    },
    //绑定按钮
    this.bind_btn = function(obj) {
        if (obj) {
            _btn_obj = obj;
            $.each(_btn_obj, function(i, n) {
                var ele = $("#" + n);

                if (ele == undefined) {
                    ele = $(n);
                }
                ele.click(function() {
                    switch (i) {
                        case "play":    //播放
                            if (_play_index == -1)
                                play_first()
                            else
                                _player.play();
                            show_play_btn();
                            break;
                        case "pause":    //暂停
                            _player.pause();
                            show_pause_btn();
                            break;
                        case "stop":    //停止
                            _player.stop();
                            show_stop_btn()
                            break;
                        case "pre":        //前一首
                            play_previous();
                            show_play_btn();
                            break;
                        case "next":    //下一首
                            play_next();
                            show_play_btn();
                            break;
                    }
                });
            });
        }
    },
    //设置音量
    this.set_volume = function(p_num) {
        if (p_num == undefined) {
            return _volume;
        }
        _volume = p_num;
        _player.volume(_is_no_sound ? 0 : _volume);
    },
    //设置进度
    this.set_plan = function(p_num) {
        _player.playHead(p_num);
    },
    //播放事件
    this.set_play_call_back = function(p_fun) {
        _play_handler = p_fun;
    },
    //设置列表改变事件
    this.set_data_change_handler = function(p_fun) {
        if (p_fun) {
            _data_change_handler = p_fun;
        }
    },
    //设置播放模式
    this.pattern = function(p_pattern) {
        if (p_pattern == undefined) {
            return _play_pattern;
        }
        _play_pattern = p_pattern;
    },
    //获取列表
    this.get_datasource = function() {
        return _datalist;
    },
    this.get_player = function() {
        return _player;
    },


    //初始化
    this.init = function(p_playId, p_play_callback) {
        if ($.browser.msie) {
            _player = new media_player_proxy(p_playId);
        }
        else {
            _player = $("#" + p_playId);
        }

        if (p_play_callback) {
            _play_handler = p_play_callback;
        }

        if (_progress_change) {
            _player.onProgressChange(_progress_change);
        }

        _player.onSoundComplete(function() {
            var i = get_play_index_num();
            play_index(i);
        });
        if ($.browser.msie) {
            _player.mPlayer({
                ready: function() {
                    if (_Auto) {
                        _player.stop();
                        play_first();
                        show_play_btn();
                    } else {
                        show_stop_btn();
                    }
                }
            });
        }
        else {
            _player.jPlayer({
                ready: function() {
                    if (_Auto) {
                        play_first();
                        show_play_btn();
                    } else {
                        show_stop_btn();
                    }
                },
                swfPath: "/player"
            });
        }
    }
}