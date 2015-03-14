/*
Buildings.js by Team UdderStorm
A component of Get Your Ass to Mars
This document contains the game's
Terraforming calculations.
*/

var TerraFormed = 0;
var terraGrav = 0;
var terraAir = 0;
var terraMag = 0;

function checkTerra(){
	if (TerraFormed >= 100){
		Win();
	}else if (TerraFormed >= 90){
		sandSprite.image = Textures.load("images/transitionSand4.png");
		rockSprite.image = Textures.load("images/transitionRock4.png");
		blockedSprite.image = Textures.load("images/Blocked4.png");
		dustStorm.alpha = 0.2;
		if(marsActive) drawTileEngine();
	} else if (TerraFormed >= 70){
		sandSprite.image = Textures.load("images/transitionSand3.png");
		rockSprite.image = Textures.load("images/transitionRock3.png");
		blockedSprite.image = Textures.load("images/Blocked3.png");
		dustStorm.alpha = 0.4;
		if(marsActive) drawTileEngine();
	}else if (TerraFormed >= 50){
		sandSprite.image = Textures.load("images/transitionSand2.png");
		rockSprite.image = Textures.load("images/transitionRock2.png");
		blockedSprite.image = Textures.load("images/Blocked2.png");
		dustStorm.alpha = 0.6;
		if(marsActive) drawTileEngine();
	}else if (TerraFormed >= 25){
		sandSprite.image = Textures.load("images/transitionSand1.png");
		rockSprite.image = Textures.load("images/transitionRock1.png");
		blockedSprite.image = Textures.load("images/Blocked1.png");
		dustStorm.alpha = 0.8;
		if(marsActive) drawTileEngine();
	}
}

haxMult = 0;
function getProgress(){
	TerraFormed = Math.min((Math.floor((atmosphere/100 + air/20 + (temperature+68)/128)*100/3) + haxMult),100);
	return TerraFormed;
}

function increaseTerra(){ //Not in use
	if(energy >= 1){ //Requires some energy
		terraGrav += getNumberOf(17);
		if(terraGrav > 33) terraGrav = 33;
		terraAir += getNumberOf(18);
		if(terraAir > 34) terraGrav = 34;
		terraMag += getNumberOf(19);
		if(terraMag > 33) terraGrav = 33;
		TerraFormed = (terraGrav + terraAir + terraMag);
	}
}



