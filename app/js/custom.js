;(function () {
    $(".ornament").owlCarousel({
        items: 5,
        loop: true,
        navigation: true,
        dots: false,
        nav: false,
        /*autoHeight: true,*/
//            mouseDrag: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $(".reviews-list").owlCarousel({
        items: 2,
        loop: true,
        navigation: true,
        dots: false,
        nav: false,
        /*autoHeight: true,*/
//            mouseDrag: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    /*if ($("select, input:radio, input:checkbox").length > 0) {
        $("select, input:radio, input:checkbox").styler();
    }*/


    $(document).ready(function () {
        /*$(document).on("click", '.accordeon-title', function (e) {
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
         });*/
        $('#masonry-container').masonry({
            isAnimated: true,
            columnWidth: '.grid-sizer',
            itemSelector: '.masonry-item',
            percentPosition: true,
            resize: true,
            refreshOnResize: true
        });

        /*var options = [];

        $('.dropdown-menu a').on('click', function (event) {

            var $target = $(event.currentTarget),
                val = $target.attr('data-value'),
                $inp = $target.find('input'),
                idx;

            if (( idx = options.indexOf(val) ) > -1) {
                options.splice(idx, 1);
                setTimeout(function () {
                    $inp.prop('checked', false)
                }, 0);
            } else {
                options.push(val);
                setTimeout(function () {
                    $inp.prop('checked', true)
                }, 0);
            }

            $(event.target).blur();

            console.log(options);
            return false;
        });*/


    });
})();

