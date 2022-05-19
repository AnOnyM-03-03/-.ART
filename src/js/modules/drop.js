export const drop = () => {
   const fileInputs = document.querySelectorAll('[name="upload"]');
   // массив сoбытий
   ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
      fileInputs.forEach((input) => {
         input.addEventListener(eventName, preventDefaults, false);
      });
   });

   function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
   }

   function highLight(elem) {
      elem.closest('.file_upload').style.border = '1px dotted black';
      elem.closest('.file_upload').style.backgroundColor = '#f7e7e6';
   }

   function unHighLight(elem) {
      elem.closest('.file_upload').style.border = '';
      if (elem.closest('.calc_form')) {
         elem.closest('.file_upload').style.backgroundColor = '#fff';
      } else {
         elem.closest('.file_upload').style.backgroundColor = '#f7e7e6';
      }
   }

   ['dragenter', 'dragover'].forEach((eventName) => {
      fileInputs.forEach((input) => {
         input.addEventListener(eventName, () => highLight(input), false);
      });
   });
   ['drop', 'dragleave'].forEach((eventName) => {
      fileInputs.forEach((input) => {
         input.addEventListener(eventName, () => unHighLight(input), false);
      });
   });

   fileInputs.forEach((input) => {
      input.addEventListener('drop', (e) => {
         input.files = e.dataTransfer.files;
         let dots;
         const nameSplit = input.files[0].name.split('.');
         nameSplit[0].length > 5 ? (dots = '...') : (dots = '.');
         const name = nameSplit[0].substring(0, 6) + dots + nameSplit[1];
         input.previousElementSibling.textContent = name;
      });
   });
};
