//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//
// sticky top nav bar
$(window).on('scroll', function(event) {
    const topOffset = $(this).scrollTop();
    if (topOffset > 0) {
        $('#topNavBar').addClass('sticky');
    } else {
        $('#topNavBar').removeClass('sticky');
    }
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
