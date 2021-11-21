const numberInput = document.querySelector(".number__input");
const numberBtnRegister = document.querySelector(".number__btn-register");

numberInput.addEventListener("input", (e) => {
  console.log("ddd");
  if (e.target.value.length >= 10) {
    numberBtnRegister.classList.add("active");
  } else {
    numberBtnRegister.classList.remove("active");
  }
});
