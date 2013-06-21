var GuidEmpty = '00000000-0000-0000-0000-000000000000';

function getCookie(Name) {
    var search = Name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
        else return ('');
    }
    else return ('');
}

function setCookie(name, value) {
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365);
    document.cookie = name + "=" + escape(value) + ";path=/" + "; expires=" + expires.toGMTString();
}

String.prototype.replaceAll = function(AFindText, ARepText) {
    raRegExp = new RegExp(AFindText, "g");
    return this.replace(raRegExp, ARepText);
}
/*** 删除首尾空格 ***/
String.prototype.Trim = function() {
return this.replace(/(^\s*)|(\s*$)/g, "");
}

/*** 统计指定字符出现的次数 ***/
String.prototype.Occurs = function(ch) {
// var re = eval("/[^"+ch+"]/g");
// return this.replace(re, "").length;
return this.split(ch).length-1;
}

/*** 检查是否由数字组成 ***/
String.prototype.isDigit = function() {
var s = this.Trim();
return (s.replace(/\d/g, "").length == 0);
}

/*** 检查是否由数字字母和下划线组成 ***/
String.prototype.isAlpha = function() {
return (this.replace(/\w/g, "").length == 0);
}
/*** 检查是否为数 ***/
String.prototype.isNumber = function() {
var s = this.Trim();
return (s.search(/^[+-]?[0-9.]*$/) >= 0);
}

/*** 返回字节数 ***/
String.prototype.lenb = function() {
return this.replace(/[^\x00-\xff]/g,"**").length;
}

/*** 检查是否包含汉字 ***/
String.prototype.isInChinese = function() {
return (this.length != this.replace(/[^\x00-\xff]/g,"**").length);
}

/*** 简单的email检查 ***/
String.prototype.isEmail = function() {
　var strr;
var mail = this;
　var re = /(\w+@\w+\.\w+)(\.{0,1}\w*)(\.{0,1}\w*)/i;
　re.exec(mail);
　if(RegExp.$3!="" && RegExp.$3!="." && RegExp.$2!=".")
strr = RegExp.$1+RegExp.$2+RegExp.$3;
　else
　　if(RegExp.$2!="" && RegExp.$2!=".")
strr = RegExp.$1+RegExp.$2;
　　else
　strr = RegExp.$1;
　return (strr==mail);
}

/// <summary>
/// 只能是数字
/// </summary>
/// <returns>如果是数字与字母，返回真，否则返回假</returns>
String.prototype.IsDigit = function()
{
    var reg = /^\d+$/g;
    return reg.test(this);
}

/// <summary>
/// 只能是数字和字母
/// </summary>
/// <returns>如果是数字与字母，返回真，否则返回假</returns>
String.prototype.IsAlphaDigit = function()
{
    var reg = /^[a-zA-Z0-9]+$/g;
    return reg.test(this);
}

/// <summary>
/// 只能是数字、字母与下划线
/// </summary>
/// <returns>如果是数字、字母与下划线，返回真，否则返回假</returns>
String.prototype.IsAlpha = function() 
{
    var reg = /^\w+$/g;
    return reg.test(this);
}



function SelAll() {
    oEl = event.srcElement;
    for (i = 0; i < document.all.tags("input").length; i++) {
        if (document.all.tags("input")(i).id.indexOf("chkItem") != -1) {
            if (oEl.checked && !document.all.tags("input")(i).disabled) {
                document.all.tags("input")(i).checked = true;
                document.all.tags("input")(i).parentElement.parentElement.style.backgroundColor = '#efefff';
            }
            else {
                document.all.tags("input")(i).checked = false;
                document.all.tags("input")(i).parentElement.parentElement.style.backgroundColor = '';
            }
        }
    }

    event.cancelBubble = true;
}

function RowClick(e) {
    if (e.checked) {
        e.parentElement.parentElement.style.backgroundColor = '#efefff';
    }
    else {
        e.parentElement.parentElement.style.backgroundColor = '';
    }
}

//批量设置同一组的样式
function GroupSetClassName(elementName, groupPrefix, className) {
    for (i = 0; i < document.all.tags(elementName).length; i++) {
        if (document.all.tags(elementName)(i).id.indexOf(groupPrefix) != -1) {
            document.all.tags(elementName)(i).className = className;
        }
    }
}

//Trim首尾字符
function TrimStr(str, word) {
    var rvalue = str;
    var len1 = str.length - word.length;
    var len2 = word.length;

    //去掉尾部
    if (str.substr(len1, len2) == word) {
        rvalue = rvalue.substr(0, len1);
    }

    //去掉头部
    if (str.substr(0, len2) == word) {
        rvalue = rvalue.substr(len2, len1);
    }

    return rvalue;
}
//获取Url参数
function getUrlPara(paraName) {
    var sUrl = location.href;
    var sReg = "(?:\\?|&){1}" + paraName + "=([^&]*)"
    var re = new RegExp(sReg, "gi");
    re.exec(sUrl);
    return RegExp.$1;
}

//使Div可编辑
function setEditable(e) {
    e.contentEditable = true;
}

//转化为当地时区时间
function TurnToLocalTime(d) {
    //    var localTime = d.getTime();
    //    var localOffset = d.getTimezoneOffset() * 60000;
    //    var utc = localTime + localOffset;
    //    var offset = +8;
    //    var bombay = utc + (3600000*offset);
    //    return new Date(bombay);
    //    
    return d;
}

//格式化时间
function FormateDateDay(d) {
    d = TurnToLocalTime(d);
    var yyyy, MM, dd, hh, mm, ss;

    yyyy = d.getYear();
    MM = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

    return yyyy + "-" + MM + "-" + dd;
}
function FormateDateMin(d) {
    d = TurnToLocalTime(d);
    var yyyy, MM, dd, hh, mm, ss;

    yyyy = d.getYear();
    MM = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

    return yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm;
}
function FormateDate(d) {
    d = TurnToLocalTime(d);
    var yyyy, MM, dd, hh, mm, ss;

    yyyy = d.getYear();
    MM = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    mm = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

    return yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
}


////////////////////////////////////////////////////
/////////////// AjaxDataContrlos /////////////////
////////////////////////////////////////////////////

function onfailedClose() {
    alert('您已退出系统，窗口将被关闭！');
    window.openner = null;
    window.close();
}

function clearListBox(listBox) {
    for (var i = listBox.childNodes.length - 1; i > -1; i--) {
        listBox.removeChild(listBox.childNodes[i]);
    }
}

function addListBoxItem(listBox, text, value) {
    var opt = document.createElement('option');

    listBox.appendChild(opt);

    setText(opt, text);

    if (value != null) {
        opt.value = value;
    }
}

function selectListBoxByValue(listBox, value) {
    listBox.selectedIndex = 0;

    var length = listBox.options.length;

    for (var i = 0; i < length; i++) {
        if (listBox.options[i].value == value) {
            listBox.selectedIndex = i;
            break;
        }
    }
}

function showInnerHTML(text) {
    return replaceText(replaceText(text, "<br>", "\r"), "&nbsp;", " ");
}

function replaceText(text, str1, str2) {
    var str = text;
    while (str.indexOf(str1) != -1) {
        str = str.replace(str1, str2);
    }

    return str;
}

function setText(element, text) {
    if (typeof element.innerText != 'undefined') {
        if (text != null)
            element.innerText = showInnerHTML(text);
    }
    else if (typeof element.textContent != 'undefined') {
        if (text != null)
            element.textContent = showInnerHTML(text);
    }
}

//------------- Ajax ---------------------------------------------
function ajaxOnFailedHandle(error, userContext, methodName)
{
    var message = error.get_message();

    var str = "错误:" + message;

    alert(str);
}

function ajaxOnFailedHandleDebug(error, userContext, methodName)
{
    var stackTrace = error.get_stackTrace();
    var message = error.get_message();
    var statusCode = error.get_statusCode();
    var exceptionType = error.get_exceptionType();
    var timeOut = error.get_timedOut();

    var str = "Method:" + methodName + "\r\n" +
              "Stack Trace:" + stackTrace + "\r\n" +
              "Service Error:" + message + "\r\n" +
              "Status Code:" + statusCode + "\r\n" +
              "Exception Type:" + exceptionType + "\r\n" +
              "Is Timeout:" + timeOut + "\r\n";

    alert(str);
}

function ajaxOnFailedHandleShow(result) {
    if (result) {
        alert('系统错误，请联系管理员！');
    }
    else {
        if (confirm('访问超时，请重新登录！')) {
            location.reload();
        }
    }
}
function showTimeoutException() {
    if (confirm('访问超时，请重新登录！')) {
        location.reload();
    }
}

function ajaxBoolenResultOnFailedHandle(result) {
    alert(result.Message);
}


//表现层辅助
function visibleInitByCookie(element, cookieName) {
    if (getCookie(cookieName) == "0")
        element.style.display = 'none';
    else
        element.style.display = '';
}
function visibleSetByCookie(cookieName) {
    if (getCookie(cookieName) == "")
        setCookie(cookieName, "1");

    if (getCookie(cookieName) == "1")
        setCookie(cookieName, "0");
    else
        setCookie(cookieName, "1");
}