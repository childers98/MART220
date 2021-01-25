var x = [];
var y = [];
var w = [];
var h = [];
var r = [];
var g = [];
var b = [];
var count = 0;

function setup() {
    x = [random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675), random(25, 675)];
    y = [random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475), random(25, 475)];
    w = [random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300)];
    h = [random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300), random(300)];
    r = [random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255)];
    g = [random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255)];
    b = [random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255), random(255)];
}
function draw() {
    createCanvas(700, 500);

    count++;
    console.log(count);
    if (count < 100) {
        for (var i = 0; i < 10; i++) {
            //r[i] = random(255);
            //g[i] = random(255);
            //b[i] = random(255);
            // x[i] = random(700);
            // y[i] = random(500);
            // h[i] = random(300);
            // w[i] = random(200);
            fill(r[i], g[i], b[i]);
            ellipse(x[i], y[i], w[i], h[i]);
        }
    }
    else if (count < 200) {
        for (var i = 0; i < 10; i++) {
            // r[i] = random(255);
            // g[i] = random(255);
            // b[i] = random(255);
            // x[i] = random(700);
            // y[i] = random(500);
            // h[i] = random(300);
            // w[i] = random(200);
            fill(g[i], b[i], r[i]);
            rect(x[i], y[i], w[i], h[i]);
        }

    }
    else {
        for (var i = 0; i < 10; i++) {
            r[i] = random(255);
            g[i] = random(255);
            b[i] = random(255);
            x[i] = random(700);
            y[i] = random(500);
            h[i] = random(300);
            w[i] = random(200);
        }
        count = 0;
    }
    //top border
    fill(0);
    rect(0, 0, 700, 25);
    //left border
    rect(0, 0, 25, 500);
    //bottom border
    rect(0, 500 - 25, 700, 25);
    // right border
    rect(700 - 25, 0, 25, 500 - 25);
    //signature
    fill(221, 190, 222);
    textSize(22);
    text("Paige Childers", 550, 495);
    //title
    fill(35, 20, 13);
    textSize(35);
    text("Bold & Beautiful Shapes", 30, 60);
}


