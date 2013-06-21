if(typeof PicFocusManager == "undefined")
	{
		PicFocusManager =[];
	}
	function PicFocus(imageContainerID,textContainerID,buttonContainerID,intervarTime){
		this.$ = function (id){return document.getElementById(id)}
		this.index = PicFocusManager.length;
		PicFocusManager[PicFocusManager.length] = this;
		this.imageContainer = this.$(imageContainerID);
		this.textContainer = this.$(textContainerID);
		this.buttonContainer = this.$(buttonContainerID);
		this.firstShow = 0; //默认显示项
		this.interval = (isNaN(intervarTime)?0:intervarTime) || 5000; //切换时间
		this.canAutoPlay = true; //是否可以自动切换
		this.currentPosition = this.firstShow;
		this.timer;
		this.images = [];
		this.texts = [];
		this.buttons = [];
		this.bindEvent = function(){
			var _self = this;
			for(var i=0;i<this.images.length;i++){
				this.images[i].onmouseover = function(){
					_self.stop();
				}
				this.images[i].onmouseout = function(){
					_self.timer = setTimeout('PicFocusManager[' + _self.index + '].play()' , _self.interval )
				}
			}
			for(var i=0;i<this.buttons.length;i++){
				this.buttons[i].onmouseover = function(){
					_self.focus(this);
				}
			}
		}
		this.play = function(){
			if(this.canAutoPlay){
				this.setFocus(this.currentPosition ++ )
				if(this.currentPosition >= this.images.length)this.currentPosition =0 ;
				this.timer = setTimeout('PicFocusManager[' + this.index + '].play()' , this.interval )
			}
		}
		this.stop = function(){
			clearTimeout( this.timer );
		}
		this.focus = function(button){
			for(var i=0;i<this.buttons.length;i++){
				if(this.buttons[i] == button){
					this.currentPosition = i;
					this.setFocus(this.currentPosition);
					break;
				}
			}
		}
		this.setFocus = function(i){
			try{
				this.imageContainer.filters[0].apply();
				this.imageContainer.filters[0].play();
			}catch(e){}
			for(var j=0;j<this.images.length;j++){
				this.images[j].style.display = (i==j)?"":"none";
			}
			for(var j=0;j<this.texts.length;j++){
				this.texts[j].style.display = (i==j)?"":"none";
			}
			for(var j=0;j<this.buttons.length;j++){
				this.buttons[j].className = (i==j)?"index":"";
			}
			try{  //滤镜版本
				new ActiveXObject("DXImageTransform.Microsoft.Fade");
				this.imageContainer.filters[0].play();
			}catch(e){}
		}
		this.init = function(){
			if(this.imageContainer && this.imageContainer && this.imageContainer){
				//init
				this.images=this.imageContainer.getElementsByTagName("li");
				//this.texts=this.textContainer.getElementsByTagName("li");
				this.buttons=this.buttonContainer.getElementsByTagName("a");
				this.bindEvent();
				for(var i=0;i<this.images.length;i++){
					this.images[i].style.display = "none";
					//this.texts[i].style.display = "none";
					this.buttons[i].className = "";
					this.buttons[i].target = "_self";
				}
				this.images[this.firstShow].style.display = "block";
				//this.texts[this.firstShow].style.display = "block";
				this.buttons[this.firstShow].className = "index";
			}else{
				alert("未提供正确的参数")
			}
		}
	}