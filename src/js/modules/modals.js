export const modals = () => {
   // переменная для проверки клика на модальные окна
   let btnPressed = false;
   // функция с параметрами для popup
   function bindModals({
      triggerSelector,
      modalSelector,
      closeSelector,
      //   параметр для удаления элемента
      destroy = false,
   }) {
      const triggers = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);
      const windows = document.querySelectorAll('[data-modal]');
      const scroll = calcScroll();

      function closeModal() {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      }

      // событие клика и показа окна
      triggers.forEach((item) => {
         item.addEventListener('click', (e) => {

            if (e.target) {
               // отключение стандартного поведения в данном случае ссылки
               e.preventDefault();
            }
            // если destroy будет true, то-есть нажат, то он удалится
            if (destroy) {
               item.remove();
            }
            // если btnPressed = true - значит модалка была вызвана
            btnPressed = true;

            windows.forEach((window) => {
               window.style.display = 'none';
               window.classList.add('animated', 'fadeIn');
            });
            // добавляем дисплей блок для окна
            modal.style.display = 'block';
            // ставим для body запрет на прокрутку
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
         });
      });
      // событие нажатия на крестик
      close.addEventListener('click', (e) => {
         windows.forEach((window) => {
            window.style.display = 'none';
         });

         closeModal();
         document.body.style.marginRight = `0px`;
      });
      // событие для окна
      modal.addEventListener('click', (e) => {

         if (e.target === modal) {
            windows.forEach((window) => {
               window.style.display = 'none';
            });

            closeModal();
            document.body.style.marginRight = `0px`;
         }
      });

      //   скрытие окна при нажатии клавиши Escape
      window.addEventListener('keydown', (e) => {
          
         if (e.key === 'Escape') {
            document.body.style.marginRight = `0px`;

            closeModal();
         }
      });
   }

   // функция с временным окном которое показываеться через 60 сек или не показывается вовсе
   function showModal(selector, time) {
      setTimeout(function () {
         let display;
         //  выбираем все модальные окна с дата атрибутом и перебираем их
         document.querySelectorAll('[data-modal]').forEach((modaWindow) => {
            // если у пользователя открыто модальное окно
            // getComputedStyle - показывает стили которые вешает браузер
            if (getComputedStyle(modaWindow).display !== 'none') {
               display = 'block';
            }
         });
         //  если модальных окон открытых нет, то показываем временное окно
         if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
            const scroll = calcScroll();
            document.body.style.marginRight = `${scroll}px`;
         }
      }, time);
   }

   function calcScroll() {
      const div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
   }

   function openByScroll(selector) {
      window.addEventListener('scroll', () => {
         //   переменная для приведения совместимости
         const scrollHeight = Math.max(
            document.documentElement.clientHeight,
            document.body.scrollHeight
         );
         //   если пользователь не нажал кнопку и долистал до конца
         // window.scrollY - сколько пользователь пролистал от начала
         // document.documentElement.clientHeight - сколько пользователь видит на данный момент
         // document.documentElement.scrollHeight - полная высота документа
         if (
            !btnPressed &&
            window.scrollY + document.documentElement.clientHeight >=
            scrollHeight
         ) {
            // .click()-ручное использование событий, мы как будто кликнули на элемент
            document.querySelector(selector).click();
         }
      });
   }

   const designModalWindow = {
      triggerSelector: '.button-design',
      modalSelector: '.popup-design',
      closeSelector: '.popup-design .popup-close',
   };
   const consultationModalWindow = {
      triggerSelector: '.button-consultation',
      modalSelector: '.popup-consultation',
      closeSelector: '.popup-consultation .popup-close',
   };
   const giftModalWindow = {
      triggerSelector: '.fixed-gift',
      modalSelector: '.popup-gift',
      closeSelector: '.popup-gift .popup-close',
      destroy: true,
   };

   bindModals(designModalWindow);
   bindModals(consultationModalWindow);
   bindModals(giftModalWindow);
   openByScroll('.fixed-gift');
   showModal('.popup-consultation', 6000);
};
