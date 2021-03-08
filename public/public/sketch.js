 var socket;


function setup() {
  createCanvas(windowWidth, windowHeight);
        background(0,0,0,0);
    socket = io.connect('http://localhost:3000');  
        socket.on('mouse', newDrawing);
}

function newDrawing(data){

        fill(100);

        ellipse(data.x, data.y, 25,25);

}

function mouseDragged(){

    

    var data = {

        x: mouseX,

        y: mouseY

    }

    

    socket.emit('mouse', data);

    console.log('sending:' + mouseX + ',' + mouseY);

    ellipse(mouseX, mouseY, 25,25);
    noStroke();
    fill(0);
}

function draw() {
    noStroke();
    fill(0);
}