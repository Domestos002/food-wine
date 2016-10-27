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
        var header = document.getElementById("header-nav");
        var logo = document.getElementById("logo");
        if ($(window).scrollTop() > $(logo).outerHeight()) {
            $(header).addClass('fixed');
            $(header).css({"width": "100%"});
            $(header).find('.header-nav').css({"width": "1200px"});
            $(header).find('.header-nav').css({"padding": "0"});
            $(header).find('.header-nav').css({"padding-top": "10px"});
            $(header).find('.header-nav').css({"padding-bottom": "10px"});
            $(header).css({"padding": "0"});
        }
        else {
            $(header).removeClass('fixed');
            $(header).css({"width": "1200px"});
            $(header).find('.header-nav').css({"width": "100%"});
            $(header).find('.header-nav').css({"padding": "0"});
            $(header).find('.header-nav').css({"padding-bottom": "20px"});
            $(header).css({"padding": "0"});
        }
    };

   function masonryy() {
        $('#masonry-container').masonry({
            isAnimated: true,
            itemSelector: '.masonry-item',
            columnWidth: 20
        });
    }

    function masonryReload() {
        $('#masonry-container').masonry('layout');
    }


    $(document).ready(function () {
        var timeOut;
        var item;
        var last;
        $('.header-nav-item.dd').hover(
            function () {

                $('.header-nav-item.dd').find('.header-nav__dd').css({"display": "none"});
                $('.header-nav-item.dd').find('.header-nav__dd').animate({
                    marginTop: "10px",
                    opacity: "1"
                }, 200);
                $(this).find('.header-nav__dd').css({"display": "block"});
                clearTimeout(timeOut);
            },
            function () {
                last = $(this).find('.header-nav__dd');
                timeOut = setTimeout(function () {
                    $('.header-nav-item.dd').find('.header-nav__dd').animate({
                        marginTop: "60px",
                        opacity: "0",
                        visible: "hidden"
                    }, 200, function () {
                        $(this).find('.header-nav__dd').css({"display": "none"});
                    });
                }, 1000);
            }
        );

        $(document).on("click", '.accordeon-title', function (e) {
            var this_accordeon = $(this).closest(".accordeon");
            var this_item = $(this).closest('.accordeon-item');
            $(this).find('.plus-icon').toggleClass('active');

            if (this_item.hasClass('active') === true) {
                this_accordeon.find(".accordeon-item__content").stop().slideUp(400);
                this_accordeon.find('.accordeon-item').removeClass('active');
            }
            else {
                this_item.addClass('active');
                this_accordeon.find(".accordeon-item__content").stop().slideUp(400);
                console.log('eth');
                $(this).closest('.accordeon-item').find('.accordeon-item__content').stop().slideDown(400);
            }

            e.preventDefault();
        });
        masonryy();
        /*$('[data-tab]').click(function () {
            var this_tab_val = $(this).attr('data-tab');
            $('#masonry-container').masonry( 'remove', $("[data-content='" + this_tab_val + "']"));
            $('#masonry-container').masonry( 'additems', $("[data-content='" + this_tab_val + "']"));
            masonryReload

        });*/

        $('[data-tab]').click(function () {
            if (!($(this).hasClass('active'))){
                var this_tab_val = $(this).attr('data-tab');
                $("[data-content]").fadeOut(100, masonryReload);
                $("[data-content]").removeClass("active");
                $("[data-tab]").removeClass("active");
                $("[data-content='" + this_tab_val + "']").fadeIn(100, masonryReload);
                $("[data-content='" + this_tab_val + "']").addClass('active');
                $("[data-tab='" + this_tab_val + "']").addClass('active');
            }
        });

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

