// sticky top nav bar
$(window).on('scroll', function(event) {
    var topOffset = $(this).scrollTop();
    if (topOffset > 0) {
        $('#topNavBar').addClass('sticky');
    } else {
        $('#topNavBar').removeClass('sticky');
    }
});

// portfolio animation
$('#li-1').click(function(event) {
    $('.portfolio .realBar').animate({'margin-left': 0, width: '10%'}, 700)
});
$('#li-2').click(function(event) {
    $('.portfolio .realBar').animate({'margin-left': '58px', width: '47%'}, 700)
});
$('#li-3').click(function(event) {
    $('.portfolio .realBar').animate({'margin-left': '222px', width: '26%'}, 700)
});
