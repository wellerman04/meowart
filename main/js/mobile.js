let burger = document.getElementById('burger');
let burgerBtn = document.getElementById('burgerBtn');
let burgerScreen = document.getElementById('burgerScreen');
let wrapper = document.getElementById('wrapper');

burger.addEventListener("click", function(){
    burgerBtn.classList.toggle('close');
    burgerScreen.classList.toggle('show');
    wrapper.classList.toggle('block');
});