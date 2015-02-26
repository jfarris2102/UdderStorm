
//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#HUD")[0];
var ct=canvas.getContext("2d");
var w=$("#HUD").width();
var h=$("#HUD").height();
//pull in building.js

//the box creation function
window.onload=create;
create();
function create() {
    //background outline
    ct.strokeStyle="black";
    ct.lineWidth=4;
    ct.strokeRect(0,0,w,h);
}
//the draw button
function display() {
    
}

});
