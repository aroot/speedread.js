(function ($) {
  $.fn.speedRead = function(target, options) {
    var reader = this;
    var text = $(target).text();
    var data = text.split(" ");
    var settings = $.extend({
      wpm: 250
    }, options );
    var speed = 60000 / settings.wpm;
    var i = 0;
    
    var updateReader = function() {
      $(reader).text(data[i]);
      if(i++ < data.length) {
        setTimeout(function() {
          updateReader();
        }, speed);
      }
    };
    updateReader();

    return this;
  }
}(jQuery));
