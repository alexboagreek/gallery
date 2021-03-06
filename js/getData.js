import { API_URL, API_URL_PHOTOS, API_ACCESS_KEY } from "./const.js";

export const getData = ({ page = 1, count, idPhoto }) => {

   const url = new URL(API_URL_PHOTOS);

   url.searchParams.set('client_id', API_ACCESS_KEY);

   if (count && page) {
      url.searchParams.append('per_page', count);
      url.searchParams.append('page', page);
   }

   if (idPhoto) {
      url.pathname += `/${idPhoto}`;
   }

   return fetch(url).then((data) => {
      return data.json();
   })
};