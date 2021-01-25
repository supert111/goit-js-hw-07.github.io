//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
//подставляет его текущее значение в span#name-output. Если инпут пустой, 
//в спане должна отображаться строка 'незнакомец'.

{/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

document.addEventListener('input', () => {
    //const { value } = inputNameRef;
    if(inputNameRef.value) {
        outputNameRef.textContent = inputNameRef.value;
    }
    else {
        outputNameRef.textContent = 'незнакомец';  
    };
})

 