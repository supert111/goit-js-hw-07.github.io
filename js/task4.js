//Счетчик состоит из спана и кнопок, которые должны 
//увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const counterValue = document.querySelector('#value');

let value = 0;
const increment = () => { 
    value +=1; 
    counterValue.innerHTML = value;
};
const decrement = () => { 
    value -=1; 
    counterValue.innerHTML = value;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);