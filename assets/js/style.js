const styleCategoryList = document.querySelector('.style__categories');
const styleCategoryItems = document.querySelectorAll('.style__category');

new DragScroll({ list: styleCategoryList, items: styleCategoryItems, breakpoint: 768 });

const seriesLists = document.querySelector('.series__list');

seriesLists.forEach((seriesList) => {
  const seriesItems = seriesLists.querySelectorAll('.series__item');
  new DragScroll({ list: seriesList, items: seriesItems, breakpoint: 768 });
});
