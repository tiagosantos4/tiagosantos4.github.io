// main.js

let counter = 0;
const primeiroParagrafo = document.querySelector('p');

function count() {
   counter++;
   primeiroParagrafo.textContent = counter;
} 
const segundoParagrafo = document.querySelector('p.segundo');

  function textoMudado() {
    segundoParagrafo.textContent = 'JavaScript';
  }
  function textoNormal() {
    segundoParagrafo.textContent = 'Passa o rato pelo botão abaixo';
  }