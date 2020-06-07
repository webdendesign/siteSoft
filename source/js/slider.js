$(document).ready(function () {

  var RadioBut = true;
  var slideNum = 1;
  var slideTime;
  slideCount = $("#slider-wrap .slide").length;

  var animSlide = function (arrow) {
    clearTimeout(slideTime);

    if (arrow == "next") {
      if (slideNum == slideCount) {slideNum = 1;}
      else {slideNum++}
      translateWidth = -$('#active-slide').width() * (slideNum - 1);
      $('#slider-wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if (arrow == "prew") {
      if (slideNum == 1) {slideNum = slideCount;}
      else {slideNum -= 1}
      translateWidth = -$('#active-slide').width() * (slideNum - 1);
      $('#slider-wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    } else {
      slideNum = arrow;
      translateWidth = -$('#active-slide').width() * (slideNum - 1);
      $('#slider-wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
  }

  if (RadioBut) {
    $('#nextbutton').click(function () {
      animSlide("next");
      return false;
    })
    $('#prewbutton').click(function () {
      animSlide("prew");
      return false;
    })
  }

});
