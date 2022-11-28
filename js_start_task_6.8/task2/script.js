document.querySelector('#consoleLog').addEventListener('click', () => {
    console.log('Текст в консоли')
    alert('Этот метод выводит сообщение в консоль - посмотрите в консоль')
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Этот метод выводит сообщение во всплывающем окне, прямо как сейчас')
})

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Этот метод отображает всплывающее окно с запросом ввода информации, прямо как сейчас')
})