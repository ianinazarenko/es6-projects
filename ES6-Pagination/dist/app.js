import get from "./utilities/getElement.js";
import fetchFollowers from "./utilities/fetchFollowers.js";
import displayFollowers from "./utilities/displayFollowers.js";
import paginate from "./utilities/paginate.js";

const h1 = get(".--section-centered h1");
const init = async () => {
    const followers = await fetchFollowers();
    displayFollowers(followers);
    paginate(followers);
    h1.textContent = "Pagination";
};

window.addEventListener("load", init);
