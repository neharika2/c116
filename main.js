nosex=0;
nosey=0;    

function preload(){
    mustache=loadImage(' https://i.postimg.cc/3x3QzSGq/m.png')
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes)



  
    }
    function gotposes(results){
        if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
        console.log ("nose x" +results[0].pose.nose.x);
        console.log ("nose y" + results[0].pose.nose.y);
        }
        }
        function modelloaded(){
            console.log("model is loaded");
        }
        function draw(){
            image(video,0,0,300,300)
            // fill(48,213,200);
    //stroke(48,213,200)
    //circle(nosex,nosey,20);
    image(mustache,nosex,nosey,30,30)
        }
        function take_snapshot(){
            save('myFilterImage.png');
        }
        