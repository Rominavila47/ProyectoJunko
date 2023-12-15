const add = document.querySelector('#add');
const subtrac = document.querySelector('#subtrac');
const quantity = querySelector('#quantity');

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
subtrac.addEventListener('click', () => quantity.value = Number(quantity.value) - 1);