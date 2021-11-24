const kakaoWrap = document.querySelector('#js-kakao-wrap');
const sidemenu = document.querySelector('#js-sidemenu');
const sidemenuOverlay = document.querySelector('#js-sidemenu-overlay');
const btnOpenSidemenu = document.querySelector('#js-open-sidemenu');
const nav = document.querySelector('#js-nav');

const handleOpenSidemenu = () => {
  // 최상단으로 이동
  kakaoWrap.scrollTo(0, 0);
  nav.classList.remove('nav--hide');

  kakaoWrap.classList.add('kakao-wrap--sidemenu-overlay');
  sidemenu.classList.remove('sidemenu--hide');
  sidemenuOverlay.classList.remove('sidemenu-overlay--hide');
  sidemenuOverlay.addEventListener('click', handleCloseSidemenu);
};

const handleCloseSidemenu = () => {
  kakaoWrap.classList.remove('kakao-wrap--sidemenu-overlay');
  sidemenu.classList.add('sidemenu--hide');
  sidemenuOverlay.classList.add('sidemenu-overlay--hide');
  sidemenuOverlay.removeEventListener('click', handleCloseSidemenu);
};

btnOpenSidemenu.addEventListener('click', handleOpenSidemenu);

// 사이드메뉴 버튼
const btnOpenNumberPopup = document.querySelector('#js-open-popup');

const handleOpenPopup = () => {
  window.open('https://www.naver.com/', '카카오 이모티콘샵', 'width=600, height=300');
};

btnOpenNumberPopup.addEventListener('click', handleOpenPopup);
