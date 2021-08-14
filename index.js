const inspireNextButton = document.querySelector(".inspiration-next");
const inspirPrevButton = document.querySelector(".inspiration-prev");
const inspirCurrentView = document.querySelectorAll(".slider");
const inspirCardWidth = document.querySelector(".inspiration-image").offsetWidth+20;

let inspirCurrentPage = 0;
inspireNextButton.onclick = ()=>{
  if(inspirCurrentPage<9){inspirCurrentPage++;
  inspirCurrentView.forEach((f)=> f.style.transitionDuration = '0.5s');
  inspirCurrentView.forEach((e)=>e.style.transform = `translateX(-${inspirCurrentPage*inspirCardWidth}px)`);
}
}
inspirPrevButton.onclick = ()=>{
    if(inspirCurrentPage){
  inspirCurrentPage--;
  inspirCurrentView.forEach((j)=> j.style.transitionDuration = '0.5s');
  inspirCurrentView.forEach((i) =>i.style.transform = `translateX(-${inspirCurrentPage*inspirCardWidth}px)`);

}
}





const brandNextButton = document.querySelector(".brand-next");
const brandPrevButton = document.querySelector(".brand-prev");
const brandCurrentView = document.querySelectorAll(".brand-slider");
const brandCardWidth = document.querySelector(".brand-image").offsetWidth+40;

let brandCurrentPage = 0;
brandNextButton.onclick = ()=>{
  if(brandCurrentPage<9){brandCurrentPage++;
  brandCurrentView.forEach((f)=> f.style.transitionDuration = '0.5s');
  brandCurrentView.forEach((e)=>e.style.transform = `translateX(-${brandCurrentPage*brandCardWidth}px)`);
}
}
brandPrevButton.onclick = ()=>{
    if(brandCurrentPage){
  brandCurrentPage--;
  brandCurrentView.forEach((j)=> j.style.transitionDuration = '0.5s');
  brandCurrentView.forEach((i) =>i.style.transform = `translateX(-${brandCurrentPage*brandCardWidth}px)`);

}
}
