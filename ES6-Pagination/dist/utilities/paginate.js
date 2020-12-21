const paginate = (followers) => {
    const followersPerPage = 9;
    const numberOfPages = Math.ceil(followers.length / followersPerPage);
    let startingPoint = 0;
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        startingPoint = index * followersPerPage;
        return followers.slice(startingPoint, startingPoint + followersPerPage);
    });
    return newFollowers;
};

export default paginate;
