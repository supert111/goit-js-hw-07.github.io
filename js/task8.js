//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает 
//кнопку Создать, после чего рендерится коллекция. 
//При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число. Функция создает столько div, 
//сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */}
const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input')
const renderBtn = document.querySelector('#controls button[data-action="render"]');
const destroyBtn = document.querySelector('#controls button[data-action="destroy"]');

renderBtn.addEventListener('click', (event) => {
    const amount = inputRef.valueAsNumber;
    createBoxes(amount);
});

destroyBtn.addEventListener('click', (event) => {
    destroyBoxes(); 
    // const boxesRef = document.createElement('div');
    // boxesRef.setAttribute('id', 'boxes');
    // inputRef.insertAdjacentElement('afterend', boxesRef);
    // console.dir(boxesRef);
});

let counter = 0;
let numbSize = 20;

const createBoxes = (amount => {
    while (amount > counter) {
    const divRef = document.createElement('div');
    console.dir(divRef);
    const color = `rgb(${(Math.random() * (255 - 1) + 1)}, ${(Math.random() * (255 - 1) + 1)}, ${(Math.random() * (255 - 1) + 1)})`;
    numbSize += 10;
    divRef.style.cssText=`
    background-color: ${color};
    width: ${numbSize}px;
    height: ${numbSize}px;
    display: block;
    margin-bottom: 10px;
  `;
    boxesRef.appendChild(divRef);
    counter += 1;
    
    }
    counter = 0;
    return ;
});

const destroyBoxes = (event => {
    boxesRef.outerHTML = '';
    inputRef.value = '';  
});
