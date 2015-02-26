
//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#HUD")[0];
var ct=canvas.getContext("2d");
var w=$("#HUD").width();
var h=$("#HUD").height();
//the box creation function
window.onload=create;
create();
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
    //call display function at an interval
    setInterval(display,30);
}
//the draw button
function display() {
    ct.font="15px Georgia";
    ct.fillStyle="Black";
    var moneyD="MONEY:  "+money;
    ct.fillText(moneyD,40,40);
}

});
