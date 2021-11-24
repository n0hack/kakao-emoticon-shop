import throttle from '../lib/throttle';

const inputNumber = document.querySelector('#js-number-input');
const btnNext = document.querySelector('#js-next');

const onChange = (e) => {
  if (e.target.value.length >= 10) {
    btnNext.classList.add('btn-next--active');
  } else {
    btnNext.classList.remove('btn-next--active');
  }
};

if (inputNumber) inputNumber.addEventListener('input', throttle(onChange, 300));
