// images base path
var imageBase = '../public/img/';
var debug = false;
$(function(){
	var app = new Vue({
	  el: '#app',
	  data: {
	    step: 0,
	    step_0: {
	    	imgs: {
	    		bg: imageBase + 'first/bg.png',
	    		logo: imageBase + 'first/logo.png',
	    		front: imageBase + 'first/front.png'
	    	}
	    },
	    step_1: {
	    	imgs: {
	    		bg: imageBase + 'step_1/bg.png',
	    		logo: imageBase + 'step_1/logo.png',
	    		title: imageBase + 'step_1/title.png',
	    		left_bottom_tips: imageBase + 'step_1/left_bottom_tips.png',
	    		right_bottom_hongjun: imageBase + 'step_1/right_bottom_hongjun.png',	
	    	}
	    },
	    step_2: {
	    	is_started: false,
	    	imgs: {
	    		arrow_1: imageBase + 'step_2/arrow_1.png',
	    		arrow_2: imageBase + 'step_2/arrow_2.png',
	    		arrow_3: imageBase + 'step_2/arrow_3.png',
	    		arrow_4: imageBase + 'step_2/arrow_4.png',
	    		arrow_5: imageBase + 'step_2/arrow_5.png',
	    		bg: imageBase + 'step_2/bg.png',
	    		black_star: imageBase + 'step_2/black_star.png',
	    		game_rule_bg: imageBase + 'step_2/game_rule_bg.png',
	    		hand: imageBase + 'step_2/hand.png',
	    		red_star: imageBase + 'step_2/red_star.png',
	    		rule_btn: imageBase + 'step_2/rule_btn.png',
	    		rule_ensure: imageBase + 'step_2/rule_ensure.png',
	    		star_icon: imageBase + 'step_2/star_icon.png'
	    	},
	    	stars: [
	    		{
	    			status: 0, // 0-black, 1-red
	    			position: {
	    				x: 66,
	    				y: 70
	    			}
	    		},
	    		{
	    			status: 0, // 0-black, 1-red
	    			position: {
	    				x: 48.5,
	    				y: 61.5
	    			}
	    		},
	    		{
	    			status: 0, // 0-black, 1-red
	    			position: {
	    				x: 31.5,
	    				y: 61.5
	    			}
	    		},
	    		{
	    			status: 0, // 0-black, 1-red
	    			position: {
	    				x: 17,
	    				y: 50
	    			}
	    		},
	    		{
	    			status: 0, // 0-black, 1-red
	    			position: {
	    				x: 40.5,
	    				y: 31
	    			}
	    		},
	    	],
	    	arrows: [
	    		{
	    			status: 0, // 0-hide, 1-show
	    			direction: 0, // 0-horizantal, 1-vertical
	    			width: 4,
	    			position: {
	    				x: 56,
	    				y: 64
	    			},
	    		},
	    		{
	    			status: 0, // 0-hide, 1-show
	    			direction: 0, // 0-horizantal, 1-vertical
	    			width: 4,
	    			position: {
	    				x: 37.5,
	    				y: 61
	    			},
	    		},
	    		{
	    			status: 0, // 0-hide, 1-show
	    			direction: 0, // 0-horizantal, 1-vertical
	    			width: 4,
	    			position: {
	    				x: 22,
	    				y: 52
	    			},
	    		},
	    		{
	    			status: 0, // 0-hide, 1-show
	    			direction: 0, // 0-horizantal, 1-vertical
	    			width: 6,
	    			position: {
	    				x: 23,
	    				y: 33
	    			},
	    		},
	    		{
	    			status: 0, // 0-hide, 1-show
	    			direction: 0, // 0-horizantal, 1-vertical
	    			width: 8,
	    			position: {
	    				x: 40,
	    				y: 17.5
	    			},
	    		},
	    	],
	    	hand: {
	    		status: 0,
	    	}
	    },
	    step_3: {
	    	imgs: {
	    		ensure_btn: imageBase + 'step_3/ensure_btn.png',
	    		form_bg: imageBase + 'step_3/form_bg.png',
	    		front_rect: imageBase + 'step_3/front_rect.png',
	    		go_last_btn: imageBase + "step_3/go_last_btn.png"
	    	}
	    },
	    step_5: {
	    	imgs: {
	    		bg: imageBase + 'last/bg.png',
	    		activity_time: imageBase + 'last/activity_time.png',
	    		content: imageBase + 'last/content.png',
	    		front: imageBase + 'last/front.png',
	    		title: imageBase + 'last/title.png',
	    		last: imageBase + 'last/last.png',
	    		daiyanren: imageBase + 'last/daiyanren.png'
	    	}
	    },   
	    answer: {
	    	index: 0,
	    	is_show: false,
	    	selected_key: -1,
	    	answer_right_count: 0,// 答对题数
	    	has_retried: false,
	    	show_congratulation: false,
	    	imgs: {
	    		answer_right_box: imageBase + 'answer/answer_right_box.png',
	    		answer_wrong_box: imageBase + 'answer/answer_wrong_box.png',
	    		continue_btn: imageBase + 'answer/continue_btn.png',
	    		flute: imageBase + 'answer/flute.png',
	    		front_rect: imageBase + 'answer/front_rect.png',
	    		grenade: imageBase + 'answer/grenade.png',
	    		gun: imageBase + 'answer/gun.png',
	    		hat: imageBase + 'answer/hat.png',
	    		kettle: imageBase + 'answer/kettle',
	    		reanswer_btn: imageBase + 'answer/reanswer_btn.png',
	    		shoes: imageBase + 'answer/shoes.png',
	    		top_img: imageBase + 'answer/top_img.png',
	    		wrong_icon: imageBase + 'answer/wrong.png',
	    		right_icon: imageBase + 'answer/right.png',
	    		get_btn: imageBase + 'answer/get_btn.png',
	    		wrong_end: imageBase + 'answer/wrong_end.png',
	    		story_images: [
	    			imageBase + 'answer/flute.png',
	    			imageBase + 'answer/grenade.png',
	    			imageBase + 'answer/gun.png',
	    			imageBase + 'answer/hat.png',
	    			imageBase + 'answer/kettle.png',
	    			imageBase + 'answer/shoes.png',
	    		]
	    	},
	    	hongbao: [0,2,3,5,6,8,10],
	    	story_image: imageBase + 'answer/grenade.png',
	    },
	    pop:{
	    	isHide: true,
	    	fadeOut: false,
	    	index: 2,
	    	content: '恭喜',
	    	bg:'../public/img/dialog.png',
	    },
	    rule_contents: [
	    	'凡参与本次互动游戏者攻破两个关卡即可获得随机鼓励<span class="color-red">红包一个</span>；',
	    	'凡参与本次互动游戏者攻破四个关卡者即可获得<span class="color-red">XXX</span>；',
	    	'凡参与本次互动游戏者攻破全部关卡即可获得<span class="color-red">XXX</span>；',
	    	'凡参与获奖者在登记具体信息后，7个工作日内当地<span class="color-red">冠珠陶瓷<span>门店通知您本人到店领取礼品。'
	    ],
	    questions: [
	    	{
	    		title: '1. 红军长征开始后的第一战是（  ）',
	    		candidates: [
	    			'A.瑞金战役',
	    			'B.湘江战役',
	    			'C.平型关战役',
	    			'D.直罗镇战役'
	    		],
	    		hostory: '1934年11月27日，红军先头部队突破蒋介石在湘江界首防线，拉开了湘江血战的序幕。这是红军长征开始后的第一战，也是损失最为惨重的一战。',
	    		answer: 1,
	    		has_retried: false
	    	},
	    	{
	    		title: '2.1936年红军三大主力胜利会师的地点是(  )',
	    		candidates: [
	    			'A.吴起镇',
	    			'B.会宁',
	    			'C.甘孜 ',
	    			'D.懋功'
	    		],
	    		hostory: '1936年10月，红一方面军、红二方面军、红四方面军三大主力在甘肃会宁胜利会师，宣告红军二万五千里长征胜利结束。',
	    		answer: 1,
	    		has_retried: false
	    	},
	    	{
	    		title: '3.长征红军跳出敌人包围是在(  )',
	    		candidates: [
	    			'A.四渡赤水河',
	    			'B.渡过金沙江',
	    			'C.强渡大渡河',
	    			'D.翻过大雪山'
	    		],
	    		hostory: '1935年5月3日，红军夺取皎平渡，靠着找到的7条小木船和当地36名各族船工顺利渡过金沙江，跳出了数十万敌军围追堵截的包围圈。',
	    		answer: 1,
	    		has_retried: false
	    	},
	    	{
	    		title: '4. 保存了中国共产党和红军的基干力量，使中国革命转危为安，为开创中国革命的新局面而奠定了基础的是（  ）',
	    		candidates: [
	    			'A．国民革命军北伐',
	    			'B．红军第五次反“围剿”斗争',
	    			'C．遵义会议',
	    			'D．红军长征'
	    		],
	    		hostory: '1934年10月—1936年10月，二万五千里长征胜利结束，粉碎了国民党反动派妄图扼杀中国革命的企图，保存了党的基干力量，为开创中国革命新局面奠定了基础。',
	    		answer: 3,
	    		has_retried: false
	    	},
	    	{
	    		title: '5. “红军不怕远征难，万水千山只等闲”。当年红军“远征”的原因是（  ）',
	    		candidates: [
	    			'A.东北沦陷，华北告急',
	    			'B.把革命火种播撒到西部',
	    			'C.红军第五次反围剿失利',
	    			'D.北伐战争失败'
	    		],
	    		hostory: '由于党内“左”倾教条主义的错误领导和李德的错误指挥，1934年10月中旬，中央革命根据地第五次反“围剿”斗争失利。中央红军主力被迫撤离中央革命根据地，实行战略转移，开始长征。',
	    		answer: 2,
	    		has_retried: false
	    	},
	    	{
	    		title: '6. 1935年1月15日至17日，中共中央在何地召开了具有伟大历史意义的政治局扩大会议（  ）',
	    		candidates: [
	    			'A.黎平',
	    			'B.瓦窑堡',
	    			'C.遵义',
	    			'D.宁远'
	    		],
	    		hostory: '1935年1月15日至17日，在遵义原黔军师长柏辉章公馆的二层小楼里，中共中央召开了政治局扩大会议，通过了毛泽东为中央政治局常委等4项决定，实际上确立了毛泽东的正确领导地位。',
	    		answer: 2,
	    		has_retried: false
	    	}
	    ],
	    star_flash_timer: null,
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
	  created: function() {
	  	//this.init();
	  },
	  methods: {
	  	init: function() {
	  		if(debug) return;
	  		self = this;
	  		setTimeout(function(){
	  			self.step = 1;
	  			setTimeout(function(){
	  				self.step = 2;
	  			},2000);
	  		}, 2000);

	  		self.star_flash_timer = setInterval(function(){
	  			self.step_2.stars[0].status = !self.step_2.stars[0].status;
	  		},500);
	  	},
	  	start: function(key) {
	  		if(key != 0) return;
	  		this.getStoryImg();
	  		this.step = 3;
	  		this.step_2.is_started = true;
	  		this.answer.index = 0;
	  		clearInterval(self.star_flash_timer);
	  	},
	  	reset: function() {
	  		
	  	},
	  	selectAnswer: function(index) {
	  		this.answer.is_show = true;
	  		this.answer.selected_key = index;
	  		setTimeout(function(){
	  			self.answer.selected_key = -1;
	  			self.answer.is_show = false;
		  		if(index == self.questions[self.answer.index].answer){
		  			console.log(self.answer.answer_right_count +':'+ self.answer.index);
		  			if(self.answer.answer_right_count ==4 && self.answer.index == 5){
		  				self.openPopBox(2);
		  				self.answer.answer_right_count++;
		  				setTimeout(function(){
			  				self.answer.show_congratulation = true;
			  			},2000);
		  				return;
		  			}
		  			self.openPopBox(2);
		  			self.step_2.stars[self.answer.index] && (self.step_2.stars[self.answer.index].status = 1);
		  			self.answer.answer_right_count++;
		  			if(self.answer.answer_right_count >= 6){
			  			setTimeout(function(){
			  				self.answer.show_congratulation = true;
			  			},2000);
		  			}
		  		}else{
		  			if(self.answer.has_retried){
		  				self.openPopBox(3);
		  			}else{
		  				self.answer.has_retried = true;
		  				self.openPopBox(1);
		  			}
		  		}
	  		},1000)
	  	},
	  	retry: function() {
	  		//if(this.answer.has_retried) return;
	  		this.closePopBox(function(){
	  			self.answer.has_retried = true;
	  		});
	  		// if(this.questions[this.answer.index].has_retried) return;
	  		// this.closePopBox(function(){
	  		// 	self.questions[self.answer.index].has_retried = true;
	  		// });
	  	},
	  	_continue: function() {
	  		if(self.answer.index >= 5){
	  			this.closePopBox(function(){
	  				self.step = 4;
	  			});
	  			return;	
	  		}
	  		this.step = 2;
	  		this.getStoryImg();

	  		this.closePopBox(function(){
		  		self.answer.index++;
		  		self.step_2.arrows[self.answer.index-1] && (self.step_2.arrows[self.answer.index-1].status = 1);
	  		});
	  		setTimeout(function(){
	  			self.step = 3;
	  		},3000);
	  	},
	  	// 获取红包
	  	getHongbao: function(){
	  		this.closePopBox(function(){
	  			self.step = 4;
	  		});
	  	},
	  	getStoryImg: function(){
	  		var  randomIndex = parseInt(Math.random() * self.answer.imgs.story_images.length); 
	  		self.answer.story_image = self.answer.imgs.story_images[randomIndex];
	  		self.answer.imgs.story_images.splice(randomIndex, 1);
	  	},
	  	submit_info: function() {
	  		alert('提交信息');
	  	},
	  	go_last: function() {
	  		this.step = 5;
	  	},
	  	openPopBox: function(index) {
	  		this.pop.index = index || 0;
	  		this.pop.isHide = false;
	  	},
	  	closePopBox:function(callback) {
	  		var self = this;
	  		this.pop.fadeOut = true;
	  		setTimeout(function(){
	  			self.pop.fadeOut = false;
	  			self.pop.isHide = true;
	  			callback && callback();
	  		},600);
	  	}
	  }
	});

	;(function(){
		var imageBase = '../public/img/';
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
					app.init();
				},1000);
			}
		}
		p.init = function(){
			var self = this;
			self.loadImage([
				imageBase + 'step_1/bg.png',
				imageBase + 'step_1/left_bottom_tips.png',
				imageBase + 'step_1/right_bottom_hongjun.png',
				imageBase + 'step_1/logo.png',
				imageBase + 'step_1/title.png',
				imageBase + 'step_2/bg.png',
				imageBase + 'answer/flute.png',
    			imageBase + 'answer/grenade.png',
    			imageBase + 'answer/gun.png',
    			imageBase + 'answer/hat.png',
    			imageBase + 'answer/kettle.png',
    			imageBase + 'answer/shoes.png',
				]);
		}
		var loader = new Loader();
		window.loader = loader;
	})();
});
