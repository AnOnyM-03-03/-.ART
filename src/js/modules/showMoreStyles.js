
export const showMoreStyles = ({trigger, styles}) => {
   const cards = document.querySelectorAll(styles),
      btn = document.querySelector(trigger);
    // для каждой карточки лобавляем анимацию
   cards.forEach((card) => {
      card.classList.add('animated', 'fadeInUp');
   });
//    при клике на кнопку удаляем класс скрытия и добавляем класс показа
   btn.addEventListener('click', () => {
      cards.forEach(card => {
         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
      });
    //   либо стаим кнопке display = 'none' либо же просто удаляем ее
    //   btn.style.display = 'none'
      btn.remove()
      });
   };

