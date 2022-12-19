const elForm = document.querySelector(".form"); // ✅
const elInput = document.querySelector(".form-control"); // ✅
const elResult = document.querySelector(".result");
const elAlertError = document.querySelector(".alert");

function msg() {
  elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (elInput.value === "") {
      setTimeout(() => {
        elAlertError.classList.remove("d-none");
      }, 500);
    } else {
      setTimeout(() => {
        elAlertError.classList.add("d-none");
      }, 500);
    }

    elResult.textContent = elInput.value;
    elInput.value = "";

    //   Checks if the input is valid
  });
}
msg();
