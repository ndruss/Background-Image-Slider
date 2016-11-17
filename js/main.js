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
    
  };
  
  if( $(".slider").hasClass("autoplay") ) {
    var speed = 3500;
    var autoplay = setInterval(function() {
      nextSlide();
    }, speed);
  }
  else {
    $(".next").click(function(){
      nextSlide();
    });
  }

  $(".autoplay_switch").click(function(){

    if ( $(this).hasClass("on") === false ) {
      $(this).addClass("on");
      // $(".slider").addClass("autoplay");
      // var speed = 3500;
      // var autoplay = setInterval(function() {
      //   nextSlide();
      // }, speed);
    } else {
      $(this).removeClass("on");
      // $(".slider").removeClass("autoplay");
    }
    
  });



});