
const botaoDark = document.querySelector('.modoDark');
const botaoWhite = document.querySelector('.modoWhite');
const body = document.querySelector('body')
const li = document.querySelectorAll('li')
const titulo = document.querySelector('.titulo');
botaoDark.addEventListener('click', () => {

    titulo.style.color = 'rgb(243, 204, 248)';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '3em';
    titulo.style.backgroundColor = 'rgb(63, 3, 97)';
    botaoWhite.style.filter = 'invert(100%)'
    botaoDark.style.filter = 'invert(100%)'
    li.forEach( li => {
        li.style.backgroundColor = 'rgb(63, 3, 97)';
        li.style.color = 'rgb(243, 204, 248)';
    })
    body.style.backgroundColor = 'rgb(63, 3, 97)';
})
botaoWhite.addEventListener('click', () => {
    titulo.style.color = 'rgb(63, 3, 97)';
    titulo.style.textAlign = 'center';
    titulo.style.fontSize = '3em';
    titulo.style.backgroundColor = 'rgb(243, 204, 248)';
    botaoWhite.style.filter = 'invert(0%)'
    botaoDark.style.filter = 'invert(0%)'
    li.forEach( li => {
        li.style.backgroundColor = 'rgb(243, 204, 248)';
        li.style.color = 'rgb(63, 3, 97)';
    })
    body.style.backgroundColor = 'rgb(243, 204, 248)';
})