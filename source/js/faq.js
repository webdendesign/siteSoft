'use strict';

window.addEventListener('DOMContentLoaded', function () {

  let faqBlock = Array.prototype.slice.call(document.querySelectorAll('.faq__block'));

  faqBlock.forEach(function (i) {
    i.addEventListener('click', function (evt) {
      var curEl = evt.currentTarget.querySelector('button');
      if (curEl.classList.contains('faq__toggle--open')) {
        curEl.classList.remove('faq__toggle--open');
        curEl.classList.add('faq__toggle--close');
        i.classList.add('faq__hide-question');
      } else if (curEl.classList.contains('faq__toggle--close')) {
        curEl.classList.remove('faq__toggle--close');
        curEl.classList.add('faq__toggle--open');
        i.classList.remove('faq__hide-question');
      }
    });
  });
});
