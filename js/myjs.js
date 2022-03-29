$(function () {
    /* ham_menu_switch */
    $('.top_header_menu_btn,.c-btn_close,#ham_list_7').click(function(){
        $('#ham').toggleClass('is-active');
        $('#menu').toggleClass('hide');
        $('#btn_close').toggleClass('hide');
        $('#top_header').toggleClass('mix-blend-mode-normal');
        $('#ham_img').toggleClass('js-header_anim_show');
        $('#ham_contact').toggleClass('js-header_anim_show_contact');
        $('#ham_list_1').toggleClass('js-header_anim_show_1');
        $('#ham_list_2').toggleClass('js-header_anim_show_2');
        $('#ham_list_3').toggleClass('js-header_anim_show_3');
        $('#ham_list_4').toggleClass('js-header_anim_show_4');
        $('#ham_list_5').toggleClass('js-header_anim_show_5');
        $('#ham_list_6').toggleClass('js-header_anim_show_6');
        $('#ham_list_7').toggleClass('js-header_anim_show_7');
    });

    /* aside_access_switch */
    $('#aside_access_show,.c-btn_close_access,#ham_list_7').click(function(){
        $('#aside_access').toggleClass('is-active');
        $('#btn_close_access').toggleClass('hide');
        $('#access_title').toggleClass('js-aside_access_show_title');
        $('#access_txt').toggleClass('js-aside_access_show_txt');
        $('#access_map').toggleClass('js-aside_access_show_map');
        $('#access_sub').toggleClass('js-aside_access_show_sub');
    });

    /*  smoove 選項*/
    $('.js-smoove_show').smoove({
        offset: '5%',
    });
    $('.js-smoove_show_scale').smoove({
        offset: '5%',
        scale:'1.1'
    });

    /* 讀取完成顯現 */
    window.onload= showfadein;
    function showfadein (){
        $('.l-about_vision_picture').addClass('js-about_onload_show');
        $('.l-member_content_picture_img').addClass('js-about_onload_show');
        $('.top_work_content_top').addClass('js-about_onload_show');
        $('.l-service_title_picture_img').addClass('js-about_onload_show');

        /* loader 讀取畫面 */
        $('#loader').addClass('animation_onload');
        $('.loader_content').addClass('animation_content_onload');
        
        if($(window).width() < 767){
            $('#loader').attr('style','display:none');
        }
        else {
            $('#loader').delay(1000).hide(500);
        }
    };

    /* aside 邊攔視窗高度 */
    window.onscroll = function() {myFunction()};

    function myFunction() {
        
        /* 數字滾動 隱藏消失 */
        if (document.documentElement.scrollTop > 999) {
            document.getElementById("th").className = "hide";
        }
        else {
            document.getElementById("th").className = "scroll_odometer_th";
        }

        if (document.documentElement.scrollTop > 99) {
            document.getElementById("h").className = "hide";
        }
        else {
            document.getElementById("h").className = "scroll_odometer_h";
        }

        if (document.documentElement.scrollTop > 9) {
            document.getElementById("t").className = "hide";
        }
        else {
            document.getElementById("t").className = "scroll_odometer_t";
        }

        /* 視窗滾動 消失 */
        /* home-banner */
        if($(window).width() < 376){
            if (document.documentElement.scrollTop > 7443) {
                $('#home_banner').addClass('is-hide');
            }
            else {
                $('#home_banner').removeClass('is-hide');
            }
        }
        else{
            if($(window).width() < 769){
                if (document.documentElement.scrollTop > 9470) {
                    $('#home_banner').addClass('is-hide');
                }
                else {
                    $('#home_banner').removeClass('is-hide');
                }
            }
            else{
                if($(window).width() < 1025){
                    if (document.documentElement.scrollTop > 7985) {
                        $('#home_banner').addClass('is-hide');
                    }
                    else {
                        $('#home_banner').removeClass('is-hide');
                    }
                }
                else{
                    if (document.documentElement.scrollTop > 7629) {
                        $('#home_banner').addClass('is-hide');
                    }
                    else {
                        $('#home_banner').removeClass('is-hide');
                    }
                }
            }

        }

        /* work-banner */
        if($(window).width() < 376){
            if (document.documentElement.scrollTop > 4845) {
                $('#work_banner').addClass('is-hide');
            }
            else {
                $('#work_banner').removeClass('is-hide');
            }
        }
        else{
            if($(window).width() < 769){
                if (document.documentElement.scrollTop > 7492) {
                    $('#work_banner').addClass('is-hide');
                }
                else {
                    $('#work_banner').removeClass('is-hide');
                }
            }
            else{
                if($(window).width() < 1025){
                    if (document.documentElement.scrollTop > 4467) {
                        $('#work_banner').addClass('is-hide');
                    }
                    else {
                        $('#work_banner').removeClass('is-hide');
                    }
                }
                else{
                    if (document.documentElement.scrollTop > 5118) {
                        $('#work_banner').addClass('is-hide');
                    }
                    else {
                        $('#work_banner').removeClass('is-hide');
                    }
                }
            }

        }

        /* about-banner */
        if($(window).width() < 376){
            if (document.documentElement.scrollTop > 5026) {
                $('#about_banner').addClass('is-hide');
            }
            else {
                $('#about_banner').removeClass('is-hide');
            }
        }
        else{
            if($(window).width() < 769){
                if (document.documentElement.scrollTop > 4652) {
                    $('#about_banner').addClass('is-hide');
                }
                else {
                    $('#about_banner').removeClass('is-hide');
                }
            }
            else{
                if($(window).width() < 1025){
                    if (document.documentElement.scrollTop > 4478) {
                        $('#about_banner').addClass('is-hide');
                    }
                    else {
                        $('#about_banner').removeClass('is-hide');
                    }
                }
                else{
                    if (document.documentElement.scrollTop > 4245) {
                        $('#about_banner').addClass('is-hide');
                    }
                    else {
                        $('#about_banner').removeClass('is-hide');
                    }
                }
            }
        }

        /* member-banner */
        if($(window).width() < 376){
            if (document.documentElement.scrollTop > 2187) {
                $('#member_banner').addClass('is-hide');
            }
            else {
                $('#member_banner').removeClass('is-hide');
            }
        }
        else{
            if($(window).width() < 769){
                if (document.documentElement.scrollTop > 3563) {
                    $('#member_banner').addClass('is-hide');
                }
                else {
                    $('#member_banner').removeClass('is-hide');
                }
            }
            else{
                if($(window).width() < 1025){
                    if (document.documentElement.scrollTop > 2715) {
                        $('#member_banner').addClass('is-hide');
                    }
                    else {
                        $('#member_banner').removeClass('is-hide');
                    }
                }
                else{
                    if (document.documentElement.scrollTop > 3435) {
                        $('#member_banner').addClass('is-hide');
                    }
                    else {
                        $('#member_banner').removeClass('is-hide');
                    }
                }
            }
        }

        /* service-banner */
        if($(window).width() < 376){
            if (document.documentElement.scrollTop > 7795) {
                $('#service_banner').addClass('is-hide');
            }
            else {
                $('#service_banner').removeClass('is-hide');
            }
        }
        else{
            if($(window).width() < 769){
                if (document.documentElement.scrollTop > 8209) {
                    $('#service_banner').addClass('is-hide');
                }
                else {
                    $('#service_banner').removeClass('is-hide');
                }
            }
            else{
                if($(window).width() < 1025){
                    if (document.documentElement.scrollTop > 8678) {
                        $('#service_banner').addClass('is-hide');
                    }
                    else {
                        $('#service_banner').removeClass('is-hide');
                    }
                }
                else{
                    if (document.documentElement.scrollTop > 5600) {
                        $('#service_banner').addClass('is-hide');
                    }
                    else {
                        $('#service_banner').removeClass('is-hide');
                    }
                }
            }
        }

    };

    /* aside 邊欄數字捲動 */
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        $(".subs-odometer").text(scrollVal);
    });

    const subsOdometer = document.querySelector(".subs-odometer");

    const odometer = new Odometer({
    el: subsOdometer,
    format:'ddd',
    
    duration:'2000',
    });

    // odometer.update(10864);
    subsOdometer.innerHTML = 0000 ;

    /* 輪播圖 */
    $('.top_3_picture_slick').slick({
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        speed:1000,
        cssEase: 'linear',
        pauseOnDotsHover: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false,
        swipe: false,
        rtl: true,

        responsive: [{
        breakpoint: 1024,
        settings: {
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            speed:1000,
        }
        }]
    });
});

