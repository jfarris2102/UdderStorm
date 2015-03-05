
//dadkelly
//use2D=true;

//////////////////////////////////////////////////////////////////////////////////////////////////////
var earthActive = false;
function startEarth(){
	earthActive = true;
	world.addChild(bg);
	redrawHUD();
	if(firstSolar){
		setInterval(solarTime, 1000 / 30);
		firstSolar = false;
	}
	//canvas.addEventListener("mousemove", mouseHover, false);
}
function stopEarth(){
	earthActive = false;
	world.removeChild(bg);
	//initSpritesEarth();
	//canvas.removeEventListener("mousemove", mouseHover)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

var back="images/earthBG.jpg";
var bg=new Sprite(); {
    bg.width=960;
    bg.height=640;
    bg.x=0;
    bg.y=0;
    bg.image=Textures.load(back);
}
