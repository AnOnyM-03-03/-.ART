import { slider, modals, showMoreStyles } from './modules';

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
   const btnhowMoreStyles = {
      trigger: '.button-styles',
      styles: '.styles-2',
   };
   slider(verticalSlide);
   slider(horizontSlide);
   modals();
   showMoreStyles(btnhowMoreStyles);
});
