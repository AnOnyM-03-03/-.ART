import { slider, modals, form } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   const verticalSlide = {
      slides: '.main-slider-item',
      dir: 'vertical',
   };
   const horizontSlide = {
      slides: '.feedback-slider-item',
      dir: 'horizontal',
      prev: '.main-prev-btn',
      next: '.main-next-btn',
   };
   slider(verticalSlide);
   slider(horizontSlide);
   modals();
   form();
});
