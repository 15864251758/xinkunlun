$(function(){
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });


    $(".dropdown").mouseleave(function () {
        $(this).removeClass("open");
    });


    // $(".dropdown").click(function () {
    //     $(this).addClass("open");
    // });

    // $(".dropdown").click(function(){
    //     $(this).removeClass("open");
    // })
    // $('.navbar-toggle').hover(function(){
    //     $('#example-navbar-collapse').slideToggle();
    // })
    // var swiper = new Swiper('.shili .swiper-container', {
    //     pagination: '.swiper-pagination',
    //     paginationClickable: true,
    //     slidesPerView: 3,
    //     spaceBetween: 60,
    //     prevButton:'.swiper-button-prev',
    //     nextButton:'.swiper-button-next',
    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 3,
    //             spaceBetween: 60
    //         },
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 30
    //         },
    //         640: {
    //             slidesPerView: 1,
    //             spaceBetween: 20
    //         },
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 10
    //         }
    //     }
    // });
})