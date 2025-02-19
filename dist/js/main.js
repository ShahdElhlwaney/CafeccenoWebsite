

const slider=document.querySelector('.blog-posts__slider');
const slides=document.querySelectorAll('.slide');
const rightBtn=document.querySelector('.blog-posts__slider__right-btn');
const leftBtn=document.querySelector('.blog-posts__slider__left-btn');
const maxLength=slides.length;



let curSlide=0;
let prevEl,nextEl;
let num,widthItem;
let widthScreen=window.innerWidth;
console.log(widthScreen);
num=widthScreen<600?1:widthScreen<850?2:widthScreen<992?3:3;
widthItem=widthScreen<600?'60%':widthScreen<850?'40%':widthScreen<992?'25%':'27%';
console.log(num,widthItem);
const goToSlide=function(slide,num,width){

    slides.forEach((s,i)=>{
        s.style.width=width;
        if(i===curSlide-1){
         prevEl=s;
         s.style.display='none';
     }
     if(i===curSlide+num){
         nextEl=s;
         s.style.display='none';
     }
     s.style.transform=`translateX(${103*(i-slide)}%)`;
       });
}
goToSlide(0,num,widthItem);

let isXL,isLg,isMed,isBigMed,isSm;
window.addEventListener('resize',function(){
   widthScreen=this.window.innerWidth;
   widthItem=widthScreen<600?'60%':widthScreen<768?'40%':widthScreen<992?'25%':'25%';
   num=widthScreen<600?1:widthScreen<850?2:widthScreen<992?3:3;
   console.log('Resize=>',num,widthItem);
   goToSlide(0,num,widthItem);
});

const nextSlide=function(num){
    if(curSlide>=(maxLength-num))
        curSlide=0;
    else
        curSlide+=num;//0 3 6
}
const prevSlide=function(num){
    if(curSlide===0)
        curSlide=maxLength-num;
    else
        curSlide-=num;
}


rightBtn.addEventListener('click', function(){ 
    if(prevEl) prevEl.style.display='flex';
    if(nextEl) nextEl.style.display='flex';
    nextSlide(num);
    goToSlide(curSlide,num,widthItem);
});
leftBtn.addEventListener('click', function(){
    if(prevEl) prevEl.style.display='flex';
    if(nextEl) nextEl.style.display='flex';
    prevSlide(num);
    goToSlide(curSlide,num,widthItem);
});

