"use strict";

// Smooth scroll to anchor
$(".nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top -65;
    $('body,html').animate({
        scrollTop: top
    }, 1000);
});

$(window).scroll(function() {
    checkSection();
});

function showSection(section, isAnimate) {
    var 
        direction = section.replace(/./, ''),
        reqSection = $('.section').filter('[data-section="' + direction + '"]'),
        reqSectionPos = reqSection.offset().top;
    
    if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 500);
    } else {
        $('body, html').scrollTop(reqSectionPos);
    }
}

function checkSection() {
    $('.section').each(function() {
        var
            $this = $(this),
            topEdge = $this.offset().top -200,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        
        if (topEdge < wScroll && bottomEdge > wScroll) {
            var 
                currentId = $this.data('section'),
                reqLink = $('.nav__link--desktop').filter('[href=".' + currentId + '"]');
            reqLink.closest('.nav__item--desktop').addClass('active__link').siblings().removeClass('active__link');
            
            window.location.hash = currentId;
        }
    });
};

