const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
const value = document.querySelector('#value');

decrement.addEventListener('click', onClickButtonDecrement);
increment.addEventListener('click', onClickButtonIncrement);

let counterValue = 0;

function onClickButtonDecrement() {
    counterValue -= 1;
    value.textContent = counterValue;
    
}

function onClickButtonIncrement() {
    counterValue += 1;
    value.textContent = counterValue;
    
}

