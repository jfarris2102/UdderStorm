
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

function getLifetime(){
	var ePerCapita = 2000*energyFactor; //2,000 kg of oil equivalent per capita at 2015
	var envDamage = 2*damageFactor;
	//At this environmental impact, human civilization collapses
	var maxImpact = 55;
	//Impact on environment = Population * Energy Consumption per capita * Environ.Damage from E.C.
	var impact = (popEarth * ePerCapita * envDamage)/1000000000000;
	var lifetime = Math.log(maxImpact/impact) / Math.log(1+growthRate);
	//After about 500 million years Earth will no longer be in habitable zone 
	//of the solar system (for humans)
	if(lifetime > 500000000);
	   lifetime = 500000000;
	return lifetime;
}
