const wrapper = document.querySelector('.kakao-wrap');
const sidemenu = document.querySelector('.sidemenu');
const search = document.querySelector('.search-box');
const profile = document.querySelector('.profile');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const btnOpenSidemenu = document.querySelector('.btn-open-sidemenu');
const btnOpenSearch = document.querySelector('.btn-open-search');
const btnOpenProfile = document.querySelector('.btn-open-profile');
let overlayStack = 0;
let beforeScrollY = window.scrollY;

const moveTop = () => {
  window.scrollTo(0, 0);
};

const openSidemenu = () => {
  if (!sidemenu.classList.contains('sidemenu--hide')) return;
  overlayStack += 1;
  wrapper.classList.add('kakao-wrap--overlaid');
  sidemenu.classList.remove('sidemenu--hide');
  overlay.classList.remove('overlay--hide');
  overlay.classList.add('overlay-sidemenu');
  if (overlay.classList.contains('overlay-search')) {
    overlay.classList.remove('overlay-search');
  }
  closeProfile({ caller: 'sidemenu' });
  moveTop();
};

const openSearch = () => {
  if (!search.classList.contains('search-box--hide')) return;
  overlayStack += 1;
  wrapper.classList.add('kakao-wrap--overlaid');
  search.classList.remove('search-box--hide');
  overlay.classList.remove('overlay--hide');
  overlay.classList.add('overlay-search');
  closeProfile({ caller: 'search' });
  moveTop();
};

const openProfile = (e) => {
  e.stopPropagation();
  if (!profile.classList.contains('profile--hide')) {
    closeProfile({ caller: 'profile' });
  } else {
    profile.classList.remove('profile--hide');
    window.addEventListener('click', closeProfile);
  }
};

const closeSidemenu = () => {
  sidemenu.classList.add('sidemenu--hide');
  overlay.classList.remove('overlay-sidemenu');
};

const closeSearch = () => {
  search.classList.add('search-box--hide');
  overlay.classList.remove('overlay-sidemenu');
};

const closeProfile = (e) => {
  if (e.caller) {
    profile.classList.add('profile--hide');
    window.removeEventListener('click', closeProfile);
  }
  if (e.target) {
    if (!e.target.closest('.profile')) {
      profile.classList.add('profile--hide');
      window.removeEventListener('click', closeProfile);
    }
  }
};

const closeByOverlay = () => {
  if (overlayStack === 2) {
    overlayStack -= 1;
    closeSidemenu();
    overlay.classList.add('overlay-search');
  } else if (overlayStack === 1) {
    overlayStack -= 1;
    wrapper.classList.remove('kakao-wrap--overlaid');
    overlay.classList.add('overlay--hide');
    if (overlay.classList.contains('overlay-sidemenu')) closeSidemenu();
    else if (overlay.classList.contains('overlay-search')) closeSearch();
  }
};

const toggleNav = (delay) => {
  let timer = null;

  return (e) => {
    if (timer) return;
    timer = setTimeout(() => {
      if (beforeScrollY !== window.scrollY) {
        if (window.innerWidth <= 767) {
          if (window.scrollY >= 44 && beforeScrollY - window.scrollY < 0) {
            nav.classList.add('nav--hide');
          } else if (beforeScrollY - window.scrollY > 0) {
            nav.classList.remove('nav--hide');
          }
        }
        beforeScrollY = window.scrollY;
      }
      timer = null;
    }, delay);
  };
};

btnOpenSidemenu.addEventListener('click', openSidemenu);
btnOpenSearch.addEventListener('click', openSearch);
btnOpenProfile.addEventListener('click', openProfile);
overlay.addEventListener('click', closeByOverlay);
window.addEventListener('scroll', toggleNav(300));