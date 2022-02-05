let userIcons = document.getElementById('userIcons');
let userItems = document.getElementById('userItems');

userIcons.addEventListener('click', function(){
    userItems.classList.toggle('active');
    //alert('Why am I not work?')
});