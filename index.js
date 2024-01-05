let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];


boxes.forEach((box) =>{
        box.addEventListener("click", ()=>{
            // console.log("Box was Clicked");
         if(turn0 === true){
                box.sty
                box.innerText = "0";
                turn0 = false;
         }
         else{
            box.innerText = "X";
            turn0 = true;
         }
         box.disabled = true;
         count++;

         let isWinner = checkWinner();

         if(count === 9 && !isWinner)
         gameDraw();
        });
});

const gameDraw = () =>{
    msg.innerText = `Game was a draw.`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) =>{
    msg.innerText = `Congartulations , Winner is ${Winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
};

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgConatiner.classList.add("hide");
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val  && pos2val === pos3val){
                // console.log("Winner" , pos1val);
                showWinner(pos1val);
                return true;
            }
        }
    }
};

// const xyz = ()=>{
//     console.log("hELLO");
// }
// let para = document.getElementById("para");
// para.addEventListener("click",xyz);
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);