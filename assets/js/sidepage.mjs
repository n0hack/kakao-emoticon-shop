const elMenuList = document.querySelector('.mypage__menus');
const elMenuItems = document.querySelectorAll('.mypage__menu');
let menuListClientWidth = elMenuList.clientWidth;
let menuListScrollWidth = elMenuList.scrollWidth;
const menuItemsTotalWidth = [...elMenuItems].reduce((acc, item) => acc + item.clientWidth, 0);
const lastMenuPaddingRight = parseInt(getComputedStyle(elMenuItems[elMenuItems.length - 1]).paddingRight);
const lastMenu = elMenuItems[elMenuItems.length - 1];
let startX;
let translateX = 0;
console.clear();
console.log(menuListClientWidth);
console.log(menuListScrollWidth);
console.log(menuItemsTotalWidth);
console.log(lastMenuPaddingRight);
console.log(parseInt(getComputedStyle(elMenuList).transform.split(/[^\-0-9]+/g)[5]));
console.log(menuListScrollWidth - menuListClientWidth);

class DragSlide {
  constructor() {}

  handleMouseDown() {}

  getTranslateX() {}
}

const handleMouseDown = (event) => {
  startX = event.clientX;
  console.log(startX);
  console.log(event.clientX);
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (event) => {
  let distX = event.clientX - startX;
  updateElement(distX);
};

const handleMouseUp = (event) => {
  translateX = parseInt(getComputedStyle(elMenuList).transform.split(/[^\-0-9]+/g)[5]);
  // 유효성 체크
  correctTranslate();

  elMenuList.removeEventListener('mousedown', handleMouseDown);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
  setTimeout(() => {
    elMenuList.style.transition = '';
    elMenuList.addEventListener('mousedown', handleMouseDown);
  }, 300);
};

const updateElement = (distX) => {
  elMenuList.style.transform = `translateX(${translateX + distX}px)`;
};

const correctTranslate = () => {
  // 전체
  if (menuListClientWidth >= menuItemsTotalWidth) {
    if (translateX !== 0) {
      elMenuList.style.transform = `translateX(0px)`;
      elMenuList.style.transition = 'all 0.3s ease-in-out';
      translateX = 0;
    }
  } else {
    if (translateX > 0) {
      elMenuList.style.transform = `translateX(0px)`;
      elMenuList.style.transition = 'all 0.3s ease-in-out';
      translateX = 0;
    }

    if (translateX < -(menuListScrollWidth - menuListClientWidth)) {
      elMenuList.style.transform = `translateX(${-(menuListScrollWidth - menuListClientWidth)}px)`;
      elMenuList.style.transition = 'all 0.3s ease-in-out';
      translateX = -(menuListScrollWidth - menuListClientWidth);
    }
    console.log(translateX);
  }
};

elMenuList.addEventListener('mousedown', handleMouseDown);
let beforeInnerWidth = window.innerWidth;
window.addEventListener('resize', () => {
  nowInnerWidth = window.innerWidth;
  menuListClientWidth = elMenuList.clientWidth;
  if (beforeInnerWidth !== nowInnerWidth) {
    if (beforeInnerWidth < nowInnerWidth) {
      if (menuListScrollWidth >= menuListClientWidth) {
        if (translateX <= -(menuListScrollWidth - menuListClientWidth)) {
          elMenuList.style.transform = `translateX(${-(menuListScrollWidth - menuListClientWidth)}px)`;
          translateX = -(menuListScrollWidth - menuListClientWidth);
        }
      } else {
        elMenuList.style.transform = `translateX(0px)`;
        translateX = 0;
      }
    }
    beforeInnerWidth = nowInnerWidth;
  }
});

let te;
elMenuList.addEventListener('touchstart', (e) => {
  te = e.touches[0].clientX;
  console.log('힝쿠');
  console.log(e.touches[0].clientX);
});

window.addEventListener('touchmove', (e) => {
  console.log(te - e.touches[0].clientX);
});
