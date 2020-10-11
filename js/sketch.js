let mainMoon = {
    xpos: 200,
    ypos: 20,
    speed: 1
}

let Mountain = {
    X: 300,
    Y: 430
}

let Stars = {
    strike: 0,
    X: [],
    Y: [],
    col: 10,
    diameter: 5
}


let duncan = {
    X: 300,
    Y: 400,
    speedX: 2
}

let alien = {
    X: 80,
    Y: 340,
    speedX: 2,
    diameter: 123
}

let heart = {
    X: 500,
    Y: 350,
    speedX: 2
}

let Building = {
    xpos: 300,
    ypos: 175,
    col: 1,
    W: 100,
    H: 200
}

function setup(){
    createCanvas(550,450);
    noStroke();
    smooth();
}

function draw(){
    background(0, 0, 100);
   star();
    Building();
    theMoon();
    mountains();
    
    Duncan();
    Alien();
    Heart();
}

function theMoon(){
    fill(255);
    ellipse(mainMoon.xpos, mainMoon.ypos, 30, 30);
    fill(0, 0, 100);
    ellipse(mainMoon.xpos + 5, mainMoon.ypos, 25, 25);
    mainMoon.xpos += mainMoon.speed;
    if(mainMoon.xpos < 0 || mainMoon.xpos > width){
        mainMoon.speed *= -1;
    }
}

function mountains(){
    fill(0, 90, 0);
    ellipse(Mountain.X - 300, Mountain.Y + 10, 300, 200);
    fill(0, 100, 0);
    ellipse(Mountain.X, Mountain.Y, 300, 200);
    fill(0, 150, 0);
    ellipse(Mountain.X - 100, Mountain.Y + 50, 300, 200);
    fill(0, 90, 0);
    ellipse(Mountain.X + 200, Mountain.Y + 50, 300, 200);
}

function star(){
    if(mouseIsPressed && mouseButton == LEFT){
        Stars.X.push(mouseX);
        Stars.Y.push(mouseY);

        print("pushed");
        print(Stars.X.length);
        print(Stars.Y.length);
        print(Stars.diameter);

    }
    for(let i =0; i < Stars.X.length && i < Stars.Y.length; i++){
        fill(random(150,255));
        ellipse(Stars.X[i], Stars.Y[i], Stars.diameter, Stars.diameter);
    }
}

function Duncan(){
    for(let i = 0; i < 80; i += 20){
        fill(2 * i, 2 * i, 2 * i);
        ellipse(duncan.X, duncan.Y - i, 60 - i, 60 - i);
    }
    fill(255);
    ellipse(duncan.X - 5, duncan.Y - 45, 5, 5);
    ellipse(duncan.X + 5, duncan.Y - 45, 5, 5);
    fill(100, 10, 20);
    ellipse(duncan.X - 0, duncan.Y - 35, 10, 10);
}

function Alien(){
    //will have to add the body oin parts if this works
    fill(171, 48, 171);
    ellipse(alien.X + 10, alien.y + 10, alien.diameter + 0, alien.diameter - 47);
    for(let i = 0; i < 70; i +=5){
        fill(32, 35, 196, 100);
        ellipse(alien.X + 76, alien.Y + -2, alien.diameter + -90 - i, alien.diameter - 100 - i);
    }
}

function Heart(){
    fill(15, 2, 200);
    ellipse(heart.X - 100, heart.Y - 0, 80, 100);
    ellipse(heart.X - 50, heart.Y - 0, 80, 100);
  triangle(heart.X - 143, heart.Y + 29, heart.X - 18, heart.Y + 29, heart.X - 82, heart.Y + 86);
  // eye whites
  fill(224, 221, 240, 255);
  ellipse(heart.X - 116, heart.Y - 21, 45, 45);
  ellipse(heart.X - 51, heart.Y - 21, 45, 45);
  // eye puials
  fill(15, 2, 89);
  ellipse(heart.X - 108, heart.Y - 28, 20, 20);
  ellipse(heart.X - 44, heart.Y - 28, 20, 20);
}


function building(){
    Building.col = mainMoon.xpos - 250;
    fill(Building.col, 100, mouseY);
    rect(Building.xpos, Building.ypos, Building.W, Building.H);
    fill(Building.col);
for(let y = 0; y < 135; y += 35){
    fill(Building.col + y);
    rect(Building.xpos + 10, Building.ypos + y + 10, Building.W - 75, Building.H - 170);
    rect(Building.xpos + 60, Building.ypos + y + 10, Building.W - 75, Building.H - 170);
    
}

}