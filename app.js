let gameSeq=[];
let userSeq=[];

let btns=["red", "yellow", "green", "purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomIndex=Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
}
function checkAns(index){
    console.log(`Current level: ${level}`);
    // let index=level-1;
    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b><br>Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(document.querySelector("body").style.backgroundColor="white", 150);
        reset();
    }
}
function btnPress(){
    console.log("Btn was pressed");
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}