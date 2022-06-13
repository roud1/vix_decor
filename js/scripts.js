$(document).ready(function(){
    $('.owl-carousel').owlCarousel({

        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        dotsData: true,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

$('.slider').bxSlider({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pager: false
});
