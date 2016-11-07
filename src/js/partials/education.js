
$('.card--education')
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
    offset: '70%'
});
