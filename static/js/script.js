//中英文切换
	var type=navigator.appName
	if (type=="Netscape"){
	var lang = navigator.language
	}
	else{
	var lang = navigator.userLanguage
	}
	//取得浏览器语言的前两个字母
	var lang = lang.substr(0,2)
	setLang(lang);	
	
	$('.langToggle').on('click',function(){
		if($('.langToggle').text() == 'English') {
			setLang('en')
		}else{
			setLang('zh')
		}
	});

	$("input:checkbox").change(function() {
		var content = $(this).prev();
		var icon = $(this).next();
		if($(this).get(0).checked) {
			content.removeClass('ellips');
			content.css({ height : '100%'});
			icon.html('');
		} else {
			content.addClass('ellips');
			content.removeAttr('style');
			icon.html('<span style="color: #666">read more</span>');
		}
	});
	
	
	function setLang(lang){
		if(lang == 'en'){
			$('.langToggle').html('中文');
			$('.changeLang .zh').hide();
			$('.changeLang .en').show();
		}else{
			$('.langToggle').html('English');
			$('.changeLang .en').hide();
			$('.changeLang .zh').show();
		}
	}

	function onMenu() {
		var header =$($('.head-grid .headerFr').get(0));
		if(header.height() > 0) {
			header.animate({height : '0px'})
		} else {
			header.animate({height : '320px'})
		}
	}

	// mobile 公告点击效果
	$('.head-grid .title').on('click',function(){
		var title = $('.head-grid .title'),
			content = $('.head-grid .board-grid .content');
		title.css({'fontSize':'30px','lineHeight':'60px'});
		content.css('display','block');
	})
	$('.head-grid .board-grid .close-btn').on('click',function() {
		$('.head-grid .board-grid .content').css('display','none');
		$('.head-grid .title').css({'fontSize':'16px','lineHeight':'35px'})
	})


	// pc公告点击效果
	// $('.board .title').on('click',function() {
	// 	var title = $('.board .title')
	// 	title.css('display','none');
	// 	$('.board .board-content').css('display','block');
	// })
	// $('.board .close-btn').on('click',function() {
	// 	var title = $('.board .title')
	// 	$('.board .board-content').css('display','none');
	// 	title.css('display','block');
	// })

