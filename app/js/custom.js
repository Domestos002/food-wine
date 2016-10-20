;(function () {
    var showButton = function () {
        if ($(window).scrollTop() > 500) {
            document.getElementById("button-up").style.display = "block";
        }
        else {
            if ($(window).scrollTop() < 500) {
                document.getElementById("button-up").style.display = "none";
            }
        }
    };
    var stickyHeader = function () {
        var header =  document.getElementById("header-nav");
        var logo =  document.getElementById("logo");
        if ($(window).scrollTop() > $(logo).outerHeight()) {
            $(header).addClass('fixed');
        }
        else{
            $(header).removeClass('fixed');
        }
    };
    $(document).ready(function () {
        /*$(document).on("click", '.dd', function (e) {
            $(this).find('.header-nav__dd').slideToggle(400);
            e.preventDefault();
        });*/

        showButton();
        stickyHeader();
        $(document).scroll(function () {
            showButton();
        });
        $(document).scroll(function () {
            stickyHeader();
        });
    });
$(function () {
    $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
        if ($(this).hasClass('sliding-panel-link'))
            $('.sliding-panel').removeClass('active');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
})();

