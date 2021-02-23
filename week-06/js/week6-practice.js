var cutegirlObjects = [];
var animation = [];
var result;
var i = 0;

function preload() 
{
    result = loadStrings('assets/characteridle.txt');
}

function setup()
{
    createCanvas(750, 500);
}

function draw()
{
    background(90);

animation(cutegirl, 300, 150);
}