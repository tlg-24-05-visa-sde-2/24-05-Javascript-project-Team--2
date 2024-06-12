const accessKey = "x6r9WOxZZ5Oup8zFY0TJSzIWo0FtKdLJ-pasoqs986k";

const FormEL = document.getElementById("search-bar");
const InputEL = document.getElementById("destination_input");
const searchResults = document.querySelector(".card");
const ShowMore = document.getElementById("Load_More");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = InputEL.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = "";
  }
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("card");
    const image = document.createElement("img");
    image.src = result.url.small;
    image.alt = result.alt_description;
  });
}
