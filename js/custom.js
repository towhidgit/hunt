$(function () {


    var html_body = $('html, body');
    $('.nav-item a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1000);
                return false;
            }
        }
    });


    // back to top btn
    $('.top_btn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.top_btn').fadeIn(500);
        } else {
            $('.top_btn').fadeOut(500);
        }

        // stickey menu area start 
        if (scrolling > 0) {
            $('.header_area').addClass('stickey')
        } else {
            $('.header_area').removeClass('stickey')
        }

        if (scrolling > 0) {
            $('.navbar-brand').removeClass('paddingarea1')
        } else {
            $('.navbar-brand').addClass('paddingarea1')
        }

        if (scrolling > 0) {
            $('.navbar-nav').removeClass('paddingarea2')
        } else {
            $('.navbar-nav').addClass('paddingarea2')
        }
        // stickey menu area end 
    });

    // banner slider js area
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        prevArrow: '.slidPrv',
        nextArrow: '.slidNext',
        arrows: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
    });

    // portfolio venobox js area
    $('.venobox').venobox({
        spinner: 'wandering-cubes',
    });

    // portfolio slkck slider js area
    $('.portfolio-sliders').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]


    });


    // service slider

    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '.slidPrv1',
        nextArrow: '.slidNext1',
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: false,
        focusOnSelect: true,
        speed: 1000,

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });

    // testimonial js area
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-img-slider',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    horizontal: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    });

    $('.testimonial-img-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: true,
        prevArrow: '.slidPrv2',
        nextArrow: '.slidNext2',
        vertical: true,
        verticalSwiping: true,
        centerPadding: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                vertical: false,
                slidesToShow: 3
            }
        }],
    });

    // counter js area
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });


    // team slider js area
    $('.team-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // market slider js area
    $('.market-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: false,
        focusOnSelect: true,

        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //animation scroll js area start






})