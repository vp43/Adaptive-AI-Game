  var dudes = [];
  var animationBox = [];

  function start() {

            var scene = 1;
            console.log("test1");

              console.log("test2");
              $("#timer").show();
                // get the canvas DOM element
                var canvas = document.getElementById('renderCanvas');

                // load the 3D engine
                var engine = new BABYLON.Engine(canvas, true);
              //  var hero = 1;
                // createScene function that creates and return the scene
                animationBox = [];
                var loadingComplete = 0
                var createScene = function(){

                    // create a basic BJS Scene object
                    var scene = new BABYLON.Scene(engine);
                    scene.enablePhysics(new BABYLON.Vector3(0,-110,0), new BABYLON.OimoJSPlugin());
                    scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
                    //scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
                    //scene.collisionsEnabled = true;

                    //Working Loader




                    function initMeshes() {



                          BABYLON.SceneLoader.ImportMesh("", "static/meshes/", "tower.babylon", scene, function (meshes) {

                            for(meshBoy in meshes) {

                              meshes[meshBoy].scaling = new BABYLON.Vector3(5,5,5);
                              meshes[meshBoy].position.y = 0;
                              meshes[meshBoy].position.x  = 0;
                              meshes[meshBoy].setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor, { mass: 0 });
                              meshes[meshBoy].checkCollisions = true;
                              console.log(meshes[meshBoy]);

                              }

                              loadingComplete += 1;

                          });

                          BABYLON.SceneLoader.ImportMesh("Cube.001", "static/meshes/lowpoly/", "nadan.babylon", scene, function (meshes, particleSms, skels) {

                            for(meshBoy in meshes) {

                              //meshes[meshBoy].scaling = new BABYLON.Vector3(40,10,10);
                              meshes[meshBoy].position.y = -140;
                              meshes[meshBoy].position.x = 0;
                              meshes[meshBoy].position.z = 100;
                              meshes[meshBoy].rotation.y = 0.5;
                              meshes[meshBoy].rotation.x = 1.5;

                              //meshes[meshBoy].setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor, { mass: 0 });
                              console.log(meshes[meshBoy].name);




                              }

                              //scene.beginAnimation(skels[0], 0, 20, true, 2);

                              loadingComplete += 1;

                          });


                          BABYLON.SceneLoader.ImportMesh("", "static/meshes/", "shashi.babylon", scene, function (meshes, particleSms, skels) {

                            for(meshBoy in meshes) {

                              meshes[meshBoy].scaling = new BABYLON.Vector3(1,1,1);
                              meshes[meshBoy].position.y = 0;
                              meshes[meshBoy].position.x = 100;
                              console.log(meshes[meshBoy].skeleton)
                              meshes[meshBoy].checkCollisions = true;

                            }
                            for(skel in skels) {


                              animationBox.push(scene.beginAnimation(skels[skel], 0, 32, true, 3));

                            }
                            loadingComplete += 1;


                            var newGuy = meshes[meshBoy].clone("shashi2");
                            newGuy.position.x = -100;
                            newGuy.skeleton = meshes[meshBoy].skeleton.clone();
                            animationBox.push(scene.beginAnimation(newGuy.skeleton, 0, 32, true, 3));
                            //animationBox.push(scene.beginAnimation(scene.getMeshByName("shashi2").skeleton, 0, 32, true, 3));
                            console.log(scene.getMeshByName("shashi2"));

                            var camera = new BABYLON.ArcRotateCamera('camera1', 20, 45, 50, meshes[0],  scene);
                            camera.attachControl(canvas, false);

                      });


                          var skybox = BABYLON.Mesh.CreateBox("skyBox", 800.0, scene);

                          var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
                          skyboxMaterial.backFaceCulling = false;
                          skyboxMaterial.disableLighting = true;
                          skybox.infiniteDistance = true;
                          skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
                          skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);

                          skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("static/textures/skybox", scene);
                          skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;



                          skybox.material = skyboxMaterial;





                          // create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
                          /*var sphere = BABYLON.Mesh.CreateSphere('sphere1', 10, 7, scene);
                          var sphereMat = new BABYLON.StandardMaterial("texture1", scene);
                          sphereMat.diffuseColor = new BABYLON.Color3(0.0, 1, 1 );
                          sphere.material = sphereMat;
                          sphere.checkCollisions = true;
                          //sphere.applyGravity = true;
                          //sphere.ellipsoid = new BABYLON.Vector3(0.5, 0.5, 0.5);



                          // move the sphere upward 1/2 of its height
                          sphere.position.y = 50;
                          sphere.position.x = 50;
                          */

                                var ground = BABYLON.Mesh.CreateGround('ground1', 500, 500, 2, scene);
                                //var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "static/textures/hieghtmaps/ground.jpg", 500, 500, 250, 0, 10, scene, false, function(){console.log("loaded");});
                                var groundMat = new BABYLON.StandardMaterial("texture2", scene);
                                groundMat.diffuseTexture = new BABYLON.Texture("static/textures/stone.jpg", scene);
                                groundMat.diffuseTexture.uOffset = 0.2;
                                groundMat.diffuseTexture.vOffset = 0.2;
                                groundMat.diffuseTexture.uScale = 10;
                                groundMat.diffuseTexture.vScale = 10;
                                ground.material = groundMat;
                                //ground.checkCollisions = true;
                                //ground.applyGravity = false;
                                ground.position.y = 0;




                                var outerGround = BABYLON.Mesh.CreateGround("ground2", 1000, 1000, 2, scene);
                                var ground2Mat = new BABYLON.StandardMaterial("texture3", scene);
                                ground2Mat.diffuseTexture = new BABYLON.Texture("static/textures/ground.jpg", scene);
                                ground2Mat.diffuseTexture.uOffset = 0.2;
                                ground2Mat.diffuseTexture.vOffset = 0.2;
                                ground2Mat.diffuseTexture.uScale = 10;
                                ground2Mat.diffuseTexture.vScale = 10;
                                outerGround.material = ground2Mat;
                                outerGround.position.y = -0.1;

                                loadingComplete += 1;
                    }



                    initMeshes();




                    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
                    var hero = scene.getMeshByName("Character.001");
                    //var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(61, 37,-30), scene);


                    //camera.setTarget(new BABYLON.Vector3(100, 0, 0));



                    // create a basic light, aiming 0,1,0 - meaning, to the sky
                    var light0 = new BABYLON.HemisphericLight('light2', new BABYLON.Vector3(0,1,0), scene);
                    light0.diffuse = new BABYLON.Color3(1, 1, 1);
                    light0.specular = new BABYLON.Color3(1, 1, 1);
                    light0.groundColor = new BABYLON.Color3(0, 0, 0);

                    // create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one



                    //sphere.setPhysicsState(BABYLON.PhysicsEngine.SphereImpostor, { mass: 2, friction: 0.5, restitution: 0.7 });
                    //ground.setPhysicsState(BABYLON.PhysicsEngine.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 });


                    // return the created scene
                    return scene;
                }

                // call the createScene function
                scene = createScene();
                camera = scene.getCameraByID("camera1");
                // run the render loop


                scene.executeWhenReady(function() {
                  var villainMaterial = new BABYLON.StandardMaterial("vBox", scene);
                  //villainMaterial.backFaceCulling = false;
                  //villainMaterial.disableLighting = true;
                  //villainMaterial.infiniteDistance = true;
                  villainMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0);
                  villainMaterial.specularColor = new BABYLON.Color3(1, 0, 0);
                  function villainSpawn() {

                  for (var i = 0; i < villainSpawnPos.length; i++) {


                      var c = [];
                      var villainMeshes = [scene.getMeshByName(villainName)];
                      for (var j = 0; j < villainMeshes.length; j++) {
                          c[j] = villainMeshes[j].clone("c" + i+""+j);
                          c[j].position = new BABYLON.Vector3(villainSpawnPos[i][0], 0, villainSpawnPos[i][1]);
                          c[j].skeleton = villainMeshes[j].skeleton.clone();
                          c[j].material = villainMaterial;
                          scene.beginAnimation(c[j].skeleton, 0, 32, 1.0, true);
                      }
                      dudes.push(c);
                  }

                }



                function updateVillains() {
                  var tower = scene.getMeshByName("Cube.001");
                  var increment = 1;

                  for( i in dudes) {

                    for (j in dudes[i]) {

                      if(dudes[i][j] != null) {
                        if(dudes[i][j].position.x > 0) { dudes[i][j].position.x -= increment} else { dudes[i][j].position.x += increment };
                        if(dudes[i][j].position.z > 0) { dudes[i][j].position.z -= increment} else { dudes[i][j].position.z += increment };
                        dudes[i][j].lookAt(new BABYLON.Vector3( 0, 0, 0) );

                        if(inside(dudes[i][j].position, -13, 13, -13, 13)) {
                          dudes[i][j].dispose();
                          dudes[i][j] = null;
                          healthReduce();
                          continue;

                      }
                      var hero = scene.getMeshByName("Character.001");
                      var killList = [];
                      if(collides(dudes[i][j].position, hero.position)) {
                        dudes[i][j].dispose();
                        dudes[i][j] = null;
                        killList.push(i);
                      }

                      sendKillInfo(killList);
                    }
                    }
                  }

                }



                  startConnection(scene);

                   engine.runRenderLoop(function(){
                    scene.render();
                    var hero = scene.getMeshByName("Character.001");
                    state = {
                      'position' : hero.position,
                      'rotation' : hero.rotation,
                      'anim' : 'walk'
                    };
                    var camera = scene.getCameraByID("camera1");
                    var increment = 1;
                    var prevx = hero.position.x;
                    var prevz = hero.position.z;

                    if(key[0] == 1) {

                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.z += increment;
                      camera.position.z += increment;
                      hero.rotation.y = 3;




                      //key[0] = 0;
                    } else if (key[0] == 2 ) {
                      animationBox[0].restart(); anim = 'run';
                      hero.position.z -= increment;
                      camera.position.z -= increment;
                      hero.rotation.y = 0;
                      //key[0] = 0;
                                    //    console.log("2");

                    } else if (key[0] == 3) {
                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.x += increment;
                      camera.position.x += increment;
                      hero.rotation.y = -1.5;

                      //key[0] = 0;

                    //  console.log("3");
                    } else if (key[0] == 4) {
                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.x -= increment;
                      camera.position.x -= increment;
                      hero.rotation.y = 1.5;
                        //key[0] = 0;

                  //    console.log("4");
                    } else if(key[0] == 5) {

                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.z += increment;
                      camera.position.z += increment;
                      hero.position.x += increment;
                      camera.position.x += increment;
                      hero.rotation.y = -2.25;



                      //key[0] = 0;
                    } else if (key[0] == 6 ) {
                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.z -= increment;
                      camera.position.z -= increment;
                      hero.position.x += increment;
                      camera.position.x += increment;
                      hero.rotation.y = -1;
                      //key[0] = 0;
                  //                      console.log("2");

                } else if (key[0] == 7) {
                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.x -= increment;
                      camera.position.x -= increment;
                      hero.position.z -= increment;
                      camera.position.z -= increment;
                      hero.rotation.y = 1;

                      //key[0] = 0;

                    //  console.log("3");
                  } else if (key[0] == 8) {
                      animationBox[0].restart(); anim = 'run' ;
                      hero.position.x -= increment;
                      camera.position.x -= increment;
                      hero.position.z += increment;
                      camera.position.z += increment;
                      hero.rotation.y = 2.25;
                        //key[0] = 0;

                //      console.log("4");
              }       else if (key[0] == 0){

                      anim = 'stand';
                      animationBox[0].pause();
                    }
                    givePos();
                    updateCharacter(scene);
                    if(spawnFlag) {
                      villainSpawn();
                      spawnFlag = false;
                    }

                    updateVillains();

                    if(inside(hero.position, -14, 14, -14, 14)) {
                      //console.log(hero.position);
                      //console.log(prevx, prevz);
                      hero.position.x = prevx;
                      hero.position.z = prevz;
                    }

                    if(gameOver) {
                      engine.stopRenderLoop();
                      doWhenGameOver();
                    }
                  })
                    //console.log(scene.getCameraByID("camera1").position);

                    /*
                    x = hero.position.x;
                    y = hero.getMeshByID("sphere1").position.y;
                    z = hero.getMeshByID("sphere1").position.z;


                    scene.getCameraByID("camera1").position.x = x;
                    scene.getCameraByID("camera1").position.y = y;
                    scene.getCameraByID("camera1").position.z = z - 50;*/


                });

                // the canvas/window resize event handler
                window.addEventListener('resize', function(){
                    engine.resize();
                });



                canvas.addEventListener("mousedown", function (evt) {
        var pickResult = scene.pick(evt.clientX, evt.clientY, function (mesh) {

            if (mesh.name.indexOf("sphere1") !== -1 || mesh.name.indexOf("Estructura") !== -1) {
            //console.log(mesh.name);
                return true;
            }
            return false;
        });
        if (pickResult.hit) {
            //console.log("yes");

            var dir = pickResult.pickedPoint.subtract(scene.activeCamera.position);
            dir.normalize();
            pickResult.pickedMesh.applyImpulse(dir.scale(100), pickResult.pickedPoint);
        }
        });





            /*handlekey[0]Down = function(event) {


              if (event.key[0]Code==65) {
                  //scene.getMeshByID("sphere1").position.x -= 1;
                  key[0] = 1;
              }else if (event.key[0]Code==68) {
                  //scene.getMeshByID("sphere1").position.x += 1;
                  key[0] = 2;
              }else if (event.key[0]Code==87) {
                  //scene.getMeshByID("sphere1").position.z += 1;
                  key[0] = 3;
              }else if (event.key[0]Code==83) {
                  //scene.getMeshByID("sphere1").position.z -= 1;
                  key[0] = 4;
              }
            }

            window.addEventListener("key[0]down", handlekey[0]Down, false);*/


 }
