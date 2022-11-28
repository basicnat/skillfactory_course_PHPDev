const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const btn = document.querySelector('button');

input.addEventListener('input', (event) => {
    duplicateField.textContent = event.target.value
    
})


btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (input.value != false) {
        console.log(input.value);
    }  else {
        console.log('Ничего не было введено, или был введён 0')
    }
    input.value = '';
    duplicateField.textContent = '';
})