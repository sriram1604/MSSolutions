$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up-script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
    });

    // toggle menu / navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn span').toggleClass("active");
    });

    // typing animation
    const typed1 = new Typed(".typing", {
        strings: ["",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // typing animation
    const typed2 = new Typed(".typing-2", {
        strings: ["",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const textToType = "MS Solutions!";
    const ag = "agency";
    let index = 0;
    
    function typeEffect() {
        if (index < textToType.length) {
            document.getElementById("hometext").textContent += textToType.charAt(index);
            document.getElementById("textuh").textContent += textToType.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }
    
    typeEffect();
    

    

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTime: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});