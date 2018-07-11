function tankuang(){
    $('.motai').fadeIn();
}
function shuttan(){
    $('.motai').fadeOut();
}
$(function(){
    $(document).scroll(function(){
        var cTop = $(this).scrollTop()+$(window).innerHeight();
        if(cTop>$('.xuanze').offset().top){
            $('.xuanze').addClass('animated fadeInLeft');
        }
        if(cTop>$('.fa-users').offset().top){
            $('.fa-users,.fa-user,.fa-vcard-o,.fa-question-circle').addClass('animated fadeInLeft');
        }
        if(cTop>$('.often').offset().top){
            $('.often').addClass('animated fadeInLeft');
        }
        if(cTop>$('.team').offset().top){
            $('.team').addClass('animated fadeInLeft');
        }
    });
    $('.boda').click(function(){
        shuttan();
    })
    $('.motai').click(function(ev){
        shuttan()
    })
    $('.mo-inner').click(function(ev){
        ev.stopPropagation();
    })
})