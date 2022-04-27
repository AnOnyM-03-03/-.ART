export const modals = () => {
   // функция с параметрами для popup
   // добавили closeClickOverlay-для отмены клика на подложку
   function bindModals({
      triggerSelector,
      modalSelector,
      closeSelector,
      closeClickOverlay = true,
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

            windows.forEach((window) => {
               window.style.display = 'none';
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
         if (e.target === modal && closeClickOverlay) {
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
         const display = '';
         //  выбираем все модальные окна с дата атрибутом и перебираем их
         document.querySelectorAll('[data-modal]').forEach((window) => {
            // если у пользователя открыто модальное окно
            // getComputedStyle - показывает стили которые вешает браузер
            if (getComputedStyle(window).display !== 'none') {
               display = 'block';
            }
         });
        //  если модальных окон открытых нет, то показываем временное окно
         if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
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

   bindModals(designModalWindow);
   bindModals(consultationModalWindow);
   showModal('.popup-consultation', 2000);
};
