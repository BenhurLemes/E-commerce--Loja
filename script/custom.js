
// Pesquisa
$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel', function(){
    $('.search-bar').removeClass('search-bar-active')
});

// Login e cadastro
$(document).on('click', '.user,.already-acount', function(){
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click', '.sign-up-btn', function(){
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click', '.form-cancel', function(){
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});

//Slider
$(document).ready(function(){
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
})

// Featured box
$(document).ready(function(){
    $('#autowidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden');
        }
    });
});

// for-fix-menu-when-scroll
$(window).scroll(function(){
    if($(document).scrollTop() > 50){
        $('.navigation').addClass('fix-nav');
    }
    else{
        $('.navigation').removeClass('fix-nav');
    }
});

// for-responsive-menu
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
})