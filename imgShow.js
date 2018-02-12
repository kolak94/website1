$(document).ready(function(){
	$(window).scroll(function(){
		$('.hideme, .hideme1').each(function(i){
			var bottomImg = $(this).offset().top + $(this).outerHeight();
			var bottomWindow = $(window).scrollTop() + $(window).height();
			if(bottomWindow > bottomImg) {
				$(this).animate({
					'opacity': 1,
					'margin-left': 0
				}, 500);
			}
		})
	})
})