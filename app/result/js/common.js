jQuery(document).ready(function( $ ) {


  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();      
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });

  $('.top-mnu ul, .top-mnu .butt, .top-sel').click(function (e) {
    e.stopPropagation();
  });

  $('select').fancySelect();



/*  $('.wrapper').prepend('<span class="eye-3"></span>');
  let pg = parseInt(document.location.pathname.match(/\d+/))
  $('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

  $('.eye-3').click(function (e) {
    e.preventDefault();  
    $('body').toggleClass('active');
    let pg = parseInt(document.location.pathname.match(/\d+/));
    $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
    $('body:not(.active)').css('background-image', "unset");
  });*/



  $('.slider').slick({
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,    
    easing: 'linear',
    touchMove: false,
    variableWidth: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });



  function slickNext1() {
    $('.slider').slick('slickNext');
    $('.s-cont').removeClass('anim');
  }

  function slickPrev1() {
    $('.slider').slick('slickPrev');
    $('.s-cont').removeClass('anim');
  }

  $('.slick-prev-2').click(function () {
    $('.s-cont').removeClass('anim');
    $('.slick-active .s-cont').addClass('anim');
    setTimeout(slickPrev1, 1000);    
  });

  $('.slick-next-2').click(function () {
    $('.s-cont').removeClass('anim');
    $('.slick-active .s-cont').addClass('anim');
    setTimeout(slickNext1, 1000);    
  });
  
  if ($(window).width() < 993) {
    $('.s-input-s').attr('placeholder', 'от');
    $('.s-input-p').attr('placeholder', 'от');
    $('.s-input-b').attr('placeholder', 'ЖК или адрес');
  }

  $('.sort-r-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.sort-r-1 .tabs_control_item'),
    contentItem = $('.proj-list .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });
  
  /*
  $('.sort-r-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.sort-r-2 .tabs_control_item'),
    contentItem = $('.develop-proj-list .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });
  */



  $('.arr-more-w .link-arr').click(function (e) {

    e.preventDefault();
    $('.check-butts').toggleClass('ha');
    $('.sort-w').toggleClass('fww');
    if ( $('.arr-more-w .link-arr').html() == 'Показать еще' ) {
      $('.arr-more-w .link-arr').html('Скрыть');
    }
    else {
     $('.arr-more-w .link-arr').html('Показать еще'); 
   }
 });



  $('.filter-section-2 .link-arr-w').click(function (e) {
    e.preventDefault();
    if ( $('.filter-section-2 .link-arr-w span').html() == 'Подбор по параметрам' ) {
      $('.filter-section-2 .link-arr-w span').html('Свернуть');
    }
    else {
      $('.filter-section-2 .link-arr-w span').html('Подбор по параметрам'); 
    }   
    $('.filter-section-2 .s-input-w-6').toggleClass('show-par');    
    $('.filter-section-2 .link-arr-w img').toggleClass('rot180');
    $('.filter-section-2 .s-input-w-7').toggleClass('shw');

    $('.filter-section-2 .s-filter-more-chars').slideToggle();

    if ($(window).width() < 993) {
      $('.label-n-7').slideToggle();

    }

  });


  $('.filter-section-3 .link-arr-w').click(function (e) {
    e.preventDefault();    
    if ( $('.filter-section-3 .link-arr-w span').html() == 'Подбор по параметрам' ) {
      $('.filter-section-3 .link-arr-w span').html('Свернуть');
    }
    else {
      $('.filter-section-3 .link-arr-w span').html('Подбор по параметрам'); 
    }   
    $('.filter-section-3 .s-input-lbl-wrap_4').toggleClass('show-par');    
    $('.filter-section-3 .link-arr-w img').toggleClass('rot180');
    $('.filter-section-3 .s-input-lbl-wrap_5').toggleClass('shw');

    $('.filter-section-3 .s-filter-more-chars').slideToggle();

    if ($(window).width() < 993) {
      //$('.label-n-7').slideToggle();

    }

  });


  $('.filter-section-4 .link-arr-w').click(function (e) {
    e.preventDefault();    
    if ( $('.filter-section-4 .link-arr-w span').html() == 'Подбор по параметрам' ) {
      $('.filter-section-4 .link-arr-w span').html('Свернуть');
    }
    else {
      $('.filter-section-4 .link-arr-w span').html('Подбор по параметрам'); 
    }   
    $('.filter-section-4 .s-input-w-22').toggleClass('show-par');    
    $('.filter-section-4 .link-arr-w img').toggleClass('rot180');
    $('.filter-section-4 .s-input-lbl-wrap_5').toggleClass('shw');
    $('.develop-form_4').toggleClass('open');
    $('.filter-section-4 .s-filter-more-chars').slideToggle();

    if ($(window).width() < 993) {
      //$('.label-n-7').slideToggle();

    }

  });

  $(".map-col-l").mCustomScrollbar({
    axis: "y",
    theme: "dark-3"    
  });
  if( $(window).width() < 993 ) {
    $(".map-col-l").mCustomScrollbar("destroy");
  }


  $(window).resize(function() {
    if( $(window).width() > 992 ) {
     $(".map-col-l").mCustomScrollbar({
      axis: "y",
      theme: "dark-3"    
    });
   }
 });

  $(window).resize(function() {
    if( $(window).width() < 993 ) {
      $(".map-col-l").mCustomScrollbar("destroy");
    }
  });


  $('.s-link-par').click(function (e) {
    e.preventDefault();
    $('.map-col-l .s-form').slideToggle();    
    $(this).toggleClass('hov');
  });

  //example var chart_div = document.getElementById("mychart");
  //var chart_div = document.getElementById("rate-donut-1");

  //var i = 0;
  //var donut_counts = document.getElementsByClassName('rate-it-img-w').length;
  //console.log(donut_counts);

  //var chart_div = document.querySelectorAll(".rate-it-img-w");
  var elements = document.querySelectorAll(".rate-it-img-w");

  elements.forEach(function(elem, i) {
    //console.log(elem, i);
    var elem_svg = elem.querySelector('.svg');
    
    var item_rate = elem.querySelector('.rate-it-span').textContent;
    var item_rate = Number.parseInt(item_rate);
    var item_rate = item_rate * 0.199;    

    var mychart = new DonutChart(elem_svg, {
      r: 45.5,
      stroke: 4,
      scale: 100,
      items: [
      { label: "A", value: item_rate },

      ]
    });

  });




  var elements = document.querySelectorAll(".item-built");

  elements.forEach(function(elem, i) {
    //console.log(elem, i);
    var elem_svg = elem.querySelector('.svg-2');
    
    var item_rate = elem.querySelector('.item-built-span').textContent;
    var item_rate = Number.parseInt(item_rate);
    if ( item_rate > 20 ) {
      item_rate = 20;
    }
    var item_rate = item_rate * 0.049999;        

    var mychart = new DonutChart(elem_svg, {
      r: 16,
      stroke: 2,
      scale: 100,
      items: [
      { label: "A", value: item_rate },

      ]
    });

  });

  var elements = document.querySelectorAll(".item-proc");

  elements.forEach(function(elem, i) {
    //console.log(elem, i);
    var elem_svg = elem.querySelector('.svg-3');
    
    var item_rate = elem.querySelector('.item-proc-span').textContent;
    var item_rate = Number.parseInt(item_rate);
    if ( item_rate > 20 ) {
      item_rate = 20;
    }
    var item_rate = item_rate * 0.049999;        

    var mychart = new DonutChart(elem_svg, {
      r: 16,
      stroke: 2,
      scale: 100,
      items: [
      { label: "A", value: item_rate },

      ]
    });

  });


  $( '#example3' ).sliderPro({
    width: 828,
    height: 593,
    fade: true,
    arrows: true,
    buttons: false,
    fullScreen: false,
    shuffle: true,
    smallSize: 500,
    mediumSize: 1000,
    largeSize: 3000,
    thumbnailArrows: true,
    autoplay: false
  });

  $( '#example4' ).sliderPro({
    width: 828,
    height: 655,
    fade: true,
    arrows: true,
    buttons: false,
    fullScreen: false,
    shuffle: true,
    smallSize: 500,
    mediumSize: 1000,
    largeSize: 3000,
    thumbnailArrows: true,
    autoplay: false
  });

  
  $('.faq-txt-w').toggleClass('inactive-header');
  
  
  var contentwidth = $('.faq-txt-w').width();
  $('.faq-txt-3').css({'width' : contentwidth });
  
  $('.faq-item').first().addClass('act');
  $('.faq-txt-w').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.faq-txt-3').first().slideDown().toggleClass('open-content');
  
  
  $('.faq-txt-w').click(function () {

    var self = $(this);
    

    if( self.parent().hasClass('act') ) {      
      $('.faq-item').removeClass('act');      
      self.parent().removeClass('act');      
    }
    else {      
      $('.faq-item').removeClass('act');
      self.parent().addClass('act'); 
    }



    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');      
    }

    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');      
    }
  });
  

  
  $('.trigger-1').click(function(e) {
    e.preventDefault();
    $('.pop-form-w-1, .overlay').fadeIn();    
  });



  $('.trigger-2').click(function(e) {
    e.preventDefault();
    $('.pop-form-w-2, .overlay').fadeIn();    
  });

  $('.pop-form-w-1 .pop-close, .overlay').click(function(e) {
    e.preventDefault();
    $('.pop-form-w-1, .overlay').fadeOut();    
  });

  $('.pop-form-w-2 .pop-close, .overlay').click(function(e) {
    e.preventDefault();
    $('.pop-form-w-2, .overlay').fadeOut();    
  });


  $("#calc-distance").slider({
    range: "min",
    step: 50000,
    value: 750000,
    min: 0,
    max: 10000000,
    slide: function( event, ui ) {
      $( "#amount-distance" ).val( ui.value.toLocaleString() );
    }
  });
  $( "#amount-distance" ).val( $( "#calc-distance" ).slider( "value" ).toLocaleString() );

  $("#calc-distance-2").slider({
    range: "min",
    step: 50000,
    value: 0,
    min: 0,
    max: 10000000,
    slide: function( event, ui ) {
      $( "#amount-distance-2" ).val( ui.value.toLocaleString() );
    }
  });
  $( "#amount-distance-2" ).val( $( "#calc-distance-2" ).slider( "value" ).toLocaleString() );



  $('.develop-tabs').wrap("<div class='develop-tabs-wrap'></div>")

  $('.compare-main td:nth-child(4)').each(function () {
    var th = $(this).html();
    $(this).after('<td>'+th+'</td>');
  });


  $('.compare-main').addClass('compare-main_more_3_elems');



  $(".compare-main_more_3_elems").mCustomScrollbar({
    axis: "x",
    theme: "dark-3",
    scrollInertia: 400,
    mouseWheel: false
  });



$('.rcomplex-span').click(function (e) {
  e.preventDefault();
  $('.phone-show').toggleClass('show');
  $('.phone-hide').toggleClass('hide');
});


/*
$('.revs-ava').replaceWith(function(){  
  return $("<a href='#' class='revs-ava'>"+$(this).html()+'</div>');
});

$('.proj-img-w').prepend('<a href="#project-link" class="proj-img-link"></a>');
*/




}); //ready