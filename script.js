var nav=gsap.timeline();
nav
.to(".nav",{
    delay: 1,
    y: 30,
    opacity: 1,
    duration: 2,
    ease:"Expo.easeInOut"
})
.to(".btm",{
    y: -30,
    opacity: 1,
    duration: 2,
    ease:"Expo.easeInOut"
})
.to(".abc",{
    opacity:1,
    duration:4,
    ease:"Power1.easeInOut",
    stagger:1
})

window.addEventListener("mousemove", function(dets){
    function abc(){
        document.querySelector("#smcircle").style.top =`${dets.clientY}px`
        document.querySelector("#smcircle").style.left =`${dets.clientX}px`
        document.querySelector("#cursor").style.top= `${dets.clientY}px`
        document.querySelector("#cursor").style.left= `${dets.clientX}px`
    }
    window.requestAnimationFrame(abc)
});

document.querySelectorAll(".abc").forEach(function(elem){
    elem.addEventListener("mousemove", function(abc){
        document.querySelector("#main").style.backgroundColor = abc.target.dataset.color;
        document.querySelector("#main").style.transition = "2s";
    })
    elem.addEventListener("mouseleave", function(){
        document.querySelector("#main").style.backgroundColor= "#274041"
    })
})

// document.querySelector(".container").
// addEventListener("mousemove", function(){
//     document.querySelector(".container1").style.left = "30%";
//     document.querySelector(".container1").style.transition = "2s";
//     // document.querySelector(".container1").style.z-index = "16";
//     document.querySelector(".container2").style.left = "70%";
//     document.querySelector(".container2").style.transition = "2s";
// })
// document.querySelector(".container").
//     addEventListener("mouseleave", function(){
//         setTimeout(function(){
//         document.querySelector(".container1").style.left = "50%";
//         document.querySelector(".container2").style.left = "50%";
//     },2000)
// })



var temp=1;
document.querySelector(".container").
    addEventListener("click",function(elem){
        if(temp===1){
        document.querySelector(".container1").style.left = "20%";
        document.querySelector(".container1").style.transition = "2s";
       // document.querySelector(".container1").style.z-index = "16";
        document.querySelector(".container2").style.left = "80%";
        document.querySelector(".container2").style.transition = "2s";
        temp=0;
    }
    else{
        document.querySelector(".container1").style.left = "50%";
        document.querySelector(".container2").style.left = "50%";
        temp=1
    }
})

document.querySelectorAll(".bg-img").forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        document.querySelector(".container1").style.left = "30%";
        document.querySelector(".container1").style.transition = "2s";
        document.querySelector(".container2").style.left = "70%";
        document.querySelector(".container2").style.transition = "2s";
    })
    elem.addEventListener("mouseleave", function(){
        document.querySelector(".container1").style.left = "50%";
        document.querySelector(".container2").style.left = "50%";
        // setTimeout(function(){
            // document.querySelector(".container1").style.left = "50%";
            // document.querySelector(".container2").style.left = "50%";
        // },1000)
    })
})