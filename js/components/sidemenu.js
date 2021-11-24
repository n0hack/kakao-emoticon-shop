const kakaoWrap = document.querySelector('#js-kakao-wrap');
const sidemenu = document.querySelector('#js-sidemenu');
const sidemenuOverlay = document.querySelector('#js-sidemenu-overlay');
const btnOpenSidemenu = document.querySelector('#js-open-sidemenu');
const nav = document.querySelector('#js-nav');
const profile = document.querySelector('#js-profile');

const handleOpenSidemenu = () => {
  // 최상단으로 이동
  kakaoWrap.scrollTo(0, 0);
  nav.classList.remove('nav--hide');
  window.tempY = 0;
  profile.classList.remove('profile--show');
  window.isProfileOpen = false;

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

if (btnOpenSidemenu) btnOpenSidemenu.addEventListener('click', handleOpenSidemenu);

// 사이드메뉴 버튼
const btnOpenNumberPopup = document.querySelector('#js-open-popup');

const handleOpenPopup = () => {
  window.open('number.html', '카카오 이모티콘샵', 'width=500, height=770');
};

if (btnOpenNumberPopup) btnOpenNumberPopup.addEventListener('click', handleOpenPopup);
