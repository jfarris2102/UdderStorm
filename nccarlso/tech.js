
//dadkelly
//use2D=true;

//////////////////////////////////////////////////////////////////////////////////////////////////////
var techActive = false;
function startTech(){
	techActive = true;
	world.addChild(techbg);
	world.removeChild(HUD);
	clearText();
	//redrawHUD();
	//canvas.addEventListener("mousemove", mouseHover, false);
}

function stopTech(){
	techActive = false;
	world.removeChild(techbg);
	startHUD();
	//initSpritesEarth();
	//canvas.removeEventListener("mousemove", mouseHover)
}

function checkTechClicked(x, y) {
	if (earthActive){
		if (x > 437 && x < 762 && y > 119 && y < 180) {
			return true;
		}
	}else if(techActive){
		if (x > 0 && x <= 50 && y > 0 && y <= 50) {
			return true;
		}
	}
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

var techBG="images/techBG.png";
var techbg=new Sprite(); {
    techbg.width=3743;
    techbg.height=1434;
    techbg.x=0;
    techbg.y=0;
    techbg.image=Textures.load(techBG);
}
