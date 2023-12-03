let passwordBox = document.querySelector("input");
let btn = document.querySelector("button");
let copyBtn = document.querySelector(".display img");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-[]<>?/";

btn.addEventListener("click", function () {
  let password = "";
  while (password.length < 12) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }
  let pass = (passwordBox.value = password);
});

copyBtn.addEventListener("click", function () {
  passwordBox.select();
  document.execCommand("copy");
});
