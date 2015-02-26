
//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#HUD")[0];
var ct=canvas.getContext("2d");
var w=$("#HUD").width();
var h=$("#HUD").height();
//the core function
window.onload=main;
main();
function main() {
    //background outline
    ct.strokeStyle="black";
    ct.lineWidth=4;
    ct.strokeRect(0,0,w,h);
}

});
