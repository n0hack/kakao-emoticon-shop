const topbnr = document.querySelector('#js-topbnr');
const btnCloseTopbnr = document.querySelector('#js-close-topbnr');

const handleCloseTopbnr = () => {
  // localStorage.setItem('topbnr', 'hidden');
  topbnr.classList.add('topbnr--hide');
  document.documentElement.style.setProperty('--h-topbnr', '0px');
};
if (btnCloseTopbnr) btnCloseTopbnr.addEventListener('click', handleCloseTopbnr);

if (localStorage.getItem('topbnr') === 'hidden') {
  document.documentElement.style.setProperty('--h-topbnr', '0px');
  if (topbnr) topbnr.classList.add('topbnr--hide');
} else {
  document.documentElement.style.setProperty('--h-topbnr', '50px');
  if (topbnr) topbnr.classList.remove('topbnr--hide');
}

if (!topbnr) document.documentElement.style.setProperty('--h-topbnr', '0px');
