export const slider = ({ slides, dir, prev, next }) => {
   let slideIndex = 1;
   //    переменная для хранения значений событий мыши
   let paused = false;
   const sliders = document.querySelectorAll(slides);

   //   функция для проверки числа слайдов
   function showSlides(num) {
      //    если число больше чем их кол-во, то возвращаем 1 слайд
      if (num > sliders.length) slideIndex = 1;

      //    если число меньше чем 1, то возвращаем последний слайд
      if (num < 1) slideIndex = sliders.length;
      // перебираем слайды добавляем класс и убираем неактивные слайды
      sliders.forEach((slider) => {
         slider.classList.add('animated');
         slider.style.display = 'none';
      });
      //   для первого слайда ставим display = 'block' то-есть показываем его
      sliders[slideIndex - 1].style.display = 'block';
   }
   //    вызываем функцию чтобы пользователь при входе видел только 0 слайд то-есть 1
   showSlides(slideIndex);

   //    функция для смены слайдов
   function plusSlides(num) {
      showSlides((slideIndex += num));
   }
   // если селекторы кнопок не были переданы, то блок не выполнится и не сломает весь код
   try {
      const prevBtn = document.querySelector(prev),
         nextBtn = document.querySelector(next);

      prevBtn.addEventListener('click', () => {
         plusSlides(-1);
         //  добавление/удаление классов для перехода слайдов
         sliders[slideIndex - 1].classList.remove('slideInLeft');
         sliders[slideIndex - 1].classList.add('slideInRight');
      });
      nextBtn.addEventListener('click', () => {
         plusSlides(1);
         //  добавление/удаление классов для перехода слайдов
         sliders[slideIndex - 1].classList.remove('slideInRight');
         sliders[slideIndex - 1].classList.add('slideInLeft');
      });
   } catch (e) {
      console.log('Error');
   }

   function activateAnimation() {
      //    если направление равно 'vertical'
      if (dir === 'vertical') {
         //   в интервале 3 сек меняем слайды
         paused = setInterval(function () {
            plusSlides(1);
            sliders[slideIndex - 1].classList.add('slideInDown');
         }, 5000);
      } else {
         //   или так-же меняем слайды но в горизонтальном положении
         paused = setInterval(function () {
            plusSlides(1);
            sliders[slideIndex - 1].classList.remove('slideInRight');
            sliders[slideIndex - 1].classList.add('slideInLeft');
         }, 5000);
      }
   }
   
   activateAnimation();
   //    при наведении мыши на родителя слайда мы вызываем clearInterval с параметром
   sliders[0].parentNode.addEventListener('mouseenter', () => {
      clearInterval(paused);
   });
   //    если убираем курсор то запускаем функцию слайда
   sliders[0].parentNode.addEventListener('mouseleave', () => {
      activateAnimation();
   });
};
