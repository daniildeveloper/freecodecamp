var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("tictactoe", function (){
  return gulp.src("advanced-frontend-development-projects/tic-tac-toe-game/src/js.js")
  .pipe(babel([]))
  .pipe(gulp.dest("advanced-frontend-development-projects/tic-tac-toe-game/dist"));
});