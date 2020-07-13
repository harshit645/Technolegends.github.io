$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    //shouldHideHeader = document.getElementById('header').getAttribute('isInvisible') == 'true';
    // If element is scrolled into view, fade it in
    backgroundIsPlaying = true;
    $(window).scroll(function() {
        hasBackground = typeof backgroundAnimation != 'undefined' 
//			if (shouldHideHeader){
//				if ($(window).scrollTop()>5) {
//					document.getElementById('myHeader').classList.remove('invisible-header');
//				} else {
//					document.getElementById('myHeader').classList.add('invisible-header');
//				}
//			}

        
        $('.scroll-animations').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animated');
                $(this).addClass($(this).attr('animation'));
                $(this).css('visibility', 'visible');
            }
        });
        $('x-lottie-player').each(function() {
            if (isScrolledIntoView(this) && $(this).attr('status') == 'paused') {
                $(this)[0].play();
                $(this).attr('status','playing')
            } else if (!isScrolledIntoView(this) && $(this).attr('status') == 'playing') {
                $(this)[0].pause();
                $(this).attr('status','paused')
            }
        });
        if (hasBackground){
            backgroundIsOutofView = $('#page-start').offset().top<$(window).scrollTop();
            if (backgroundIsOutofView && backgroundIsPlaying){
                backgroundAnimation.stop();
                document.getElementById('bm').style.visibility='hidden';
                backgroundIsPlaying = false;
            } else if (!backgroundIsOutofView && !backgroundIsPlaying) {
                backgroundAnimation.play();
                document.getElementById('bm').style.visibility='visible';
                backgroundIsPlaying = true;
            }
        }

    });
});