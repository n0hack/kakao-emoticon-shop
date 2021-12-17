const elTopbnr = document.querySelector('.topbnr');
const elBtnCloseTopbnr = document.querySelector('.btn-close-topbnr');
const displayTopbnr = localStorage.getItem('topbnr');

const closeTopbnr = () => {
  elTopbnr.classList.add('topbnr--hide');
  localStorage.setItem('topbnr', 'hide');
  document.documentElement.style.setProperty('--h-topbnr', '0px');
};

if (displayTopbnr === 'hide') {
  closeTopbnr();
} else {
  elBtnCloseTopbnr.addEventListener('click', closeTopbnr);
  document.documentElement.style.setProperty('--h-topbnr', '50px');
}
