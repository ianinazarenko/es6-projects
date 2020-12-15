import sublinks from "./data.js";
import get from "./getElement.js";

// Selections
const toggleBtn = get(".nav__toggle-btn");
const closeSidebarBtn = get(".sidebar__close-btn");
const sidebar = get(".sidebar-wrapper");
const sidebarLinks = get(".sidebar__links");
const nav = get(".nav");
const hero = get(".hero");
const submenu = get(".submenu");
const navLinks = [...document.querySelectorAll(".nav__link-btn")];

// toggle button & clodse button functionality
toggleBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
});

closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

// Toggle menu links
sidebarLinks.innerHTML = sublinks
    .map((item) => {
        const { page, links } = item;
        return `<article>
    <h4>${page}</h4>
    <div class='sidebar__sublinks'>
    ${links
        .map((link) => {
            const { label, icon, url } = link;
            return `<a href='${url}'><i class='${icon}'></i>${label}</a>`;
        })
        .join("")}
    </div>
    </article>`;
    })
    .join("");

// hide sidebar menu onresize
window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth > 799) {
        sidebar.classList.remove("show-sidebar");
    }
});

// submenu for big screens
navLinks.forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
        const text = e.currentTarget.textContent;
        const tempBtn = e.currentTarget.getBoundingClientRect();
        console.log(tempBtn);
        const center = (tempBtn.left + tempBtn.right) / 2;

        submenu.style.left = center + "px";
        submenu.classList.add("show-submenu");
    });
});
