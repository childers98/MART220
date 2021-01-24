var x = [111,70,310,50];
var y = [90,120,500,600];
var w = [80,40,30,10];
var h = [70,90,120,500];
var r = [255,50,60,1];
var g = [255,10,65,75];
var b = [255,9,42,30];
var count = 0;

function setup()
{
   createCanvas(700,500);
   //top border
   fill(0);
   rect(0,0, 700, 25);
   //left border
   rect(0,0,25, 500);
   //bottom border
   rect(0, 500 - 25, 700, 25);
   // right border
   rect(700 - 25, 0, 25, 500 - 25); 
}
function draw()
{
    
    count+= count;
    console.log(count);
    if(count < 100)
    {
    for(var i = 0; i < 4; i++)
    {
        //r[i] = random(255);
        //g[i] = random(255);
        //b[i] = random(255);
        // x[i] = random(700);
        // y[i] = random(500);
        // h[i] = random(300);
        // w[i] = random(200);
        fill(r[i],g[i],b[i]);
        ellipse(x[i],y[i],w[i],h[i]);
    }
}
else if(count < 200)
{
    for(var i = 0; i < 4; i++)
    {
        // r[i] = random(255);
        // g[i] = random(255);
        // b[i] = random(255);
        // x[i] = random(700);
        // y[i] = random(500);
        // h[i] = random(300);
        // w[i] = random(200);
        fill(r[i],g[i],b[i]);
        rect(x[i],y[i],w[i],h[i]);
    }

}


 count = 0;


}


