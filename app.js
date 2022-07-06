
//Getting Elements
const container=document.querySelector(".container"),
display=document.querySelector(".display"),
div=document.querySelector(".container divs"),
ball=document.querySelector(".balls"),
wckt=document.querySelector(".wckt"),
totalrun=document.querySelector(".totalrun"),
btn=document.querySelector(".spin");

//Necessary Variables
let numb=Math.ceil(5000+Math.random()*5000);
let totalRun=0;
let i=0;
let click=0;
let prevRun=0;
let wicket=5;

//Initial Output
wckt.innerText=`Wickets: ${wicket}`;
ball.innerText=`Balls: ${click}`;
totalrun.innerText=`TotalRun: ${totalRun}`;

//Button Events
btn.addEventListener("click",()=>{ 
    click++;
    if(click<7){
    btn.style.pointerEvents="none";
    numb=Math.ceil(5000+Math.random()*5000);
    container.style.transition="all 5s ease-out";
    container.style. transform=`rotate(${numb}deg)`;
    container.classList.add("blur");  
    ball.innerText=`Balls: ${click}`;
    // console.log(numb);
    }
    else{
        //if anyone wants to play more then 1 over
        btn.style.pointerEvents="auto";
        display.style.opacity="1";
        setTimeout(()=>{
            location.reload();
        },1500)
    }
})

//After Spin Transition 
container.addEventListener("transitionend",()=>{
    const degIn360= numb%360;
    prevRun=totalRun;
    btn.style.pointerEvents="auto";
    container.style.transition="none";
    container.style.transform=`rotate(${degIn360}deg)`;
    container.classList.remove("blur");
    totalRun+= runCount(degIn360);
    totalrun.innerText=`TotalRun: ${totalRun}`;
    //If wicket falls decrementing wickets
    if (prevRun==totalRun){
        wicket--;
        wckt.style.color="#4caf50";
        wckt.innerText=`Wickets: ${wicket}`;
        //if wicket is 0
        if(wicket <=0){
        btn.style.pointerEvents="auto";
        wckt.style.color="red";
        wckt.innerText=`Wickets: All Gone`;
        //resetting game if All wickets are lost
        setTimeout(()=>{
            location.reload()},2000)
        }
    }
    // console.log(`actualdegree ${degIn360}`);
    // console.log(`divspin ${divSpin(degIn360)}`);
    // console.log(totalRun);
})

//Identifiying Position of Divs 
function divSpin(degIn360){
    let x=360-degIn360;
    if((x>337.5&&x<360)||(x<=23.5&&x>=0)) return 1;
    else if(x>=24&&x<=68) return 2;
    else if(x>=69&&x<=112.5) return 3;
    else if(x>112.5&&x<=157.5) return 4;
    else if(x>157.5&&x<=202.5) return 6;
    else if(x>202.5&&x<=247.5) return 0;
    else if(x>247.5&&x<=292.5) return 0;
    else if(x>292.5&&x<=337.5) return 0;
    // console.log(`360-degin360= ${x}`);
}

//RunCount Function
function runCount(input){
    let run=0;
    run+=divSpin(input);
    return run;
}


