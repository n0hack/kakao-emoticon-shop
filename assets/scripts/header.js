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

// 스로틀
function eventThrottle(callback, delay) {
  let timerId;

  return (event) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback(event);
      timerId = null;
    }, delay);
  };
}

// 사이드 메뉴
function handleOpenSideMenu() {
  kakaoWrap.classList.add("overlay");
  sidemenu.classList.add("show-block");
  sidemenuOverlay.classList.add("show-block");
  userModal.classList.remove("show-block");
}

function handleCloseSideMenu() {
  akaoWrap.classList.remove("overlay");
  sidemenu.classList.remove("show-block");
  sidemenuOverlay.classList.remove("show-block");
}

btnOpenSidemenu.addEventListener("click", handleOpenSideMenu);
sidemenuOverlay.addEventListener("click", handleCloseSideMenu);

// 검색
function handleClearInputSearch() {
  inputSearch.value = "";
  btnDeleteInputSearch.classList.remove("show-block");
}

function handleOpenSearchBox() {
  kakaoWrap.classList.add("overlay");
  headerTitle.classList.add("search-on");
  searchBox.classList.add("show-flex");
  searchBoxOverlay.classList.add("show-block");
  btnOpenSearchBox.classList.add("hide");
  userModal.classList.remove("show-block");
}

function handleCloseSearchBox() {
  kakaoWrap.classList.remove("overlay");
  headerTitle.classList.remove("search-on");
  searchBox.classList.remove("show-flex");
  searchBoxOverlay.classList.remove("show-block");
  btnOpenSearchBox.classList.remove("hide");
  handleClearInputSearch();
}

function handleInputSearch(e) {
  if (e.target.value === "") btnDeleteInputSearch.classList.remove("show-block");
  else btnDeleteInputSearch.classList.add("show-block");
}

btnOpenSearchBox.addEventListener("click", handleOpenSearchBox);
btnCloseSearchBox.addEventListener("click", handleCloseSearchBox);
searchBoxOverlay.addEventListener("click", handleCloseSearchBox);
inputSearch.addEventListener("input", eventThrottle(handleInputSearch, 300));
btnDeleteInputSearch.addEventListener("click", handleClearInputSearch);

// 유저 모달
function handleOpenUserModal(e) {
  userModal.classList.toggle("show-block");
  e.stopPropagation();
}

function handleCloseUserModal(e) {
  let findUserModal = e.target.closest(".user-modal");
  if (!findUserModal) userModal.classList.remove("show-block");
}

function handleResizeUserModal(e) {
  if (document.body.getBoundingClientRect().width < 767) {
    userModal.classList.remove("show-block");
  }
}

btnOpenUserModal.addEventListener("click", handleOpenUserModal);
document.addEventListener("click", handleCloseUserModal);
window.addEventListener("resize", eventThrottle(handleResizeUserModal, 300));
