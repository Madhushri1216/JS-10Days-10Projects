let userInp = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");

userInp.max = new Date().toISOString().split("T")[0];

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function calculateAge() {
  let birthDate = new Date(userInp.value);

  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1;
  let d1 = birthDate.getDate();

  let today = new Date();

  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  p.innerHTML = `You are <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days older`;
}

btn.addEventListener("click", function () {
  calculateAge();
});
