
//valorizzo la variabile con il nomi dell' elemento che devo utilizzare.

const btnHamburger = document.querySelector('.fa-bars');
const rightList = document.querySelector('.hamburger-menu');
const chiusura = document.querySelector('.fa-times');

//console.log('bottone', btnHamburger);

//al click del btnHamburgher deve aprire il menù

btnHamburger.addEventListener('click',function(){

  rightList.style.display = "block";

});

chiusura.addEventListener('click',function(){

  rightList.style.display = "none";

});
