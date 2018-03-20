$(document).ready(function () {
    var scroolAbout = $('#lnk-o-nas');
    var scrollOffer = $('#lnk-oferta');
    var scrollSChol = $('#lnk-zapisy-na-szkolenia');
    var scrollContant = $('#lnk-kontakt');
    var scrollPrice = $('#lnk-cennik');
    var slideNr = $('.slid-number');
    var arrowUp = $('.arrow1 i');
    var arrowDown = $('.arrow2 i');
    var skiper = $('.slide-skiper');
    var buttonsReserved= $('#custom-text .button-kurs button');
    var lazyloaderContent = $('.home-page-product');
    var phoneImgq = $('<img src="/img/email_icon_small.png" class="icon-foot">');
    var emailImgq = $('<img src="/img/phone_icon.png" class="icon-foot">');
    var phoning=$('.info-keeper-foot-f .links .row .col-md-6 .collapse li a');
    emailImgq.insertBefore(phoning.eq(0))
    phoneImgq.insertBefore(phoning.eq(1))
    var margin;
    var topMove;
    
    $('.product-name').each(function(event,index){ /* select all divs with the item class */

        var max_length = 20; /* set the max content length before a read more link will be added */
        var short_text  = $(this).html();
                       
        if($(this).html().length > max_length){ /* check for content length */
            
            var short_content =  short_text.substring(0,max_length);
            /* split the content in two parts */
            var long_content = $(this).html().substr(max_length);
            $(this).html(short_content+'...'); /* Alter the html to allow the read more functionality */
        }
    });
    
    scroolAbout.on('click', function () {
        
         $('html, body').animate({
                    scrollTop: $("#about-scroll").offset().top
                }, 1000);
    });
    scrollOffer.on('click', function () {
       
         $('html, body').animate({
                    scrollTop: $("#offer-scroller").offset().top
                }, 1000);
    });
    scrollPrice.on('click', function (e) {
        e.preventDefault();
         $('html, body').animate({
                    scrollTop: $("#home-page-product-sztywno").offset().top
                }, 1000);
    });
    scrollSChol.on('click', function () {
        
         $('html, body').animate({
                    scrollTop: $("#home-page-product-sztywno").offset().top
                }, 1000);
    });
    buttonsReserved.on('click', function () {
        
         $('html, body').animate({
                    scrollTop: $("#home-page-product-sztywno").offset().top
                }, 1000);
    });
    scrollContant.on('click', function () {
        
         $('html, body').animate({
                    scrollTop: $("#footer").offset().top
                }, 1000);
    });
    slideNr.eq(0).addClass('slid-active');
    slideNr.on('click', function () {
        var that = $(this);
        var heightMove = $('.slide-cliker-deeper').height();
        slideNr.removeClass('slid-active');
        
        
        var catchSpan = that.find('span');
        var valueValidator = catchSpan.text();
        
        
        if ( valueValidator=='01' ) {
            topMove='0px';
            margin='0px';
        }
        else if ( valueValidator=='02' ) {
             margin='-5px';
            topMove='-'+heightMove+'px';
        }
        else if ( valueValidator=='03' ) {
            margin='-10px';
            topMove='-'+heightMove*2+'px';
        }
        else {
            margin='-15px';
            topMove='-'+heightMove*3+'px';
        }
        that.addClass('slid-active');
        setTimeout(function() {
            skiper.animate({
                marginTop:margin,
                top:topMove
            },500)
        },50)
    });
    arrowDown.on('click', function () {
                
        var heightMove = $('.slide-cliker-deeper').height();
        var activElement = $('.slid-number.slid-active');
        
        activElement.next().addClass('slid-active');
        activElement.removeClass('slid-active');
        var actived = $('.slid-number.slid-active').find('span');
        var actived2 = $('.slid-number.slid-active').prev();
        var validator = actived.text();
         console.log(validator);
        if ( validator=='01' ) {
            topMove='0px';
            margin='0px';
        }
        else if ( validator=='02' ) {
             margin='-5px';
            topMove='-'+heightMove+'px';
            slideNr.eq(1).addClass('slid-active');
        }
        else if ( validator=='03' ) {
            margin='-10px';
            topMove='-'+heightMove*2+'px';
            slideNr.eq(2).addClass('slid-active');
        }
        else {
            margin='-15px';
            topMove='-'+heightMove*3+'px';
            slideNr.eq(3).addClass('slid-active');
        }
        
        setTimeout(function() {
            skiper.animate({
                marginTop:margin,
                top:topMove
            },500)
        },50)  
    });
   arrowUp.on('click', function () {
        
        var heightMove = $('.slide-cliker-deeper').height();
        var activElement = $('.slid-number.slid-active');
        
        activElement.prev().addClass('slid-active');
        activElement.removeClass('slid-active');
        var actived = $('.slid-number.slid-active').find('span');
        
        var validator = actived.text();
         console.log(validator);
         
        if ( validator=='01' ) {
            topMove='0px';
            margin='0px';
        }
        else if ( validator=='02' ) {
             margin='-5px';
            topMove='-'+heightMove+'px';
            slideNr.eq(1).addClass('slid-active');
        }
        else if ( validator=='03' ) {
            margin='-10px';
            topMove='-'+heightMove*2+'px';
            slideNr.eq(2).addClass('slid-active');
        }
        else {
            margin='-15px';
            topMove='-'+heightMove*3+'px';
            slideNr.eq(3).addClass('slid-active');
        }
        
        setTimeout(function() {
            skiper.animate({
                marginTop:margin,
                top:topMove
            },500)
            
        },50)
   });
    var footInfos = $('.footer-container li a');
    footInfos.on('click', function (e) {
        e.preventDefault();
    })

    
    var lastScrollTop = 0;
    $(window).on('scroll',function() {
        var iCurScrollPos = $(this).scrollTop();
        console.log( $(this).scrollTop() , lazyloaderContent.offset().top+lazyloaderContent.height()/2 )
        if (iCurScrollPos > lastScrollTop ) {
              for (var i =0; i<lazyloaderContent.length; i++) {
                   if (lazyloaderContent.eq(i).offset().top+lazyloaderContent.eq(i).height()/2 <= $(this).scrollTop()+$(this).height())  {
                    lazyloaderContent.eq(i).addClass('scrollAnimation');
                          if($(this).scrollTop()+lazyloaderContent.eq(i).height()/2>=lazyloaderContent.eq(i).offset().top+lazyloaderContent.eq(i).height() ) {
                            lazyloaderContent.eq(i).removeClass('scrollAnimation')  
                       }
                    }
              }
        } else {
             for (var i =0; i<lazyloaderContent.length; i++) {
                    if ( $(this).scrollTop()-lazyloaderContent.eq(i).height()/2 < lazyloaderContent.eq(i).offset().top+lazyloaderContent.eq(i).height()/2 ) {
                        lazyloaderContent.eq(i).addClass('scrollAnimation');
                        if($(this).scrollTop()+$(this).height()< lazyloaderContent.eq(i).offset().top+lazyloaderContent.eq(i).height()/2 ) {
                            lazyloaderContent.eq(i).removeClass('scrollAnimation')  
                       }
                    }
              }
        }
        lastScrollTop = iCurScrollPos;
    });
});