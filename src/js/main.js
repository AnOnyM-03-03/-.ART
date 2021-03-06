import {
   slider,
   modals,
   mask,
   checkInputs,
   showMoreStyles,
   form,
   calc,
   filter,
   accordion,
   pictureSize,
   burger,
   scroll,
   drop,
} from './modules';

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
   const materialsBlock = {
      size: '#size',
      material: '#material',
      options: '#options',
      promocode: '.promocode',
      result: '.calc-price',
   };
   slider(verticalSlide);
   slider(horizontSlide);
   modals();
   form();
   mask('[name="phone"]');
   checkInputs('[name="name"]');
   checkInputs('[name="message"]');
   showMoreStyles(btnShowMoreStyles);
   calc(materialsBlock);
   filter();
   accordion('.accordion-heading');
   pictureSize('.sizes-block');
   burger('.burger-menu', '.burger');
   scroll('.pageup');
   drop();
});
