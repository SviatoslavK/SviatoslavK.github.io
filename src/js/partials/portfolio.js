var $grid = $('.masonry-grid').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.portfolio__item',
        columnWidth: '.portfolio__item',
        percentPosition: true,
        gutter: 10
    });
});

$('.portfolio__item').hover(function() {
    $(this).find('.portfolio__overlay').fadeIn('normal');
    $(this).find('.overlay__name--portfolio')
        .addClass('fadeInUp')
        .removeClass('fadeOutDown');
    $(this).find('.overlay__link')
        .addClass('fadeInUp')
        .removeClass('fadeOutDown');
    $(this).find('img').addClass('portfolio__item--blur');
}, function() {
    $(this).find('.portfolio__overlay').fadeOut('normal');
    $(this).find('.overlay__name--portfolio')
        .addClass('fadeOutDown')
        .removeClass('fadeInUp');
    $(this).find('.overlay__link')
        .addClass('fadeOutDown')
        .removeClass('fadeInUp');
    $(this).find('img').removeClass('portfolio__item--blur');
});

//$('.portfolio__item')
//    .waypoint(function(dir) {
//    if (dir === 'down') {
//        $(this)
//            .addClass('fadeInUp')
//            .removeClass('fadeOutDown')
//    } else {
//        $(this)
//            .addClass('fadeOutDown')
//            .removeClass('fadeInUp')
//    }
//}, {
//    offset: '70%'
//});