$(function () {

    var $menu = $('.navbar').offset().top;

    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling >= $menu) {

            $('.navbar').addClass('stricky')
           
        }
        else{
            $('.navbar').removeClass('stricky')
        }
    })




//    video section venobox
    
    
$('.venobox').venobox(); 
    
//    ==========



    $('#banner').slick({
        arrows: false,
        speed: 300,
        autoplay: true,
        dots: true,
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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


    //    screenshorts slider

    $('.slider_ss').slick({
        arrows: false,
        speed: 300,
        autoplay: true,
        dots: true,
        autoPlay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    //pricing slider



    $('.main_pricing').slick({
        arrows: false,
        speed: 300,
        autoPlay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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


    //    team member 
    $('.team_slider').slick({
        arrows: false,
        speed: 300,
        autoPlay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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




    //    feedbaack slidder 1

    $('.feedback_slide').slick({
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        autoPlay: true,
        speed: 300,
        asNavFor: '.clients_slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    //    feedbaack slidder 2

    $('.clients_slider').slick({
        focusOnSelect: true,
        infinite: true,
        arrows: false,
        autoPlay: true,
        centerMode: true,
        centerPadding: 0,
        asNavFor: '.feedback_slide',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
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









})
