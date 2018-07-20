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
  $(".container-fluid").width($(".container-fluid").width()-30);
  $(document).scroll(function() {
      var height = $(document).scrollTop();
      console.log(height);
      if (height >= 150) {
          $(".head").css({"background":"#fff","width":"100%"});
          $(".head a").css({"color":"#000"});
          $(".head li a").hover(function() {
            $(this).css({"color":"#e84140"});
          },function() {
            $(this).css({"color":"#000"});
          });
          $(".logo-img").attr("src","static/images/logo/logo-red0716.png");
          $(".header-img").attr("src","static/images/icon/email-black.png");
          $(".head").css({"border-bottom":"1px solid #e4e4e4"});
      } else {
        $(".head").css({"background": "none"});
        $(".head a").css({"color":"#fff"});
        $(".head li a").hover(function() {
          $(this).css({"color":"#e84140"});
        },function() {
          $(this).css({"color":"#fff"});
        });
        $(".header-img").attr("src","static/images/icon/email-white.png");
        $(".logo-img").attr("src","static/images/logo/logo-white0716.png");
        $(".head").css({"border-bottom":"none"});
        var width = $(document).width();
        if (width <768) {
          $(".logo-img").attr("src","static/images/logo/logo-red0716.png");
        }
      }
  })

});



function modelBox() {
  $('#myModal').modal('show');

}

var timer = setInterval(modelBox,1500);

// 点击按钮后关闭弹出窗口，关闭定时器
$(".close, .btn_close").on('click', function(){
  $('#myModal').modal('hide');
  clearInterval(timer);
});

// 实现点击除弹出容器的其它任何地方都可以关闭弹窗
$(document).click(function() {
  $('#myModal').modal('hide');
  clearInterval(timer);
});

$(".modal-content").click(function(e) {
  // 阻止事件冒泡，点击弹窗本身时不隐藏
  e.stopPropagation();
});




