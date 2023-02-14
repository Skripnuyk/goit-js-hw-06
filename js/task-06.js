const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');


input.addEventListener('blur', event => {
if (event.target.value.length == dataLength) {
    input.classList.add('valid');
    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
    }
} else {
    input.classList.add('invalid');
    if (input.classList.contains('.valid')) {
        input.classList.remove('valid');
    }
}
})