
var timerDiv = $("#timer");
var time = 100;
var result = false;

setInterval(function() {

  time -= 1;
  timerDiv.html(time);

  if(time == 0) {
    gameOver = true;
    result = true;
  }

}, 1000);
