const tabFAQ = document.querySelector('#js-faq-tab');
const tabFAQItems = [...tabFAQ.children];
const allItemWidth = [...tabFAQ.children].reduce((cur, acc) => {
  return cur + acc.clientWidth;
}, 0);
const listFAQ = document.querySelectorAll('.faq__list-faq');
const itemFAQ = document.querySelectorAll('#js-oepn-faq');

let startX;
let now;
let wrapperWidth = tabFAQ.clientWidth;
let evented;

// function addDragScroll(element, selector, padding) {
//   console.log(2131);
//   const allItemsWidth = [...element.children].reduce((cur, acc) => cur + acc.ClientWidth, 0);
//   let wrapperWidth = element.clientWidth;
//   let startX;
//   let elementX;

//   const dargStart = (e) => {
//     elementX = Number(element.style.transform.replace(/[^-\d]/g, ''));
//     if (e.target.closest(selector)) {
//       startX = e.x;
//     }
//     window.addEventListener('mousemove', dragMove);
//     window.addEventListener('mouseup', dragFinish);
//   };

//   const dragMove = (e) => {
//     if (e.x > startX) {
//       element.style.transform = `translateX(${elementX + Math.abs(startX - e.x)}px)`;
//     } else if (e.x < startX) {
//       element.style.transform = `translateX(${elementX - Math.abs(startX - e.x)}px)`;
//     }
//   };

//   const dragFinish = () => {
//     const movable = wrapperWidth - allItemsWidth;
//     elementX = Number(element.style.transform.replace(/[^-\d]/g, ''));

//     if (elementX !== 0 && allItemsWidth <= wrapperWidth) {
//       element.classList.add('out-left');
//       element.style.transform = `translateX(0px)`;
//       setTimeout(() => {
//         element.classList.remove('out-left');
//       }, 300);
//     } else if (allItemsWidth > wrapperWidth) {
//       if (elementX > 0) {
//         element.classList.add('out-left');
//         element.style.transform = `translateX(0px)`;
//         setTimeout(() => {
//           element.classList.remove('out-left');
//         }, 300);
//       } else if (elementX < movable - padding) {
//         element.classList.add('out-left');
//         element.style.transform = `translateX(${movable - padding}px)`;
//         setTimeout(() => {
//           element.classList.remove('out-left');
//         }, 300);
//       }
//     }
//     window.removeEventListener('mousemove', dragMove);
//     window.removeEventListener('mouseup', dragFinish);
//   };
// }

// addDragScroll(tabFAQ, '#js-faq-tab', 28);

// function removeDragScroll(element) {}

const handleDragStart = (e) => {
  now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));
  if (e.target.closest('#js-faq-tab')) {
    startX = e.x;
    window.addEventListener('mousemove', handleDragSlide);
    window.addEventListener('mouseup', handleDragFinish);
  }
};

const handleDragSlide = (e) => {
  if (e.x > startX) {
    tabFAQ.style.transform = `translateX(${now + Math.abs(startX - e.x)}px)`;
  } else if (e.x < startX) {
    tabFAQ.style.transform = `translateX(${now - Math.abs(startX - e.x)}px)`;
  }
};

const handleDragFinish = (e) => {
  window.removeEventListener('mousemove', handleDragSlide);
  window.removeEventListener('mouseup', handleDragFinish);
  now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));

  // 조건 추가하긴 해야 함 (더 길 때)
  if (now !== 0 && allItemWidth <= wrapperWidth) {
    tabFAQ.classList.add('out-left');
    tabFAQ.style.transform = `translateX(0px)`;
    setTimeout(() => {
      tabFAQ.classList.remove('out-left');
    }, 300);
  } else if (allItemWidth > wrapperWidth) {
    if (now > 0) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(0px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
      // 래퍼 - 요소 총 길이 - 좌우 끝 패딩
    } else if (now < wrapperWidth - allItemWidth - 28) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(${wrapperWidth - allItemWidth - 28}px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
    }
  }
};

const handleResize = () => {
  if (now !== 0 && allItemWidth <= wrapperWidth) {
    tabFAQ.classList.add('out-left');
    tabFAQ.style.transform = `translateX(0px)`;
    setTimeout(() => {
      tabFAQ.classList.remove('out-left');
    }, 300);
  } else if (allItemWidth > wrapperWidth) {
    now = Number(tabFAQ.style.transform.replace(/[^-\d]/g, ''));
    if (now > 0) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(0px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
      // 래퍼 - 요소 총 길이 - 좌우 끝 패딩
    } else if (now < wrapperWidth - allItemWidth - 28) {
      tabFAQ.classList.add('out-left');
      tabFAQ.style.transform = `translateX(${wrapperWidth - allItemWidth - 28}px)`;
      setTimeout(() => {
        tabFAQ.classList.remove('out-left');
      }, 300);
    }
  }
  wrapperWidth = tabFAQ.clientWidth;

  if (window.innerWidth > 768) {
    if (evented !== false) {
      window.removeEventListener('mousedown', handleDragStart);
      // window.removeEventListener('mousemove', handleDragSlide);
      // window.removeEventListener('mouseup', handleDragFinish);
      evented = false;
    }
  } else {
    if (evented === false) {
      window.addEventListener('mousedown', handleDragStart);
      // window.addEventListener('mousemove', handleDragSlide);
      // window.addEventListener('mouseup', handleDragFinish);
      evented = true;
    }
  }
};

if (window.innerWidth < 768) {
  window.addEventListener('mousedown', handleDragStart);
  evented = true;
} else {
  evented = false;
}
window.addEventListener('resize', handleResize);

tabFAQ.addEventListener('click', (e) => {
  if (window.innerWidth > 767 || e.x === startX) {
    switch (e.target.dataset.category) {
      case 'info':
        tabFAQItems.forEach((e) => e.classList.remove('faq__item-tab--on'));
        tabFAQItems[0].classList.add('faq__item-tab--on');
        listFAQ.forEach((e) => e.classList.remove('on'));
        listFAQ[0].classList.add('on');
        break;
      case 'etc':
        tabFAQItems.forEach((e) => e.classList.remove('faq__item-tab--on'));
        tabFAQItems[1].classList.add('faq__item-tab--on');
        listFAQ.forEach((e) => e.classList.remove('on'));
        listFAQ[1].classList.add('on');
        break;
    }
  }
});

itemFAQ.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.closest('li').classList.toggle('on');
  });
});
