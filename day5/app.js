let input = document.querySelector("input");
let showHideBtn = document.querySelector("img");

showHideBtn.addEventListener("click", function () {
  if (input.type == "password") {
    input.type = "text";
    showHideBtn.src = "images/eye-open.png";
  } else {
    input.type = "password";
    showHideBtn.src = "images/eye-close.png";
  }
});
