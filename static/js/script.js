//中英文切换
var type = navigator.appName
if (type == "Netscape") {
    var lang = navigator.language
} else {
    var lang = navigator.userLanguage
}
//取得浏览器语言的前两个字母
var lang = lang.substr(0, 2)
setLang(lang);

$('.langToggle').on('click', function() {
    if ($('.langToggle').text() == 'English') {
        setLang('en')
    } else {
        setLang('zh')
    }
});

$("input:checkbox").change(function() {
    var content = $(this).prev();
    var icon = $(this).next();
    if ($(this).get(0).checked) {
        content.removeClass('ellips');
        content.css({ height: '100%' });
        icon.html('');
    } else {
        content.addClass('ellips');
        content.removeAttr('style');
        icon.html('<span style="color: #666">read more</span>');
    }
});


function setLang(lang) {
    if (lang == 'en') {
        $('.langToggle').html('中文');
        $('.changeLang .zh').hide();
        $('.changeLang .en').show();
    } else {
        $('.langToggle').html('English');
        $('.changeLang .en').hide();
        $('.changeLang .zh').show();
    }
}

function onMenu() {
    var header = $($('.head-grid .headerFr').get(0));
    if (header.height() > 0) {
        header.animate({ height: '0px' })
    } else {
        header.animate({ height: '320px' })
    }
}

// mobile 公告点击效果
$('.head-grid .title').on('click', function() {
    var title = $('.head-grid .title'),
    content = $('.head-grid .board-grid .content');
    title.css('display', 'none');
    content.css('display', 'block');
})
$('.head-grid .board-grid .close-btn').on('click', function() {
    $('.head-grid .board-grid .content').css('display', 'none');
    $('.head-grid .title').css('display', 'block')
})

$(function(){
	// 页面弹窗
	// setInterval();
});
// 定时器
// var timer = setInterval(function() {
// 	$(".notice").show();
// },1000);
// $(".btn_close,.icon_close").on('click', function(e){
// 	$(".notice").hide();
// 	clearInterval(timer);
// });

// 播放器



