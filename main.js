img="";
status="";
objects=[];

function preload()
{
img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw()
{
    image(img,0,0,640,420);
    if(status!=""){
    for(i=0; i<objects.length;i++)
    {
    document.getElementById("status").innerHTML="Status: Objects Detected";
    fill("#FF0000");
    percent=floor(objects[i].confidence*100);
    stroke("#FF0000");
    text(objects[i].label+" "+percent+ "%", objects[i].x, objects[i].y);
    noFill();
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}  
}
}
function modelLoaded()
{
    console.log("Model has been Loaded");
    status=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,result)
{
if(error){
    console.log(error);
}
else{
    console.log(result);
    objects=result;
}

}