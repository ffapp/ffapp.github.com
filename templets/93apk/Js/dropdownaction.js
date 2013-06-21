/**
 * 选择框操作js
 * @author wangjun
 * @package asset_downwww_js
 * @copyright UC.cn
 * @version 2.0
 */
    function DropDown(control) {
        if (typeof(control)=='undefined') {
            return;
        }
        this.control = control;
        if (this.control.tagName != "SELECT") {
            return;
            //throw new Error(10,"错误的控件类型, 需要Select") ;
        }
    }
    DropDown.prototype.Clear = function() {
        this.control.options.length=0;
    }
    DropDown.prototype.Add = function($itm) {
        var myItem = $itm.split('~');
        if (myItem.length < 2)
            return;
        this.control.options.add(new Option(myItem[0], myItem[1])) ;
    }
    DropDown.prototype.Remove = function($itm) {
        //for (var i = 0; i < this.control.options.length; i++) {
        //	this.control.options.remove(i--);
        //}
        this.control.options.remove($itm);
    }
    DropDown.prototype.op = function(){
        var _value;
        var _text;
        var _show;
    }
    DropDown.prototype.SortOption = function(){
        var obj = this.control;
        var tmp = new Array();
        for(var i=0;i<obj.options.length;i++){
            var ops = new this.op();
            ops._value = obj.options[i].value;
            ops._text = obj.options[i].text;
            tmp.push(ops);
        }
        tmp.sort(this.SortRule);

        for(var j=0;j<tmp.length;j++){
            obj.options[j].value = tmp[j]._value;
            obj.options[j].text = tmp[j]._text;
        }
    }

    DropDown.prototype.RemoveSelect = function()
    {
        var tmp = new Array();
        for (var i = 0; i < this.control.options.length; i++)
        {
            if (this.control.options[i].selected == true)
            {
                var ops = new this.op();
                ops._value = this.control.options[i].value;
                ops._text  = this.control.options[i].text;
                ops._show  = true;
                tmp.push(ops);
                // alert("进去" + this.control.options[i].text + "|" + this.control.options[i].value);
                this.Remove(i--);
            }
        }
        return tmp;
    }

    DropDown.prototype.SortRule = function(a, b) {
        var x = a._text;
        var y = b._text;
        return x.localeCompare(y);
    }

    DropDown.prototype.AddSelect = function(srcControl) {
        var tmpOpt = srcControl.RemoveSelect();
        var canfind;
        for (var i = 0; i < this.control.options.length; i++) {
            canfind = false;
            for (var j = 0; j < tmpOpt.length; j++) {
                // alert(tmpOpt[i]._text + "   " + this.control.options[i].value);
                if (tmpOpt[j]._value == this.control.options[i].value) {
                    tmpOpt[j]._show = false;
                }
            }
        }

        for (var i = 0; i < tmpOpt.length; i++) {
            if (tmpOpt[i]._show == true)
                this.Add(tmpOpt[i]._text + '~' + tmpOpt[i]._value);
        }

        this.SortOption();

    }

