var health = 15;
var anim = 'stand';
var gameOver = false;

function inside(givenPos, xLow, xHigh, zLow, zHigh) {
  if( (givenPos.x >= xLow && givenPos.x <= xHigh) && (givenPos.z >= zLow && givenPos.z <= zHigh) ) {
    return true;
  }
  return false;
}

function collides(sPos, dPos) {
  xLow = dPos.x - 3;
  xHigh = dPos.x + 3;
  zLow = dPos.z - 3;
  zHigh = dPos.z + 3;

  return inside(sPos, xLow, xHigh, zLow, zHigh);
}

function healthReduce() {
  health = health - 1;
  $("#healthBar").html(health);

  if(health == 0) { gameOver = true;}
}

function doWhenGameOver() {
  $("#renderCanvas").hide();

  var finalMsg = "Game Over!";

  if(result == true) { finalMsg += "Congrats you have won !";}
  else { finalMsg += "Sorry you have lost";}

  $("#gameOver").html(finalMsg)
  $("#gameOver").show();
}
