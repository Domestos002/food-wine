$(document).ready(function () {
    $(document).on("click", '.dd', function (e) {
        $(this).find('.header-nav-item__dd').SlideToggle(400);
        e.preventDefault();
    });
}