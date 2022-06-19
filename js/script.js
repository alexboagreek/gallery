import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";
import { signIn } from './signIn.js';


const init = async ({ 
    selectorGalleryWrapper, 
    selectorPhotoWrapper,
    selectorSignInButton,

}) => {
    const galleryWrapper = document.querySelector(selectorGalleryWrapper);
    const photoWrapper = document.querySelector(selectorPhotoWrapper);
    const sighInButton = document.querySelector(selectorSignInButton);

    signIn(sighInButton);

    if (galleryWrapper) {
        const photos = await getData({ count: 30 });
        renderGallery(galleryWrapper, photos);
    }

    if (photoWrapper) {
        const url = new URL(location.href);
        const idPhoto = url.searchParams.get('photo');


        if (idPhoto) {
            const photo = await getData({ idPhoto });
            renderPhoto(photoWrapper, photo);
        }
    }

};

init({
    selectorGalleryWrapper: '.gallery__wrapper',
    selectorPhotoWrapper: '.photo__wrapper', 
    selectorSignInButton: '.header__login-button',
});