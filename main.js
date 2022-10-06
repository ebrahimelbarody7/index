let sec=document.querySelector(".events .time .Seconds")
let minute=document.querySelector(".events .time .Minutes")
let day=document.querySelector(".events .time .days")
let hours=document.querySelector(".events .time .Hours")

let increaseTime=document.querySelectorAll(".events .time .increaseTime")


let dataTimeCount=new Date("31 Dec,2022 23:59:59").getTime()

let c=setInterval(()=>{
    let dataNow=new Date().getTime()
    let diff=dataTimeCount - dataNow
    day.innerHTML=parseInt(diff/(1000*60*60*24))
    hours.innerHTML=parseInt(diff%(1000*60*60*24)/(1000*60*60))
    minute.innerHTML=parseInt(diff%(1000*60*60*24)%(1000*60*60)/(1000*60))
    sec.innerHTML=parseInt(diff%(1000*60*60*24)%(1000*60*60)%(1000*60)/1000)
    
    increaseTime.forEach((e)=>{
        if(e.innerHTML<10){
            e.innerHTML=`0${e.innerHTML}`
        }
    })
    
    if (diff < 0) {
        dataTimeCount=new Date("31 Dec,2023 23:59:59").getTime()

    }
},1000)


// -------------------

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skilles");
let spans=document.querySelectorAll(".stats .one")
let box=document.querySelector(".stats")

let started=false;


window.onscroll = function () {
  // Skills Animate Width
    if (window.scrollY >= section.offsetTop-250) {
    progressSpans.forEach((span) => {
        span.style.width = span.dataset.width;
    });}

    if(window.scrollY>=box.offsetTop){
        if(!started){
            spans.forEach((one)=>startCount(one))
        }
        
        started=true;
    }

    }




function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++
        if(el.textContent==goal){
            clearInterval(count)
        }
    },2000 / goal)
}

