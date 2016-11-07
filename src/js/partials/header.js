

$("#nav-toggle").click(function() {
    $(this).toggleClass("on");
    $("#nav-list").slideToggle();
    $('.header__overlay').toggleClass('header__overlay--filter');
});

var headerHeight = $('.header').outerHeight();
var navHeight = $('.header__nav--desktop').outerHeight();
var top;
$(window).scroll(function(){
    top = $(this).scrollTop();
    
    if((headerHeight - top) <= navHeight){
        $('.header__nav--desktop').css({
            'top':'0',
            'background-color': 'rgba(255, 255, 255, 0.90)'
        });
        $('.nav__link--desktop').css({
            'color': '#000'
        });
        $('.active__link').css({
            'border-color': '#06A763'
        });
    }
    else if(top < headerHeight && top > 0){
        $('.header__nav--desktop').css({
            'bottom' : top, 
            'top':'',
            'background-color': 'transparent'
        });
        $('.nav__link--desktop').css({
            'color': '#fff'
        });
        $('.active__link').css({
            'border-color': '#fff'
        });
    }
    else if(top < navHeight){
        $('.header__nav--desktop').css({'top':'','bottom':'0'});
    }
});

$('.header__second')
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .addClass('flipInX')
            .removeClass('flipOutX')
    } else {
        $(this)
            .addClass('flipOutX')
            .removeClass('flipInX')
    }
}, {
    offset: '70%'
})
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .removeClass('flipInX')
            .addClass('flipOutX');
    } else {
        $(this)
            .removeClass('flipOutX')
            .addClass('flipInX');
    }
}, {
    offset: '-20%'
});
$('.subheader__first')
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .addClass('flipInX')
            .removeClass('flipOutX')
    } else {
        $(this)
            .addClass('flipOutX')
            .removeClass('flipInX')
    }
}, {
    offset: '70%'
})
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .removeClass('flipInX')
            .addClass('flipOutX');
    } else {
        $(this)
            .removeClass('flipOutX')
            .addClass('flipInX');
    }
}, {
    offset: '-20%'
});