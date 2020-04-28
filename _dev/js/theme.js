import $ from "jquery";

$(function() {

  $('.toggle-btn').click(function() {
    $('html').toggleClass('light-mode dark-mode');
    $(this).toggleClass('on');
  });

});
