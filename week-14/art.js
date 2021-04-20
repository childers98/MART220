function setup() {
  let img = createImage(400, 400); // same as new p5.Image(400, 400);
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

  // this function draws random squares within squares on the canvas
  function drawShapes(number1, number2) {
    let startX = floor(random(number1-10)) + 10;
    let startY = floor(random(number2-20)) + 20;

    //nice little purple square in corner:)
    for(x=0; x < 20; x++){
      for(y=0; y < 20; y++){
          if (x > 0 + 5 && x < 0 + 50 && y > 0 + 10 && y < 0 + 50) {
//for small square color
  writeColor(img, x, y, 102, 0, 204, floor(random(255)));
          } else {
     //for big square
      //writeColor(img, x, y, 55, 20, 125, floor(random(255)));
      }
    }
  }
  //   console.log(startX);
  //   // draw shapes
  //   //changes the height of the big square
  //   for (x = startX; x < startX + 200; x++) {
  //     //changes the width of the bigger square
  //     for (y = startY; y < startY + 70; y++) {
  //       //for the little square?
  //       if (x > startX + 5 && x < startX + 50 && y > startY + 10 && y < startY + 50) {
  //        //for small square color
  //         writeColor(img, x, y, 102, 0, 204, floor(random(255)));
  //       } else {
  //         //for big square
  //         writeColor(img, x, y, 55, 20, 125, floor(random(255)));
  //       }
  //     }
  //   }
  }

  let x, y;
  // fill with random colors
  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }

  //top left line of heart
  for (y=70; y<85; y++){
    for (x=75; x<170; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //top right line of heart
  for (y=70; y<85; y++){
    for (x=215; x<310; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //top V's 3 squares
  //center
  for (y=105; y<120; y++){
    for (x=187; x<202; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //left
  for (y=90; y<105; y++){
    for (x=170; x<185; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //right
  for (y=90; y<105; y++){
    for (x=202; x<217; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //left squares
  for (y=185; y<200; y++){
    for (x=75; x<90; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

   for (y=200; y<215; y++){
    for (x=90; x<105; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

  for (y=215; y<230; y++){
    for (x=105; x<120; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

  for (y=230; y<245; y++){
    for (x=120; x<135; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

  for (y=245; y<260; y++){
    for (x=135; x<150; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=260; y<275; y++){
    for (x=150; x<165; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=275; y<290; y++){
    for (x=165; x<180; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //left bottom center
  for (y=290; y<305; y++){
    for (x=180; x<195; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

  //left side of heart
  for (y=85; y<185; y++){
    for (x=60; x<75; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

  //right squares
  for (y=185; y<200; y++){
    for (x=295; x<310; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=200; y<215; y++){
    for (x=280; x<295; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=215; y<230; y++){
    for (x=265; x<280; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=230; y<245; y++){
    for (x=250; x<265; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=245; y<260; y++){
    for (x=235; x<250; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=260; y<275; y++){
    for (x=220; x<235; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  for (y=275; y<290; y++){
    for (x=205; x<220; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }
  //bottom center right
  for (y=290; y<305; y++){
    for (x=190; x<205; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
  }

   //right side of heart
  for (y=85; y<185; y++){
    for (x=310; x<325; x++){
      writeColor(img, x, y, 204, 0, 102, floor(random(255)));
    }
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

  // draw upper border line
  for(y = 0; y < 5; y++)
  {
    for (x = 0; x < img.width; x++)
    {
      writeColor(img, x, y, 0, 0, 0, 255);
    }
  }

  // draw a bottom border line
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

  // draw shapes
  for (var i = 0; i < 50; i++) {
    drawShapes(floor(random(width)), floor(random(height)));
  }

  img.updatePixels();
  image(img, 0, 0);
}
