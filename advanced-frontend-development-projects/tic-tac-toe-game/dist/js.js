"use strict";

var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 480;

var ctx = canvas.getContext("2d");

//field background
var field = [[]];

var initGameFileld = function initGameFileld() {
  var board = arguments.length <= 0 || arguments[0] === undefined ? [3][3] : arguments[0];
  var playerFigure = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
};

var initMainMenu = function initMainMenu() {
  console.log('MainMenu');
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "24px source code pro bold";
  ctx.fillStyle = "#0095dd";
  ctx.fillText("TIC TAC TOE ", 120, 40);
};

//main game
var letsPlay = function letsPlay() {
  initMainMenu();
};

letsPlay();