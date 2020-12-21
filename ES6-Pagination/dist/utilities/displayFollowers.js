import get from "./getElement.js";
const container = get(".content");

const displayFollowers = (followers) => {
    container.innerHTML = followers
        .map((follower) => {
            const { avatar_url, login, html_url } = follower;
            return `
        <article class="card">
                    <img
                        src="${avatar_url}"
                        alt="follower's avatar"
                        class="img"
                    />
                    <h4 class="name">${login}</h4>
                    <a href="${html_url}" class="profile-link btn" target="_blank">View profile</a>
                </article>
        `;
        })
        .join("");
};

export default displayFollowers;
