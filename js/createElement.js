 export const createElementMagic  = (tags, attrs) => {
    const element = document.createElement(tags);
    Object.assign(element, attrs);
    return element;
}

createElementMagic();