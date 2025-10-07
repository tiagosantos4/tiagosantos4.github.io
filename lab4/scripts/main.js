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

  const terceiroParagrafo = document.querySelector('p.terceiro');

  function textoComCor() {
    terceiroParagrafo.textContent = 'JavaScript';
    terceiroParagrafo.style.color = 'blue'
  }
  function textoSemCor() {
    terceiroParagrafo.textContent = 'Passa o rato pelo botão abaixo';
    terceiroParagrafo.style.color = 'black'
  }