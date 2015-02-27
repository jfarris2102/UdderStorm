
//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#HUD")[0];
var ct=canvas.getContext("2d");
var w=$("#HUD").width();
var h=$("#HUD").height();
//the initialize function
window.onload=init;
init();
function init() {
    if(typeof timer!="undefined") {
        clearInterval(timer);
    }
    timer=setInterval(create,50);
}
//creating the canvas and background
function create() {
    //background image
    var back=document.getElementById("backHUD");
    var pat=ct.createPattern(back,"repeat");
    ct.fillStyle=pat;
    ct.fillRect(0,0,w,h);
    //background outline
    ct.strokeStyle="black";
    ct.lineWidth=4;
    ct.strokeRect(0,0,w,h);
    //call display function
    display();
}
//text creation function
function display() {
    ct.font="15px Georgia";
    ct.fillStyle="Black";
    var moneyD="MONEY:  "+money;
    ct.fillText(moneyD,40,40);
}

});
