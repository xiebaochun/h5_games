// images base path  http://owvh0dbfc.bkt.clouddn.com/mermaid/public/img/back.png
var imageBase = 'http://owvh0dbfc.bkt.clouddn.com/mermaid/public/img/';
var debug = false;
var editor = null;
var decoration_index = 0;
localStorage.setItem("musicPlay","1"); 
$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            step: 1,
            imgs: {
                bg: imageBase + 'bg.png',
                logo: imageBase + 'logo.png',
                bottom: imageBase + 'bottom.png',
                back: imageBase + 'back.png',
                music: imageBase + 'music.png'
            },
            pop: {
                isHide: true,
                fadeOut: false,
                musicOn:true,
                content: '恭喜',
            },
            isActive: true,
            step_1: {
                imgs: {
                    bg: imageBase + 'step_1/bg.png',
                    activity_rule_btn: imageBase + 'step_1/activity_rule_btn.png',
                    incounter_girl_btn: imageBase + 'step_1/incounter_girl_btn.png',
                    signup_btn: imageBase + 'step_1/signup_btn.png'
                }
            },
            step_2: {
                city: {},
                imgs: {
                    bg: imageBase + 'step_2/bg.png',
                    tips: imageBase + 'step_2/tips.png'
                },
                cities: [{
                        city: '成都',
                        place: '春熙路恒大广场'
                    },
                    {
                        city: '武汉',
                        place: '光谷广场柏林广场'
                    },
                    {
                        city: '广州',
                        place: '番禺万达'
                    },
                    {
                        city: '天津',
                        place: '国贸商场、凯德'
                    },
                    {
                        city: '济南',
                        place: '高新万达'
                    },
                    {
                        city: '沈阳',
                        place: '太原街万达'
                    },
                    {
                        city: '南京',
                        place: '河西万达'
                    },
                    {
                        city: '上海',
                        place: '松江万达'
                    }
                ],
                hots: [{
                        p: { x: 11, y: 58 }
                    },
                    {
                        p: { x: 44, y: 59 }
                    },
                    {
                        p: { x: 51, y: 74 }
                    },
                    {
                        p: { x: 68, y: 35 }
                    },
                    {
                        p: { x: 63, y: 45 }
                    },
                    {
                        p: { x: 82, y: 32 }
                    },
                    {
                        p: { x: 80, y: 47 }
                    },
                    {
                        p: { x: 80, y: 58 }
                    }
                ]
            },
            step_3: {
                form: {
                    name: '', // 姓名
                    phone: '', // 电话
                    height: '', // 身高
                    message: '', // 留言
                },
                imgs: {
                    addr_pointer: imageBase + 'step_3/addr_pointer.png',
                    next_btn: imageBase + 'step_3/next_btn.png',
                    form_bg: imageBase + 'step_3/form_bg.png',
                    message_board: imageBase + 'step_3/message_board.png'
                }
            },
            step_4: {
                canvas: null,
                imgs: {
                    bubble: imageBase  + 'step_4/bubble1.png',
                    fish_tail: imageBase  + 'step_4/fish_tail1.png',
                    headdress: imageBase  + 'step_4/headdress1.png',
                    gx: imageBase + 'step_4/gx.png',
                    my: imageBase + 'step_4/my.png',
                    ct: imageBase + 'step_4/ct.png',
                    bubble_big: imageBase  + 'step_4/bubble_big1.png',
                    fish_tail_big: imageBase  + 'step_4/fish_tail_big1.png',
                    headdress_big: imageBase  + 'step_4/headdress_big1.png',
                    gx_big: imageBase + 'step_4/gx_big.png',
                    my_big: imageBase + 'step_4/my_big.png',
                    ct_big: imageBase + 'step_4/ct_big.png',
                    picture_box_bg: imageBase + 'step_4/picture_box_bg.png',
                    upload_btn: imageBase + 'step_4/upload_btn.png',
                    again: imageBase + 'step_4/again.png'
                },
                bg: '',
                result_base64: '',
                result_size: 0,
                decoration_map: {},
                decorations: [{
                        img: './public/img/' + 'step_4/bubble_big1.png',
                        position: {
                            x: -150,
                            y: -150
                        },
                        scale: .3,
                        has_added: false,
                    },
                    {
                        img: './public/img/' + 'step_4/fish_tail_big1.png',
                        position: {
                            x: -350,
                            y: -10
                        },
                        scale: .3,
                        has_added: false,
                    },
                    {
                        img: './public/img/' + 'step_4/headdress_big1.png',
                        position: {
                            x: -50,
                            y: -50
                        },
                        scale: 0.3,
                        has_added: false,
                    },
                    {
                        img: './public/img/' + 'step_4/gx_big.png',
                        position: {
                            x: -50,
                            y: -50
                        },
                        scale: 0.3,
                        has_added: false,
                    },
                    {
                        img: './public/img/' + 'step_4/my_big.png',
                        position: {
                            x: -50,
                            y: -50
                        },
                        scale: 0.3,
                        has_added: false,
                    },
                    {
                        img: './public/img/' + 'step_4/ct_big.png',
                        position: {
                            x: -50,
                            y: -50
                        },
                        scale: 0.3,
                        has_added: false,
                    }
                ],
            },
            step_5: {
                index: 1,

                imgs: {
                    bg: imageBase + 'step_5/bg.jpg',
                    competitor_photos_txt: imageBase + 'step_5/competitor_photos_txt.png',
                    qrcode: imageBase + 'step_5/qrcode.png',
                    title: imageBase + 'step_5/title.png',
                    message_box: imageBase + 'step_5/message_box.png'
                }
            },
            step_6: {
                imgs: {
                    competition_time_txt: imageBase + 'step_6/competition_time_txt.png',
                    incounter_other_girls: imageBase + 'step_6/incounter_other_girls.png',
                    long_press_btn: imageBase + 'step_6/long_press_btn.png',
                    qrcode: imageBase + 'step_6/qrcode.png',
                    bg: imageBase + 'step_6/bg.jpg'
                }
            },
            step_7: {
                imgs: {
                    bg: imageBase + 'step_7/bg.jpg',
                    load_more_txt: imageBase + 'step_7/load_more_txt.png',
                    top_banner: imageBase + 'step_7/top_banner.png'
                }
            },
            step_8: {
                imgs: {
                    bg: imageBase + 'step_8/bg.jpg',
                    bottom: imageBase + 'step_8/bottom.png',
                    logo: imageBase + 'step_8/logo.png',
                    top: imageBase + 'step_8/top.png',
                    title_1: imageBase + 'step_8/title_1.png',
                    title_2: imageBase + 'step_8/title_2.png',
                    load_more_txt: imageBase + 'step_8/load_more_txt.png'
                }
            },

        },
        filters: {
            capitalize: function(value) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            int: function(value) {
                return parseInt(value);
            }
        },
        created: function() {
            self = this;
            //this.initImageEditor();
        },
        methods: {
            init: function() {

            },
            backHome: function() {
                this.step = this.step - 1
            },
            musicHome: function() {
            	if(this.pop.musicOn ==true){
            		this.pop.musicOn=false;
            		this.isActive=false;
            		document.getElementById('bgMusic').pause();
            		localStorage.setItem("musicPlay","0"); 
            	}else{
            		this.pop.musicOn=true;
            		this.isActive=true;
            		document.getElementById('bgMusic').play();
            		localStorage.setItem("musicPlay","1"); 
            	}
            },
            start: function(key) {

            },
            goStep: function(index) {
                this.step = index;
            },
            // step-1 我要报名
            signup: function(index) {
                //if(index >= 7) {alert('敬请期待！');return};
                var city = this.step_2.cities[index];
                this.step_2.city = city;
                this.step = 3;
            },
            // step-1 邂逅星女郎
            incounter_girl: function() {
                this.step = 2;
            },
            // step-1 活动规则
            go_rule: function() {
                this.step = 8;
            },
            // step-3 next
            step_3_next: function() {
                if (!this.step_3.form.name ||
                    !this.step_3.form.phone ||
                    !this.step_3.form.height ||
                    !this.step_3.form.message) {
                    alert('请填写必要信息');
                    return;
                }
                if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.step_3.form.phone))) {
                    alert('请输入正确手机号');
                    return;
                }
                this.step = 4;
                setTimeout(function() {
                    initEditor();
                }, 500);
            },
            // step-4 选择装饰
            setDecorate: function(index) {
                var decorate = this.step_4.decorations[index];
                //editor.setImage(decorate.img,(index + 1),true, decorate.scale, null);
                if (this.step_4.decorations[index].has_added) {
                    editor.removeImage(this.step_4.decoration_map[index] + 1);
                    this.step_4.decorations[index].has_added = false;
                    decoration_index--;
                    return;
                }
                this.step_4.decorations[index].has_added = true;
                this.step_4.decoration_map[index] = decoration_index;
                decoration_index++;
                editor.addImage(decorate.img, true, decorate.scale);
            },
            // step-4 初始化图片编辑器
            initImageEditor: function() {
                // var canvas = this.step_4.canvas = document.getElementById('image-editor');
                // 
            },

            // step-4 合并图片
            mergeImage: function() {

            },
            step_4_set_bg: function(imageBase64) {
                this.step_4.bg = 'data:image/png;base64, ' + imageBase64;
                editor.setImage(this.step_4.bg, 0, true, 1, null);
                // editor.setImage(imageBase + 'empty.png',1,true, 1, null);
                // editor.setImage(imageBase + 'empty.png',2,true, 1, null);
                // editor.setImage(imageBase + 'empty.png',3,true, 1, null);
                //editor.setImageByObject(imageBase64,0,true, 1, null);

            },
            step_4_next: function() {
                confirmImage();

                var timestamp = new Date().valueOf();
                var sig = 'phone=' + this.step_3.form.phone + '&timestamp=' + timestamp;
                sig = md5(sig).toUpperCase();
                var postData = {
                    competition_area: this.step_2.city.city + ' ' + this.step_2.city.place,
                    name: this.step_3.form.name,
                    phone: this.step_3.form.phone,
                    height: this.step_3.form.height + '',
                    declaration: this.step_3.form.message,
                    base64Img: this.step_4.result_base64.replace(/data\:image\/(.+);base64,/, ''),
                    imgSize: this.step_4.result_size,
                    timestamp: timestamp,
                    sig: sig
                }
                api_post('savePlayerInfo', postData, function(ret) {
                    self.is_loading = false;
                    if (ret.code == 200) {
                        window.location.href = 'http://t1.miaoxing100.cn/H6/Mermaid/index.jsp?pid=' + (ret.Player && ret.Player.pid);
               
                    } else if (ret.code == '08') {
                        alert('您已经提交过信息');
                    } else {
                        alert('网络异常，请稍候尝试！');
                    }
                });

                //this.step = 5;


            },
            // step 6 next
            step_6_next: function() {
                window.location.href = 'http://t1.miaoxing100.cn/H5/Mermaid/competitors.jsp';
                //this.step = 7;
            },
            openPopBox: function(index) {
                this.pop.index = index || 0;
                this.pop.isHide = false;
            },
            closePopBox: function(callback) {
                var self = this;
                this.pop.fadeOut = true;
                setTimeout(function() {
                    self.pop.fadeOut = false;
                    self.pop.isHide = true;
                    callback && callback();
                }, 600);
            }
        }
    });

    ;
    (function() {
        var $loader_pro = $('#loader-progress');

        function Loader() {
            this.init();
        }
        var p = Loader.prototype;
        p.loadedCount = 0;
        p.assets = [];
        p.loadImage = function(images) {
            var self = this;
            for (var index in images) {
                var img = new Image();
                img.src = images[index];
                img.addEventListener('load', function() {
                    self.loadedCount++;
                    //log(this);
                    self.loaderUpdate(self.loadedCount);
                });
                this.assets.push(img);
            }
        }
        p.loaderUpdate = function(count) {
            //log(count);
            $loader_pro.css({ 'width': (parseFloat(count) / this.assets.length) * 100 + '%' });
            //alert(count/(this.assets.length));
            if (count >= (this.assets.length)) {
                //game.remove(game.loadProgressText);
                setTimeout(function() {
                    $loader_pro.parent().parent().addClass('animated fadeOut');
                }, 500);
                setTimeout(function() {
                    $loader_pro.parent().parent().remove();
                    app.init();
                }, 1000);
            }
        }
        p.init = function() {
            var self = this;
            self.loadImage([
                imageBase + 'step_1/bg.png',
                imageBase + 'step_1/activity_rule_btn.png',
                imageBase + 'step_1/incounter_girl_btn.png',
                imageBase + 'step_1/signup_btn.png'
            ]);
        }
        var loader = new Loader();
        window.loader = loader;
    })();

    // 图片编辑
    function initEditor() {
        var editorBox = document.getElementById('picture-box');
        editor = $('#editor').ImageEditor({
            imageUrls: [
                imageBase + 'empty.png',
                // imageBase + 'empty.png',
                // imageBase + 'empty.png',
                // imageBase + 'empty.png',
                //imageBase + 'step_1/bg.png',
            ],
            removeIcon: imageBase + 'step_4/delete.png',
            width: editorBox.clientWidth,
            height: editorBox.clientHeight,
            onInitCompleted: function() {
                editor.selectImage(0);
            }
        });
    }



    function confirmImage() {
        var cvs = editor.mergeImage(),
            $img = $('<img>');
        app.$data.step_4.result_base64 = cvs.toDataURL();
        //$img.attr('src', cvs.toDataURL());
        // //$('#outputs').append($img);
        // $('#outputs').append($(cvs));
    }

    $('body').on('touchstart', '.editor > span', function() {
        //alert($(this).data('index'));
        var index = parseInt($(this).data('index'));
        editor.selectImage(index);
    });

    // 本地图片上传
    var handleFileSelect = function(evt) {
        var files = evt.target.files;
        var file = files[0];
        app.$data.step_4.result_size = file.size;
        if (files && file) {
            var reader = new FileReader();
            reader.onload = function(readerEvt) {
                var binaryString = readerEvt.target.result;
                //app.$data.step_4.bg = btoa(binaryString);
                app.step_4_set_bg(btoa(binaryString));
                //document.getElementById("base64textarea").value = btoa(binaryString);
            };

            reader.readAsBinaryString(file);
        }
    };
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
        document.getElementById('again').addEventListener('change', handleFileSelect, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }


});
