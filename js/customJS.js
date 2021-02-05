$(document).ready(function() {
    $('#toTopBtn').fadeOut();
    // gototop
    $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#toTopBtn').fadeIn();
    $('.navbar').addClass("shrink");
    } else {
    $('#toTopBtn').fadeOut();
    $('.navbar').removeClass("shrink");
    }
    });
    
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
});

