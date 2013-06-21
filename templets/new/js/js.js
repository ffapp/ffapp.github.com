Type.registerNamespace('DataService');
DataService.App360WebService=function() {
DataService.App360WebService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
DataService.App360WebService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return DataService.App360WebService._staticInstance.get_path();},
HelloWorld:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'HelloWorld',false,{},succeededCallback,failedCallback,userContext); },
AddComment:function(_Guid,NickName,Comments,Score,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddComment',false,{_Guid:_Guid,NickName:NickName,Comments:Comments,Score:Score},succeededCallback,failedCallback,userContext); },
AddGoodComment:function(CommentID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddGoodComment',false,{CommentID:CommentID},succeededCallback,failedCallback,userContext); },
AddBadComment:function(CommentID,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddBadComment',false,{CommentID:CommentID},succeededCallback,failedCallback,userContext); },
App360HotSearchStat:function(HotSearchContent,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'App360HotSearchStat',false,{HotSearchContent:HotSearchContent},succeededCallback,failedCallback,userContext); },
AddDownLoad:function(_Guid,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddDownLoad',false,{_Guid:_Guid},succeededCallback,failedCallback,userContext); },
GetAppList:function(ID,Category,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetAppList',false,{ID:ID,Category:Category},succeededCallback,failedCallback,userContext); },
GetVideo:function(_Guid,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetVideo',false,{_Guid:_Guid},succeededCallback,failedCallback,userContext); },
GetStrategy:function(_Guid,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetStrategy',false,{_Guid:_Guid},succeededCallback,failedCallback,userContext); },
AddSpecialGrade:function(_Guid,Score,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'AddSpecialGrade',false,{_Guid:_Guid,Score:Score},succeededCallback,failedCallback,userContext); },
GetGoogtextStr:function(textstr,language,tolanguage,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetGoogtextStr',false,{textstr:textstr,language:language,tolanguage:tolanguage},succeededCallback,failedCallback,userContext); },
UpdHtml:function(category,path,url,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'UpdHtml',false,{category:category,path:path,url:url},succeededCallback,failedCallback,userContext); }}
DataService.App360WebService.registerClass('DataService.App360WebService',Sys.Net.WebServiceProxy);
DataService.App360WebService._staticInstance = new DataService.App360WebService();
DataService.App360WebService.set_path = function(value) { DataService.App360WebService._staticInstance.set_path(value); }
DataService.App360WebService.get_path = function() { return DataService.App360WebService._staticInstance.get_path(); }
DataService.App360WebService.set_timeout = function(value) { DataService.App360WebService._staticInstance.set_timeout(value); }
DataService.App360WebService.get_timeout = function() { return DataService.App360WebService._staticInstance.get_timeout(); }
DataService.App360WebService.set_defaultUserContext = function(value) { DataService.App360WebService._staticInstance.set_defaultUserContext(value); }
DataService.App360WebService.get_defaultUserContext = function() { return DataService.App360WebService._staticInstance.get_defaultUserContext(); }
DataService.App360WebService.set_defaultSucceededCallback = function(value) { DataService.App360WebService._staticInstance.set_defaultSucceededCallback(value); }
DataService.App360WebService.get_defaultSucceededCallback = function() { return DataService.App360WebService._staticInstance.get_defaultSucceededCallback(); }
DataService.App360WebService.set_defaultFailedCallback = function(value) { DataService.App360WebService._staticInstance.set_defaultFailedCallback(value); }
DataService.App360WebService.get_defaultFailedCallback = function() { return DataService.App360WebService._staticInstance.get_defaultFailedCallback(); }
DataService.App360WebService.set_enableJsonp = function(value) { DataService.App360WebService._staticInstance.set_enableJsonp(value); }
DataService.App360WebService.get_enableJsonp = function() { return DataService.App360WebService._staticInstance.get_enableJsonp(); }
DataService.App360WebService.set_jsonpCallbackParameter = function(value) { DataService.App360WebService._staticInstance.set_jsonpCallbackParameter(value); }
DataService.App360WebService.get_jsonpCallbackParameter = function() { return DataService.App360WebService._staticInstance.get_jsonpCallbackParameter(); }
DataService.App360WebService.set_path("/Views/App360Web/Common/App360WebService.asmx");
DataService.App360WebService.HelloWorld= function(onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.HelloWorld(onSuccess,onFailed,userContext); }
DataService.App360WebService.AddComment= function(_Guid,NickName,Comments,Score,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.AddComment(_Guid,NickName,Comments,Score,onSuccess,onFailed,userContext); }
DataService.App360WebService.AddGoodComment= function(CommentID,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.AddGoodComment(CommentID,onSuccess,onFailed,userContext); }
DataService.App360WebService.AddBadComment= function(CommentID,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.AddBadComment(CommentID,onSuccess,onFailed,userContext); }
DataService.App360WebService.App360HotSearchStat= function(HotSearchContent,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.App360HotSearchStat(HotSearchContent,onSuccess,onFailed,userContext); }
DataService.App360WebService.AddDownLoad= function(_Guid,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.AddDownLoad(_Guid,onSuccess,onFailed,userContext); }
DataService.App360WebService.GetAppList= function(ID,Category,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.GetAppList(ID,Category,onSuccess,onFailed,userContext); }
DataService.App360WebService.GetVideo= function(_Guid,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.GetVideo(_Guid,onSuccess,onFailed,userContext); }
DataService.App360WebService.GetStrategy= function(_Guid,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.GetStrategy(_Guid,onSuccess,onFailed,userContext); }
DataService.App360WebService.AddSpecialGrade= function(_Guid,Score,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.AddSpecialGrade(_Guid,Score,onSuccess,onFailed,userContext); }
DataService.App360WebService.GetGoogtextStr= function(textstr,language,tolanguage,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.GetGoogtextStr(textstr,language,tolanguage,onSuccess,onFailed,userContext); }
DataService.App360WebService.UpdHtml= function(category,path,url,onSuccess,onFailed,userContext) {DataService.App360WebService._staticInstance.UpdHtml(category,path,url,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('L.Platform');
if (typeof(L.Platform.BooleanResult) === 'undefined') {
L.Platform.BooleanResult=gtc("L.Platform.BooleanResult");
L.Platform.BooleanResult.registerClass('L.Platform.BooleanResult');
}
