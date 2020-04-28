import $ from "jquery";

$(function() {

  // Detect IE browser
  var ua = navigator.userAgent;
  if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
    $('html').addClass('ie');
  }

  // Enable toggle button mecanisme
  $('.toggle-btn').click(function() {
    $('html').toggleClass('light-mode dark-mode');
    $(this).toggleClass('on');
  });

});
