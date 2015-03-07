/*
drawHUD.js by Team UdderStorm
A component of Get Your Ass to Mars
This program manages what can be seen on the earth screen, 
including the background and the numerous buttons.
It also manages the life of the earth, which contains
important information for several end conditions
*/

//Sprites

var bg=new Sprite(); {
    bg.width=960;
    bg.height=640;
    bg.x=0;
    bg.y=0;
    bg.image=Textures.load("images/earthBG.jpg");
}
var bg2=new Sprite(); {
    bg2.width=960;
    bg2.height=640;
    bg2.x=0;
    bg2.y=0;
    bg2.image=Textures.load("images/earthBG.png");
}

var techHighlight = new Sprite();
techHighlight.x = 437;
techHighlight.y = 119;
techHighlight.width = 325;
techHighlight.height = 61;
techHighlight.image = Textures.load("images/highlight.png");
techHighlight.alpha = 0;
var shopHighlight = new Sprite();
shopHighlight.x = 207;
shopHighlight.y = 384;
shopHighlight.width = 172;
shopHighlight.height = 65;
shopHighlight.image = Textures.load("images/highlight.png");
shopHighlight.alpha = 0;
//Countdown text
var Countdown = new TextBox("150:00:00");
Countdown.x = 70;
Countdown.y = 111;
Countdown.fontSize = '60';
Countdown.font = 'BebasNeue';
Countdown.color = '#FFFFFF';
Countdown.dropShadow = true;
Countdown.shadowBlurCustom = 4;
Countdown.alpha = 0.75;

var earthActive = false;

//Functions
function startEarth(){
	earthActive = true;
	world.addChild(bg);
	world.addChild(techHighlight);
	world.addChild(shopHighlight);
	world.addChild(bg2);
	world.addChild(Countdown);
	redrawHUD();
	if(firstSolar){
		setInterval(solarTime, 1000 / 30);
		firstSolar = false;
	}
	canvas.addEventListener("mousemove", earthHover, false);
	canLoad = true;
}

function stopEarth(){
	earthActive = false;
	world.removeChild(bg);
	techHighlight.alpha = 0;
	world.removeChild(techHighlight);
	shopHighlight.alpha = 0;
	world.removeChild(shopHighlight);
	world.removeChild(bg2);
	world.removeChild(Countdown);
	canvas.removeEventListener("mousemove", earthHover)
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

function earthHover(){
	if(checkTechOver(gInput.mouse.x, gInput.mouse.y)){
		techHighlight.alpha = 0.3;
	}else if(checkStoreOver(gInput.mouse.x, gInput.mouse.y)){
		shopHighlight.alpha = 0.3;
	}
	else{
		techHighlight.alpha = 0;
		shopHighlight.alpha = 0;
	}
}