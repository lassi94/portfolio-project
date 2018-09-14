
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");

github.addEventListener('click', redirect);
linkedin.addEventListener('click', redirect);
//fadeAnim.addEventListener('click', fade);

$(function (){
    $(document).scroll(function(){
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

function fade(){

    //window.location.replace('/dist/main.html');

    TweenMax.to(".myButton", 1, {
        y:-100,
        opacity:0
    });
    
    TweenMax.to(".head", 1, {
        y:-100,
        opacity:0
    });
    
    TweenMax.to(".subheading", 1, {
        y:-100,
        opacity:0
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2.6,
        top:"-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 3,
        top:"-200%",
        ease: Expo.easeInOut,
        opacity:0
    });

    TweenMax.from(".content", 2, {
        delay: 3.2,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to(".content", 2, {
        opacity: 1,
        y: 0,
        delay: 3.2,
        zIndex: 1,
        ease: Power2.easeInOut
    });

    TweenMax.from(".information", 2, {
        delay: 3.2,
        y: 500,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to(".information", 2,{
        opacity: 1,
        y: -130,
        delay:3.2,
        ease: Power2.easeInOut
    });
}

function redirect(path){

    var compare = path.localeCompare("github");
    console.log(compare);

    if(compare == 0){
        window.location.replace('https://github.com/lassi94');

    }else{
        window.location.replace('https://www.linkedin.com/in/lassi-korhonen-b50510127/');
    }
}

/*
$('[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event){
    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if(target.length){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 100, function(){
                var $target = $(target);
                $target.focus();
                if($target.is(":focus")){
                    return false;
                }else{
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});

*/