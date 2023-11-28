jQuery(document).ready(function ($) {
    "use strict";
    var $grid;

    $('a[href=\\#]').on('click', function (e) {
        e.preventDefault();
    });
    /*ISOTOPE HTML END*/

    /* Theia Side Bar */
    if (typeof ($.fn.theiaStickySidebar) !== "undefined") {
        $('.has-sidebar .fixed-bar-coloum').theiaStickySidebar({'additionalMarginTop': 150});
        $('.shop-page .fixed-bar-coloum').theiaStickySidebar({'additionalMarginTop': 150});
    }

    /* Header Search */
    $('a[href="#header-search"]').on("click", function (event) {
        event.preventDefault();
        $("#header-search").addClass("open");
        $('#header-search > form > input[type="search"]').focus();
    });

    $("#header-search, #header-search button.close").on("click keyup", function (
        event
    ) {
        if (
            event.target === this ||
            event.target.className === "close" ||
            event.keyCode === 27
        ) {
            $(this).removeClass("open");
        }
    });


  
    /* Scroll to top */
    $('.scrollup').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.scrollup').addClass('back-top');
        } else {
            $('.scrollup').removeClass('back-top');
        }
    });

    /* Mobile menu */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $("body").addClass("not-top");
            $("body").removeClass("top");
        } else {
            $("body").addClass("top");
            $("body").removeClass("not-top");
        }
    });

    /* Search Box */
    $(".search-box-area").on('click', '.search-button, .search-close', function (event) {
        event.preventDefault();
        if ($('.search-text').hasClass('active')) {
            $('.search-text, .search-close').removeClass('active');
        } else {
            $('.search-text, .search-close').addClass('active');
        }
        return false;
    });

    /* Header Right Menu */
    var menuArea = $('.additional-menu-area');
    menuArea.on('click', '.side-menu-trigger', function (e) {
        e.preventDefault();
        var self = $(this);
        if (self.hasClass('side-menu-open')) {
            $('.sidenav').css('transform', 'translateX(0%)');
            if (!menuArea.find('> .rt-cover').length) {
                menuArea.append("<div class='rt-cover'></div>");
            }
            self.removeClass('side-menu-open').addClass('side-menu-close');
        }
    });

    function closeMenuArea() {
        var trigger = $('.side-menu-trigger', menuArea);
        trigger.removeClass('side-menu-close').addClass('side-menu-open');
        if (menuArea.find('> .rt-cover').length) {
            menuArea.find('> .rt-cover').remove();
        }
        $('.sidenav').css('transform', 'translateX(100%)');
    }

    menuArea.on('click', '.closebtn', function (e) {
        e.preventDefault();
        closeMenuArea();
    });

    $(document).on('click', '.rt-cover', function () {
        closeMenuArea();
    });

    /*-------------------------------------
    MeanMenu activation code
    --------------------------------------*/
    var a = $('.offscreen-navigation .menu');

    if (a.length) {
        a.children("li").addClass("menu-item-parent");
        a.find(".menu-item-has-children > a").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("opened");
            var n = $(this).next(".sub-menu"),
                s = $(this).closest(".menu-item-parent").find(".sub-menu");
            a.find(".sub-menu").not(s).slideUp(250).prev('a').removeClass('opened'), n.slideToggle(250)
        });
        a.find('.menu-item:not(.menu-item-has-children) > a').on('click', function (e) {
            $('.rt-slide-nav').slideUp();
            $('body').removeClass('slidemenuon');
        });
    }

    $('.mean-bar .sidebarBtn').on('click', function (e) {
        e.preventDefault();
        if ($('.rt-slide-nav').is(":visible")) {
            $('.rt-slide-nav').slideUp();
            $('body').removeClass('slidemenuon');
        } else {
            $('.rt-slide-nav').slideDown();
            $('body').addClass('slidemenuon');
        }

    });
    /*Header and mobile menu stick*/
    $(window).on('scroll', function () {
        if ($('body').hasClass('sticky-header')) {            

            // Sticky header
            var stickyPlaceHolder = $("#rt-sticky-placeholder"),
                menu = $("#header-menu"),
                menuH = menu.outerHeight(),
                topHeaderH = $('#tophead').outerHeight() || 0,
                middleHeaderH = $('#middleHeader').outerHeight() || 0,
                targrtScroll = topHeaderH + middleHeaderH;
            if ($(window).scrollTop() > targrtScroll) {
                menu.addClass('rt-sticky');
                stickyPlaceHolder.height(menuH);
            } else {
                menu.removeClass('rt-sticky');
                stickyPlaceHolder.height(0);
            }

            // Sticky mobile header
            var stickyPlaceHolder = $("#mobile-sticky-placeholder"),
                menubar = $("#mobile-men-bar"),
                menubarH = menubar.outerHeight(),
                topHeaderH = $('#mobile-top-fix').outerHeight() || 0,
                total_height =topHeaderH;
            if ($(window).scrollTop() > total_height) {
                $("#meanmenu").addClass('mobile-sticky');
                stickyPlaceHolder.height(menubarH);             
            } else {
                $("#meanmenu").removeClass('mobile-sticky');
                stickyPlaceHolder.height(0);
            }
        }
    });

    // Popup - Used in video
    if (typeof $.fn.magnificPopup == 'function') {
        $('.rt-video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    if (typeof $.fn.magnificPopup == 'function') {
        if ($('.zoom-gallery').length) {
            $('.zoom-gallery').each(function () { // the containers for all your galleries
                $(this).magnificPopup({
                    delegate: 'a.finbuzz-popup-zoom', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });
        }
    }
});

//function Load
function finbuzz_content_load_scripts() {
    var $ = jQuery;
    //Preloader
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
    
    
     /*-------------------------------------
    Slick Slider
    -------------------------------------*/
    $('.slick-carousel').each(function() {
        $('.slick-carousel').not('.slick-initialized').slick();
    });

    /*---------------------------------------
      Background Parallax
      --------------------------------------- */
      if ($(".rt-parallax-bg-yes").length) {
        $(".rt-parallax-bg-yes").each(function () {
            var speed = $(this).data('speed');
            $(this).parallaxie({
                speed: speed ? speed : 0.5,
                offset: 0,
            });
        })
    }

    /*===================================
	// Main Banner
    =====================================*/
    $('.main-banner-slider').each(function() {  
            var $this = $(this);          
            var settings = $(this).data('options');
            var autoplayconditon = settings['auto'];
            var $pagination = $this.find('.swiper-pagination')[0];
            var $next = $this.find('.swiper-button-next')[0];
            var $prev = $this.find('.swiper-button-prev')[0];
        var mainSlider = new Swiper(this, {
            slidesPerView: 1,
            loop: settings['loop'],
            slideToClickedSlide: true,
            effect: "fade",
            autoplay:autoplayconditon,
            autoplayTimeout:settings['autoplay']['delay'],
            speed:settings['speed'],
            navigation: {
            nextEl: $next,
            prevEl: $prev,
            },
            pagination: {
                el: $pagination,
                type: 'bullets',
                clickable:'true',
            },
        });
        mainSlider.init();
         
    });

    /*===================================
	// Main Banner
    =====================================*/
    $('.main-banner-slider3').each(function() { 
        var $this = $(this);          
        var settings = $(this).data('options');
        var autoplayconditon = settings['auto'];
        var $next = $this.find('.swiper-button-next')[0];
        var $prev = $this.find('.swiper-button-prev')[0];
        var mainSlider3 = new Swiper(this, {
            slidesPerView: 1,
            loop: settings['loop'],
            slideToClickedSlide: true,
            autoplay:autoplayconditon,
            autoplayTimeout:settings['autoplay']['delay'],
            speed:settings['speed'],
            navigation: {
                nextEl: $next,
                prevEl: $prev,
            },
        });
    mainSlider3.init();

});
    
    /*===================================
	 // Section background image 
	====================================*/
    imageFunction();

    function imageFunction() {
        $("[data-bg-image]").each(function () {
        let img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")",
        });
        });
    }    

    /*======================================
  //TweenMax Mouse Effect
  ====================================*/
  $(".motion-effects-wrap").mousemove(function (e) {
    parallaxIt(e, ".motion-effects1", -100);
    parallaxIt(e, ".motion-effects2", -200);
    parallaxIt(e, ".motion-effects3", 100);
    parallaxIt(e, ".motion-effects4", 200);
    parallaxIt(e, ".motion-effects5", -50);
    parallaxIt(e, ".motion-effects6", 50);
  });
  function parallaxIt(e, target_class, movement) {
    let $wrap = $(e.target).parents(".motion-effects-wrap");
    if (!$wrap.length) return;
    let $target = $wrap.find(target_class);
    let relX = e.pageX - $wrap.offset().left;
    let relY = e.pageY - $wrap.offset().top;
    TweenMax.to($target, 1, {
      x: ((relX - $wrap.width() / 2) / $wrap.width()) * movement,
      y: ((relY - $wrap.height() / 2) / $wrap.height()) * movement,
    });
  }
    

    /*=================================
   // counter up
   ==================================*/
   
   let counter=true;
   $(".counter-appear").appear();
   $(".counter-appear").on("appear", function () {
    if (counter) {
        // Only number counter
            $(".counterUp").each(function () {
                var $this = $(this);
                let duration=$(this).data('duration');
                jQuery({
                    Counter: 0,
                }).animate(
                    {
                    Counter: $this.attr("data-counter"),
                    },
                    {
                    duration: duration,
                    easing: "swing",
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 99999) {
                        while (/(\d+)(\d{3})/.test(num)) {
                            num = num.replace(/(\d+)(\d{3})/, "");
                        }
                        }
                        $this.html(num);
                    },
                    }
                );
            });
        
            // pie chart
        $(".chart-bar").each(function(){
            let circleSettings=$(this).data('circle-options');
            $(this).easyPieChart({
                barColor: circleSettings.fg_color,
                trackColor: circleSettings.bg_color,
                scaleColor: false,
                lineWidth: circleSettings.circle_border_size,
                size: circleSettings.circle_size,
                lineCap: "square",
                animate: circleSettings.animation_speed,
            });
        });
        counter = false;
        }
   }); 

    //initialize swiper when document ready
    $('.rt-swiper-container').each(function () {
        var swiper = $(this),
            autoplay = swiper.data('autoplay'),
            autoplayDelay = swiper.data('autoplay-timeout') || '',
            speed = swiper.data('speed') || '',
            loop = swiper.data('loop') || true,
            slidesPerView = swiper.data('slides-per-view') || 1,
            spaceBetween = swiper.data('space-between'),
            centeredSlides = swiper.data('centered-slides'),
            rXsmall = swiper.data("r-x-small"),
            rSmall = swiper.data("r-small"),
            rMedium = swiper.data("r-medium"),
            rLarge = swiper.data("r-large"),
            rXlarge = swiper.data("r-x-large");
            console.log(slidesPerView);
        var $swiper = new Swiper('.rt-swiper-container', {
            // Optional parameters
            autoplay: autoplay ? {delay:autoplayDelay} : false,
            speed: speed ? speed : 2000,
            loop: loop ? true : false,
            slidesPerView: slidesPerView ? slidesPerView : 1,
            spaceBetween: spaceBetween ? spaceBetween : 10,
            centeredSlides: centeredSlides ? true : false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: rXsmall ? rXsmall : 1,
                },
                576: {
                    slidesPerView: rSmall ? rSmall : 2,
                },
                768: {
                    slidesPerView: rMedium ? rMedium : 3,
                },
                992: {
                    slidesPerView: rLarge ? rLarge : 4,
                },
                1200: {
                    slidesPerView: rXlarge ? rXlarge : 1,
                }
            }
        });
    });
   
    $('.rt-related-slider').each(function() {
        var $this = $(this);
        var settings = $this.data('xld');
        var autoplayconditon= settings['auto'];
        var $pagination = $this.find('.swiper-pagination')[0];
        var $next = $this.find('.swiper-button-next')[0];
        var $prev = $this.find('.swiper-button-prev')[0];
        var swiper = new Swiper( this, {
                autoplay:   autoplayconditon,
                autoplayTimeout: settings['autoplay']['delay'],
                speed: settings['speed'],
                loop:  settings['loop'],
                pauseOnMouseEnter :true,
                slidesPerView: settings['slidesPerView'],
                spaceBetween:  settings['spaceBetween'],
                centeredSlides:  settings['centeredSlides'], 
                slidesPerGroup: settings['slidesPerGroup'] ? settings['slidesPerGroup']:1,
                pagination: {
                    el: $pagination,
                    clickable: true,
                    type: 'bullets',
                },
                navigation: {
                    nextEl: $next,
                    prevEl: $prev,
                },
                breakpoints: {
                0: {
                    slidesPerView: settings['breakpoints']['0']['slidesPerView'],
                },
                576: {
                    slidesPerView: settings['breakpoints']['576']['slidesPerView'],
                },
                768: {
                    slidesPerView: settings['breakpoints']['768']['slidesPerView'],
                },
                992: {
                    slidesPerView: settings['breakpoints']['992']['slidesPerView'],
                },
                1200: {
                    slidesPerView:  settings['breakpoints']['1200']['slidesPerView'],
                },
                1600: {
                    slidesPerView: settings['breakpoints']['1600']['slidesPerView'],
                },
            },
        });
        swiper.init();
    });

        // pricing swithces
    var pricingWrapper = $(".pricing-wrapper");
    if (pricingWrapper) {
        $(".pricing-wrapper").each(function () {
            $(".pricing-switch-container").on("click", function () {
                $(".pricing-switch")
                .parents(".price-switch-box")
                .toggleClass("price-switch-box--active"),
                $(".pricing-switch").toggleClass("pricing-switch-active"),
                $(".price-box").toggleClass("price-box-show price-box-hide");
            });
        });
    }
    
    /*-------------------------------------
	  Intersection Observer
	  -------------------------------------*/
	  if (!!window.IntersectionObserver) {
		let observer = new IntersectionObserver((entries, observer) => {
		  entries.forEach(entry => {
			if (entry.isIntersecting) {
			  entry.target.classList.add("active-animation");
			  observer.unobserve(entry.target);
			}
		  });
		}, {
		  rootMargin: "0px 0px -100px 0px"
		});
		document.querySelectorAll('.has-animation').forEach(block => {
		  observer.observe(block)
		});
	  } else {
		document.querySelectorAll('.has-animation').forEach(block => {
		  block.classList.remove('has-animation')
		});
	  }

    /*-------------------------------------
        Masonry
    -------------------------------------*/

    var galleryIsoContainer = $(".rt-portfolio-masonary");
    if (galleryIsoContainer.length) {
        var imageGallerIso = galleryIsoContainer.imagesLoaded(function () {
            imageGallerIso.isotope({
                itemSelector: ".rt-portfolio-item",
                percentPosition: true,
                isAnimated: true,
                masonry: {
                    columnWidth: ".rt-portfolio-item",                        
                },
                animationOptions: {
                    duration: 700,
                    easing: 'linear',
                        queue: false
                }
            });
        });
    }

    /* Wow Js Init */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true,
        scrollContainer: null,
    });

    new WOW().init();

    /**Load More Portfolio Button */
    var page = 2;
    $('#loadMore').click(function(){
        let main = $(this).data('port-items');
        var $container = jQuery('.portfolio-items');
        $.ajax({
            type : "post",
            url : finbuzzObj.ajaxURL,
            data : {
                action: "loadmore_ajax", 
                postitem : main['item'],
                postcat:main['cat'],
                colclass:main['col_class'],
                excerptDisplay:main['excerpt_display'],
                excerptCount:main['excerpt_count'],
                portSerDisplay:main['port_serial_dis'],
                titleCount:main['title_count'],
                catDisplay:main['cat_display'],
                readMore:main['read_more_btn_dis'],
                pageNumber: page 
            },
            success    : function(html){
                var $data = jQuery(html);
                if ($data.length) {
                  $container.append( html );
                    jQuery('#loadMore').removeClass('loading-lazy');
                } else {
                  jQuery("#loadMore").html("No More Portfolio"); 
                  jQuery('#loadMore').removeClass('loading-lazy');
                }
                setTimeout( function() {
                  revealPosts();
                }, 500);
            },

         });
         page++;
     
    });

    function revealPosts(){
        var posts = $('.single-grid-item:not(.reveal)');
        var i = 0;
        setInterval( function(){
          if ( i >= posts.length) return false;
          var el = posts[i];
          $(el).addClass('reveal');
          i++
        }, 100);
    }
    

}

(function ($) {
    "use strict";

    // Window Load+Resize
    $(window).on('load resize', function () {

        // Define the maximum height for mobile menu
        var wHeight = $(window).height();
        wHeight = wHeight - 50;
        $('.mean-nav > ul').css('max-height', wHeight + 'px');
        
    });

    // Elementor Frontend Load
    $(window).on('elementor/frontend/init', function () {
        if (elementorFrontend.isEditMode()) {
            elementorFrontend.hooks.addAction('frontend/element_ready/widget', function () {
                finbuzz_content_load_scripts();
            });
        }
    });
    
    // Window Load
    $(window).on('load', function () {
        finbuzz_content_load_scripts();
    });

})(jQuery);