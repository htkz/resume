$(document).ready(function() {
    const mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});
