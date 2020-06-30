$(document).ready(function () {

  var RadioBut = true;
  var slideNum = 1;
  var slideTime;
  slideCount = $(".slider__wrap .slide").length;

  var animSlide = function (arrow) {
    clearTimeout(slideTime);

    if (arrow == "next") {
      if (slideNum == slideCount) {slideNum = 1;}
      else {slideNum++}
      translateWidth = -$('.slider__active').width() * (slideNum - 1);
      $('.slider__wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if (arrow == "prew") {
      if (slideNum == 1) {slideNum = slideCount;}
      else {slideNum -= 1}
      translateWidth = -$('.slider__active').width() * (slideNum - 1);
      $('.slider__wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    } else {
      slideNum = arrow;
      translateWidth = -$('.slider__active').width() * (slideNum - 1);
      $('.slider__wrap').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
  }

  if (RadioBut) {
    $('.slider__arrow-right').click(function () {
      animSlide("next");
      return false;
    })
    $('.slider__arrow-left').click(function () {
      animSlide("prew");
      return false;
    })
  }
});
