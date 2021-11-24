const kakaoWrap = document.querySelector('#js-kakao-wrap');
const btnMovetop = document.querySelector('#js-movetop');
const nav = document.querySelector('#js-nav');

if (btnMovetop) {
  btnMovetop.addEventListener('click', () => {
    kakaoWrap.scrollTo(0, 0);
    nav.classList.remove('nav--hide');
  });
}
