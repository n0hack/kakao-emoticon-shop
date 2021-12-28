const styleCategoryList = document.querySelector('.style__categories');
const styleCategoryItems = document.querySelectorAll('.style__category');

new DragScroll({ list: styleCategoryList, items: styleCategoryItems, breakpoint: 768 });

const seriesLists = document.querySelectorAll('.series__list');

seriesLists.forEach((seriesList) => {
  const seriesItems = seriesList.querySelectorAll('.series__item');
  new DragScroll({ list: seriesList, items: seriesItems, breakpoint: 768 });
});

// TODO: 반응형 처리
// TODO: 마지막 리팩토링 가볍게
// TODO: 깃허브 페이지
// TODO: 데탑, 태블릿, 모바일 체크
