//中英文切换
var type = navigator.appName;
if (type == "Netscape") {
    var lang = navigator.language
} else {
    var lang = navigator.userLanguage
}
//取得浏览器语言的前两个字母
var lang = lang.substr(0, 2);
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
});
$('.head-grid .board-grid .close-btn').on('click', function() {
    $('.head-grid .board-grid .content').css('display', 'none');
    $('.head-grid .title').css('display', 'block');
});

$(function(){


  // 获取ip判断用户所在地区国家
  var ipAddr = returnCitySN["cip"];
  var city = returnCitySN['cname'];
  console.log(ipAddr+","+city);

  $.getJSON('http://api.map.baidu.com/location/ip?ak=F454f8a5efe5e577997931cc01de3974&ip='+ipAddr+'&callback=?', function(data) {
    if (data.status === 0) {
      $(".ytb-video").hide();
      $(".ytb-video-container-mb").hide();
    } else {
      $(".pc-video").hide();
      $(".video-mobile").hide();

      $(".ytb-video").show();
      $(".ytb-video-mb").show();
    }
  });




  // 页面滚动时变化
  $(document).scroll(function() {
      var height = $(document).scrollTop();
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
  });

  // 轮播图
  var isMobile = $(window).width() < 768 ? true : false;

  var mySwiper = new Swiper('.swiper-container',{
    slidesPerView : !isMobile ? 2 : 1,
    spaceBetween : 10,
    autoplay: true,
    loopedSlides: 2,
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

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


// pc端 点击顶部导航，跳转到指定位置
var arrPC = ["#about","#block","#team","#advisor","#networks","#media"];
$(".nav ul li").each(function (index,element) {
  $(this).click(function () {
    var scroll_offset = $(arrPC[index]).offset();
    var scroll;
    if (index === 0) {
      scroll = scroll_offset.top-110;
      $("body,html").animate({
        scrollTop: scroll
      },1000);
      return false;
    }
    scroll = scroll_offset.top - 79;
    $("body,html").animate({
      scrollTop:scroll
    },1000);
    return false;
  });
});



// 手机端 点击跳转
var arrMobil = ["#about2","#block","#team","#advisor","#networks","#media"];
$(".headerFr ul li").each(function (index,element) {
  $(this).click(function () {
    var scroll_offset = $(arrMobil[index]).offset();
    var scroll;
    if (index === 0) {
      $("body,html").animate({
        scrollTop: "190px"
      },1000);
      return false;
    }
    if (index === arrMobil.length-1) {
      scroll = scroll_offset.top - 160;
      $("body,html").animate({
        scrollTop: scroll
      },1000);
      return false;
    }
    scroll = scroll_offset.top - 68;
    $("body,html").animate({
      scrollTop:scroll
    },1000);
    return false;
  })
});



