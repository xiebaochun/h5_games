var imageBase = '../public/img/guaguale/';
var debug = false;
var top_tips_timer = null;
var prize_width = 3;
$(function(){
	var app = new Vue({
	  el: '#app',
	  data: {
	    step: 1,
	    is_selected: false,
	    is_selected_: false,
	    is_running: true,
	    user_info: {username:'',hdcoin:0},
	    top_tip: {},
	    random_tips:[
	    	{
	    		msg:'嘿，朋友~<br/>要不要试试手气?',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'我看你天庭饱满，<br/>必是有福之人啊~',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'说来你可能不信，很多年前一个<br>姓马的就是在我这里拿走了第一桶金...',
	    		fontSize: 1,
	    	},
	    	{
	    		msg:'客官~<br>别那么冷漠的看着我嘛~',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'既然那么有缘，<br/>就来玩两把吧~',
	    		fontSize: 1.5,
	    	}
	    	
	    ],
	    get_prize_tips:[
	    	{
	    		msg:'运气不错啊～',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'最近中奖的人太多了...',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'生意难做啊...',
	    		fontSize: 1.5,
	    	}
	    	
	    ],
	    unget_prize_tips: [
	    	{
	    		msg:'别灰心～',
	    		fontSize: 1.5,
	    	},
	    	{
	    		msg:'我保证下一张肯定有大奖~',
	    		fontSize: 1.5,
	    	},
	    	
	    ],
	    pop:{
	    	isHide: true,
	    	fadeOut: false,
	    	content: '恭喜',
	    	bg:'../public/img/guaguale/dialog.png'
	    },
	    is_prize_bg: false,
	    prize_bg: '',
	    prize_bgs: ['tickets/get_prize.png','tickets/unget_prize.png'],
	    emotions:[
	    	'emotion/awkward.png',//尴尬
	    	'emotion/blackface.png',//黑脸
	    	'emotion/calm.png',//冷静
	    	'emotion/excit.png',//兴奋
	    	'emotion/happy.png',//高兴
	    	'emotion/speak_1.png',//说话-1
	    	'emotion/speak_2.png'//说话-2
	    ],
	    emotion_url: '',
	    cats:[
	    	'cats/cat1-1.png',
	    	'cats/cat1-2.png',
	    	'cats/cat2-1.png',
	    	'cats/cat2-2.png',
	    ],
	    buttons:[
	    	'buttons/try.png',
	    	'buttons/try_after.png',
	    	'buttons/try_disable.png'
	    ],
	    button_url: imageBase + 'buttons/try_disable.png',
	    prizes:[
	    	{
	    		img: imageBase + 'prizes/A.png',
	    		left: 1.5,
	    		width: prize_width,
	    	},
	    	{
	    		img: imageBase + 'prizes/B.png',
	    		left: 5.5,
	    		width: prize_width*0.8,
	    	},
	    	{
	    		img: imageBase + 'prizes/C.png',
	    		left: 9.5,
	    		width: prize_width*0.9,
	    	},
	    	{
	    		img: imageBase + 'prizes/D.png',
	    		left: 13.5,
	    		width: prize_width*0.7,
	    	},
	    	{
	    		img: imageBase + 'prizes/E.png',
	    		left: 17,
	    		width: prize_width*0.7,
	    	},
	    	{
	    		img: imageBase + 'prizes/F.png',
	    		left: 20.5,
	    		width: prize_width,
	    	},
	    	{
	    		img: imageBase + 'prizes/G.png',
	    		left: 23,
	    		width: prize_width,
	    	}
	    ],
	    lines:[
	    	'../public/img/guaguale/line.png',
	    	'../public/img/guaguale/flash_line.gif',
	    ],
	    line:'../public/img/guaguale/line.png',
	    result: {},
	    result_info: '',
	    cat_url: '',
	    cat_type: 1,
	    has_new_gift: false,
	    has_try: false,
	    speak_timer: null,
	    is_opened: false,
	    is_show: false,
	    record_box: {
	    	is_show: false,
	    },
	    records: []
	  },
	  filters: {
		capitalize: function (value) {
		  if (!value) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		},
		int: function(value) {
			return parseInt(value);
		}
	},	
	  created: function(){
	  	this.init();
	  },
	  methods: {
	  	init: function(){

	  		var self = this;
	  		this.getUserInfo();

	  		this.getRecord();

	  		this.speak();

	  		this.emotion_url = imageBase + this.emotions[4];
	  		// 猫动画
	  		var cat_index = 0;

	  		// this.cat_type = 2;
	  		setInterval(function(){
	  			cat_index++;
	  			cat_index = cat_index%2;
	  			self.cat_url = imageBase +  'cats/cat' + self.cat_type + '-'+ (cat_index+1) +'.png';
	  		},500);


	  		var randomTipIndex = parseInt(Math.random() * 5);
	  		this.top_tip = this.random_tips[randomTipIndex];

	  		clearInterval(top_tips_timer);

	  		top_tips_timer = setInterval(function(){
	  			if(self.step == 1){
		  			var randomTipIndex = parseInt(Math.random() * 5);
		  			self.top_tip = self.random_tips[randomTipIndex];
	  			}
	  		}, 5000);
	  	},
	  	reset: function(){
	  		this.step = 1;
		    this.is_selected = false;
		    this.is_selected_ = false;
		    this.is_running = true;
		    this.user_info = {username:'',hdcoin:0};
		    this.top_tip = {};
		    
		    this.pop = {
		    	isHide: true,
		    	fadeOut: false,
		    	content: '恭喜',
		    	bg:'../public/img/guaguale/dialog.png'
		    };
		    this.is_prize_bg = false;
		    this.prize_bg = '';
		    
		
		    this.line = '../public/img/guaguale/line.png';
		    this.result =  {};
		    this.result_info =  '';
		    this.cat_url =  '';
		    this.cat_type =  1;
		    this.has_new_gift =  false;
		    this.has_try =  false;
		    this.speak_timer =  null;
		    this.is_opened =  false;
		    this.is_show =  false;
		    this.record_box = {
		    	is_show: false,
		    };
		    this.records = [];
	  		this.init();
	  	},
	  	try_:function(){
	  		var self = this;
	  		this.step = 2;
	  		this.has_try = true;
	  		this.button_url = imageBase + this.buttons[1];
	  		//('.ticket-wrap').css({'background':'url(../public/img/guaguale/flash_line.gif)'});
	  		this.line = this.lines[1];
	  		this.top_tip = {
	  			msg: '来来来~<br/>选一张属于你的幸运牌吧!',
	  			fontSize: 1.5
	  		}
	  		setTimeout(function(){
	  			if(self.is_running){
	  				self.stop();
	  			}
	  		},2500);
	  	},
	  	speak:function(){
	  		var self = this;
	  		var index = 0;
	  		this.speak_timer = setInterval(function(){
	  			index++;
	  			index = index%2;
	  			self.emotion_url = imageBase + self.emotions[index+4];
	  		},500);
	  	},
	  	stopSpeak: function(){
	  		clearInterval(this.speak_timer);
	  	},
	  	getUserInfo:function(){
	  		var self = this;
	  		this.user_info = {
	  			username: 'xiebaochun',
	  			hdcoin: 20000,
	  		}
	  		if(self.user_info.hdcoin >= 100){
					self.button_url = imageBase + self.buttons[0];
				}else{
					self.button_url = imageBase + self.buttons[2];
				}

	  		if(debug) return;
	  		api_post('GetUserInfo', 'AppAPI', function(ret){
	  			console.log('用户信息：');
	  			console.log(ret);
	  			if(ret.status == 200){
	  				self.user_info = ret.data;
	  				if(self.user_info.hdcoin >= 100){
	  					self.button_url = imageBase + self.buttons[0];
	  				}else{
	  					self.button_url = imageBase + self.buttons[2];
	  				}
	  			}
	  		});
	  	},
	  	getRecord: function(){
	  		var self = this;
	  		api_post('ScratchTicketRecord', 'MS_USER_API', function(ret){
	  			console.log('获奖记录');
	  			console.log(ret);
	  			if(ret.status == 200){
	  				self.records = ret.data;
	  				
	  			}
	  		});
	  	},
	  	stop: function() {
	  		var self = this;
	  		if(!this.is_running || this.step == 1) {
	  			return;
	  		}
	  		//this.guaAction();
	  		var self = this;
	  		
	  		console.log('sdds');
	  		this.is_running = false;
	  		setTimeout(function(){
	  			self.guaAction();
	  		},2500);
	  		
	  	},
	  	reflashCanvas: function(){
	  		this.is_prize_bg = true;
	  		this._initCanvas();
	  	},
	  	openRecord:function(){
	  		this.getRecord();
	  		this.record_box.is_show = true;
	  	},
	  	closeRecord: function(){
	  		this.record_box.is_show = false;
	  	},
	  	guaAction: function(event) {
	  		if(event){
	  			console.log(event.currentTarget);
	  		}
	  		if(this.is_selected || this.step == 1 || this.is_running) return;
	  		//this.guaAction();
	  		var self = this;
	  		self.is_selected = true;

	  		setTimeout(function(){
	  			self.top_tip = {
	  				msg:'快刮开图层',
	  				fontSize: 2
	  			}
	  			self.is_selected_ = true;
	  			self.stopSpeak();
	  			self.emotion_url = imageBase + self.emotions[2];
	  			self.reflashCanvas();
	  		}, 2000);
	  		
	  		var ret = self.result = {
	  			status: 200,
	  			data: {
	  				prizes_num: '888互换币',
	  			}
	  		}
	  		self.result_info = (ret.data && ret.data.prizes_num) || ret.msg;
	  		if(self.result.status == 200){
	  				self.prize_bg = imageBase + self.prize_bgs[0];
	  			}else{
	  				self.prize_bg = imageBase + self.prize_bgs[1];
	  			}	
	  		if(debug) return;
	  		api_post('ScratchTicket', 'AppAPI', function(ret){
	  			console.log(ret);
	  			self.result = ret;
	  			self.result_info = (ret.data && ret.data.prizes_num) || ret.msg;
	  			if(ret.status == 200){
	  				self.prize_bg = imageBase + self.prize_bgs[0];
	  			}else{
	  				self.prize_bg = imageBase + self.prize_bgs[1];
	  			}	
	  		});
	  		
	  	},
	  	openResult: function(ret) {
	  		var self = this;
	  		if(this.is_opened) return;
	  		this.is_opened = true;
	  		this.cat_type = 2;
	  		this.stopSpeak();
	  		if(ret.status == 200){
	  			setTimeout(function(){
	  				self.openPopBox(null, '恭喜你，获得' + (ret.data && ret.data.prizes_num) || ret.msg);
	  			},1500);
	  			var randomTipIndex = parseInt(Math.random() * 3);
	  			self.top_tip = self.get_prize_tips[randomTipIndex];
	  			self.emotion_url = imageBase + self.emotions[4];
	  		}else{
	  			setTimeout(function(){
	  				self.openPopBox(null, (ret.data && ret.data.prizes_num) || ret.msg);
	  			},1500);
	  			var randomTipIndex = parseInt(Math.random() * 2);
	  			self.top_tip = self.unget_prize_tips[randomTipIndex];
	  			self.emotion_url = imageBase + self.emotions[1];
	  		}	
	  	},
	  	openPopBox: function(gift, content) {
	  		this.pop.content = content;
	  		this.pop.isHide = false;
	  	},
	  	closePopBox:function() {
	  		var self = this;
	  		this.pop.fadeOut = true;
	  		setTimeout(function(){
	  			self.pop.fadeOut = false;
	  			self.pop.isHide = true;
	  			self.reset();	
	  		},600);
	  		// this.$pop.addClass('none').children('.body').removeClass('animated');
	  		// this.$pop.find('.info span').text('');
	  	},
	  	_initCanvas: function() {
	  		var self = this;
  			var c1;				//画布
  			var ctx;			//画笔
  			var ismousedown;	//标志用户是否按下鼠标或开始触摸
  			var isOk=0;			//标志用户是否已经刮开了一半以上
  			var fontem = parseInt(window.getComputedStyle(document.documentElement, null)["font-size"]);//这是为了不同分辨率上配合@media自动调节刮的宽度
  			var clientWidth = document.body.clientWidth;
  			var clientHeight = document.body.clientHeight;
  			//console.log(clientWidth);
  			/* 页面加载后开始初始化画布 */
  			//window.onload = function(){	
				c1 = document.getElementById("c1");
				
				//这里很关键，canvas自带两个属性width、height,我理解为画布的分辨率，跟style中的width、height意义不同。
				//最好设置成跟画布在页面中的实际大小一样
				//不然canvas中的坐标跟鼠标的坐标无法匹配
				c1.width=c1.clientWidth;
				c1.height=c1.clientHeight;
				ctx = c1.getContext("2d");
				
				//PC端的处理
				c1.addEventListener("mousemove",eventMove,false);
				c1.addEventListener("mousedown",eventDown,false);
				c1.addEventListener("mouseup",eventUp,false);
			
				//移动端的处理
				c1.addEventListener('touchstart', eventDown,false);
		    	c1.addEventListener('touchend', eventUp,false);
		    	c1.addEventListener('touchmove', eventMove,false);
				
				//初始化
				initCanvas();
  			//}

  			//初始化画布，画灰色的矩形铺满
  			function initCanvas(){
  				//网上的做法是给canvas设置一张背景图片，我这里的做法是直接在canvas下面另外放了个div。
  				//c1.style.backgroundImage="url(中奖图片.jpg)";
  				ctx.globalCompositeOperation = "source-over";
  				ctx.fillStyle = '#aaaaaa';
  				ctx.fillRect(0,0,c1.clientWidth,c1.clientHeight);
  				ctx.fill();
  				
  				ctx.font = "Bold 30px Arial";
  						ctx.textAlign = "center";
  						ctx.fillStyle = "#999999";
  						ctx.fillText("刮开此图层",c1.width/2,60);
  				
  				var img=document.getElementById("tulip");
				ctx.drawImage(img,0,0,c1.width,c1.height);
  				//把这个属性设为这个就可以做出圆形橡皮擦的效果
  				//有些老的手机自带浏览器不支持destination-out,下面的代码中有修复的方法
  				ctx.globalCompositeOperation = 'destination-out';
  			}

  			//鼠标按下 和 触摸开始
  			function eventDown(e){
  				e.preventDefault();
  				ismousedown=true;
  			}
  			
  			//鼠标抬起 和 触摸结束
  			function eventUp(e){
  				e.preventDefault();
  				
  				//得到canvas的全部数据
  				var a = ctx.getImageData(0,0,c1.width,c1.height);
  				var j=0;
  				for(var i=3;i<a.data.length;i+=4){
  						if(a.data[i]==0)j++;
  				}
  			
  				//当被刮开的区域等于一半时，则可以开始处理结果
  				if(j>=a.data.length/8){
  					isOk = 1;
  				}
  				ismousedown=false;
  			}
  			var count = 0;
  			//鼠标移动 和 触摸移动
  			function eventMove(e){
  				count++;
  				if(count > 80){
  					self.openResult(self.result);
  				}

  				e.preventDefault();
  				if(ismousedown) {
  					 if(e.changedTouches){
  						 e=e.changedTouches[e.changedTouches.length-1];
  					 }
  				var topY = document.getElementById("top").offsetTop;
  				var oX = c1.getBoundingClientRect().left,
  			    	oY = c1.getBoundingClientRect().top;
  			    	//console.log(oX + ':' + oY);
  			    	//console.log(e.clientX + ':' + e.clientY);
  				

  				//console.log(e.clientX+':'+e.clientY);
  				var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0,
  					y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;
  					x = e.clientX - oX;
  					y = e.clientY - oY;
  				//console.log(x+':'+y);
  			
  					//画360度的弧线，就是一个圆，因为设置了ctx.globalCompositeOperation = 'destination-out';
  					//画出来是透明的
  					 ctx.beginPath();
  					 diffX = clientWidth * (67/414);
  					 diffY = clientHeight * (284/736);
  					 //ctx.arc(x-diffX, y-diffY, fontem*1.2, 0, Math.PI * 2,true);
  					 ctx.arc(x, y, fontem*1.2, 0, Math.PI * 2,true);
  					 //下面3行代码是为了修复部分手机浏览器不支持destination-out
  					 //我也不是很清楚这样做的原理是什么
  					 c1.style.display = 'none';
  					 c1.offsetHeight;
  					 c1.style.display = 'inherit'; 
  					 
  					 ctx.fill();
  				}
  				
  				if(isOk){
  					var btn = document.getElementsByClassName("btn");
  					for(var i=0; i<btn.length; i++){
  						btn[i].style.zIndex = '3';
  					}
  					document.getElementsByClassName("btn")[0].style.zIndex="3";
  				}
  			}
	  	}
	  }

	});
	;(function(){

		var imageBase = '../public/img/guaguale/';
		var $loader_pro = $('#loader-progress');
		function Loader(){
			this.init();
		}
		var p = Loader.prototype;
		p.loadedCount = 0;
		p.assets = [];
		p.loadImage = function(images){
			var self = this;
			for(var index in images){
				var img = new Image();
				img.src = images[index];
				img.addEventListener('load',function(){
					self.loadedCount ++;
					//log(this);
					self.loaderUpdate(self.loadedCount);
				});
				this.assets.push(img);
			}	
		}
		p.loaderUpdate = function(count){
			//log(count);
			$loader_pro.css({'width':(parseFloat(count)/this.assets.length  )*100+'%'});
			//alert(count/(this.assets.length));

			if(count >= (this.assets.length)){
				//game.remove(game.loadProgressText);
				setTimeout(function(){
					$loader_pro.parent().parent().addClass('animated fadeOut');
				},500);
  				setTimeout(function(){
					$loader_pro.parent().parent().remove();
				},1000);
			}
		}
		p.init = function(){
			var self = this;
			self.loadImage([
				imageBase + 'bg.png',
				imageBase + 'bottom_bg.png',
				imageBase + 'flash_line.gif',
				imageBase + 'line.png',
				imageBase + 'kuang.png',
				imageBase + 'top_bg.png',
				imageBase + 'light.png',
				imageBase + 'tickets/get_prize.png',
				imageBase + 'tickets/ticket.png',
				imageBase + 'tickets/ticket_min.png',
				imageBase + 'tickets/unget_prize.png',
				imageBase + 'emotion/awkward.png',
				imageBase + 'emotion/blackface.png',
				imageBase + 'emotion/calm.png',
				imageBase + 'emotion/excit.png',
				imageBase + 'emotion/happy.png',
				imageBase + 'emotion/speak_1.png',
				imageBase + 'emotion/speak_2.png',
				imageBase + 'cats/cat1-1.png',
				imageBase + 'cats/cat1-2.png',
				imageBase + 'cats/cat2-1.png',
				imageBase + 'cats/cat2-2.png',
				imageBase + 'tickets/get_prize.png',
				imageBase + 'tickets/origin_layer.png',
				imageBase + 'tickets/ticket.png',
				imageBase + 'tickets/ticket_min.png',
				imageBase + 'tickets/unget_prize.png',
				imageBase + 'buttons/ok.png',
				imageBase + 'buttons/try.png',
				imageBase + 'buttons/try_after.png',
				imageBase + 'buttons/try_disable.png',
				imageBase + 'crown_icon.png',
				]);
		}
		var loader = new Loader();
		window.loader = loader;
	})();
});
function isWeiXin(){
	 var ua = window.navigator.userAgent.toLowerCase();
	 if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	  return true;
	 }else{
	  return false;
	 }
}