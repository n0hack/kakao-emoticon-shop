import throttle from '../lib/throttle';

const nav = document.querySelector('#js-nav');
const wrap = document.querySelector('#js-kakao-wrap');

let tempY = 0;

const handleToggleNav = () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('nav--hide');
  } else {
    if (tempY > wrap.scrollTop) {
      nav.classList.remove('nav--hide');
    } else if (tempY < wrap.scrollTop) {
      nav.classList.add('nav--hide');
    }
    tempY = wrap.scrollTop;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('nav--hide');
  }
};

window.addEventListener('resize', throttle(handleResize), 300);
wrap.addEventListener('wheel', throttle(handleToggleNav, 300));
