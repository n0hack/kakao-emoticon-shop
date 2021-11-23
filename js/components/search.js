const kakaoWrap = document.querySelector('#js-kakao-wrap');
const search = document.querySelector('#js-search');
const searchOverlay = document.querySelector('#js-search-overlay');
const inputSearch = document.querySelector('#js-input-search');
const btnOpenSearch = document.querySelector('#js-open-search');
const btnRemoveInput = document.querySelector('#js-remove-input');
const btnCancelSearch = document.querySelector('#js-cancel-search');

const inputThrottle = (callback, delay) => {
  let timerId = null;

  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback(e);
      timerId = null;
    }, delay);
  };
};

const handleOpenSearch = () => {
  // 최상단으로 이동
  window.scrollTo(0, 0);

  kakaoWrap.classList.add('kakao-wrap--search-overlay');
  search.classList.remove('search--hide');
  searchOverlay.classList.remove('search-overlay--hide');
  searchOverlay.addEventListener('click', handleCloseSearch);
  inputSearch.addEventListener('input', inputThrottle(onChangeSearch, 300));
  btnRemoveInput.addEventListener('click', handleRemoveInput);
  btnCancelSearch.addEventListener('click', handleCloseSearch);
};

const handleCloseSearch = () => {
  kakaoWrap.classList.remove('kakao-wrap--search-overlay');
  search.classList.add('search--hide');
  searchOverlay.classList.add('search-overlay--hide');
  searchOverlay.removeEventListener('click', handleCloseSearch);
  inputSearch.removeEventListener('input', inputThrottle(onChangeSearch, 300));
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

btnOpenSearch.addEventListener('click', handleOpenSearch);
