import throttle from '../lib/throttle';

const nav = document.querySelector('#js-nav');
const wrap = document.querySelector('#js-kakao-wrap');

window.tempY = 0;

const handleToggleNav = () => {
  if (window.innerWidth >= 1024) {
    nav.classList.remove('nav--hide');
  } else {
    if (tempY > wrap.scrollTop) {
      nav.classList.remove('nav--hide');
    } else if (tempY < wrap.scrollTop && wrap.scrollTop >= 50) {
      nav.classList.add('nav--hide');
    }
    tempY = wrap.scrollTop;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    if (nav) nav.classList.remove('nav--hide');
  }
};

if (window) window.addEventListener('resize', throttle(handleResize), 300);
if (wrap) wrap.addEventListener('wheel', throttle(handleToggleNav, 300));
