// Grab all pages into an array
const pages = Array.from(document.querySelectorAll(".container > div"));

// Track the current page index
let currentPage = 0;

// Helper: hide all pages
const hideAllPages = () => {
  pages.forEach((pg) => pg.classList.add("hidden"));
};

// Show initial page
hideAllPages();
pages[currentPage].classList.remove("hidden");

// NEXT buttons
document.querySelectorAll(".next").forEach((btn) => {
  btn.addEventListener("click", () => {
    // hide current
    pages[currentPage].classList.add("hidden");

    // increment index with wrap-around
    currentPage = (currentPage + 1) % pages.length;

    // show next
    pages[currentPage].classList.remove("hidden");
  });
});

// PREV buttons
document.querySelectorAll(".prev").forEach((btn) => {
  btn.addEventListener("click", () => {
    pages[currentPage].classList.add("hidden");

    currentPage = (currentPage - 1 + pages.length) % pages.length;

    pages[currentPage].classList.remove("hidden");
  });
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
  // hide current
  pages[currentPage].classList.add("hidden");

  // go to page 0
  currentPage = 0;

  // show page 0
  pages[currentPage].classList.remove("hidden");
});
