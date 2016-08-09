"use strict";

var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 480;

var ctx = canvas.getContext("2d");

//field background
var field = {};
var fieldRows = 3;
var fieldColumns = 3;

//needed sizes
//cell is quadrat. we need only 1 value
var cellXY = 128;
var cellsOffsetLeft = 20;
var cellsOffsetTop = 20;

//some utility functions
//clear canvas
var clear = function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//event listeners
var menuClickListener = function menuClickListener(e) {
  var x = 0;
  var y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);

  //if button "play" is clicked render new game settings
  if (x > 75 && x < 275 && y > 75 && y < 150) {
    document.removeEventListener("click", menuClickListener);
    pointChooser();
  }
};
var settingsClickListener = function settingsClickListener(e) {
  var x = 0;
  var y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log("Clicked on: " + x + ", " + y);

  //if escape arrow
  if (x > 15 && x < 115 && y > 24 && y < 75) {
    initMainMenu();
  }
};
var gameFieldListener = function gameFieldListener(e) {
  var x = 0;
  var y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);
};
var pointChooseClickListener = function pointChooseClickListener(e) {
  var x = 0;
  var y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);
  if (x > 0 && x < canvas.width / 2 - 15) {
    document.removeEventListener("click", pointChooseClickListener);
    initGameFileld();
  } else {
    document.removeEventListener("click", pointChooseClickListener);
    initGameFileld(3, 3, "o");
  }
};

//game functions
var initGameFileld = function initGameFileld() {
  var rows = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
  var columns = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
  var playerFigure = arguments.length <= 2 || arguments[2] === undefined ? "x" : arguments[2];

  clear();
  document.removeEventListener("click", gameFieldListener, false);

  //init some graphics
  var cellBackground = new Image();
  cellBackground.src = "images/drawing.svg";
  var drawField = function drawField() {
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        var fieldX = i * cellXY + cellsOffsetLeft;
        var fieldY = j * cellXY + cellsOffsetTop;
        ctx.drawImage(cellBackground, fieldX, fieldY, cellXY, cellXY);
      }
    }
  };

  cellBackground.onload = function () {
    drawField();
  };
};

var pointChooser = function pointChooser() {
  clear();
  document.addEventListener("click", pointChooseClickListener, false);

  //draw separator line
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineWidth = 30;
  ctx.strokeStyle = "0059dd";
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  // draw a `x` chooser
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width / 2 - 15, canvas.height);
  ctx.fillStyle = "#6176BB";
  ctx.fill();
  ctx.closePath();

  var xImage = new Image();
  xImage.src = "images/x.svg";
  xImage.onload = function () {
    ctx.drawImage(xImage, 53, 107, 150, 150);
  };

  //draw a `o` chooser
  ctx.beginPath();
  ctx.rect(canvas.width / 2 + 15, 0, canvas.width / 2 - 15, canvas.height);
  ctx.fillStyle = "#242424";
  ctx.fill();
  ctx.closePath();

  var oImage = new Image();
  oImage.src = "images/0.svg";
  oImage.onload = function () {
    ctx.drawImage(oImage, 380, 110, 150, 135);
  };
};
var initMainMenu = function initMainMenu() {
  console.log('MainMenu');
  document.addEventListener("click", menuClickListener, false);
  clear();
  ctx.font = "24px source code pro bold";
  ctx.fillStyle = "#0095dd";
  ctx.fillText("TIC TAC TOE \n", 120, 40);

  //draw play button
  ctx.beginPath();
  ctx.strokeStyle = "#0095dd";
  ctx.rect(75, 75, 200, 75);
  ctx.stroke();
  ctx.closePath();

  //draw play text
  ctx.font = "32px helvetica";
  ctx.fillStyle = "#000";
  ctx.fillText("Play", 150, 120);
};

//main game
var letsPlay = function letsPlay() {
  initMainMenu();
};

letsPlay();