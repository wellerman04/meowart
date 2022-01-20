const show = document.getElementById('show');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const slideActive = document.getElementById('slideActive');
const hide = document.getElementById('hide');


function slider(slide){

    if(slide > 0){
        show.style.marginLeft = '-100vw';
        slideActive.innerHTML = `<p class="slideActive" id="slideActive">02</p>`;
        hide.classList.add('show');
    }
    if(slide > 1){
        show.style.marginLeft = '-200vw';
        slideActive.innerHTML = `<p class="slideActive" id="slideActive">03</p>`
    }
    
    if(slide == 0){
        show.style.marginLeft = '0';
        slideActive.innerHTML = `<p class="slideActive" id="slideActive">01</p>`
    }
    
     //alert(slide);
}
let slideNum = 0;

next.forEach(nextItem => {
    nextItem.addEventListener('click', () => {
              
        if(slideNum < 3){
            slideNum++;
        }
        
        slider(slideNum);
    });
})
prev.forEach(prevItem => {
    prevItem.addEventListener('click', () => {
        
        if(slideNum > -4){
            slideNum--;
        } else if(slideNum == -4){
            slideNum = -2;
        }
        console.log(slideNum)

        slider(slideNum);
    });
});

