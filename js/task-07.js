const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener('input', onInutChange);

function onInutChange(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}