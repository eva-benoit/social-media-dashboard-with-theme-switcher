document.addEventListener('DOMContentLoaded', function() {

  // Detect IE browser
  var ua = navigator.userAgent;
  if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
    document.documentElement.classList.add('ie');
  }

  // Enable toggle button mecanism
  [].forEach.call(document.getElementsByClassName('toggle-btn'), function(element) {
    element.addEventListener('click', function() {
      document.documentElement.classList.toggle('light-mode');
      document.documentElement.classList.toggle('dark-mode');
      this.classList.toggle('on');
    });
  });

});
