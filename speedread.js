(function ($) {
  var data = [];
  var wpm = 500;
  var speed = 1000 / (wpm /60);
  var i = 0;

  $.fn.speedRead = function(target) {
    var text = $(target).text();
    var reader = this;
    data = text.split(" ");
    
    var updateReader = function() {
      $(reader).text(data[i]);
      i++;
      if(i < data.length) {
        setTimeout(function() {
          updateReader();
        }, speed);
      }
    };
    updateReader();

    return this;
  }
}(jQuery));
