$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    /* next and previous page */
   $('#showNext').on('click', function(){
        $('.first-page').show(500);
        $('#second-page').hide(500);
   });
   $('#showPrev').on('click', function(){
        $('.first-page').hide(500);
        $('#second-page').show(500);
    });
    /* show and hide products categories */
    $('#allCat').on('click', function(){
        $('#products-headphone, #products-chargers, #products-adapter, #products-cabels, #products-cases').hide(500);
        $('#products-all').show(500);
        $('#allCat ').siblings().removeClass('active');
        $('#allCat ').addClass('active');
    });
    $('#adapterCat').on('click', function(){
        $('#products-headphone, #products-chargers, #products-cabels, #products-cases, #products-all').hide(500);
        $('#products-adapter').show(500);
        $('#adapterCat ').siblings().removeClass('active');
        $('#adapterCat ').addClass('active');
    });
    $('#headphonCat').on('click', function(){
        $('#products-adapter, #products-chargers, #products-cabels, #products-cases, #products-all').hide(500);
        $('#products-headphone').show(500);
        $('#headphonCat ').siblings().removeClass('active');
        $('#headphonCat ').addClass('active');
    });
    $('#chargerCat').on('click', function(){
        $('#products-adapter, #products-headphone, #products-cabels, #products-cases, #products-all').hide(500);
        $('#products-chargers').show(500);
        $('#chargerCat ').siblings().removeClass('active');
        $('#chargerCat ').addClass('active');
    });
    $('#cabelsCat').on('click', function(){
        $('#products-adapter, #products-chargers, #products-headphone, #products-cases, #products-all').hide(500);
        $('#products-cabels').show(500);
        $('#cabelsCat ').siblings().removeClass('active');
        $('#cabelsCat ').addClass('active');
    });
    $('#casesCat').on('click', function(){
        $('#products-adapter, #products-chargers, #products-headphone, #products-all, #products-cabels').hide(500);
        $('#products-cases').show(500);
        $('#casesCat ').siblings().removeClass('active');
        $('#casesCat ').addClass('active');
    });
    // sing in | sing up
    $('#createAccount').on('click', function(e){
        e.preventDefault();
        $('#sing-in').hide();
        $('#sing-up').show();
    });
    $('#sing').on('click', function(e){
        e.preventDefault();
        $('#sing-in').show();
        $('#sing-up').hide();
    });
    // display le payment
    $('.card').on('click', function(){
        window.open('buy.html');
      });
    // display and hide adding product
    setInterval(() => {
        $('#add').on('click', function(){
            if($('.numbre').val() >= '1'){
                $('.added').fadeIn(500);
            }
        });
        $('.added').hide(3000);
    }, 500);

    $('#add').on('click', function(){
        if($('.numbre').val() >= '1'){
            var count = parseInt($('.numbre').val());
            $('.fa-shopping-cart span').first().text(count);
            $('.nav-link span:last').text(6.00 * count + '.00 $');
        }
    });
    // dark mode
    const options = {
        bottom: '10px', // default: '32px'
        right: '32px', // default: '32px'
        left: 'unset', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true,
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
      }

      const darkmode = new Darkmode(options);
      darkmode.showWidget();
    // whatsapp 
    $(function () {
        $('#myDiv').floatingWhatsApp({
          phone: '+212628320484'
        });
      });
});