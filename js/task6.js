//Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

/* <input type="text" id="validation-input" data-length="6"
  placeholder="Введи 6 символов"
/> */
//Сколько символов должно быть в инпуте, указывается в его 
//атрибуте data-length.
//Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
console.dir(inputRef);
inputRef.addEventListener('blur', element => {
    const { value } = element.target;
    // if (value.length < 5) {
    //     inputRef.classList.add('invalid');
    // }
    // else if (value.length > 5) {
    //     inputRef.classList.add('valid');
    //     inputRef.classList.remove('invalid');
    // }
    // else {
    //      inputRef.classList.add('invalid');
    // }
// =====================================================
    if (value.length !== 6) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
    else {
             inputRef.classList.add('valid');
             inputRef.classList.remove('invalid');
        }

 
});

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }