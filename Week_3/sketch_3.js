// create all the variables
var counter = 0;
var ellipse1X = 175, ellipse1Y = 225;
var ellipse2X = 50, ellipse2Y = 206;
var triangle1X = 130, triangle1Y = 170; triangle1Z = 300;
var rect1X = 150, rect1Y = 200;
var rect2X = 130, rect2Y = 500;
var rect3X = 50, rect3Y = 255;
var rect4X = 150, rect4Y = 455;
var circle1X = 550, circle1Y = 450;
var circle2X = 200, circle2Y = 390;
var circle3X = 425, circle3Y = 75;
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;
var shape1Size = 50;
var shape2Size = 90;
var shape3Sizew = 20;
var shape3Sizeh = 70;
var shape4Sizew = 120;
var shape4Sizeh = 70;
var shape5Sizew = 190;
var shape5Sizeh = 70;
var shape6Size = 90;
var shape9Sizew = 50;
var shape9Sizeh = 190;

// create all relevant variables
var electric;
var rainbowX = 100;
var rainbowY = 100;
var rainbowSpeed = 2;
var minion;
var minionX = 200;
var minionY = 200;
var minionSpeed = 3;
var fire;
var fireX = 300;
var fireY = 300;
var fireSpeed = 5;

var newFont;
var timerText = 0;
var changeSpeed = 0;


function preload()
{
    //preload the images and the font here from the assets folder
    electric = loadImage('Coding 2/Week_3/assets/electric.png');
    // minion = loadImage('assets/minion.png');
    // fire = loadImage('assets/fire.png');
    // newFont = loadFont('assets/PottaOne-Regular.ttf');
}
//set up a random color initially
function setup() {
    createCanvas(700, 500);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);

    image(img, 0, 0);

    setInterval(changeSpeed, 1000);
}


function draw() {
    background(220);

    // // added all my images after preloading them
    // image(rainbow,rainbowX, rainbowY);
    // // image(minion, minionX, minionY);
    // // image(fire, fireX, fireY);

    // // change the donut along the horizontal axis
    // rainbowX += rainbowSpeed;
    // if(rainbowX >= width - rainbow.width || rainbowX  <= rainbow.width/8)
    // {
    //     rainbowSpeed *= -1;
    // }

    // // change the minion along the vertical axis
    // minionY += minionSpeed;
    // if(minionY >= height - minion.height || minionY  <= minion.height/8)
    // {
    //     minionSpeed *= -1;
    // }

    // // change the fire along a diagonal axis
    // fireY += fireSpeed;
    // if(fireY >= height - fire.height || fireY  <= fire.height/8)
    // {
    //     fireSpeed *= -1;
    // }
    // fireX += fireSpeed;
    // if(fireX >= width - fire.width || fireX  <= fire.width/8)
    // {
    //     fireSpeed *= -1;
    // }
    //top border
    fill(0);
    rect(0, 0, 700, 25);
    //left border
    rect(0, 0, 25, 500);
    //bottom border
    rect(0, 500 - 25, 700, 25);
    // right border
    rect(700 - 25, 0, 25, 500 - 25);

    fill(0);
    // added the new font that was created in the preload
    // textFont(newFont);
    textSize(22);
    text("Paige Childers", 550, 495);
    text("Bold & Beautiful Shapes", 50, 50);
    // add the time passed text
    // text("Time Passed: " + timerText, 550, 50);
    // change the shapes and color when we hit 1000
    if (counter > 100) {
        ellipse1X = random(100, 500);
        ellipse1Y = random(100, 500);
        ellipse2X = random(100, 500);
        ellipse2Y = random(100, 500);
        triangle1X = random(100, 500);
        triangle1Y = random(100, 500);
        rect1X = random(100, 500);
        rect1Y = random(100, 500);
        rect2X = random(100, 500);
        rect2Y = random(100, 500);
        rect3X = random(100, 500);
        rect3Y = random(100, 500);
        rect4X = random(100, 500);
        rect4Y = random(100, 500);
        circle1X = random(100, 500);
        circle2Y = random(100, 500);
        circle2X = random(100, 500);
        circle2Y = random(100, 500);
        circle3X = random(100, 500);
        circle3Y = random(100, 500);
        redColor1 = random(255);
        greenColor1 = random(255);
        blueColor1 = random(255);
        redColor2 = random(255);
        greenColor2 = random(255);
        blueColor2 = random(255);
        redColor3 = random(255);
        greenColor3 = random(255);
        blueColor3 = random(255);
        redColor4 = random(255);
        greenColor4 = random(255);
        blueColor4 = random(255);
        redColor5 = random(255);
        greenColor5 = random(255);
        blueColor5 = random(255);
        redColor6 = random(255);
        greenColor6 = random(255);
        blueColor6 = random(255);
        redColor7 = random(255);
        greenColor7 = random(255);
        blueColor7 = random(255);
        redColor8 = random(255);
        greenColor8 = random(255);
        blueColor8 = random(255);
        redColor9 = random(255);
        greenColor9 = random(255);
        blueColor9 = random(255);
        redColor10 = random(255);
        greenColor10 = random(255);
        blueColor10 = random(255);
        shape1Size = random(100);
        shape2Size = random(100);
        shape3Sizew = random(50);
        shape3Sizeh = random(100);
        shape4Sizew = random(200);
        shape4Sizeh = random(100);
        shape5Sizew = random(200);
        shape5Sizeh = random(100);
        shape6Size = random(135);
        shape9Sizew = random(100);
        shape9Sizeh = random(200);
        counter = 0;
    }
    counter++;
    // ellipse 1
    fill(redColor1, greenColor1, blueColor1);
    ellipse(ellipse1X, ellipse1Y, shape1Size, shape2Size);

    // circle 1
    fill(redColor2, greenColor2, blueColor2);
    circle(circle1X, circle1Y, shape2Size);

    // triangle 1
    fill(redColor6, greenColor6, blueColor6);
    triangle(triangle1X, shape1Size, triangle1Y, shape2Size, triangle1Z, shape3Sizeh);

    // rectangle 1
    fill(redColor5, greenColor5, blueColor5);
    rect(rect1X, rect1Y, shape5Sizew, shape5Sizeh);

    // rectangle 2
    fill(redColor7, greenColor7, blueColor7);
    rect(rect2X, rect2Y, shape5Sizeh, shape5Sizew);

    // rectangle 3
    fill(redColor3, greenColor3, blueColor3);
    rect(rect3X, rect3Y, shape3Sizew, shape3Sizeh);

    // rectangle 4
    fill(redColor4, greenColor4, blueColor4);
    rect(rect4X, rect4Y, shape4Sizew, shape4Sizeh);

    // circle 1
    fill(redColor8, greenColor8, blueColor8);
    circle(circle1X, circle1Y, shape9Sizeh);

    // circle 2
    fill(redColor9, greenColor9, blueColor9);
    circle(circle2X, circle2Y, shape9Sizew);

    // circle 3
    fill(redColor10, greenColor10, blueColor10);
    circle(circle3X, circle3Y, 185);

    // }

    /*
    This is my call back function that updates the time shown
    and changes the speeds of all my objects
    */
    // function changeSpeed() {
    //       timerText++;
    //       if (timerText % 5 == 0) {
    //         rainbowSpeed = random(1,10);
    //         minionSpeed = random(1,10);
    //         fireSpeed = random(1,10);

    // }
}