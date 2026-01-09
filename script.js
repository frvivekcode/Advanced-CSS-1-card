let crs=document.querySelector(".cursor")
let body=document.querySelector("body")

body.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
 

})