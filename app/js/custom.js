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

    var makeHidden = function () {
        $('.header-nav-item.dd').find('.header-nav__dd').css({"display": "none"});
    };

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
                }, 200 );
                $(this).find('.header-nav__dd').css({"display": "block"});
                clearTimeout(timeOut);
            },
            function () {
                last = $(this).find('.header-nav__dd');
                timeOut = setTimeout(function(){
                    $('.header-nav-item.dd').find('.header-nav__dd').animate({
                        marginTop: "60px",
                        opacity: "0",
                        visible: "hidden"
                    }, 200,function(){
                        $(this).find('.header-nav__dd').css({"display": "none"});
                    } );
                }, 1000);
            }
        );


        showButton();
        stickyHeader();
        $(document).scroll(function () {
            showButton();
        });
        $(document).scroll(function () {
            stickyHeader(); 
        });

        /*$('.dd').mousemove(function (e) {
         // положение элемента
         var pos = $(this).offset();
         var elem_left = pos.left;
         var elem_top = pos.top;
         // положение курсора внутри элемента
         var Xinner = e.pageX - elem_left;
         var Yinner = e.pageY - elem_top;
         console.log("X: " + Xinner + " Y: " + Yinner); // вывод результата в консоль
         });*/
        
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

