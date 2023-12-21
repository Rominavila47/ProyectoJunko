const add = document.querySelector('#add');
const subtrac = document.querySelector('#subtrac');
const quantity = document.querySelector('#quantity');


if (add && subtrac && quantity) {
    add.addEventListener('click', () => {
        quantity.value = Number(quantity.value) + 1;
    });

    subtrac.addEventListener('click', () => {
        // Asegúrate de que el valor no sea menor que 0
        if (Number(quantity.value) > 0) {
            quantity.value = Number(quantity.value) - 1;
        }
    });
} else {
    console.log("Algún elemento no se encontró en el DOM.");
}
