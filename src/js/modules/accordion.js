
export const accordion = (triggersSelector) => {
   const btns = document.querySelectorAll(triggersSelector);

   //    раюотаем через псевдо кнопку и с помощью свойства nextElementSibling

   btns.forEach(btn => {
      btn.addEventListener('click', function () {
         this.classList.toggle('active-style');
         this.nextElementSibling.classList.toggle('active-content');

         if (this.classList.contains('active-style')) {
            this.nextElementSibling.style.maxHeight =
               this.nextElementSibling.scrollHeight + 80 + 'px';
         } else {
            this.nextElementSibling.style.maxHeight = '0px';
         }
      });
   });

   //    работали непосредственно с самим блоком аккордиона и назначали ему классы

   //   blocks = document.querySelectorAll(itemsSelector);

   //    blocks.forEach((block) => {
   //       block.classList.add('animated', 'fadeInDown');
   //    });

   //    btns.forEach((btn) => {
   //       btn.addEventListener('click', function () {
   //          if (!this.classList.contains('active')) {
   //             btns.forEach((btn) => {
   //                btn.classList.remove('active', 'active-style');
   //             });
   //             this.classList.add('active', 'active-style');
   //          }
   //       });
   //    });
};
