$(document).ready(function(){
  
  var first = $(".source:first-of-type");
  var last = $(".source:last-of-type");
  var initial = first.text();
  
  first.addClass("current");
  $(".slider").css({'background-image': 'url(' + initial + ')'});

  var nextSlide = function(){
    
    if ( last.hasClass("current") ) {
      last.removeClass("current");
      first.addClass("current");
    }
    else {
      $(".current").removeClass("current").next(".source").addClass("current");
    }
    var src = $(".current").text();
    $(".slider").css({'background-image': 'url(' + src + ')'});
    
  }
  
  if( $(".slider").hasClass("autoplay") ) {
    var speed = 1000;
    var autoplay = setInterval(function() {
      nextSlide();
    }, speed);
  }
  else {
    $(".next").click(function(){
      nextSlide();
    });
  }

});