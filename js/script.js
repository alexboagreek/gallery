import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";

const init = async ({ selectorGalleryWrapper, selectorPhotoWrapper }) => {
    const galleryWrapper = document.querySelector(selectorGalleryWrapper);
    const photoWrapper = document.querySelector(selectorPhotoWrapper);

    if(galleryWrapper) {
        const photos = await getData();
        renderGallery(galleryWrapper, photos);
    }

    if(photoWrapper) {
        const url = new URL(location.href);
        const photo = await getData();
        renderPhoto(photoWrapper, photo);
    }

};

init({
    selectorGalleryWrapper: '.gallery__wrapper',
    selectorPhotoWrapper: '.photo__wrapper', 
});