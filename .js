function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.position(150,250);
video=createCapture(VIDEO);
video.hide();
tint_colour="";
}
function draw(){
    image(video,0,0,500,500);
    tint(tint_colour);
}
function take_snapshot(){
    save('student_name.jpeg');}
    
    function filter_tint(){
        tint_colour=document.getElementById('color_name').value;
    }