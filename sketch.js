var player1;
var database;
var pos;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    player1 = createSprite(250,250,10,10);
    player1.shapeColor = "red";

    var player1ref = database.ref('player1/position');
    player1ref.on("value",  readPosition, showErrors);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('player1position').set({
        x:pos.x + x,
        y:pos.y + y
    })
}
function readPosition(data){
   pos = data.val();
   player1.x = pos.x;
   player1.y = pos.y;
}

function showErrors(){
    console.log("There are errors")
}
