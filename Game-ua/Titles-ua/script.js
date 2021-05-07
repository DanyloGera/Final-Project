var position = 0;

function scroller() {
  if (position != 2700)
     {position++;
      scroll(0,position);
      clearTimeout(timer);
      var timer = setTimeout("scroller()",5); timer;
     }
  else
     document.body.style.overflow = "visible";

}

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
function disabled1() {
var btn = document.getElementById('btn');
btn.setAttribute("disabled", "disabled");
}

// // setup game when the web page loads
// window.onload = function () {
//   game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
//   // before the game begins
//     function preload() {
//       game.load.spritesheet('player', 'chalkers.png', 48, 62);
//     }
//     function create() {
//       player = game.add.sprite(60, 480, 'player');
//         player.animations.add('walk');
//         player.anchor.setTo(0.5, 1);
//     }
//     function update() {
// player.animations.play('walk', true)
//     }
//     function render() {
//
// }
//   }
