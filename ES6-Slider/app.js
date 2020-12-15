import people from "./data.js";

console.log(people);

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
    moveSlides("prev");
});
nextBtn.addEventListener("click", () => {
    moveSlides("next");
});

container.innerHTML = people
    .map((person, index) => {
        const { img, name, job, text } = person;
        let position = "next";

        if (index === 0) {
            position = "active";
        } else if (index === people.length - 1) {
            position = "last";
        }

        return `<article class="slide ${position}">
                    <img
                        src="${img}"
                        alt="${name}"
                        class="img"
                    />
                    <h4 class="name">${name}</h4>
                    <p class="job">${job}</p>
                    <p class="review">
                        ${text}
                    </p>
                    <div class="quote">
                        <i class="fas fa-quote-right"></i>
                    </div>
                </article>`;
    })
    .join("");

function moveSlides(type) {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");

    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove("active");
    last.classList.remove("last");

    if (type === "prev") {
        active.classList.add("next");
        last.classList.add("active");
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.remove("next");
        next.classList.add("last");
        return;
    }
    next.classList.remove("next");

    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
}
