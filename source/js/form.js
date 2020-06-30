$(".feedback__input").focus(function () {
  $(this).parent().addClass("feedback__item--active");
});

$(".feedback__input").focusout(function () {
  if ($(this).val() === "")
    $(this).parent().removeClass("feedback__item--active");
})

$(".feedback__select").focus(function () {
  $(this).parent().addClass("feedback__item--active-select");
});

$(".feedback__select").focusout(function () {
  if ($(this).val() === "")
    $(this).parent().removeClass("feedback__item--active-select");
})

$(".popular__menu").on("click", ".popular__link", function () {
  $(".popular__menu .popular__link").removeClass("popular__link--active");
  $(this).addClass("popular__link--active");
});
