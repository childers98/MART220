var width = 750;
var length = 500;
var cutegirlObjects = [];
var result, runresult, runresultleft, jumpresult;
var i = 0;
var myInterval;
var index = 0;

//blob elements
var j = [];
var k = [];
var x = [];
var y = [];
var b = [];
var z = [];
var pinkblob;
var darkpinkblob;
var purpleblob;
var blueblob;
var blueblobSpeed = 50;
var p;
var q;

//background sound
var audio = new Audio('assets/cheerful-background-music.mp3');

function preload() {
    result = loadStrings('assets/characteridle.txt');
    runresult = loadStrings('assets/characterrun.txt');
    runresultleft = loadStrings('assets/characterrunleft.txt');
    jumpresult = loadStrings('assets/characterjump.txt');
}

function setup() {
    createCanvas(750, 500);

    //background sound (https://stackoverflow.com/questions/9419263/how-to-play-audio  & https://stackoverflow.com/questions/3273552/html5-audio-looping)
    audio.loop = true;
    audio.volume = 0.2;

    //health bar (https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar/20277165)
    health = document.getElementById("health");

    //random
    x = random(300, 1900);
    y = random(250, 1600);
    j = random(300, 1900);
    k = random(250, 1600);
    b = random(300, 1900);
    z = random(250, 1600);
    p = random(300, 1900);
    q = random(250, 1600);


    //sprites
    cutegirlObjects = createSprite(300, 250);
    cutegirlObjects.addAnimation('idle', 'assets/' + result[0], 'assets/' + result[result.length - 1]);
    cutegirlObjects.addAnimation('run', 'assets/' + runresult[0], 'assets/' + runresult[runresult.length - 1]);
    cutegirlObjects.addAnimation('runleft', 'assets/' + runresultleft[0], 'assets/' + runresultleft[runresultleft.length - 1]);
    cutegirlObjects.addAnimation('jumpresult', 'assets/' + jumpresult[0], 'assets/' + jumpresult[jumpresult.length - 1]);

    //random blob placement
    pinkblob = createSprite(x, y);
    pinkblob.addImage(loadImage('assets/pinkblob.png'));

    darkpinkblob = createSprite(j, k);
    darkpinkblob.addImage(loadImage('assets/darkpinkblob.png'));

    purpleblob = createSprite(b, z);
    purpleblob.addImage(loadImage('assets/purpleblob.png'));

    blueblob = createSprite(p, q);
    blueblob.addImage(loadImage('assets/blueblob.png'));
    blueblobSpeed = (Math.floor(Math.random() * 10) + 1);

    //health bar
    health.value = 100
}

function draw() {
    background(90);
    //borders
    fill(0);
    rect(0, 0, width, 10);
    rect(0, 0, 10, length);
    rect(0, length - 10, width, 10);
    rect(width - 10, 0, 10, length - 125);
    //Exit elements
    stroke(0);
    fill(0);
    text("EXIT", width - 35, length - 25);

    //check to see if sprite left exit - cutegirlObjects or sprite?
    if (cutegirlObjects > 750 && cutegirlObjects > width - 150) {
        fill(0);
        stroke(10);
        text("You Won!", width / 2 - 50, length / 2 - 50);
    }

    //bypass google block and play audio
    if (keyIsPressed && audio.paused) {
        audio.play();
    }

    //move right
    if (keyDown('d')) {
        cutegirlObjects.changeAnimation('run');
        cutegirlObjects.velocity.x = 10;
    }

    //move left
    else if (keyDown('a')) {
        cutegirlObjects.changeAnimation('runleft');
        cutegirlObjects.velocity.x = -10;
    }

    //attack(jump) to make obstacles disappear
    else if (keyDown('x')) {
        cutegirlObjects.changeAnimation('jumpresult');
        //make the object disappear
    }

    //move up
    else if (keyDown('w')) {
        cutegirlObjects.velocity.y = -10;
    }

    //move down
    else if (keyDown('s')) {
        cutegirlObjects.velocity.y = 10;
    }
    //nothing pressed
    else {
        cutegirlObjects.changeAnimation('idle');
        cutegirlObjects.velocity.x = 0;
        cutegirlObjects.velocity.y = 0;
    }

    //collsion
    if (cutegirlObjects.collide(pinkblob) || cutegirlObjects.collide(darkpinkblob) || cutegirlObjects.collide(purpleblob) || cutegirlObjects.collide(blueblob)) {
        cutegirlObjects.changeAnimation('idle');
        cutegirlObjects.velocity.x += 0;
        cutegirlObjects.velocity.y += 0;
        health.value -= .001; //minus on the health bar
        console.log(health.value);
    }

    //blueblob movement??, should probably do this to all sprites
        p += blueblobSpeed;
        // check to see if the shape has gone out of bounds
        if (blueblob > width) {
            blueblob = 0;
        }
        if (blueblob < 0) {
            blueblob = width;
        }
        if (blueblob > length) {
            blueblob = 0;
        }
        if (blueblob < 0) {
            blueblob = length;
        }


    cutegirlObjects.debug = mouseIsPressed;
    pinkblob.debug = mouseIsPressed;
    darkpinkblob.debug = mouseIsPressed;
    purpleblob.debug = mouseIsPressed;

    //make sprite smaller and display
    scale(.25, .25);
    drawSprites();

    //maybe add wall collision for cutegirl
}


