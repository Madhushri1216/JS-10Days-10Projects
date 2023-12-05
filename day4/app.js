let successBtn = document.querySelector(".success-btn");
let errorBtn = document.querySelector(".error-btn");
let invalidBtn = document.querySelector(".invalid-btn");
let toastBox = document.querySelector(".toast-box");

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input! please check again`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
successBtn.addEventListener("click", () => {
  showToast(successMsg);
});

errorBtn.addEventListener("click", () => {
  showToast(errorMsg);
});

invalidBtn.addEventListener("click", () => {
  showToast(invalidMsg);
});
