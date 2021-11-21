const kakaoWrap = document.querySelector("#kakaoWrap");
const sidemenu = document.querySelector(".sidemenu");
const sidemenuOverlay = document.querySelector(".sidemenu-overlay");
const btnOpenSidemenu = document.querySelector(".js-btn-menu");

const headerTitle = document.querySelector(".header__title");
const searchBox = document.querySelector(".search-box");
const searchBoxOverlay = document.querySelector(".search-box-overlay");
const btnOpenSearchBox = document.querySelector(".js-btn-search");
const btnCloseSearchBox = document.querySelector(".search-box__btn-cancel");
const inputSearch = document.querySelector(".js-input-search");
const btnDeleteInputSearch = document.querySelector(".js-btn-search-delete");

const userModal = document.querySelector(".user-modal");
const btnOpenUserModal = document.querySelector(".js-btn-user");

// 사이드 메뉴
btnOpenSidemenu.addEventListener("click", () => {
  kakaoWrap.classList.add("overlay");
  sidemenu.classList.add("show-block");
  sidemenuOverlay.classList.add("show-block");
  userModal.classList.remove("show-block");
});

sidemenuOverlay.addEventListener("click", () => {
  kakaoWrap.classList.remove("overlay");
  sidemenu.classList.remove("show-block");
  sidemenuOverlay.classList.remove("show-block");
});

// 검색
function clearInputSearch() {
  inputSearch.value = "";
  btnDeleteInputSearch.classList.remove("show-block");
}

function closeSearchBox() {
  kakaoWrap.classList.remove("overlay");
  headerTitle.classList.remove("search-on");
  searchBox.classList.remove("show-flex");
  searchBoxOverlay.classList.remove("show-block");
  btnOpenSearchBox.classList.remove("hide");
  clearInputSearch();
}

function searchThrottle(callback, delay) {
  let timerId;

  return (event) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback(event);
      timerId = null;
    }, delay);
  };
}

btnOpenSearchBox.addEventListener("click", () => {
  kakaoWrap.classList.add("overlay");
  headerTitle.classList.add("search-on");
  searchBox.classList.add("show-flex");
  searchBoxOverlay.classList.add("show-block");
  btnOpenSearchBox.classList.add("hide");
  userModal.classList.remove("show-block");
});

btnCloseSearchBox.addEventListener("click", closeSearchBox);
searchBoxOverlay.addEventListener("click", closeSearchBox);

inputSearch.addEventListener(
  "input",
  searchThrottle((e) => {
    console.log(e.target.value);
    if (e.target.value === "") btnDeleteInputSearch.classList.remove("show-block");
    else btnDeleteInputSearch.classList.add("show-block");
  }, 300)
);

btnDeleteInputSearch.addEventListener("click", clearInputSearch);

// 유저 모달
btnOpenUserModal.addEventListener("click", (e) => {
  userModal.classList.toggle("show-block");
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  let findUserModal = e.target.closest(".user-modal");
  if (!findUserModal) userModal.classList.remove("show-block");
});
