const elMenuList = document.querySelector('.mypage__menus');
const elMenuItems = document.querySelectorAll('.mypage__menu');
const menuListClientWidth = elMenuList.clientWidth;
const menuListScrollWidth = elMenuList.clientWidth;
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
console.log(lastMenu.getBoundingClientRect());
console.log(parseInt(getComputedStyle(elMenuList).transform.split(/[^\-0-9]+/g)[5]));

class DragSlide {
  constructor() {}
}

const handleMouseDown = (event) => {
  console.log(lastMenu.getBoundingClientRect());
  startX = event.x;
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};

const handleMouseMove = (event) => {
  let distX = event.x - startX;
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

    // 마지막 getBoundingClientRect
    if (translateX < -(menuListScrollWidth - menuListClientWidth)) {
      elMenuList.style.transform = `translateX(${-(menuListScrollWidth - menuListClientWidth)}px)`;
      elMenuList.style.transition = 'all 0.3s ease-in-out';
      translateX = -(menuListScrollWidth - menuListClientWidth);
    }
  }
};

elMenuList.addEventListener('mousedown', handleMouseDown);
