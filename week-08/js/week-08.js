var x;
var y;
var pos;
var step = 3;
//key codes
var a = 65;
var d = 68;
var s = 83;
var w = 87;
var left = 37;
var right = 39;



function setup() {
  createCanvas(750, 500, WEBGL); //center of canvas is in the middle
}



function draw(pos) {
  background(120);
  normalMaterial();

  //single shape alone is a primitive
  //point, lin, triangle, and quad are the 2D shapes available
  //the other option for key movement
//   window.addEventListener('keydown', function (event)
// {
//     if (event === 87) // W, Up
//         pos += step;
//     else if (event === 65) // A, Left
//         pos -= step;
//     else if (event === 83) // S, Down
//         pos -= step;
//     else if (event === 68) // D, Right
//         pos += step; //pos.x
//     draw(pos);
// });

  //plane
  push();
  translate(100, 100);
  rotateX(frameCount * .01);
  rotateY(frameCount * .01);
  plane(75, 75);
  pop();

  //cylinder
  push();
  translate(-300, -10); //was originally (-100,-100)
  rotateX(frameCount * 0.01);
  cylinder(50, 150, 20, 10, false, true);
  pop();

  //sphere - pretty sure this is rotating haha
  push();
  translate(10, 100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(25);


  //elipsoid(oval in 3d) - combined with the sphere
  translate(-100, -100);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  ellipsoid(50, 150, 75, 24, 24);
  pop();

  push();
  translate(-250, -225);
  rotateX(frameCount * 0.01);
  torus(55, 1, 20, 15);
  pop();

  push();
  translate(250, -225);
  rotateX(frameCount * 0.01);
  torus(200, 10, 20, 15);

  box(15,15);
  pop();


  




    //box
    translate(-170, -100);
    box(30, 30);
    //key codes for movements
      // if (keyDown('d')) // move the right
      // { 
      //   pos += 5;
      // }
      // if (keyDown('a'))// move to the left
      // { 
  
      //   pos -= 5;
      // }
      // if (keyDown('w'))  //move up
      // {
      //   pos += 5;
      // }
  
      // if (keyDown('s')) //move down
      // {
      //   pos -= 5;
      // }
      // if (keyDown('left')) //shrink
      // {
      //   scale(0.5, 0.5);
      // }
      // if (keyDown('right')) //grow
      // {
      //   scale(2, 2);
      // }
  
}

//cone(radius, height, deatailX, detailY, cap)   // cone(30,150,10,10,true);
// push(); //save
// pop(); //restore
//torus(donut) // torus(50, 15, 24, 16); //torus(radius,tubeRadius,detailX,detailY)
//plane(width,height,detailX(max: 1),detailY (max: 1))



//scaling-maybe helpful links?
//https://www.khanacademy.org/computer-programming/scaleamount-processingjs/6712922034143232
//WORKING? Key Movements





// // this allows us to create any type of box
// function createBox(w, h, d, transX, transY, move)
//  {
//   push();
//   if (move)
//    {
//     translate(transX + x, transY);
//   }
//   else
//   {
//     translate(transX, transY);
//   }

//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(w, h, d);
//   pop();

// }

      //listen for keyboard event - https://alligator.io/js/listening-to-keyboard/
  // document.addEventListener('keyDown', function(event)
  // {
  //   if (event.key === 'd')
  //   {
  //     x += 5;
  //   }
  //   if (event.key === 'a')
  //   {
  //     y += 5;
  //   }
  //   if (event.key === 'w')
  //   {
  //     y += 5;
  //   }
    
  // }
  // );







//this is pretty cool all on its own
// draw a spinning cylinder
// with radius 20 and height 50
// function setup() {
//   createCanvas(100, 100, WEBGL);
// }


// // use draw as loop
// function draw() 
// {
//   background(120);
//   normalMaterial();

//   //box
//   translate(-100,-100);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   box(10, 30, 40);

//   //sphere
//   translate(-100,-100);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   sphere(25);

//   //cylinder
//   translate(-100,-100);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   cylinder(50, 150, 24, 24, false, true);



// }