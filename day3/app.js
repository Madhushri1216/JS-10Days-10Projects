let userInp = document.querySelector("input");
let btn = document.querySelector("button");

userInp.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInp.value);

  let y1 = birthDate.getFullYear();
  let m1 = birthDate.getMonth() + 1;
  let d1 = birthDate.getDate();

  let today = new Date();

  let y2 = birthDate.getFullYear();
  let m2 = birthDate.getMonth() + 1;
  let d2 = birthDate.getDate();

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

  console.log(y3, m3, d3);
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", function () {
  console.log(userInp.value);
  calculateAge();
});
