const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//викликаєм картинку фону
const ground = new Image();
ground.src = "img/ground.png";

//викликаєм картинку їжі
const foodImg = new Image();
foodImg.src = "img/cookie.png";

//ячейка
let box = 32;

let score = 0;

//поява їжі (поле 15*17 квадратів)
let food = {
  x: Math.floor((Math.random() * 17 + 1)) * box,
  y: Math.floor((Math.random() * 15 + 3)) * box,
};

//масив і координати змійки
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;
//клавіші руху змійки
function direction(event) {
  if(event.keyCode == 37 && dir != "right")
    dir = "left";
  else if(event.keyCode == 38 && dir != "down")
    dir = "up";
  else if(event.keyCode == 39 && dir != "left")
    dir = "right";
  else if(event.keyCode == 40 && dir != "up")
    dir = "down";
}

function eatTail(head, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(head.x == arr[i].x && head.y == arr[i].y)
      clearInterval(game, alert("Your score: " + score), window.location.reload());

  }

}

function drawGame() {
  //фон
  ctx.drawImage(ground, 0, 0);

  //їжа
  ctx.drawImage(foodImg, food.x, food.y);

  for(let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "#00CED1" : "#00FFFF";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, box * 1, box * 1.7);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor((Math.random() * 17 + 1)) * box,
      y: Math.floor((Math.random() * 15 + 3)) * box,
    };

  } else {
    snake.pop();

  }
  if (score === 20) {
    clearInterval(game, alert("You did it!"), document.location.href="https://danylogera.github.io/game-5/");
  }

//межі поля
  if(snakeX < box || snakeX > box * 17
    || snakeY < 3 * box || snakeY > box * 17)

    clearInterval(game, alert("Your score: " + score), window.location.reload());




  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  };

  eatTail(newHead, snake);

  snake.unshift(newHead);
}

let game = setInterval(drawGame, 100);


//timer
    var sec1 = 0;
    function timer1() {
       sec1++;
       var timer = document.querySelector(".timer");
       var m = (Math.trunc(sec1/60)<10? "0":"") + Math.trunc(sec1/60);
       var s = (sec1%60<10? "0":"") + sec1%60;
       timer.value = m + " : " + s;
  }
  setInterval(timer1, 1000);
