window.onload = function () {

    $(".loader").fadeOut(1000, function () {
        $(this).parent().hide();
        $('body').css("overflow", "auto");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });

}
$(document).ready(function () {
    $('.selectpicker').selectpicker({
        dropupAuto: false
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 30) {
            $('.Sec-bar').addClass("fixed-top");
        } else {
            $('.Sec-bar').removeClass("fixed-top");
        }
    });
    // Mobile Side Menu 
    $('.menu-btn').click(function () {

        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
    });
    $('.closebtn').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $('.search-btn').click(function () {
        if ($(window).width() < 992) {
            $('.search-pop').slideDown(500);
            $('body').css("overflow", "hidden");
            $('html').css("overflow", "hidden");
        } else {
            $('.search-input').show();
            $('.search-input').addClass("search-inner");
            $('.search-input').removeClass("search-outer");
            $('.open-search').css("display", "none");
            $('.search-button').css("display", "flex");
            $('.search-overlay').show();
        }
    });
    if ($(window).width() > 992) {
        $('.search-overlay').click(function () {
            $('.search-input').fadeOut(500);
            $('.search-input').removeClass("search-inner");
            $('.search-input').addClass("search-outer");
            $('.open-search').css("display", "flex");
            $('.search-button').css("display", "none");
            $('.search-overlay').hide();
        });
        $('.header').click(function () {
            $('.search-input').removeClass("search-inner");
            $('.search-input').addClass("search-outer");
            $('.open-search').css("display", "flex");
            $('.search-button').css("display", "none");
            $('.search-overlay').hide();
        });
        $(".flex-fix").click(function (e) {
            e.stopPropagation();
        });

    }
    $('.search-pop').click(function () {
        $('.search-pop').slideUp(500);
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() < 992) {
        $(".similar-reviews").addClass("owl-carousel");
        $(".similar-reviews").addClass("owl-theme");
        $('.similar-reviews').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".similar-reviews").removeClass("owl-carousel");
        $(".similar-reviews").removeClass("owl-theme");
    }
    if ($(window).width() < 992) {
        $(".videos").addClass("owl-carousel");
        $(".videos").addClass("owl-theme");
        $('.videos').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".videos").removeClass("owl-carousel");
        $(".videos").removeClass("owl-theme");
    }
    if ($(window).width() < 992) {
        $(".similar-news").addClass("owl-carousel");
        $(".similar-news").addClass("owl-theme");
        $('.similar-news').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".similar-news").removeClass("owl-carousel");
        $(".similar-news").removeClass("owl-theme");
    }
    if ($(window).width() < 992) {
        $(".prices").addClass("owl-carousel");
        $(".prices").addClass("owl-theme");
        $('.prices').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".prices").removeClass("owl-carousel");
        $(".prices").removeClass("owl-theme");
    }


    if ($(window).width() < 992) {
        $(".search-cats-header").addClass("moaccordion");
        $(".search-cats").addClass("mopanel");
    }
    var acc = document.getElementsByClassName("moaccordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }




    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 7,
        slidesPerView: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: ($(window).width() < 992) ? true : false,

    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    $('.checkmark').click(function () {
        var x = $(this).attr('id');
        $('input[name=radio]').removeAttr('checked');
        $('input' + '#' + x).attr("checked", "checked");
    });

});