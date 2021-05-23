
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
    
  ];

const allIngredients = document.querySelector('#ingredients')
  
function createLi(ingredients){    
    for(let i = 0; i <= ingredients.length -1; i += 1){  
        const newLi = document.createElement('li');     
        newLi.textContent = ingredients[i]
        allIngredients.append(newLi)
    }        
  }
  createLi(ingredients)