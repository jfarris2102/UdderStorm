
//dadkelly
$(document).ready(
function(){
    
//canvas details
var canvas=$("#canvas")[0];
var ct=canvas.getContext("2d");
var w=$("#canvas").width();
var h=$("#canvas").height();
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
