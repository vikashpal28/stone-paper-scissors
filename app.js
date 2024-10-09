let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const showWinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win the game!");
        msg.innerText = `you win the game! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lost the game!");
         msg.innerText = `you lost the game. ${compchoice} beats ${userchoice}`;
         msg.style.backgroundColor = "red";
    
    }
}



    const drawgame =()=>{
    console.log("Draw Game");
    msg.innerText = "game was draw! play again"
    msg.style.backgroundColor = "grey";
    }

   
   
    let gencompChoice = () =>{
    const options = ["paper","stone","scissors"];
    const rdmidx = Math.floor(Math.random()*3);
    return options[rdmidx];
   }


    const playgame =(userchoice) =>{
    console.log("userchoice ",userchoice);
    const compchoice = gencompChoice();
    console.log("computer choice ",compchoice);

    if(userchoice === compchoice){
    drawgame();
    }
    else{
    let userwin = true;
    if(userchoice ==="stone"){
    userwin = compchoice === "paper"? false : true;
    }
    else if(userchoice ==="paper"){
    userwin = compchoice === "scissors"?false:true;
    }
    else{
    userwin = compchoice === "stone"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
    }
}
  
   choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("Id");
    playgame(userchoice);
    });
});