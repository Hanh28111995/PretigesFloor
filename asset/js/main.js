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
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="prev_arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="next_arr"><i class="fas fa-arrow-right"></i></button>'
    });

    $('.counter').countUp();
});
var canvas = document.getElementById("th");
var ctx = canvas.getContext('2d');

// var img = new Image();   // Create new img element
// img.addEventListener("load", function () {
//     // Uncomment to hang in there
//     canvas.height = img.height;
//     canvas.width = img.width;
//     ctx.drawImage(img, 0, 0);
//     //  console.log("It Loaded !");  
// }, false);
// img.src = '/asset/image/div.wpb_single_image.jpg';
