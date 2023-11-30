/* owl carousel plugin............................................................. */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
           
        }
    }
})

