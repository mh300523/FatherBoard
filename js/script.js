$(document).ready(function() {
    ///////// **mobile size** /////////
    $('.menu-bar').click(function () {
    $(this).toggleClass("nav_btn");
    $('.main-nav').toggleClass('open-nav');
    $('body').toggleClass('active-sidenav');
    });
  
    $('.cats_btn').on('click', function(e) {
        e.preventDefault();
        $('#cats_menu').slideToggle(300);
        $(this).toggleClass("rotate-arrow");
    });
    
    if ($(window).width() <= 991) {
        $(".main-nav").on("click", ".has_childs .menu_anc", function(e) {
            // Check if the clicked item has children
            if ($(this).closest(".menu_li").hasClass("has_childs")) {
                // Remove href only from elements with children
                $(this).removeAttr("href");
                // Get the current level's parent container
                var currentMenu = $(this).closest(".menu_li");
                // Close other submenus within the same parent container level
                currentMenu.siblings().find(".sub_menu").slideUp();
                // Toggle the submenu related to the clicked item
                $(this).next(".sub_menu").slideToggle();
                // Toggle the arrow rotation for the clicked element
                $(this).toggleClass("rotate-arrow");
                // Remove the rotate class from other menu items in the same level
                currentMenu.siblings().find(".menu_anc").removeClass("rotate-arrow");
            }
        });

        $(".user-icon").on("click", ".acccount-user", function(e) {
            e.preventDefault();
            $(this).next(".account-list").toggleClass("active");
        });
    };

                // Smooth scroll to top on arrow click
    $('.arrow-up').hide();
    $('.arrow-up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800, 'swing'); // Smooth scroll to top
    });

    ///////// ** categories Slider** /////////
    var categories = new Swiper('.categories-row .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: {
                delay: 2000,
            },
        speed: 1000,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.categories-row .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.categories-row .swiper-button-next',
            prevEl: '.categories-row .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 5,
            },
        },
    });

    ///////// **main Slider** /////////
    var mainSlider = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        preloadImages: false,
        updateOnWindowResize: true,
            
        // If we need pagination
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        // Navigation arrows   
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });

    var acc = document.getElementsByClassName("foot-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
        }

});

    //////////** fixed arrow to top**//////////
// Function to update the progress circle
function updateProgressCircle() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollPercent = (scrollTop / docHeight) * 100;
    $(".progress-circle").css("background", 
        `conic-gradient(var(--main-color) ${scrollPercent}%, transparent ${scrollPercent}% 100%)`
    );

    if (scrollTop >= 500) {
        $(".arrow-up").fadeIn(300);
    } else {
        $(".arrow-up").fadeOut(300);
    }
}

// Update progress circle on scroll
$(window).scroll(function () {
    updateProgressCircle();
});