const refs = {
    sub: document.querySelector('[data-action="decrement"]'),
    add: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
    wrap: document.querySelector('#counter'),
};

let counterValue = 0;
const decrement = (event) => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
}
const increment = (event) => {
    counterValue += 1;
    refs.span.textContent = counterValue;
}




refs.sub.addEventListener("click", decrement);
refs.add.addEventListener("click", increment);