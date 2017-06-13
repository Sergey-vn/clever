/*// create underline
$('.thumb_slider').on('init', function(event, slick){
  $('.thumb-slider-dots .slick-dots').append( "<li class='underline'></li>" );
  $('.underline').css({'width': $(".thumb-slider-dots .slick-dots .slick-active").width(), 'left': 0});
});
*/
// init slider
$(".thumb_slider").slick({

  autoplay: true,
  dots: true,
  arrows: false,
  speed: 660,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  appendDots: $('.thumb-slider-dots'),
  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data('thumb');
    var text = $(slider.$slides[i]).data('text');
    /*return '<div class="img '+thumb+'"></div>' +
           '<div class="title">'+text+'</div>';*/
  }
});

/*
// set position for underline
$(".thumb_slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

  setTimeout(function () {
    var activeElement = document.querySelector(".thumb-slider-dots .slick-dots .slick-active");
    var activeElementLeft = activeElement.offsetLeft;
    var activeElementTop = activeElement.offsetTop;
    var activeElementWidth = activeElement.offsetWidth;
    var activeElementHeight = activeElement.offsetHeight;

    $('.underline').css({'left': activeElementLeft, 'width': activeElementWidth, 'top': activeElementHeight + activeElementTop})
  }, 100)

});
*/


