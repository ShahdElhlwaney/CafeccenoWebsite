
const slider=document.querySelector('.blog-posts__slider');
const slides=document.querySelectorAll('.slide');
const rightBtn=document.querySelector('.blog-posts__slider__right-btn');
const leftBtn=document.querySelector('.blog-posts__slider__left-btn');
const maxLength=slides.length;



let curSlide=0;
let prevEl,nextEl;
let num,widthItem;



const init=function(){
    const laptopMinSize=992,tabletMinSize=768;
    const widthScreen=window.innerWidth;
    num=widthScreen>laptopMinSize?3:widthScreen>tabletMinSize?2:1;
    widthItem=widthScreen>laptopMinSize?'28%':widthScreen>tabletMinSize?'40%':'80%';
    console.log(widthItem,num);
}
init();
const goToSlide=function(slide,num,width){

    slides.forEach((s,i)=>{
        s.style.width=width;
        if(i===curSlide-1){
         prevEl=s;
         s.style.opacity='0';
     }
     if(i===curSlide+num){
         nextEl=s;
         s.style.opacity='0';
     }
     s.style.transform=`translateX(${103*(i-slide)}%)`;
       });
}
goToSlide(0,num,widthItem);
window.addEventListener('resize',function(){
   init();

   goToSlide(0,num,widthItem);
});

const nextSlide=function(num){
    if(curSlide>=(maxLength-num))
        curSlide=0;
    else
        curSlide+=num;
}
const prevSlide=function(num){
    if(curSlide<=0)
        curSlide=maxLength-num;
    else
        curSlide-=num;
}

rightBtn.addEventListener('click', function(){ 
    if(prevEl) prevEl.style.opacity='1';
    if(nextEl) nextEl.style.opacity='1';
    nextSlide(num);
    goToSlide(curSlide,num,widthItem);
});
leftBtn.addEventListener('click', function(){
    if(prevEl) prevEl.style.opacity='1';
    if(nextEl) nextEl.style.opacity='1';
    prevSlide(num);
    goToSlide(curSlide,num,widthItem);
});

