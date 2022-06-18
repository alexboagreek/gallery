import { createElementMagic } from './createElementMagic.js';

export const renderPhoto = (photoWrapper, photo) => {

    const img = createElementMagic('img', {
        class: 'photo__picture',
        src: photo.urls.full,
        alt:  photo.description || photo.alt_description,
        style: 'max-width: 80vh;'
    });


    const author = createElementMagic('a', {
        className: 'photo__author',
        href: photo.user.links.html,
    });

    const avatarMaster = createElementMagic('img', {
        src: photo.user.profile_image.medium,
        alt: photo.user.bio, 
        title: photo.user.username,
    });

    const userName = createElementMagic('span', {
        textContent: photo.user.username,
    });

    const photoControl = createElementMagic('div', {
        className: 'photo__control',
    });

    const photoLike = createElementMagic('button', {
        id: photo.id, 
        className: 'photo__like', 
        textContent: photo.likes,
    });

    if (!photoLike.likedByUser) {
        photoLike.classList.add('photo__like_o');
    }

    const photoDownLoad = createElementMagic('a', {
        className: 'photo__download',
        download: 'true',
        href: photo.links.download,
        target: '_blank',
    });



    author.append(avatarMaster, userName);
    photoControl.append(photoLike, photoDownLoad);

    photoWrapper.append(img, author, photoControl)

 };