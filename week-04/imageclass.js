class imageclass{

    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }

    // move() {
    //   this.x += cutiegirlMovement;
    //   this.y += cutiegirlMovement;
    // }
    // cutegirlMovement;
    // function cutegirlMovement()
    // {
    //   if(keyIsDown(w))
    //   {
    //     cutegirlY = imageclass.getY();
    //     cutegirlY -= 3;
    //     imageclass.setY(cutegirlY);
    //   }
    //   if(keyIsDown(s))
    //   {
    //     cutegirlY = imageclass.getY();
    //     cutegirlY += 3;
    //     imageclass.setY(cutegirlY);
    //
    //   }
    //   if(keyIsDown(a))
    //   {
    //   cutegirlX = imageclass.getX();
    //   cutegirlX -= 3;
    //   imageclass.setX(cutegirlX);
    //   }
    //   if(keyIsDown(d))
    //   {
    //   this.x += 3;
    // }

}
