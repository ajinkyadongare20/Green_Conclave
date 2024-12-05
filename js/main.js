(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);

// here code for index page  
function showContent(day) {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    if (day === 1) {
        content1.style.display = 'block';
        content2.style.display = 'none';
    } else {
        content1.style.display = 'none';
        content2.style.display = 'block';
    }
}

//**  A code for event 1 page for YouTube Video ***//
const videoSection = document.getElementById('videoSection');
const youtubeVideo = document.getElementById('youtubeVideo');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const videoUrl = "https://www.youtube.com/embed/-_-hezIflJo?autoplay=1&mute=1&si=5KAMkeEa6nSpUQ-I";        
        if (entry.isIntersecting) {
            youtubeVideo.src = videoUrl;
        } else {
            youtubeVideo.src = "";
        }
    });
}, { threshold: 0.5 });

observer.observe(videoSection);

// A Code for Utube Videso
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, 
        spaceBetween: 20,
        loop: true, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 } // 3 videos per view on large screens
        }
    });
});


