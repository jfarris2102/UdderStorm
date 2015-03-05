
//dadkelly
//use2D=true;

//////////////////////////////////////////////////////////////////////////////////////////////////////
var earthActive = false;
function startEarth(){
	earthActive = true;
	world.addChild(bg);
	world.addChild(bd);
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
	world.removeChild(bd);
	//initSpritesEarth();
	//canvas.removeEventListener("mousemove", mouseHover)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

//initGame('canvas');
//load background image
var back="http://people.ucsc.edu/~dadkelly/source/paint_center.png";
var bg=new Sprite(); {
    bg.width=960;
    bg.height=640;
    bg.x=0;
    bg.y=0;
    bg.image=Textures.load(back);
} //world.addChild(bg);
//load border
var border="images/Border.png";
var bd=new Sprite(); {
    bd.width=970;
    bd.height=650;
    bd.x=-5;
    bd.y=-5;
    bd.image=Textures.load(border);
} //world.addChild(bd);
