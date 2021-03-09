//canvas and cutegirlobjects
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
var g = [];
var h = [];
var b = [];
var z = [];
var pinkblob;
var darkpinkblob;
var purpleblob;
var blueblob;
var blueblobSpeed = 50;
var t;
var q;
var p;

//particles
const particles = [];
//const particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var blobhealth = 10;
var x;
var y;

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
    g = random(300, 1900);
    h = random(250, 1600);
    j = random(300, 1900);
    k = random(250, 1600);
    b = random(300, 1900);
    z = random(250, 1600);
    t = random(300, 1900);
    q = random(250, 1600);


    //sprites
    cutegirlObjects = createSprite(300, 250);
    cutegirlObjects.addAnimation('idle', 'assets/' + result[0], 'assets/' + result[result.length - 1]);
    cutegirlObjects.addAnimation('run', 'assets/' + runresult[0], 'assets/' + runresult[runresult.length - 1]);
    cutegirlObjects.addAnimation('runleft', 'assets/' + runresultleft[0], 'assets/' + runresultleft[runresultleft.length - 1]);
    cutegirlObjects.addAnimation('jumpresult', 'assets/' + jumpresult[0], 'assets/' + jumpresult[jumpresult.length - 1]);

    //random blob placement
    pinkblob = createSprite(g, h);
    pinkblob.addImage(loadImage('assets/pinkblob.png'));

    darkpinkblob = createSprite(j, k);
    darkpinkblob.addImage(loadImage('assets/darkpinkblob.png'));

    purpleblob = createSprite(b, z);
    purpleblob.addImage(loadImage('assets/purpleblob.png'));

    blueblob = createSprite(t, q);
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
    rect(width - 10, 0, 10, length);

    //EXIT OPTION
    //rect(0, length - 10, width, 10);
    //rect(width - 10, 0, 10, length - 125);
    //Exit elements
    // stroke(0);
    // fill(0);
    // text("EXIT", width - 35, length - 25);
    //check to see if sprite left exit - cutegirlObjects or sprite?
    // if (cutegirlObjects > 750 && cutegirlObjects > width - 150) {
    //     fill(0);
    //     stroke(10);
    //     text("You Won!", width / 2 - 50, length / 2 - 50);
    // }


    //check to see if there are any blobs left and display message
    if (pinkblob && darkpinkblob && purpleblob && blueblob == null)
    {
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
        if(pinkblob != null)
        {
        //make the object disappear
            if(dist(cutegirlObjects.position.x, cutegirlObjects.position.y, pinkblob.position.x, pinkblob.position.y) < 800)
            {
                //particles not creating
                createParticles(pinkblob.position.x, pinkblob.position.y);
                //blob health
                blobhealth -= 1;
                if(blobhealth <= 0)
                {
                    //createParticles(pinkblob.position.x, pinkblob.position.y);
                    //console.log("destroy");
                    pinkblob.remove();
                    //when null is added error message is recieved about overlap
                    //without it the objects are just invisible but there
                    //pinkblob = null;
                }
            }
        if(purpleblob != null)
        {
        if(dist(cutegirlObjects.position.x, cutegirlObjects.position.y, purpleblob.position.x, purpleblob.position.y) < 500)
            {
                createParticles(purpleblob.position.x, purpleblob.position.y);
                //health
                blobhealth -= 1;
                if(blobhealth <= 0)
                {
                    console.log("destroy")
                    purpleblob.remove();
                    //purpleblob = null;
                }
            }
        }
        if(blueblob != null)
        {
        if(dist(cutegirlObjects.position.x, cutegirlObjects.position.y, blueblob.position.x, blueblob.position.y) < 400)
            {
                createParticles(blueblob.position.x, blueblob.position.y);
                //health
                blobhealth -= 1;
                if(blobhealth <= 0)
                {
                    blueblob.remove();
                    //blueblob = null;
                }
            }
        }
        if(darkpinkblob != null)
        {
            if(dist(cutegirlObjects.position.x, cutegirlObjects.position.y, darkpinkblob.position.x, darkpinkblob.position.y) < 600)
            {
                createParticles(darkpinkblob.position.x, darkpinkblob.position.y);
                //health
                blobhealth -= 1;
                if(blobhealth <= 0)
                {
                    console.log("destroy")
                    darkpinkblob.remove();
                    //darkpinkblob = null;
                }
            }
        }
        }
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


    function createParticles(x,y)
    {
        for (let i = 0; i < 5; i++)
        {
            let p = new Particle(x,y);
            particles.push(p);
        }
        for (let i = particles.length -1; i >= 0; i--)
        {
            particles[i].update();
            particles[i].show();
            if (particles[i].finished())
            {
                //remove
                particles.splice(i, 1);
            }
        }
    }

    cutegirlObjects.debug = mouseIsPressed;
    pinkblob.debug = mouseIsPressed;
    darkpinkblob.debug = mouseIsPressed;
    purpleblob.debug = mouseIsPressed;
    blueblob.debug = mouseIsPressed;

    //make sprite smaller and display
    scale(.25, .25);
    drawSprites();

    //maybe add wall collision for cutegirl
}

// function createParticles(x,y)
// {
//     for(let i = particles.length - 1; i >= 0; i--)
//     {
//         particles[i].update();
//         particles[i].show();
//         if (particles[i].finished())
//         {
//             //remove
//             particles.splice(i, 1);
//         }
//     }
// }




