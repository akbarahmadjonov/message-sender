const elForm = document.querySelector(".form"); // ✅
const elInput = document.querySelector(".form-control"); // ✅
const elResult = document.querySelector(".result"); // ✅
const elAlertError = document.querySelector(".alert"); // ✅
const elClearBtn = document.querySelector(".clear"); // ✅

function msg() {
  elForm.addEventListener("submit", function (evt) {
    //* Prevents the page from refreshing
    evt.preventDefault();

    //* Checks if the input is valid
    if (elInput.value === "") {
      setTimeout(() => {
        elAlertError.classList.remove("d-none");
      }, 500);
    } else {
      setTimeout(() => {
        elAlertError.classList.add("d-none");
      }, 500);
    }

    elResult.textContent = elInput.value.toUpperCase();
    elInput.value = "";
  });

  //* Removes the texts that were sent
  elClearBtn.addEventListener("click", function () {
    elResult.textContent = "";
  });
}
msg();
