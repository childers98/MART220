function setup() {
  let img = createImage(400, 400); // same as new p5.Image(400,400);
  img.loadPixels();
  createCanvas(400, 400);
  background(0);

  // helper for writing color to array
  function writeColor(image, x, y, red, green, blue, alpha)
  {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }
//maybe make it so that this function draws random berries
  // this function draws random squares within squares on the canvas
  function drawShapes(number1, number2) {
  //   let startX = floor(random(number1-10)) + 10;
  //   let startY = floor(random(number2-20)) + 20;
  //   console.log(startX);
  //   // draw shapes
  //   for (x = startX; x < startX + 70; x++) {
  //     for (y = startY; y < startY + 70; y++) {
  //       if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
  //         writeColor(img, x, y, 50, 100, 50, floor(random(255)));
  //       } else {
  //         writeColor(img, x, y, 55, 20, 125, floor(random(255)));
  //       }
  //     }
  //   }
  }

  let x, y;
  //random purple background? Might change
  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(153,204);
      let green = 153;
      let blue = 255;
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }


  //tail - to go behind branch
  for (y=175; y<275; y++){
    for (x=80; x<175; x++){
      writeColor(img, x, y, 255,255,255, 255);
    }
  }
  //branch
  for (y=309; y<335; y++){
    for (x=0; x<30; x++){
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for (y=300; y<310; y++){
    for (x=30; x<70; x++){
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for (y=295; y<310; y++){
    for (x=70; x<100; x++){
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for (y=290; y<300; y++){
    for (x=100; x<120; x++){
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for(y=275; y<280; y++){
    for (x=100; x<img.width-200; x++) {
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  //is this one even showing up?
  for (y=250; y<275; y++){
    for (x=120; x<130; x++){
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  //bird is sitting on this one
  for(y=280; y<285; y++){
    for (x=100; x<200; x++) {
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for(y=280; y<290; y++){
    for (x=75; x<125; x++) {
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for(y=290; y<300; y++){
    for (x=80; x<115; x++) {
      writeColor(img, x, y, 134,114,90, 255);
    }
  }
  for(y=310; y<320; y++){
    for (x=20; x<70; x++) {
      writeColor(img, x, y, 134,114,90, 255);
    }
  }



  //hummingbird
  //body
  for (y=175; y<275; y++){
    for (x=80; x<175; x++){
      writeColor(img, x, y, 255,255,255, 255);
    }
  }
  for (y=175; y<200; y++){
    for (x=80; x<100; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=175; y<200; y++){
    for (x=160; x<175; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }

  //head
  for (y=130; y<175; y++){
    for (x=105; x<165; x++){
      writeColor(img, x, y, 255,255,255, 255);
    }
  }
  //green part of head(face)
  for (y=125; y<150; y++){
    for (x=105; x<170; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=130; y<150; y++){
    for (x=165; x<170; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=135; y<150; y++){
    for (x=170; x<175; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=140; y<150; y++){
    for (x=175; x<180; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=140; y<145; y++){
    for (x=175; x<180; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  for (y=145; y<150; y++){
    for (x=180; x<185; x++){
      writeColor(img, x, y, 0,102,0, 255);
    }
  }
  //red throat part
  for (y=153; y<158; y++){
    for (x=180; x<185; x++){
      writeColor(img, x, y, 204,0,0, 255);
    }
  }
  for (y=153; y<158; y++){
    for (x=180; x<185; x++){
      writeColor(img, x, y, 204,0,0, 255);
    }
  }



  //beak
  for (y=275; y<280; y++){
    for (x=120; x<130; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
  //middle of beak
  for (y=150; y<153; y++){
    for (x=160; x<240; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
  for (y=148; y<151; y++){
    for (x=162; x<170; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
  for (y=153; y<155; y++){
    for (x=162; x<170; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }


  //feet
  for (y=275; y<280; y++){
    for (x=120; x<130; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
  for (y=275; y<280; y++){
    for (x=140; x<150; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }


  //eye
  for (y=145; y<150; y++){
    for (x=135; x<140; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
  for (y=143; y<145; y++){
    for (x=137; x<138; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }
   for (y=150; y<152; y++){
    for (x=137; x<138; x++){
      writeColor(img, x, y, 0,0,0, 255);
    }
  }

  //upper border line
  for(y = 0; y < 5; y++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  //bottom border line
  y = img.height - 1;
  for(let i = 0; i < 5; i++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
    y--;
  }

  // draw left border line
for(x = 0; x < 5; x++)
{
  for (y = 0; y < img.height; y++)
  {
    writeColor(img, x, y, 0, 0, 0, 255);
  }
}

// draw a right border line
  x = img.width - 1;
for(let i = 0; i < 5; i++)
{
  for (y = 0; y < img.height; y++)
  {
    writeColor(img, x, y, 0, 0, 0, 255);
  }
  x--;
}

//Initials PC
//top of C
for (y=353; y<360; y++){
  for (x=333; x<360; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//middle of C
for (y=353; y<390; y++){
  for (x=333; x<340; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//bottom of C
for (y=383; y<390; y++){
  for (x=333; x<360; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//top of P
for (y=353; y<360; y++){
  for (x=303; x<330; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//bottom of P
for (y=368; y<375; y++){
  for (x=303; x<330; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//long line of P
for (y=353; y<390; y++){
  for (x=303; x<310; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}
//short line of P
for (y=360; y<375; y++){
  for (x=323; x<330; x++){
    writeColor(img, x, y, 0, 0, 0, alpha);
  }
}



  // draw shapes
  for (var i = 0; i < 50; i++) {
    drawShapes(floor(random(width)), floor(random(height)));
  }

  img.updatePixels();
  image(img, 0, 0);
}
