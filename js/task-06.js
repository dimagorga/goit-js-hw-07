const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onInutChange);

function onInutChange(event) {
    const validValue = this.dataset.length;
    if (event.currentTarget.value.length <= validValue) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");  
    } if (event.currentTarget.value.length > validValue) {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    } if (event.currentTarget.value.length === 0) {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    }
}