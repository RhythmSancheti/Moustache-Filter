nosex= 0;
nosey= 0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/XJsV7r1K/m.png');
}

function setup(){
    canvas=createCanvas(400, 400);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300, 300);
        video.hide();
        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

    function modelLoaded(){
        console.log('PoseNet is Initialised');
    }

    function gotPoses(results){
        if (results.length > 0){
            console.log(results);
            nosex=results[0].pose.nose.x;
            nosey=results[0].pose.nose.y;
            console.log("nosex="+ nosex);
            console.log(results);
            console.log("nosey="+ nosey);
        }
    }

function draw(){
    image(video, 0, 0, 400, 400);
    image(clown_nose, nosex-10, nosey-10, 30, 30);
}

function take_snapshot(){
    save(myfilterimage.png);
    
}