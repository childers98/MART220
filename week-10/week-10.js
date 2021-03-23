//variables for the buttons and videos
let playing;
let button, muteButton;
let muted;
let volumeDownButton, volumeUpButton;
let myCurrentVolume = 1;
let videoTour = []; // array to hold all the video objects

function setup() 
{
    // create multiple video objects
    //were we supposed to do two???
    videoTour.push(new myVideo("assets/kim-williams-trail.mp4", 50, 100, 580, 460));
 
    //canvas(for video to sit on)
    createCanvas(screen.width, screen.height);
    background(172, 212, 252);
    //title and name
    textSize(30);
    text("A Walk on the Kim Williams Trail", 100, 125);
    textSize(18);
    text("By: Paige Childers", 210, 150);

    //add buttons to play the videos
    button = createButton('play');
    button.position(90, 600);
    muteButton = createButton('mute');
    muteButton.position(90, 630);

    volumeDownButton = createButton('volume down');
    volumeDownButton.position(90, 660);

    volumeUpButton = createButton('volume up');
    volumeUpButton.position(90, 690);

    button.mousePressed(playVideo);
    muteButton.mousePressed(audioVolume);
    volumeDownButton.mousePressed(volumeDown);
    volumeUpButton.mousePressed(volumeUp);

    // create all the videos 
    for (let i = 0; i < videoTour.length; i++) 
    {
        let tempVideo = createVideo([videoTour[i].theVideoPath]);
        tempVideo.size(videoTour[i].theW, videoTour[i].theH);
        tempVideo.position(videoTour[i].theX, videoTour[i].theY);
        videoTour[i].settheVideoObject(tempVideo);
    }

}

//turn down the video volume
function volumeDown() 
{
    myCurrentVolume -= .1;
    if (myCurrentVolume <= 0) {
        myCurrentVolume = 0;
    }
    for (let i = 0; i < videoTour.length; i++){
        let temp = videoTour[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

//turn the volume up
function volumeUp()
{
    myCurrentVolume += .1;
    if (myCurrentVolume >= 1) 
    {
        myCurrentVolume = 1;
    }

    for (let i = 0; i < videoTour.length; i++) 
    {
        let temp = videoTour[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

//volume mute to unmute
function audioVolume() 
    {
    if (muted) 
    {
        muteButton.html('unmute')
        for (let i = 0; i < videoTour.length; i++) 
        {
            let temp = videoTour[i].theVideoObject;
            temp.volume(0);
        }

    } 
    else 
    {
        muteButton.html('mute');
        for (let i = 0; i < videoTour.length; i++) 
        {
            let temp = videoTour[i].theVideoObject;
            temp.volume(myCurrentVolume);

        }

    }

    muted = !muted;

}

function playVideo() 
{
    if (playing)
    {
        for (let i = 0; i < videoTour.length; i++) 
        {
            let temp = videoTour[i].theVideoObject;
            temp.pause();
            temp.volume(1);
        }
        button.html('play');
        playing = false;
    } 
    else 
    {
        for (let i = 0; i < videoTour.length; i++) 
        {
            let temp = videoTour[i].theVideoObject;
            temp.loop();
            temp.volume(1);
        }

        button.html('pause');
        playing = true;

    }

}