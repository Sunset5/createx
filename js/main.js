$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })


    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: false,
        draggable: false,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 2.5,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                        dots: true,
                    },
                },
            ]

    });

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev');
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext');
    })

    $('.testimonials__slider').slick({
        arrows: false,
        infinite: false,
        draggable: false,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        fade: true,
        cssEase: 'ease',
        responsive:
            [
                {
                    breakpoint: 700,
                    settings: {
                        draggable: true,
                    },
                },
            ]
    });

    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev');
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext');
    })


    // $('.program__acc-link').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()
    // })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-link').children('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 750);
    });

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
        // if ($('.header__top').hasClass('header__top--open')) {
        //     $('.burger').removeClass('burger--follow')
        // }
    }, 0);
    $('.burger, .overlay, .header__top a, .header__logo').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open');
        $('.overlay').toggleClass('overlay--show');
        $('.burger').toggleClass('burger--cross');
    })

    $('.footer__top-title').on('click', function (e) {
        // if ($('.footer__top').width() <= 550) {
            $(this).toggleClass('footer__top-title--open')
            $(this).next().slideToggle()
        // }
    })
})