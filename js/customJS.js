$(document).ready(function() {
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
// $('#fbtn').click(function (e) { 

//     // $('#fbtn').css("display","none");
//     // $('#fimg').attr('src','template/pexels-stanley-morales-1454360.jpg');
//     e.preventDefault();
    
// });
