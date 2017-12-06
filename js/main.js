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

// slide after ckick nav item
$('#topNavBar nav.clearfix > li').on('click', function(event) {
    event.preventDefault();
    const href = $(this).find('a').attr('href');
    if (href !== '#') {
        const scrollTarget =  $(href);
        const offsetTop = scrollTarget.offset().top - 100;
        console.log(offsetTop);
        $('html').animate({ scrollTop: offsetTop}, 500);
    }
});

// highlight menu when scroll
const menuItems = $('.topNavBar nav li a');
$(window).on('scroll', function(event) {
    let curMinOffset = 100000;
    let curHightlightnItem;
    $('div[data-highlight]').each(function(index, el) {
        let scrollY = window.scrollY;
        let offset = Math.abs(scrollY - $(el).offset().top);
        // add animation to scroll up when first appear
        if (offset < 800) {
            $(el).removeClass('slideAppear')
        }
        if (offset < curMinOffset) {
            curMinOffset = offset;
            curHightlightnItem = el;
        }
    });
    menuItems.each(function(index, el) {
        $(el).removeClass('curView');
    });
    const id = $(curHightlightnItem).attr('id');
    $(`a[href="#${id}"]`).addClass('curView');
});

// animation for user-card
$('#user-card').removeClass('slideAppear')
