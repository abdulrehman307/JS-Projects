const board = document.querySelector('.board');

const startGameModal = document.querySelector('.start-game-modal');
const startbutton = document.querySelector('.startbtn');
const modal = document.querySelector('.modal');
const gameOverModal = document.querySelector('.game-over-modal');
const restartbtn = document.querySelector('.restartbtn');

const scoreElement = document.querySelector('#score');
const highscoreElement = document.querySelector('#highscore');
const timeElement = document.querySelector('#time');

 const blockheight = 50;
 const blockwidht= 50;
const boardwidth = board.clientWidth;
const boardheight = board.clientHeight;
 const cols = Math.floor(boardwidth / blockwidht);
 const rows =Math.floor(boardheight / blockheight);
let score = 0;
let highscore = localStorage.getItem("highscore") || 0;

let time = "00-00";
highscoreElement.innerText = highscore;
 
 const blocks =[];
 let snake = [{
    x:1,y:3
   }];
   let direction = "down";
   let intervalid = null;
   let timerintervalid = null;
   let food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)};
for (let row = 0; row < rows; row++)
{
    for (let col = 0; col < cols; col++)
    {
        const block = document.createElement('div')
        block.classList.add('block');
        board.appendChild(block);
        blocks[ `${row}-${col}`] = block;
    }
}
function render(){
     let head= null;
     blocks[`${food.x}-${food.y}`].classList.add('food');
   if(direction === "left"){
      head = {x: snake[0].x, y: snake[0].y - 1};
   }
   else if(direction === "right")
   {
      head = {x: snake[0].x, y:snake[0].y+1}
   }
   else if(direction === "up")
   {
      head = {x: snake[0].x-1, y:snake[0].y}
   }
   else if(direction === "down")
   {
      head = {x:snake[0].x+1,y:snake[0].y}
   }
   if(head.x<0 || head.x >= rows || head.y <0 || head.y >= cols){
      clearInterval(intervalid);
      modal.style.display = "flex";
      startGameModal.style.display = "none";
      gameOverModal.style.display = "flex";
      return;
   }
   if(head.x === food.x && head.y === food.y){
       blocks[`${food.x}-${food.y}`].classList.remove('food');
       food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)};
         blocks[`${food.x}-${food.y}`].classList.add('food');
         snake.unshift(head);
         score+= 10;
         scoreElement.innerText = score;
         if(score > highscore){
            highscore = score;
            localStorage.setItem("highscore", highscore.toString());

         }
   }

   snake.forEach(segment => {
      blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
   });
   snake.unshift(head);
   snake.pop();
   snake.forEach(segment => {
      blocks[`${segment.x}-${segment.y}`].classList.add('fill');
   });
}
restartbtn.addEventListener("click",restartgame)

 function restartgame(){
   blocks[`${food.x}-${food.y}`].classList.remove("food");
   snake.forEach(segment=>{
      blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
   })
   direction= "down";
   score = 0;
   time = "00-00";
   scoreElement.innerText = score;
   timeElement.innerText = time;
   highscoreElement.innerText = highscore;
      gameOverModal.style.display = "none";
      snake = [ {x:1,y:3} ];
      food = {x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)};
      intervalid = setInterval(() => {
         render();
         
      }, 300);
      
   }


startbutton.addEventListener("click", ()=>{
   modal.style.display = "none";
   intervalid = setInterval(() => {
   render();
}, 300);
   timerintervalid = setInterval(()=>{
      let [min,sec] = time.split("-").map(Number);
      if(sec == 59){
         min+=1;
         sec=0;
      }
      else{
         sec = sec+1;
      }
      time = `${min}-${sec}`;
      timeElement.innerText = time;
   },1000);

});
addEventListener("keydown", (event)=>{
      if(event.key == "ArrowUp"){
         direction = "up";
      }
      else if(event.key == "ArrowDown"){
         direction = "down";
      }

      else if(event.key == "ArrowLeft"){
         direction = "left";
      }
      else if(event.key == "ArrowRight"){
         direction = "right";
      }
});