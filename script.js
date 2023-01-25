var smcircle = document.querySelector("#smcircle");
var main = document.querySelector("#main");
var insider = document.querySelector("#insider");
var cursor = document.querySelector("#cursor")
var circle = document.querySelector('#circle');

window.addEventListener("mousemove", function (dets) {
    smcircle.style.top = `${dets.clientY}px`
    smcircle.style.left = `${dets.clientX}px`
})

$('#t1 h1').textillate({ in: { effect: 'fadeInUp', delay:100 , sequence:true } });

document.querySelectorAll("#insider").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        smcircle.style.height = "60px";
        smcircle.style.width = "60px";
        smcircle.style.backgroundColor = "white";
        smcircle.style.mixBlendMode = "difference";
    })

    elem.addEventListener("mouseleave", function (dets) {
        smcircle.style.height = "20px";
        smcircle.style.width = "20px";
        smcircle.style.backgroundColor = "transparent";
        smcircle.style.mixBlendMode = "initial";

    })
})

document.querySelectorAll("#t1 h1").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
        smcircle.style.borderColor = "white";
        smcircle.style.mixBlendMode = "difference";

    })

    elem.addEventListener("mouseout", function (dets) {
        smcircle.style.borderColor = "black";
        smcircle.style.mixBlendMode = "initial";

    })
})

document.querySelectorAll("#insider").forEach(function(elem) {
    elem.addEventListener("mousemove", function(dets){
        cursor.style.top = `${dets.clientY}px`;
        cursor.style.left = `${dets.clientX}px`;
        cursor.style.display = "block"
        smcircle.style.display = "none"
        // cursor.style.backgroundColor = "transparent";
        cursor.style.mixBlendMode = "difference";
    })

    elem.addEventListener("mouseleave", function(dets){
        cursor.style.top = "0px" ;
        cursor.style.left = "0px" ;
        cursor.style.display = "none"
        smcircle.style.display = "block"
        // cursor.style.backgroundColor = "transparent";
        cursor.style.mixBlendMode = "initial";
    })
})

circle.addEventListener('mousemove',(dets)=>{
        smcircle.style.height = "60px";
        smcircle.style.width = "60px";
        smcircle.style.backgroundColor = "white";
        smcircle.style.mixBlendMode = "difference";
        circle.style.transform = `translate(60%,0%) translate(${dets.clientX*0.2}px,${dets.clientY*0.2}px)`
})

circle.addEventListener('mouseout',(dets)=>{
    smcircle.style.height = "20px";
    smcircle.style.width = "20px";
    smcircle.style.backgroundColor = "transparent";
    smcircle.style.mixBlendMode = "initial";
})