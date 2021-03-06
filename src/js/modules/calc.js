export const calc = ({ size, material, options, promocode, result }) => {
   const sizeBlock = document.querySelector(size),
      materialBlock = document.querySelector(material),
      optionsBlock = document.querySelector(options),
      promocodeBlock = document.querySelector(promocode),
      resultBlock = document.querySelector(result);

   let sum = 0;

   const calcFunction = () => {
      // Math.round - округление
      sum = Math.round(
         +sizeBlock.value * +materialBlock.value + +optionsBlock.value
      );

      if (sizeBlock.value == '' || materialBlock.value == '') {
         resultBlock.textContent = 'Выберите размер и матреиал картины';
      } else if (promocodeBlock.value === 'IWANTPOPART') {
         resultBlock.textContent = Math.round(sum * 0.7);
      } else {
         resultBlock.textContent = sum;
      }
   };
   sizeBlock.addEventListener('change', calcFunction);
   materialBlock.addEventListener('change', calcFunction);
   optionsBlock.addEventListener('change', calcFunction);
   promocodeBlock.addEventListener('input', calcFunction);
};
