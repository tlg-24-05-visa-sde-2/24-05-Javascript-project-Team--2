const unsplashApiKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");
const trendingListEl = document.getElementById("trending-list");

let inputData = "";
let page = 1;

const trendingTopics = [
  "Nature",
  "Technology",
  "Space",
  "Wildlife",
  "Ocean",
  "Mountains",
  "Travel",
  "Food",
  "Fashion",
  "Art",
];

function displayTrendingTopics(topics) {
  console.log("Displaying trending topics..."); // Debug log
  trendingListEl.innerHTML = "";
  topics.forEach((topic) => {
    const listItem = document.createElement("li");
    listItem.textContent = topic;
    listItem.addEventListener("click", () => {
      searchInputEl.value = topic;
      page = 1;
      searchImages();
    });
    trendingListEl.appendChild(listItem);
  });
  console.log("Trending topics displayed."); // Debug log
}

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${unsplashApiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});

// Display SnapTrend Images at the bottom and consider realigning the load more btn.
document.addEventListener("DOMContentLoaded", () => {
  displayTrendingTopics(trendingTopics);
});
