/**
 * 机型设置js
 * 
 * @author wangjun
 * @package asset_downwww_js
 * @copyright UC.cn
 * @version 2.0
 */
var nextParames = '';
var type = '';
var editionName = 'editionId';
var brandName = 'brandId';
var cancelName = 'cancel';
var hostPort = location.port;
var brandArr = new Array(1,2,3,4,9,87,88,129); 
if ('' != hostPort && '80' != hostPort) {
	hostPort = ':' + hostPort;
}
if (eid) {
	type = 'pop';
} else {
	type = 'normal';
}
Array.prototype.in_array = function(e) 
{ 
for(i=0;i<this.length && this[i]!=e;i++); 
return !(i==this.length); 
};
function change() {

	if ('pop' == type) {
		brandName = 'popBrand';
		editionName = 'popEdition';
	} else {
		brandName = 'brandId';
		editionName = 'editionId';
	}

	(function() {
		var brandControl = new DropDown($("#" + brandName)[0]);
		var editionControl = new DropDown($("#" + editionName)[0]);
		$("#" + brandName).change(function() {
			// 这里可以写些验证代码
			var brandId = this.options[this.selectedIndex].value;
			if (brandId == 0)
				return;
			editionControl.Clear();
			editionControl.Add('请选择机型~0');
			if(typeof(arr) != "undefined" && typeof(arr[brandId]) != "undefined" ){
				var list = eval(arr[brandId]);
				var listlen = list.length;
				
				 for ( var i = 0; i < listlen; i++) {
					editionControl.Add(list[i]);
				}				
			}else{
	            $.post("http://"+document.domain+hostPort+'/setmobile/ajaxload/?a=geteditionbybrandid&brandId='+brandId, 'a=geteditionbybrandid&brandId='+brandId, function(data) {
	                if (data == 'error' || data.substr(0, 1) != '[') {
	                    alert("返回数据错误");
	                    return;
	                }
	                var list = eval(data);
	                for (var i = 0; i < list.length; i++) {
	                    editionControl.Add(list[i]);
	                }
	            });				
			}
		});

	})();

	$("#" + editionName).change(
			function() {
				var thisUrl = window.location.href;
				var urlParames = thisUrl.split("/");
				var editionTitle = '';
				var brandTitle = '';
				var list;
				var tmpStr;
				var url;
				var editionControl = new DropDown($("#" + editionName)[0]);
				var len = urlParames.length;
				var nextPost = 0;
				// 这里可以写些验证代码
				var editionId = this.options[this.selectedIndex].value;
				if (editionId == 0)
					return;
				$.post("http://" + document.domain + hostPort
						+ "/setmobile/set/" + editionId + "/", 'eid='
						+ editionId, function(data) {
					if (data == 'error') {
						alert("返回数据错误");
						return;
					} else {
						if (eid) {
							nextPost = 5;
						} else {
							nextPost = 3;
						}
						list = eval(data);
						for ( var j = 0; j < list.length; j++) {
							tmpStr = '';
							tmpStr = list[j].split("~");
							brandTitle = tmpStr[0];
							editionTitle = tmpStr[1];
						}
						if ('' == nextParames) {
							nextParames = '/';
							for ( var i = nextPost; i < len; i++) {
								if (urlParames[i]) {
									nextParames += urlParames[i] + '/';
								}
							}
						}
						url = urlParames[0] + '/' + urlParames[1] + '/'
								+ urlParames[2] + '/' + brandTitle + '/'
								+ editionTitle + nextParames;
						if(url.indexOf("?") != -1 && url.lastIndexOf("/") == url.length-1){
							url = url.substring(0,url.length-1);
						}
						window.location.href = url;
					}

				});
			});
}
$("#" + cancelName).click(
		function() {
			var thisUrl = window.location.href;
			var urlParames = thisUrl.split("/");
			var url;
			var len = urlParames.length;
			var nextPost = 3;
			if (eid) {
				nextPost = 5;
			} else {
				nextPost = 3;
			}
			for ( var i = nextPost; i < len; i++) {
				if (urlParames[i] && '#;' != urlParames[i]) {
					nextParames += urlParames[i] + '/';
				}
			}
			url = urlParames[0] + '/' + urlParames[1] + '/' + urlParames[2]
					+ '/' + 'brandTitle' + '/' + 'editionTitle' + '/'
					+ nextParames;
			window.location.href = url;

		});

// 关闭面板
$(".J-pop-close").click(function() {
	type = 'normal';
});

$(".J-overlayer").click(function() {
	type = 'pop';
});
$(".J-click").click(function() {
	nextParames = ($(".J-click").find("a").attr("href"));
	type = 'pop';
	change();
});

change();
