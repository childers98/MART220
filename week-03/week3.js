var counter = 0;
var height = 700;
var width = 500;
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
var circle4X = 5, circle4Y = 62;
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

// variable speeds
var ellipse1Speed = 1;
var ellipse2Speed = 1;
var triangle1Speed = 1;
var rect1Speed = 1;
var rect2Speed = 1;
var rect3Speed = 1;
var rect4Speed = 1;
var circle1Speed = 1;
var circle2Speed = 1;
var circle3Speed = 1;
var circle4Speed = 1;

// create all image and font variables
var rainbow;
var rainbowX = 20, rainbowY = 10;
var electric;
var electricX = 10, electricY = 30
var hummingbird;
var hummingbirdX = 50, hummingbirdY = 60;
var newFont;
var timerText = 0;

// function preload()
// {
    // preload the images and the font here from
    // the assets folder
    // rainbow = loadImage('assets/rainbow.jpg');
    // electric = loadImage('assets/electric.png');
    // hummingbird = loadImage('assets/hummingbird.jpg');
    // newFont = loadFont('assets/PottaOne-Regular.ttf');
// }
// random color at start
function setup()
{
    createCanvas(700,500);
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

    setInterval(changeSpeed, 1000);
}


function draw()
{
    background(255);

    // // added images after preloading them
    // image(rainbow, rainbowX, rainbowY);
    // image(electric, electricX, electricY);
    // image(hummingbird, hummingbirdX, hummingbirdY);
    
    //top border
    noStroke();
    fill(0);
    rect(0, 0, 700, 25);
    //left border
    rect(0, 0, 25, 500);
    //bottom border
    rect(0, 500 - 25, 700, 25);
    // right border
    rect(700 - 25, 0, 25, 500 - 25);

    fill(0);
    textSize(25);
    text("Paige Childers",500,470);
    text("Bold & Beautiful Shapes",50,50);
    // add the time passed text
    text("Time Passed: " + timerText, 450, 50);
    // change the shapes and color when we hit 1000
    if(counter > 1000)
    {
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
        circle4X = random(100, 500);
        circle4Y = random(100, 500);
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
    if (ellipse1Y >= 500 || ellipse1Y <= 0) {
        ellipse1Speed *= -1;
    }
    ellipse1Y += ellipse1Speed;


    // ellipse 2
    fill(redColor2, greenColor2, blueColor2);
    ellipse(ellipse2X, ellipse2Y, 100, shape2Size);
    ellipse2X += ellipse2Speed;
    if (ellipse2X >= 700 || ellipse2X <= 0) {
        ellipse2Speed *= -1;
    }

    // rectangle 1
    fill(redColor5, greenColor5, blueColor5);
    rect(rect1X, rect1Y, shape5Sizew, shape5Sizeh);
    rect1X += rect1Speed;
    if (rect1X >= 650 || rect1X <= 0) {
        rect1Speed *= -1;
    }
    rect1Y += rect1Speed
    if (rect1Y >= 500 || rect1Y <= 0) {
        rect1Speed *= -1;
    }

    // rectangle 2
    fill(redColor7, greenColor7, blueColor7);
    rect(rect2X, rect2Y, shape5Sizeh, shape5Sizew);
    rect2X += rect2Speed;
    if (rect2X >= 625 || rect2X <= 0) {
        rect2Speed *= -1;
    }
    rect2Y += rect2Speed
    if (rect2Y >= 425 || rect2Y <= 0) {
        rect2Speed *= -1;
    }

    // rectangle 3
    fill(redColor3, greenColor3, blueColor3);
    rect(rect3X, rect3Y, shape3Sizew, shape3Sizeh);
    rect3Y += rect3Speed
    if (rect3Y >= 500 || rect3Y <= 0) {
        rect3Speed *= -1;
    }

    // rectangle 4
    fill(redColor4, greenColor4, blueColor4);
    rect(rect4X, rect4Y, shape4Sizew, shape4Sizeh);
    rect4X += rect4Speed;
    if (rect4X >= 700 || rect4X <= 0) {
        rect4Speed *= -1;
    }

    // circle 1
    fill(redColor8, greenColor8, blueColor8);
    circle(circle1X, circle1Y, shape9Sizeh);
    circle1X += circle1Speed;
    if (circle1X >= 700 || circle1X <= 0) {
        circle1Speed *= -1;
    }

    // circle 2
    fill(redColor9, greenColor9, blueColor9);
    circle(circle2X, circle2Y, shape9Sizew);
    circle2Y += circle2Speed
    if (circle2Y >= 700 || circle2Y <= 0) {
        circle2Speed *= -1;
    }

    // circle 3
    fill(redColor10, greenColor10, blueColor10);
    circle(circle3X, circle3Y, 185);
    circle3X += circle3Speed;
    if (circle3X >= 700 || circle3X <= 0) {
        circle3Speed *= -1;
    }

    // circle 4
    fill(redColor6, greenColor6, blueColor6);
    circle(circle4X, circle4Y, shape4Sizeh);
    circle4X += circle4Speed;
    if (circle4X >= 700 || circle4X <= 0) {
        circle4Speed *= -1;
    }
    circle4Y += circle4Speed;
    if (circle4Y >= 500 || circle4Y <= 0) {
        circle4Speed *= -1;
    }
    
}

/*
This is my call back function that updates the time shown
and changes the speeds of all my objects
*/
function changeSpeed() {
      timerText++;
      if (timerText % 5 == 0) {
        ellipse1Speed = random(1,10);
        ellipse2Speed = random(1,10);
        rect1Speed = random(1,10);
        rect2Speed = random(1,10);
        rect3Speed = random(1,10);
        rect4Speed = random(1,10);
        circle1Speed = random(1,10);
        circle2Speed = random(1,10);
        circle3Speed = random(1,10);
        circle4Speed = random(1,10);
       
    }
  }