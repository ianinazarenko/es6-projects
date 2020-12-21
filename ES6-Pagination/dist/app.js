import get from "./utilities/getElement.js";
import fetchFollowers from "./utilities/fetchFollowers.js";
import displayFollowers from "./utilities/displayFollowers.js";
import paginate from "./utilities/paginate.js";
import displayButtons from "./utilities/displayButtons.js";

const h1 = get(".--section-centered h1");
const btnsContainer = get(".btns");

let index = 0;
let pages = [];

const setupUI = () => {
    displayFollowers(pages[index]);
    displayButtons(btnsContainer, pages, index);
};

const init = async () => {
    const followers = await fetchFollowers();
    pages = paginate(followers);
    setupUI();
    h1.textContent = "Pagination";
    console.log(pages);
};

btnsContainer.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) return;

    if (e.target.classList.contains("page-btn")) {
        index = parseInt(e.target.dataset.id);
    }

    if (e.target.classList.contains("prev-btn")) {
        index--;
        if (index < 0) {
            index = 0;
        }
    }

    if (e.target.classList.contains("next-btn")) {
        index++;
        if (index > pages.length - 1) {
            index = pages.length - 1;
        }
    }
    setupUI();
});

window.addEventListener("load", init);
