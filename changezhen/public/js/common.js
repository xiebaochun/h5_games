// post root url
var API_ROOT_URL = 'http://118.190.25.221/wap/game/';
var guid = 'ca9bcb33-6e8b-4506-a8a6-24d7f54ed1af';

// api post common method
function api_post(method, type, callback) {
    //var requestData = '' + requestData;
    //var url = encodeURIComponent(AES_encrypt(JSON.stringify(requestData)));
    var url = '?method=' + method + '&type=' + type + '&guid=' + guid;
    $.ajax({
        url: API_ROOT_URL + '/' + method + url,
        type: 'get',
        success: function(ret) {
            if(ret.status == 200){
                callback(ret);
            }else{
                callback(ret)
                if(ret.show_err){
                    dialog.error(ret.show_err);
                }
            }
        },
        error: function(error) {
            dialog.error('服务器繁忙！');
        }
    });
}
// rem.js
!new function(){var a=this;a.width=750,a.fontSize=28,a.widthProportion=function(){var b=(document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/a.width;return b>1?1:b},a.changePage=function(){document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+a.widthProportion()*a.fontSize+"px !important")},a.changePage(),window.addEventListener("resize",function(){a.changePage()},!1)};
