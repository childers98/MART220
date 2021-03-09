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

}

// class Image{
//
//   constructor(path, x, y)
//   {
//     this.path = path;
//     this.x = x;
//     this.y = y;
//   }
//
// }
