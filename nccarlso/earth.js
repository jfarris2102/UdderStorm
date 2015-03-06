
//dadkelly
//use2D=true;

//////////////////////////////////////////////////////////////////////////////////////////////////////
var earthActive = false;
function startEarth(){
	earthActive = true;
	world.addChild(bg);
	world.addChild(techHighlight);
	redrawHUD();
	if(firstSolar){
		setInterval(solarTime, 1000 / 30);
		firstSolar = false;
	}
	canvas.addEventListener("mousemove", earthHover, false);
}
function stopEarth(){
	earthActive = false;
	world.removeChild(bg);
	techHighlight.alpha = 0;
	world.removeChild(techHighlight);
	canvas.removeEventListener("mousemove", earthHover)
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

var techHighlight = new Sprite();
techHighlight.x = 437;
techHighlight.y = 119;
techHighlight.width = 325;
techHighlight.height = 61;
techHighlight.image = Textures.load("images/highlight.png");
techHighlight.alpha = 0;

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

function earthHover(){
	console.log(checkTechOver(gInput.mouse.x, gInput.mouse.y));
	if(checkTechOver(gInput.mouse.x, gInput.mouse.y)){
		techHighlight.alpha = 0.3;
	}else techHighlight.alpha = 0;
}