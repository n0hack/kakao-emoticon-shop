// Slick Slider
$('.home__slick').slick({ autoplay: false, dots: true, prevArrow: false, nextArrow: false });

const mypageList = document.querySelector('.mypage__list');
const mypageListPadding = getComputedStyle(mypageList.children[0]).paddingLeft.replace(/px/, '');

console.log(mypageList.clientWidth);

let startX;
let elX;
const handleMouseDown = (e) => {
  console.log('Down');
  startX = e.x;
  elX = parseInt(getComputedStyle(mypageList).transform.split(/[^0-9]+/g)[5]);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (e) => {
  console.log('Move');
  updateElement(e.x - startX);
};

const handleMouseUp = () => {
  console.log('Up');
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
  elX = parseInt(getComputedStyle(mypageList).transform.split(/[^0-9]+/g)[5]);
};

const updateElement = (x) => {
  mypageList.style.transform = `translateX(${elX + x}px)`;
};

mypageList.addEventListener('mousedown', handleMouseDown);

// 마크업 부터 하자 !
