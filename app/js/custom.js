;(function () {

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
            itemSelector: '.masonry-item',
            columnWidth: 20
        });
    });
})();

