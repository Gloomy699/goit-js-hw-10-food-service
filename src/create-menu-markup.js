import foodCards from './menu.json';
import foodMenuTemplate from './food-menu.hbs';

const menuGallery = document.querySelector('ul.js-menu');

const cardsMarkup = foodMenuTemplate(foodCards);

menuGallery.insertAdjacentHTML('beforeend', cardsMarkup);
