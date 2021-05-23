// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в
//  ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2)
//  и количество элементов в категории (всех вложенных в него 
//     элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
const categories = document.querySelectorAll('#categories h2')
console.log(`В списке ${categories.length} категории.`);

const titleEl = document.querySelectorAll('h2');



function allCategories(){
    titleEl.forEach((title) => {
        console.log(`Категория: ${title.textContent}\nКоличество элементов: ${title.nextElementSibling.children.length}`)
})   

}
allCategories()