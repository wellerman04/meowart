let burger = document.getElementById('burger');
let burgerBtn = document.getElementById('burgerBtn');
let burgerScreen = document.getElementById('burgerScreen');

burger.addEventListener("click", function(){
    burgerBtn.classList.toggle('close');
    burgerScreen.classList.toggle('show');
});