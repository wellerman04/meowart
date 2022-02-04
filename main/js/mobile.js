let burger = document.getElementById('burger');
let burgerBtn = document.getElementById('burgerBtn');

burger.addEventListener("click", function(){
    burgerBtn.classList.toggle('close');
});