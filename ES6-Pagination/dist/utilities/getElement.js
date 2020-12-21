function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(
            `Element hasn't been selected. There is no such element`
        );
    }
}

export default getElement;
