const inpBox = document.querySelector("input");
const ul = document.querySelector("ul");
let btn = document.querySelector("button");

function addTask() {
  if (inpBox.value == "") {
    alert("Please enter your task");
  } else {
    let li = document.createElement("li");
    li.innerText = inpBox.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inpBox.value = "";
  saveData();
}

btn.addEventListener("click", addTask);

ul.addEventListener(
  "click",
  function (e) {
    if (e.target.nodeName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.nodeName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function saveTask() {
  ul.innerHTML = localStorage.getItem("data");
}
saveTask();
