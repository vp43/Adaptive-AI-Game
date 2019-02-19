var map = {65: false, 68: false, 87: false, 83:false};
var key = []

var updatekey = function(keyCode)   {



        if (map[65] && map[87]) {
                key[0] = 5;
            //console.log("left up");
        } else if (map[68] && map[87]) {
                key[0] = 6;
            //console.log("right up");

        } else if (map[68] && map[83]) {
                key[0] = 7;
            //console.log("right down");

        } else if (map[65] && map[83]) {
                key[0] = 8;
          //console.log("left down");

        } else if( map[87]) {
                key[0] = 3;
          //console.log("up");

        } else if( map[68]) {
                key[0] = 2;
          //console.log("right");

        } else if( map[83]) {
                key[0] = 4;
          //console.log("down");

        } else if( map[65]) {
                key[0] = 1;
          //console.log("left");


    }
}
var down = function(e) {

  if(e.keyCode in map) {
    map[e.keyCode] = true;
    updatekey(e.keyCode);
  }

}

var up = function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
        updatekey(e.keyCode);

    }
    var noAnim = true;
    for (i in map) {

        if(map[i] == true) {
          noAnim = false;
          break;
        }
    }

    if(noAnim) { key[0] = 0;}


}



$(document).keydown(down).keyup(up);
