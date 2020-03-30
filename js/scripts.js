
    (function($) {
    "use strict";

    //  habilitarBootstrap tooltips 
    $('[data-toggle="tooltip"]').tooltip();

    // Habilitar Bootstrap popovers 
    $('[data-toggle="popover"]').popover();

    $(".popover-dismiss").popover({
        trigger: "focus"
    });

    // Activar Feather icons
    feather.replace();

    // Activar Bootstrap
    $("body").scrollspy({
        target: "#stickyNav",
        offset: 82
    });

    // scroll href
    $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 81
                    },
                    200
                );
                return false;
            }
        }
    });


    var navbarCollapse = function() {
        if($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
            return;
        }
        if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
            $(".navbar-marketing").addClass("navbar-scrolled");
        } else {
            $(".navbar-marketing").removeClass("navbar-scrolled");
        }
    };
    
    navbarCollapse();

    $(window).scroll(navbarCollapse);

})(jQuery);
