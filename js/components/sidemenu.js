const kakaoWrap = document.querySelector('#js-kakao-wrap');
const sidemenu = document.querySelector('#js-sidemenu');
const sidemenuOverlay = document.querySelector('#js-sidemenu-overlay');
const btnOpenSidemenu = document.querySelector('#js-open-sidemenu');

const handleOpenSidemenu = () => {
  kakaoWrap.classList.add('kakao-wrap--overlay');
  sidemenu.classList.remove('sidemenu--hide');
  sidemenuOverlay.classList.remove('sidemenu-overlay--hide');
  sidemenuOverlay.addEventListener('click', handleCloseSidemenu);
};

const handleCloseSidemenu = () => {
  kakaoWrap.classList.remove('kakao-wrap--overlay');
  sidemenu.classList.add('sidemenu--hide');
  sidemenuOverlay.classList.add('sidemenu-overlay--hide');
  sidemenuOverlay.removeEventListener('click', handleCloseSidemenu);
};

btnOpenSidemenu.addEventListener('click', handleOpenSidemenu);
