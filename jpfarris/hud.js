//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#canvas")[0];
var ct=canvas.getContext("2d");
var w=$("#canvas").width();
var h=$("#canvas").height();
//initilization function
window.onload=init;
init();
function init() {
    if(typeof timer!="undefined") {
        clearInterval(timer);
    }
    timer=setInterval(main,50);
}
//the core function
function main() {
    //menu
    ct.fillStyle='white';
    ct.fillRect(800,0,160,640);
    ct.strokeStyle="black";
    ct.lineWidth=2;
    ct.strokeRect(800,0,160,640);
    //background outline
    ct.strokeStyle="black";
    ct.lineWidth=4;
    ct.strokeRect(0,0,w,h);
    //call display function
    display();
}
//display function
function display() {
    //defining text style
    ct.font="15px Courier New";
    ct.fillStyle='rgb(0,0,0)';
    //creating the text
    var moneyD="MONEY     : "+money;
    ct.fillText(moneyD,805,25);
    var foodD="FOOD      : "+food;
    ct.fillText(foodD,805,45);
    var energyD="ENERGY    : "+energy;
    ct.fillText(energyD,805,65);
    var popMarsD="POPULATION: "+popMars;
    ct.fillText(popMarsD,805,85);
}

});
