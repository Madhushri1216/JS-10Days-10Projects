const accessKey = "vBlVhL_9TtfMrzg_zbLbJXBED53FnCeYt9ytQQGOIoc";

const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector(".search-result");
const showBtn = document.querySelector(".show-btn");

let keyword = "";
let page = 1;

async function searchImg() {
  keyword = searchBox.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const respose = await fetch(URL);
  const data = await respose.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(img);
    searchResult.appendChild(imgLink);
  });
  showBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImg();
});

showBtn.addEventListener("click", () => {
  page++;
  searchImg();
});
