const paginate = (followers) => {
    console.log(followers);
    const followersPerPage = 9;
    const numberOfPages = Math.ceil(followers.length / followersPerPage);
    console.log(numberOfPages); // 12
    let step = 0;
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        step = index * followersPerPage;
        return followers.slice(step, step + followersPerPage);
    });
    console.log(newFollowers);
    return newFollowers;
};

export default paginate;
