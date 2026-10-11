// let gameseq = [];
// let userseq = [];

// let colors = ["red","yellow","green","purple"];

// let h2 = document.querySelector("h2");
// let strted = false;
// let level = 0;
// document.addEventListener("keypress", function(){
//     if (strted == false){ 
//         console.log("Game Is Started")
//         strted = true;
//         levelup();
//     }
     
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     } ,500)
// }

// function userFlash(btn){
//     btn.classList.add("userFlash");
//     setTimeout(function(){
//         btn.classList.remove("userFlash");
//     } ,300)
// }

// function levelup (){
//     userseq = [];
// level++;
// h2.innerText = `Level ${level}` ;
 
// let randonIndx = Math.floor(Math.random()*colors.length);
// let randomColor = colors[randonIndx];
// let randomBtn = document.querySelector(`.${randomColor}`)
// gameseq.push(randomColor);
// console.log(gameseq);
// // console.log(randonIndx);
// // console.log(randomColor);
// // console.log(randomBtn);
//  gameFlash(randomBtn);
// };

// function chekAns(indx){
    
//     if(userseq[indx]===gameseq[indx]){
//       if(userseq.length==gameseq.length){
//         setTimeout(levelup,1000);
       
//       }

//     }
//     else{
//         h2.innerHTML = `Game over ! Your Score Was <b>${level}</b>  <br>Press Any Key To Start Game`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//              document.querySelector("body").style.backgroundColor="white"
//         },500)
//         reset();
//     }
    
// }


// function btnPress(){
//   console.log(this);
//   let btn = this;
//   userFlash(btn);
//   let usercolor = btn.getAttribute("id");
//   userseq.push(usercolor);

//   chekAns(userseq.length-1);
// }

// let allBtn = document.querySelectorAll(".btn");
// for(btn of allBtn){
//     btn.addEventListener("click",btnPress);
// }

// function reset(){
//     strted = false;
//     gameseq = [];
//     userseq =[];
//     level = 0;
    
// }


let gameseq = [];
let userseq = [];
let colors = ["red","yellow","green","purple"];

let h2 = document.querySelector("#level-title");
let currentLevelDisplay = document.querySelector("#current-level");
let highScoreDisplay = document.querySelector("#high-score");

let strted = false;
let level = 0;
let highScore = 0;

document.addEventListener("keypress", function(){
    if (!strted){ 
        strted = true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 500);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 300);
}

function levelup (){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    currentLevelDisplay.innerText = level;

    let randonIndx = Math.floor(Math.random()*colors.length);
    let randomColor = colors[randonIndx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);

    gameFlash(randomBtn);
}

function chekAns(indx){
    if(userseq[indx] === gameseq[indx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b><br>Press Any Key To Restart`;
        document.body.classList.add("game-over");
        setTimeout(() => document.body.classList.remove("game-over"), 500);

        if(level > highScore){
            highScore = level;
            highScoreDisplay.innerText = highScore;
        }
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    chekAns(userseq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    strted = false;
    gameseq = [];
    userseq = [];
    level = 0;
    currentLevelDisplay.innerText = 0;
}
