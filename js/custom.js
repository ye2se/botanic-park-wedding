

$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
})


$(function () {
    $('.main_hall .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();

        $('.main_hall .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .parent()
            .addClass('on')
            .siblings()
            .removeClass('on')
    })
})

$(function () {
    const MainHall = new Swiper('.tab_slide', {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        breakpoints: {
            1320: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            },

            1130: {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            },

            768: {
                slidesPerView: "1",
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            },


        }

    })
})

$(function () {
    const MainSpecial = new Swiper('.main_special_slide', {
        slidesPerView: "1",
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_special .arrows .next',
            prevEl: '.main_special .arrows .prev',
        },
        loop: true,

        breakpoints: {
            1440: {
                slidesPerView: "4",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },

            970: {
                slidesPerView: "4",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },

            768: {
                slidesPerView: "3",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },

            500: {
                slidesPerView: "3",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },

            480: {
                slidesPerView: "2",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },

            320: {
                slidesPerView: "2",
                spaceBetween: 30,
                navigation: {
                    nextEl: '.main_special .arrows .next',
                    prevEl: '.main_special .arrows .prev',
                },
                loop: true,
            },


        }

    })
})

// 반응형 

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.header .gnb>ul>li .sub').removeAttr('style')
    })


})