import { slider } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   slider(
      '.feedback-slider-item',
      'horizontal',
      '.main-prev-btn',
      '.main-next-btn'
   );
   slider('.main-slider-item', 'vertical');
});
