import { postData } from '../services/requestions'

export const form = () => {
   const forms = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input'),
      uploads = document.querySelectorAll('[name="upload"]');
   const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
   // фнукция для каждого инпута
   phoneInputs.forEach((phoneInput) => {
      //    событие инпута
      phoneInput.addEventListener('input', () => {
         //   пользователь вводит что-то, затем мы проверяем это на регулярном выражении и, если это не цифра то заменяем пустой строкой
         phoneInput.value = phoneInput.value.replace(/\D/, '');
      });
   });
   //   Объект сообщений который будет показывавться пользователю
   const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Упс... возникла ошибка',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      fail: 'assets/img/fail.png',
   };
   // очистка инпутов
   const clearInputs = () => {
      inputs.forEach((input) => (input.value = ''));

      uploads.forEach((upload) => {
         upload.previousElementSibling.textContent = 'Файл не выбран';
      });
   };

   uploads.forEach((upload) => {
      upload.addEventListener('input', () => {
         let dots;
         const nameSplit = upload.files[0].name.split('.');
         //  sdadadadasd.jpg.split('.') => ['sdadadadasd','jpg']
         nameSplit[0].length > 5 ? (dots = '...') : (dots = '.');
         const name = nameSplit[0].substring(0, 6) + dots + nameSplit[1];
         upload.previousElementSibling.textContent = name;
      });
   });
   //    для отправки путей
   const path = {
      designer: 'assets/server.php',
      question: 'assets/question.php',
   };

   //    функция которая отвечает за отправку запроса
   // async - указывает что запрос асинхронный    await- говорит о том, что запрос нужно дождаться
   const postData = async (url, data) => {
      const res = await fetch(url, {
         method: 'POST',
         body: data,
      });

      return await res.text();
   };
   //    фунция для каждой формы
   forms.forEach((form) => {
      //    событие отпраки
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         // блок скрытия формы и показа картинки
         const statusmessage = document.createElement('div');
         statusmessage.classList.add('status');
         form.parentNode.appendChild(statusmessage);
         form.classList.add('animated', 'fadeOutUp');

         setTimeout(() => {
            form.style.display = 'none';
         }, 400);

         //   отображение статуса изображения
         const statusImg = document.createElement('img');
         // добавляем к созданному элементу img через setAttribute путь
         statusImg.setAttribute('src', message.spinner);
         //  добавление анимации
         statusImg.classList.add('animated', 'fadeInUp');
         //  указываем в какой блок помещаем нашу картинку
         statusmessage.appendChild(statusImg);
         //  создаем блок с текстовым сообщением
         const textMessage = document.createElement('div');
         //  указываем текстовое сообщение
         textMessage.textContent = message.loading;
         //  указываем в какой блок помещаем наш текст
         statusmessage.appendChild(textMessage);
         // собираем данные из введеной формы
         const formData = new FormData(form);
         let api;

         form.closest('.popup-design') || form.classList.contains('calc_form')
            ? (api = path.designer)
            : (api = path.question);
         // отправляем запрос на сервер по адресу с данными из formData
         postData(api, formData)
            .then((res) => {
               console.log(res);
               statusImg.setAttribute('src', message.ok);
               textMessage.textContent = message.success;
            })
            .catch(() => {
               statusImg.setAttribute('src', message.fail);
               textMessage.textContent = message.failure;
            })
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusmessage.remove();
                  form.style.display = 'block';
                  form.classList.remove('fadeOutUp');
                  form.classList.add('fadeInUp');
               }, 5000);
            });
      });
   });
};
