$(document).ready(function() {
    // Methods for carusel
    $('#mycarousel').carousel({interval: 2000});
    $('#carouselButton').click(function() {
        if ($("#carouselButton").children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
        
    });

    // Methods for the modals
    $('#reservationModal').modal({show: false});
    $('#reservationButton').click(function() {
        $('#reservationModal').modal('show');
    });

    $('#loginModal').modal({show: false});
    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
    });
});