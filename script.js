$(function() {



  $('#mobile-search-form').val('');


$('#mobile-search').click(function(){

  $('#mobile-nav , #logo').hide();
  $('#mobile-search-cross , #mobile-search-form').show();
  if($('#popup-container').is(':visible')){
    $('#popup-container').hide();
    $('#black-bar').show();
    // $('#header').css('position', 'fixed');
    $('html').css('overflow','auto');
    $('#mobile-nav').css({
      'background-image': 'url(img/mobile-nav.png)',
      'width': '20px',
      'height' : '16px'
    });
    $('#mobile-nav-shadow').hide();
  }
});

$('#mobile-search-cross').click(function(){
  $('#mobile-nav , #logo').show();
  $('#mobile-search-cross , #mobile-search-form').hide();
  $('#mobile-search-form').val('');

});

$('#mobile-nav').click(function(){
  if($('#popup-container').is(':visible')){

    $('#popup-container').hide();
    $('#black-bar').show();
    // $('#header').css('position', 'fixed');
    $('html').css('overflow','auto');
    $('#mobile-nav').css({
      'background-image': 'url(img/mobile-nav.png)',
      'width': '20px',
      'height' : '16px'
    });
    $('#mobile-nav-shadow').hide();
  }
  else{

    $('#popup-container').show();
    $('#black-bar').hide();
    // $('#header').css('position', 'fixed');
    $('html').css('overflow','hidden');
    $('#mobile-nav').css({
      'background-image': 'url(img/nav-cross.png)',
      'width': '18px',
      'height' : '18px'
    });
    $('#mobile-nav-shadow').show();
  }

});


// if($('#popup-container').is(':visible')){
//   $('html').css('overflow', 'hidden');
//   $('#black-bar').hide();
//   $('#header').css({
//     'position': 'fixed',
//     'z-index': '10'
//   });
//   $('#shadow').css({
//     'position': 'fixed',
//     'z-index': '10'
//   });
//   $('#mobile-nav').css({
//     'background-image': 'url(img/nav-cross.png)',
//     'width': '14px',
//     'height': '14px'
//
//   });
// }
// else {
//   $('html').css('overflow', 'auto');
//   $('#black-bar').show();
//   $('#header').css({
//     'position': 'static',
//     'z-index': 'auto'
//   });
//   $('#shadow').css({
//     'position': 'static',
//     'z-index': 'auto'
//   });
// }


  // const togleScroll = function() {
  //   $('html , body').toggleClass('togleScroll');
  // };
  // $('#mobile-nav')
  //   .click(function() {
  //     // var popup = $('#popup-container , #popup');
  //     // if(popup.is(':visible')){
  //     //   popup.hide();
  //     // }
  //     // else {
  //     //   popup.show();
  //     // }
  //     $('#popup-container').fadeIn(400, togleScroll);
  //     $('#popup').animate({
  //       'width': '320px',
  //       'height': '100%'
  //     }, 400);
  //   });
  // $('#popup-container').click(function(event) {
  //   if (event.target == this) {
  //     $(this).fadeOut(400, togleScroll);
  //     $('#popup').animate({
  //       'width': '0',
  //       'height': '0'
  //     }, 400);
  //   }
  // });


  // $.get('http://data.fixer.io/api/latest?access_key=c60d59bfa2667f89e3b2f92247e96afa&base = usd',
  //    function(currency) {
  //      $('#USD-CURS , #EUR-CURS').text(currency.base);
  //    });
});
