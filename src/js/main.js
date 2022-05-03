import { slider, modals, showMoreStyles, form } from './modules';

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
   const btnShowMoreStyles = {
      trigger: '.button-styles',
      wrapper: '#styles .row',
   };
   slider(verticalSlide);
   slider(horizontSlide);
   modals();
   form();
   showMoreStyles(btnShowMoreStyles);
});
