$(function() {

  const togleScroll = function() {
    $('html , body').toggleClass('togleScroll')
  }
  $('button')
    .click(function() {
      // var popup = $('#popup-container , #popup');
      // if(popup.is(':visible')){
      //   popup.hide();
      // }
      // else {
      //   popup.show();
      // }
      $('#popup-container').fadeIn(400, togleScroll);
      $('#popup').animate({
        'width': '200px',
        'height': '300px'
      }, 400);
    });
  $('#popup-container').click(function(event) {
    if (event.target == this) {
      $(this).fadeOut(400, togleScroll);
      $('#popup').animate({
        'width': '0',
        'height': '0'
      }, 400);
    }
  })
})
