const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();    
    const userText = prompt('Введите текст, который отобразится на странице'); 
    if (userText != false) {
        link.textContent  = userText;
        link.style.backgroundColor = 'lightgreen';
    } else {
        link.textContent = 'Вы ничего не ввели или ввели цифру 0';
        link.style.backgroundColor = 'pink';
    }
    
})