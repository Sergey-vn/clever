//tooltip init
function hideTooltip() {
  $('.tooltip .box').fadeOut(330);
}
$('body').click(function (event) {
  if ($(event.target).closest(".tooltip").length === 0) {
    hideTooltip();
  }
});
$('.tooltip').click( function () {
  if ($(this).find('.box').is(':visible')) {
    hideTooltip();
  } else {
    hideTooltip();
    $(this).find('.box').fadeIn(330);
  }
});