const displayButtons = (container, pages, activeIndex) => {
    let btns = pages.map((_, pageIndex) => {
        return `<div class="btn page-btn ${
            activeIndex == pageIndex ? "active-btn" : "null"
        }" data-id="${pageIndex}">${pageIndex + 1}</div>`;
    });

    btns.unshift(`<button class='prev-btn'>prev</button>`);
    btns.push(`<button class='next-btn'>next</button>`);
    container.innerHTML = btns.join("");
};

export default displayButtons;
