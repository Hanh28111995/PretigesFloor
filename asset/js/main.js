$(document).ready(function () {
    ///////initial //////////////////

    $('#vidBox').VideoPopUp({
        backgroundColor: "#17212a",
        opener: "video-trigger",
        maxweight: "640",
        idvideo: "v1",
        pausevideo: true
    });


    $('.customer-slide').slick({
        dots: false,
        infinite: false,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="prev_arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="next_arr"><i class="fas fa-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.counter').countUp();
});
