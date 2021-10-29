song="";
leftWristX ="";
leftWristY="";
rightWristX="";
rightWristY="";


function preload(){
song = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses)
}

function draw(){
image(video,0,0,600,500);
}

function play(){
song.play();
}

function modelLoaded(){
    console.log("POSE NET MADE :)");
}

function gotPoses(results){
    if (results>0)
    {
     console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("the left wrist x is "+leftWristX+" and the left wrist y is "+leftWristY);
     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log("the right wrist x is "+rightWristX+" and the right wrist y is "+rightWristY);
    }
}