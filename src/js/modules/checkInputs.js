
export const checkInputs = (selector) => {
   const textInputs = document.querySelectorAll(selector);

   textInputs.forEach((lang) => {
      lang.addEventListener('keypress', (e) => {
        //   если пользователь ввел кириллицу или цифры то тогда отменяем стандартное поведение
        // Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
         if (e.key.match(/[^а-яё 0-9]/gi)) {
            e.preventDefault();
         }
      });
   });
};
