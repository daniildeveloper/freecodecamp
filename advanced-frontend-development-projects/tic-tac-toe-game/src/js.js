var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 480;

var ctx = canvas.getContext("2d");

//field background
var field = [[]];

let initGameFileld = (board = [3][3], playerFigure = 1) => {

};

let initMainMenu = () => {
  console.log('MainMenu');
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "24px source code pro bold";
  ctx.fillStyle = "#0095dd";
  ctx.fillText("TIC TAC TOE ", 120, 40);
};

//main game
let letsPlay = () => {
  initMainMenu();
};

letsPlay();
