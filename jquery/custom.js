$('.collapse').on('shown.bs.collapse', function (e) {
    $('.collapse').not(this).removeClass('in');
});

$('[data-toggle=collapse]').click(function (e) {
    $('[data-toggle=collapse]').parent('li').removeClass('active');
    $(this).parent('li').toggleClass('active');
});

$('[data-toggle=subselect]').click(function (e) {
    $('[data-toggle=subselect]').parent('li').removeClass('subactive');
    $(this).parent('li').toggleClass('subactive');
});