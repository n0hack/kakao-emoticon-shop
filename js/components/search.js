import throttle from '../lib/throttle';

const kakaoWrap = document.querySelector('#js-kakao-wrap');
const nav = document.querySelector('#js-nav');
const profile = document.querySelector('#js-profile');
const search = document.querySelector('#js-search');
const searchOverlay = document.querySelector('#js-search-overlay');
const inputSearch = document.querySelector('#js-input-search');
const btnOpenSearch = document.querySelector('#js-open-search');
const btnRemoveInput = document.querySelector('#js-remove-input');
const btnCancelSearch = document.querySelector('#js-cancel-search');

const handleOpenSearch = () => {
  // 최상단으로 이동
  kakaoWrap.scrollTo(0, 0);
  nav.classList.remove('nav--hide');
  window.tempY = 0;
  profile.classList.remove('profile--show');
  window.isProfileOpen = false;

  kakaoWrap.classList.add('kakao-wrap--search-overlay');
  search.classList.remove('search--hide');
  searchOverlay.classList.remove('search-overlay--hide');
  searchOverlay.addEventListener('click', handleCloseSearch);
  inputSearch.addEventListener('input', throttle(onChangeSearch, 300));
  btnRemoveInput.addEventListener('click', handleRemoveInput);
  btnCancelSearch.addEventListener('click', handleCloseSearch);
};

const handleCloseSearch = () => {
  kakaoWrap.classList.remove('kakao-wrap--search-overlay');
  search.classList.add('search--hide');
  searchOverlay.classList.add('search-overlay--hide');
  searchOverlay.removeEventListener('click', handleCloseSearch);
  inputSearch.removeEventListener('input', throttle(onChangeSearch, 300));
  btnRemoveInput.removeEventListener('click', handleRemoveInput);
  btnCancelSearch.removeEventListener('click', handleCloseSearch);
  handleRemoveInput();
};

const handleRemoveInput = () => {
  inputSearch.value = '';
  btnRemoveInput.classList.remove('btn-remove--show');
};

const onChangeSearch = (e) => {
  if (e.target.value.length >= 1) btnRemoveInput.classList.add('btn-remove--show');
  else btnRemoveInput.classList.remove('btn-remove--show');
};

if (btnOpenSearch) btnOpenSearch.addEventListener('click', handleOpenSearch);
