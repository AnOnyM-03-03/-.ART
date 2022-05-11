export const scroll = (upSelector) => {
   const upElem = document.querySelector(upSelector);
   //    событие скролла на виндоу
   window.addEventListener('scroll', () => {
      //    если прокрутка от верха прошла порог в 1650px
      if (document.documentElement.scrollTop > 1650) {
         //   мы добавляем класс для показа ссылки
         upElem.classList.add('animated', 'fadeIn');
         //  и удаляем класс по умолчанию скрытия
         upElem.classList.remove('fadeOut');
      } else {
         //   если порог меньше чем 1650 добавляем класс
         upElem.classList.add('fadeOut');
         //  и удаляем класс показа
         upElem.classList.remove('fadeIn');
      }
   });

   const element = document.documentElement,
      body = document.body;

   const calcScroll = () => {
      upElem.addEventListener('click', function (e) {
         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

         if (this.hash !== '') {
            e.preventDefault();
            let hashElem = document.querySelector(this.hash),
               hashElemTop = 0;

            while (hashElem.offsetParent) {
               hashElemTop += hashElem.offsetTop;
               hashElem = hashElem.offsetParent;
            }
            hashElemTop = Math.round(hashElemTop);
            smoothScroll(scrollTop, hashElemTop, this.hash);
         }
      });
   };

   const smoothScroll = (from, to, hash) => {
      let timeInterval = 1,
         prevScrollTop,
         speed;

      if (to > from) {
         speed = 40;
      } else {
         speed = -40;
      }

      const move = setInterval(function () {
         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

         if (
            prevScrollTop === scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)
         ) {
            clearInterval(move);
            history.replaceState(
               history.state,
               document.title,
               location.href.replace(/#.*$/g, '') + hash
            );
         } else {
            body.scrollTop += speed;
            element.scrollTop += speed;
            prevScrollTop = scrollTop;
         }
      }, timeInterval);
   };
   calcScroll();
};
