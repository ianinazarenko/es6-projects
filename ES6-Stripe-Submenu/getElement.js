function getElement(selection) {
    const element = document.querySelector(selection);
    if (!element) {
        throw new Error(
            "No element has been selected. There is no such element"
        );
    }
    return element;
}

export default getElement;
