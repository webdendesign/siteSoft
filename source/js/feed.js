var form = document.querySelector('.feedback__form');

var elem = document.querySelectorAll('.feedback__input');
var label = form.querySelectorAll('label');

for (let i = 0; i < elem.length; i++) {
  elem[i].addEventListener('input', function () {
    elem.forEach(function (el) {
      if (el.id == 'first-name') {
        if (el.value.length >= 1) {
          label[0].classList.add('feedback__label--first-name');
        } else {
          label[0].classList.remove('feedback__label--first-name');
        }
      }
      if (el.id == 'last-name') {
        if (el.value.length >= 1) {
          label[1].classList.add('feedback__label--last-name');
        } else {
          label[1].classList.remove('feedback__label--last-name');
        }
      }
      if (el.id == 'email') {
        if (el.value.length >= 1) {
          label[2].classList.add('feedback__label--email');
        } else {
          label[2].classList.remove('feedback__label--email');
        }
      }
      if (el.id == 'address') {
        if (el.value.length >= 1) {
          label[3].classList.add('feedback__label--address');
        } else {
          label[3].classList.remove('feedback__label--address');
        }
      }
    })
  })
}
