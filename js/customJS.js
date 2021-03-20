$(document).ready(function() {
    
    // gototop
    $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#toTopBtn').fadeIn();
    $('.navbar').addClass("shrink");
    $('.navbar-brand img').addClass("bransize");
    $('.navbar-collapse').addClass("collapse-shrink");
    }
    else {
    $('#toTopBtn').fadeOut();
    $('.navbar').removeClass("shrink");
    $('.navbar-brand img').removeClass("bransize");
    $('.navbar-collapse').removeClass("collapse-shrink");
    }
    });
    
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
});

