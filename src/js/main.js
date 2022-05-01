import { modals, showMoreStyles } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   modals();
   const btnShowMoreStyles = {
      trigger: '.button-styles',
      styles: '.styles-2',
   };
   showMoreStyles(btnShowMoreStyles);
});
