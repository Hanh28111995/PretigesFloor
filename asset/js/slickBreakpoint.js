$(document).ready(function () {
    const change_show_item = () => {
        if ($(window).width() < 540) {
            $('.customer-slide').slick('slickSetOption', 'slidesToShow', 1)
        }
        else {
            $('.customer-slide').slick('slickSetOption', 'slidesToShow', 2)
        }

        $('.customer-slide').slick('slickGoTo', 0)
        call_slick()
    }

    const call_slick = () => {
        $('.customer-slide').slick({
            dots: false,
            infinite: true,
            cssEase: 'linear',
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="prev_arr"><i class="fas fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="next_arr"><i class="fas fa-arrow-right"></i></button>',
        })
        change_show_item()

        $(window).resize(function () {
            $('.customer-slide').slick('slickGoTo', 0)
            change_show_item()
        })
    }
});