console.log("hey Welcome to Tic Tac Toe Game. Ready to win??")
let move_sound=new Audio("music/move_ding.mp3");
let finished=new Audio("music/finishing.mp3");
let turn= "X";
let gameover = false;

// function to change the move 
const changeTurn= ()=>{
    return turn === "X"?"0":"X";

}

//Function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('sub_box');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].textContent === boxtexts[e[1]].textContent) && (boxtexts[e[0]].textContent === boxtexts[e[2]].textContent) && (boxtexts[e[0]].textContent !== '')){
            document.querySelector('.info').textContent = boxtexts[e[0]].textContent +" Won"
            gameover= true;
            document.querySelector('.img_box').getElementsByTagName('img')[0].style.width = "200px";
            finished.play();
            document.querySelector(".line").style.width= "20vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,  ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let sub_boxes=element.querySelector(".sub_box");
    element.addEventListener('click',()=>{
        if(sub_boxes.textContent===''){
            sub_boxes.textContent=turn;
            move_sound.play();
            turn=changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click',()=> {
    let sub_box = document.querySelectorAll('.sub_box');
    Array.from(sub_box).forEach(element=>{
        element.textContent ="";
    });
    turn="X";
    gameover=false;
        document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
        document.querySelector('.img_box').getElementsByTagName('img')[0].style.width = "0";
        document.querySelector(".line").style.width= "0";

})