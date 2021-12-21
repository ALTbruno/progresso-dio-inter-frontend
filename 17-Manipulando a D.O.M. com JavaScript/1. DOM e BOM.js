/*
Document Object Model

O DOM HTML é um padrão de como acessar e modificar elementos HTML de uma página.


BOM
Browser Object Model

Tudo que está dentro do objeto window

*/


// Métodos DOM
document.getElementById('titulo');
document.getElementsByClassName('textos');
document.getElementsByTagName('li');
document.querySelectorAll('.primeira-classe .segunda-classe');
document.querySelectorAll('li .nome-da-classe');

document.createElement(element); // Cria um novo elemento HTML
document.removeChild(element); // Remove um elemento
document.appendChild(element); // Adiciona um elemento
document.replaceChild(new, old); // Substitui um elemento
