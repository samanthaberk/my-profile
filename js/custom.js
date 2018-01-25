//--- WOW ANIMATION --//
$(function(){
    //animate on scroll
    new WOW().init();
});

//---SHOW/HIDE NAVIGATION--//

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ) {
           //hide nav
            $("nav").removeClass("navbar-custom");
        } else {
           //show nav
            $("nav").addClass("navbar-custom");            
        }
    });        
});

//--CLOSE NAVBAR ON CLICK--//

$('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});

//---SMOOTH SCROLLING--//

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // get/return section id (i.e. #about)
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });    
});

//---OWL CAROUSEL--//

$(function () {

    $("#projects").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});

/*--------------------------------------
                WORK
--------------------------------------*/

$('.project').magnificPopup({
    items: [
      {
        src: 'img/travelExpenseTracker.JPG'
      },
      {
        src: 'img/colorGuessingGame.JPG'
      },
      {
        src: 'img/landingPage.JPG'
      },
      {
        src: 'img/peanutButterJelly.JPG'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
})