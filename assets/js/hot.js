const hotList = document.querySelector('.hot__list');
const hotItems = document.querySelectorAll('.hot__item');

const hotIOCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const defaultImage = entry.target.querySelector('.hot__default-image');
      const hoverImage = entry.target.querySelector('.hot__hover-image');

      defaultImage.setAttribute('src', defaultImage.dataset.src);
      hoverImage.setAttribute('src', hoverImage.dataset.src);

      hotIO.unobserve(entry.target);
      console.log(entry.target.innerText);
    }
  });
};
const hotIO = new IntersectionObserver(hotIOCallback);

hotItems.forEach((item) => {
  hotIO.observe(item);
});
