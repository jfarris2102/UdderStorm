
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
    //defining text style
    ct.font="20px Courier New";
    ct.fillStyle='rgb(0,0,0)';
    //creating the text
    var moneyD="MONEY     : "+money;
    ct.fillText(moneyD,10,25);
    var foodD="FOOD      : "+food;
    ct.fillText(foodD,10,45);
    var energyD="ENERGY    : "+energy;
    ct.fillText(energyD,10,65);
    var popMarsD="POPULATION: "+popMars;
    ct.fillText(popMarsD,10,85);
}

});
