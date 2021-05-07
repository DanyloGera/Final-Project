var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var scoreText;
var score = 0;
var lives = 3;
var livesText;
var lifeLostText;
var playing = false;
var startButton;

function preload() {
	// handleRemoteImagesOnJSFiddle();
    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // game.scale.pageAlignHorizontally = true;
    // game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#CEDCE2';
    game.load.image('paddle', 'img/paddle.png');
    game.load.image('brick', 'img/brick.png');
    game.load.spritesheet('ball', 'img/wobble.png', 30, 30);
    game.load.spritesheet('button', 'img/button.png', 160, 56);
}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
    ball = game.add.sprite(game.world.width*0.5, game.world.height-50, 'ball');
    ball.animations.add('wobble', [0,1,0,2,0,1,0,2,0], 24);
    ball.anchor.set(0.5);
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1);
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);

    paddle = game.add.sprite(game.world.width*0.5, game.world.height-10, 'paddle');
    paddle.anchor.set(0.5,1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;

    initBricks();

    textStyle = { font: '20pt', fill: '#2D79AF' };
    scoreText = game.add.text(5, 5, 'Бонус: 0', textStyle);
    livesText = game.add.text(game.world.width-5, 5, 'Спроби: '+lives, textStyle);
    livesText.anchor.set(1,0);
    lifeLostText = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Спроба втрачена,клікніть, щоб продовжити.', textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;

    startButton = game.add.button(game.world.width*0.5, game.world.height*0.5, 'button', startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
}
function update() {
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    paddle.x = game.input.x;
    if (paddle.x < 57)
    {
        paddle.x = 57;
    }
    else if (paddle.x > game.width - 57)
    {
        paddle.x = game.width - 57;
    }
}
function initBricks() {
    brickInfo = {
        width: 95,
        height: 40,
        count: {
            row: 7,
            col: 3
        },
        offset: {
            top: 70,
            left: 75
        },
        padding: 15
    }
    bricks = game.add.group();
    for(c=0; c<brickInfo.count.col; c++) {
        for(r=0; r<brickInfo.count.row; r++) {
            var brickX = (r*(brickInfo.width+brickInfo.padding))+brickInfo.offset.left;
            var brickY = (c*(brickInfo.height+brickInfo.padding))+brickInfo.offset.top;
            newBrick = game.add.sprite(brickX, brickY, 'brick');
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
}
function ballHitBrick(ball, brick) {
    var killTween = game.add.tween(brick.scale);
    killTween.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function(){
        brick.kill();
    }, this);
    killTween.start();
    score += 10;
    scoreText.setText('Бонус: '+score);
    if(score === brickInfo.count.row*brickInfo.count.col*10) {
        alert('Вітання! Ваш рахунок: + ' + score);
        window.location.href="https://danylogera.github.io/game-5ua/";
    }
}
function ballLeaveScreen() {
    lives--;
    if(lives) {
        livesText.setText('Спроби: '+lives);
        lifeLostText.visible = true;
        ball.reset(game.world.width*0.5, game.world.height-50);
        paddle.reset(game.world.width*0.5, game.world.height-10);
        game.input.onDown.addOnce(function(){
            lifeLostText.visible = false;
            ball.body.velocity.set(300, -300);
        }, this);
    }
    else {
        alert('Спробуйте ще!');
        location.reload();
    }
}
function ballHitPaddle(ball, paddle) {
    ball.animations.play('wobble');
    ball.body.velocity.x = -1*5*(paddle.x-ball.x);
}
function startGame() {
    startButton.destroy();
    ball.body.velocity.set(300, -300);
    playing = true;
}

// this function (needed only on JSFiddle) take care of loading the images from the remote server
// function handleRemoteImagesOnJSFiddle() {
// 	game.load.baseURL = 'https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/';
// 	game.load.crossOrigin = 'anonymous';
// }
