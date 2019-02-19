var ws;
var state;
var villainName = "Character.001";
var villainSpawnPos = [];
var spawnFlag = false;
var state2 = {
  'position':{
  'x' : -100,
  'y' : 0,
  'z' : 100
},
  'rotation' : {
    'x':0,
    'y':0,
    'z':0
  },
  'anim' : 'walk'
};
var connected = false;
var allLoaded = false;

window.addEventListener('DOMContentLoaded', function() {
  allLoaded = true;
});

function attemptConnection() {

      gameName = document.getElementById("gameName").value;
      name = document.getElementById("name").value;

     if ("WebSocket" in window)
     {
        console.log("WebSocket is supported by your Browser!");

        // Let us open a web socket
        ws = new WebSocket("ws://localhost:8080");



        ws.onopen = function()
        {
           // Web Socket is connected, send data using send()
           state = {
             'position':{
             'x' : 100,
             'y' : 0,
             'z' : 100
           },
             'rotation' : {
               'x':0,
               'y':0,
               'z':0
             },
             'anim' : 'walk',
             'towerHealth' : health
           };

           json = {
             'gameName' : gameName,
             'name' : name,
             'state' : state
           };
           ws.send(JSON.stringify(json));
           console.log("Connection open");
           connected = true;



        };

        ws.onmessage = function (evt)
        {
          var parsed = JSON.parse(evt.data);
          //console.log(JSON.parse(evt.data));


          if(parsed['name'] == 'villainSpawn') {

            villainSpawnPos = parsed['positions'];
            spawnFlag = true;

          } else if(parsed['name'] == 'killInfo') {
            updateKills(parsed['indices']);
          }
           else if (parsed['name'] != name) {
           state2 = parsed['state'];
         }
       };

        ws.onclose = function()
        {
           // websocket is closed.
           console.log("Connection is closed...");
        };
     }

     else
     {
        // The browser doesn't support WebSocket
        console.log("WebSocket NOT supported by your Browser!");
      }

      $("#startDiv").remove();

      if(allLoaded){start();}


}
