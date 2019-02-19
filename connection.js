
var givePos;

var startConnection = function (scene) {

  var hero1 = scene.getMeshByName("Character.001");
  var hero2 = scene.getMeshByName("shashi2");

  givePos = function () {
    var data = {
      'gameName' : gameName,
      'name' : name,
      'state' : {
        'position' : hero1.position,
        'rotation' : hero1.rotation,
        'anim' : anim,
        'towerHealth' : health
      }
    };



    ws.send(JSON.stringify(data));
  }

}
var updateCharacter = function (scene) {
  //console.log("updating");
  var hero = scene.getMeshByName("shashi2");
  hero.position.x = state2['position']['x'];
  hero.position.y = state2['position']['y'];
  hero.position.z = state2['position']['z'];
  hero.rotation.x = state2['rotation']['x'];
  hero.rotation.y = state2['rotation']['y'];
  hero.rotation.z = state2['rotation']['z'];

  if(state2['anim'] == 'stand') { animationBox[1].pause();}
  else if(state2['anim'] == 'run') { animationBox[1].restart();}

  if(state2['towerHealth'] < health){console.log("Health updating"); health = state2['towerHealth'];  }
}


function sendKillInfo(killList) {
  var data = {
    'gameName' : gameName,
    'name': 'killInfo',
    'indices' : killList
  };

  ws.send(JSON.stringify(data));
}



function updateKills(killList) {
  for(i in killList) {
    if(dudes[killList[i]] != null ) {
      console.log("killed "+killList[i] );
      dudes[killList[i]][0].dispose();
      dudes[killList[i]] = null;
    }
  }
}





var updateCharacher = function () {

  var hero = scene.getMeshByName("shashi2");

  if(key[1] == 1) {

    animationBox[0].restart();
    hero.position.z += increment;
    camera.position.z += increment;
    hero.rotation.y = 3;



    //key[1] = 0;
  } else if (key[1] == 2 ) {
    animationBox[0].restart();
    hero.position.z -= increment;
    camera.position.z -= increment;
    hero.rotation.y = 0;
    //key[1] = 0;
                  //    console.log("2");

  } else if (key[1] == 3) {
    animationBox[0].restart();
    hero.position.x += increment;
    camera.position.x += increment;
    hero.rotation.y = -1.5;

    //key[1] = 0;

  //  console.log("3");
  } else if (key[1] == 4) {
    animationBox[0].restart();
    hero.position.x -= increment;
    camera.position.x -= increment;
    hero.rotation.y = 1.5;
      //key[1] = 0;

//    console.log("4");
  } else if(key[1] == 5) {

    animationBox[0].restart();
    hero.position.z += increment;
    camera.position.z += increment;
    hero.position.x += increment;
    camera.position.x += increment;
    hero.rotation.y = -2.25;



    //key[1] = 0;
  } else if (key[1] == 6 ) {
    animationBox[0].restart();
    hero.position.z -= increment;
    camera.position.z -= increment;
    hero.position.x += increment;
    camera.position.x += increment;
    hero.rotation.y = -1;
    //key[1] = 0;
//                      console.log("2");

} else if (key[1] == 7) {
    animationBox[0].restart();
    hero.position.x -= increment;
    camera.position.x -= increment;
    hero.position.z -= increment;
    camera.position.z -= increment;
    hero.rotation.y = 1;

    //key[1] = 0;

  //  console.log("3");
} else if (key[1] == 8) {
    animationBox[0].restart();
    hero.position.x -= increment;
    camera.position.x -= increment;
    hero.position.z += increment;
    camera.position.z += increment;
    hero.rotation.y = 2.25;
      //key[1] = 0;

//      console.log("4");
}       else if (key[1] == 0){



  }



}
