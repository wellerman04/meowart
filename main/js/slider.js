const sliderContent = document.querySelectorAll('.sliderContent');
const show = document.getElementById('show');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');


function slider(slide){

    if(slide > 0){
        show.style.marginLeft = '-100vw';
    }
    if(slide > 1){
        show.style.marginLeft = '-200vw';
    }
    if(slide > 2){
        show.style.marginLeft = '0';
    }
    if(slide == 0){
        show.style.marginLeft = '0';
    }
    if(slide == -1){
        show.style.marginLeft = '-200vw';
    }
    if(slide == -2){
        show.style.marginLeft = '-100vw';
    }
    if(slide == -3){
        show.style.marginLeft = '0';
    }
    if(slide < -3){
        show.style.marginLeft = '-200vw';
    }
    
     //alert(slide);
}
let slideNum = 0;

next.forEach(nextItem => {
    nextItem.addEventListener('click', () => {
              
        if(slideNum < 3){
            slideNum++;
        }else if(slideNum > 2){
            slideNum = 1;
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
        
        slider(slideNum);
    });
})


