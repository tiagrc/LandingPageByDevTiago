$(document).ready(function(){
    $('#mobile-btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
});