
import { createCardPhoto } from './createCardPhoto.js';
import { createElementMagic } from './createElementMagic.js';
import { scrollLoad } from './scrollLoad.js';


export const renderGallery = (wrapper, photos) => {
    const gallery = createElementMagic('ul', {
        className: 'grid'
    });
    const lastElement = createElementMagic('div');
    wrapper.append(gallery);


    const grid = new Masonry(gallery, {
        gutter: 10,
        itemSelector: '.card',
        columnWidth: 200,
        isFitWidth: true,
    })

    const cards = photos.map(createCardPhoto);

    Promise.all(cards)
    .then(cards => {
        gallery.append(...cards);
        grid.appended(cards);
        wrapper.append(lastElement);
        scrollLoad(gallery, grid, lastElement);
    });
     
};
