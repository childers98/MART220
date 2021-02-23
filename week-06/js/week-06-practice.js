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
    audio.play();

    //health bar (https://stackoverflow.com/questions/20277052/how-to-make-a-health-bar/20277165)
    health = document.getElementById("health");

    //random
    x = random(1750);
    y = random(1500);
    j = random(1750);
    k = random(1500);
    b = random(1750);
    z = random(1500);

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

    // setInterval(incrementIndex, 50);
}

function draw() 
    {
    background(90);
    //border
    fill(0);
    rect(0, 0, 750, 10);
    rect(0, 0, 10, 500);
    rect(0, 500 - 10, 750, 10);
    rect(750 - 10, 0, 10, 500 - 100);
    //Exit elements
    stroke(0);
    fill(0);
    text("EXIT", width - 35, length - 25);

    //check to see if sprite left exit - cutegirlObjects or sprite?
    if (cutegirlObjects > 750 && cutegirlObjects > width - 100)
    {
        fill(0);
        stroke(10);
        text("You Won!", width / 2 - 50, length / 2 - 50);
    }

    //health bar = wonky
    health.value = 100

    //move right
    if (keyDown('d'))
    {
        cutegirlObjects.changeAnimation('run');
        cutegirlObjects.velocity.x += 1;
    }

    //move left
    else if (keyDown('a'))
    {
        cutegirlObjects.changeAnimation('runleft');
        cutegirlObjects.velocity.x -= 1;
    }

    //attack(jump) to make obstacles disappear
    if (keyDown('x'))
    {
        cutegirlObjects.changeAnimation('jump');
        //make the object disappear
    }

    //move up
    else if (keyDown('w'))
    {
        cutegirlObjects.velocity.y -= 1;
    }

    //move down
    else if (keyDown('s'))
    {
        cutegirlObjects.velocity.y += 1;
    }

    else (keyDown(''))
    {
        cutegirlObjects.changeAnimation('idle');
        cutegirlObjects.velocity.x += 0;
        cutegirlObjects.velocity.y += 0;
    }

    //collsion, could also do the double line or OR thing
    if (cutegirlObjects.collide(pinkblob))
    {
        cutegirlObjects.changeAnimation('idle');
        health.value -= 1; //minus on the health bar
    }
    else if (cutegirlObjects.collide(darkpinkblob))
    {
        cutegirlObjects.changeAnimation('idle');
        health.value -= 1; //minus on the health bar
    }
    else (cutegirlObjects.collide(purpleblob))
    {
        cutegirlObjects.changeAnimation('idle');
        health.value -= 1; //minus on the health bar
    }

    cutegirlObjects.debug = mouseIsPressed;
    pinkblob.debug = mouseIsPressed;
    darkpinkblob.debug = mouseIsPressed;
    purpleblob.debug = mouseIsPressed;

    //make sprite smaller and display
    scale(.25, .25);
    drawSprites();

}


