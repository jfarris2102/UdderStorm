
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
    //background image
    var back=document.getElementById("background");
    var pat=ct.createPattern(back,"repeat");
    ct.fillStyle=pat;
    ct.fillRect(0,0,w,h);
    //ct.fill();
    //background outline
    ct.strokeStyle="black";
    ct.lineWidth=4;
    ct.strokeRect(0,0,w,h);
    //bottom menu
    ct.fillStyle='white';
    ct.fillRect(10,h-100,w-20,90);
    ct.strokeStyle="black";
    ct.lineWidth=2;
    ct.strokeRect(10,h-100,w-20,90);
    //test
    ct.font="15px Georgia";
    ct.fillStyle="Black";
    var moneyD="MONEY:  "+money;
    ct.fillText(moneyD,20,h-120);
}

});
