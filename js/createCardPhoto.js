import { createElementMagic } from "./createElementMagic.js";

const loadingImg = (url, description) => {
    
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.width = 200;
        img.src = url;
        img.alt = description;
        img.addEventListener('load', () => {
            resolve(img)
        });
        img.addEventListener('error', (err) => {
            reject(new Error(err))
        });

    })
}

export const createCardPhoto = async (data) => {
 
    const card = createElementMagic('li', {
        className: 'card'
    });
    
    
    const cardItem = createElementMagic('a', {
        id: data.id,
        className: 'grid-item',
        href: `page.html?photo=${data.id}`,
    });
   

    const photo = await loadingImg(data.urls.small, data.alt_description); 
    

    const author = createElementMagic('a', {
        className: 'card__author',
        href: data.user.links.html,
    });
    

    const avatarAuthor = new Image();
    avatarAuthor.className = 'author__photo';
    avatarAuthor.src = data.user.profile_image.medium;
    avatarAuthor.width = '32';
    avatarAuthor.height = '32';
    avatarAuthor.alt = data.user.bio;
    avatarAuthor.title = data.user.username;

    author.append(avatarAuthor);

    const likesBtn = createElementMagic('button', {
       className: 'card__photo-like',
       textContent: data.likes,
    });
    


    const downloadLink = createElementMagic('a', {

        className: 'card__download',
        href: data.links.download,
        download:  true,
        target: '_blank',
    });
   


    cardItem.append(photo, author, likesBtn, downloadLink);
    card.append(cardItem);

    return card;
};