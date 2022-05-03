import { getResource } from '../services/requestions';

export const showMoreStyles = ({ trigger, wrapper }) => {
   const btn = document.querySelector(trigger);

   btn.addEventListener('click', function () {
      getResource('http://localhost:3000/styles')
         .then((res) => createCards(res))
         .catch((error) => console.log(error));
      this.remove();
   });

   function createCards(responce) {
      responce.forEach(({ src, link, title }) => {
         let cards = document.createElement('div');
         cards.classList.add(
            'animated',
            'fadeInUp',
            'col-sm-3',
            'col-sm-offset-0',
            'col-xs-10',
            'col-xs-offset-1'
         );
         cards.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `;
         document.querySelector(wrapper).appendChild(cards);
      });
   }
};
