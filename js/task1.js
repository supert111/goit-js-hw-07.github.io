// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelector('#categories');
const allcategoriesRef = categoriesRef.children;
console.log(`'В списке ${allcategoriesRef.length} категории.'`);

const lisRef = document.querySelectorAll('li');
lisRef.forEach(li => {
     if (li.classList.contains('item')){
       const liChildren = Array.from(li.children);
        console.log(`Категория: ${liChildren[0].textContent}`);
        console.log(`Количество элементов: ${liChildren[1].children.length}`);
     };  
},
     );  

