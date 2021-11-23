const nav = document.querySelector('#js-nav');
const main = document.querySelector('#js-main');

document.body.addEventListener('wheel', (e) => {
  console.log(document.body.scrollTop);
});

// nav 높이만큼 휠 내리면 height 0됨 (모바일한정)
// 조금이라도 휠을 올리거나
// nav 높이 이내에 들어오면 다시 복구
