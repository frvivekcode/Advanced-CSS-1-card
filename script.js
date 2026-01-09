let crs=document.querySelector(".cursor")
let body=document.querySelector("body")

body.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
 

})
let card=document.querySelector(".card")
card.addEventListener("mouseenter",function(){
  card.style.animationPlayState = "running";
      
  card.style.border= "5px rgba(255, 255, 255, 0) solid";
  card.style.boxShadow="0 0 40px rgb(255, 0, 157)"
  card.style.color="rgb(255, 0, 102)"

})
card.addEventListener("mouseleave",function(){
    card.style.animationPlayState="paused";
    card.style.boxShadow="0 0 0px rgb(255, 0, 132)"
    card.style.border="none"
    card.style.color="white"

    
})