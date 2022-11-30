var WidthRect = 70;
var heightRect = 70;
var particles = [];


function setup() {
    cursor(CROSS,32,32)
    var canvas = createCanvas(1200,1000);
    canvas.parent("p5container");
    background(0)
}

let colorPicker;
function setup(){
    myColor =  createColorPicker(color(255));
  createCanvas(80, 80);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(50, height);
  cursor(CROSS,32,32)
    var canvas = createCanvas(innerWidth,innerHeight-100);
    canvas.parent("p5container");
    background(0)
}

function draw() {
    function draw() {
        background(colorPicker.color());
      }
    if(mouseIsPressed === true){
        fill(myColor.color());
        noStroke();
    ellipseMode(CENTER)
    ellipse(mouseX, mouseY, 50);
    }
}

function mousePressed() {

    if(mouseButton == LEFT){
        fill(myColor.color());
    ellipseMode(CENTER)
    ellipse(mouseX, mouseY, WidthRect, heightRect);
    }
}

function keyPressed() {
    if(keyCode == ENTER){
    background(0);
    }

    if(key === 's'){
        saveCanvas('myCanvas', 'jpg');
    }
}


