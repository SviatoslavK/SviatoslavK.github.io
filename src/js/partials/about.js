$('.card--about')
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .addClass('fadeInUp')
            .removeClass('fadeOutDown')
    } else {
        $(this)
            .addClass('fadeOutDown')
            .removeClass('fadeInUp')
    }
}, {
    offset: '70%'
});

$('.card--skills')
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .addClass('fadeInUp')
            .removeClass('fadeOutDown')
    } else {
        $(this)
            .addClass('fadeOutDown')
            .removeClass('fadeInUp')
    }
}, {
    offset: '60%'
});

$('.socials__item')
    .waypoint(function(dir) {
    if (dir === 'down') {
        $(this)
            .addClass('fadeInLeft')
            .removeClass('fadeOutLeft')
    } else {
        $(this)
            .addClass('fadeOutLeft')
            .removeClass('fadeInLeft')
    }
}, {
    offset: '80%'
});