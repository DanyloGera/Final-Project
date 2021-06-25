const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

//викликаєм картинку фону
const ground = new Image();
ground.src = "img/ground.png";

//викликаєм картинку їжі
const foodImg = new Image();
foodImg.src = "img/cookie.png";
//голова змійки
const headImg = new Image();
headImg.src = "img/head.png";
//тулуб змійки
// буква S
const sImg = new Image();
sImg.src = "img/s.png";
// буква T
const tImg = new Image();
tImg.src = "img/t.png";
// буква A
const aImg = new Image();
aImg.src = "img/a.png";
// буква R
const rImg = new Image();
rImg.src = "img/r.png";
// буква E
const eImg = new Image();
eImg.src = "img/e.png";
// буква N
const nImg = new Image();
nImg.src = "img/n.png";
// буква K
const kImg = new Image();
kImg.src = "img/k.png";
// буква I
const iImg = new Image();
iImg.src = "img/i.png";

const bodyImg = new Image();
bodyImg.src = "img/body.png";
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
      clearInterval(game, alert("Ваш рахунок: " + score), window.location.reload());

  }

}

function drawGame() {
  //фон
  ctx.drawImage(ground, 0, 0);

  //їжа
  ctx.drawImage(foodImg, food.x, food.y);

  for(let i = 0; i < snake.length; i++) {
if (i == 0) {
      var pattern = ctx.createPattern(headImg, 'repeat');
      ctx.fillStyle = pattern;
    } else
if (i == 1) {
      var pattern1 = ctx.createPattern(sImg, 'repeat');
      ctx.fillStyle = pattern1;
} else
 if (i == 2) {
     var pattern2 = ctx.createPattern(tImg, 'repeat');
     ctx.fillStyle = pattern2;
} else
if (i == 3) {
    var pattern3 = ctx.createPattern(aImg, 'repeat');
    ctx.fillStyle = pattern3;
} else
if (i == 4) {
    var pattern4 = ctx.createPattern(rImg, 'repeat');
    ctx.fillStyle = pattern4;
} else
if (i == 5) {
    var pattern5 = ctx.createPattern(eImg, 'repeat');
    ctx.fillStyle = pattern5;
} else
if (i == 6) {
    var pattern6 = ctx.createPattern(nImg, 'repeat');
    ctx.fillStyle = pattern6;
} else
if (i == 7) {
    var pattern7 = ctx.createPattern(kImg, 'repeat');
    ctx.fillStyle = pattern7;
} else
if (i == 8) {
    var pattern8 = ctx.createPattern(iImg, 'repeat');
    ctx.fillStyle = pattern8;
} else {
      var pattern9 = ctx.createPattern(bodyImg, 'repeat');
      ctx.fillStyle = pattern9;
    }

    ctx.fillRect(snake[i].x, snake[i].y, box, box);

  }

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Бонус: " + score, box * 1, box * 1.7);

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
  if (score === 10) {
    clearInterval(game,alert("Ваш рахунок: " + score),pasword());
function pasword() {
  var btn = document.getElementById('form');
  btn.removeAttribute("style");
  btn.style.visibility = "visible";
}

  }

//межі поля
  if(snakeX < box || snakeX > box * 17
    || snakeY < 3 * box || snakeY > box * 17)

    clearInterval(game, alert("Ваш рахунок: " + score), window.location.reload());




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

let game = setInterval(drawGame, 195);


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
//pasword
  var truePasword1 = "STARENKI";
  var truePasword2 = "Starenki";
  var truePasword3 = "starenki";
  function checkPassword()
  {
      if(document.getElementById("pasword-field").value == truePasword1)
      {
        alert('Перкрасно! Ваш рахунок: + ' + 20);
        window.location.href="../game-3ua/index.html";
      }
      else
      if(document.getElementById("pasword-field").value == truePasword2)
      {
        alert('Перкрасно! Ваш рахунок: + ' + 20);
        window.location.href="../game-3ua/index.html";
      }else
      if(document.getElementById("pasword-field").value == truePasword3)
      {
        alert('Перкрасно! Ваш рахунок: + ' + 20);
        window.location.href="../game-3ua/index.html";
      }else
      {
        alert("Невірний пароль! Щоб перепройти рівень закрийте оголошення 'перевірку паролю' '×'");
        return false;

      }
  }
