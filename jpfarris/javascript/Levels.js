/*
 * Levels.js by Team UdderStorm
 * A component of Get Your Ass to Mars
 * Used to assess the output/usage of resources by any
 * building, based on its current upgrade level
 */
var live = 1;
var live2 = 2;
var solar = 3;
var photosyn = 4;
var green = 5;
var pink = 6;
var mine = 7;
var turbine = 8;
var turbine2 = 9;
var lab = 10;
var lab2 = 11;
var lab3 = 12;
var factory = 13;
var gravity = 14;
var comms = 15;
var comms2 = 16;
var reactor = 17;

function greenResources(){
	switch(getLevel(green)){
		case 0:
		foodInc += getNumberOf(green)*5;
		waterInc -= getNumberOf(green)*3;
		airInc += getNumberOf(green)*.01;
		energyInc -= getNumberOf(green)*1;
		break;
		case 1:
		foodInc += getNumberOf(green)*7;
		waterInc -= getNumberOf(green)*2;
		airInc += getNumberOf(green)*.02;
		energyInc -= getNumberOf(green)*.5;
		break;
		case 2:
		foodInc += getNumberOf(green)*9;
		waterInc -= getNumberOf(green)*1;
		airInc += getNumberOf(green)*.02;
		energyInc -= getNumberOf(green)*.2;
		break;
		default:
		break;
	}
	switch(getLevel(pink)){
		case 0:
		foodInc += getNumberOf(pink)*6;
		waterInc -= getNumberOf(pink)*2;
		airInc += getNumberOf(pink)*.02;
		energyInc -= getNumberOf(pink)*.5;
		break;
		case 1:
		foodInc += getNumberOf(pink)*9;
		waterInc -= getNumberOf(pink)*1;
		airInc += getNumberOf(pink)*.03;
		energyInc -= getNumberOf(pink)*.2;
		case 2:
		foodInc += getNumberOf(pink)*11;
		waterInc -= getNumberOf(pink)*.5;
		airInc += getNumberOf(pink)*.03;
		energyInc -= getNumberOf(pink)*.1;
	}
	foodInc -= popMars*.5;
	waterInc -= popMars*.5;
	airInc -= popMars*.001;
	console.log("green: ",energyInc);
}
function solarResources(){
	switch(getLevel(solar)){
		case 0:
		energyInc += getNumberOf(solar)*1;
		break;
		case 1:
		energyInc += getNumberOf(solar)*1.5;
		break;
		case 2:
		energyInc += getNumberOf(solar)*2.5;
		break;
		case 3:
		energyInc += getNumberOf(solar)*5;
		break;
        case 4:
        energyInc += getNumberOf(solar)*5;
        break;
        default:
		break;
	}
	console.log("solar: ",energyInc);
}
function turbineResources(){
	switch(getLevel(turbine)){
		case 0:
		energyInc += getNumberOf(turbine)*1;
		break;
		case 1:
		energyInc += getNumberOf(turbine)*1.5;
		break;
		case 2:
		energyInc += getNumberOf(turbine)*1.5;
		break;
		default:
		break;
	}
	energyInc += getNumberOf(turbine2)*2.5;
	console.log("turbine: ",energyInc);
}
function reactorResources(){
	switch(getLevel(reactor)){
		case 0:
		energyInc += getNumberOf(reactor)*5;
		break;
		case 1:
		energyInc += getNumberOf(reactor)*8;
		break;
		case 2:
		energyInc += getNumberOf(reactor)*10;
		break;
		case 3:
		energyInc += getNumberOf(reactor)*15;
		break;
		default:
		break;
	}
	console.log("reactor: ",energyInc);
}
function mineResources(){
	switch(getLevel(mine)){
		case 0:
		mineralInc += getNumberOf(mine)*.25;
		energyInc -= getNumberOf(mine)*.5;
		break;
		case 1:
		mineralInc += getNumberOf(mine)*.5;
		energyInc -= getNumberOf(mine)*.75;
		break;
		case 2:
		mineralInc += getNumberOf(mine)*.5;
		energyInc -= getNumberOf(mine)*.75;
		break;
		case 3:
		mineralInc += getNumberOf(mine)*2;
		energyInc -= getNumberOf(mine)*3;
		break;
		default:
		break;
	}
	console.log("mine: ",energyInc);
}
function commsResources(){
    energyInc -= getNumberOf(comms)*.5;
	energyInc -= getNumberOf(comms2)*1;

	console.log("comms: ",energyInc);
}
function liveResources(){
	if(getNumberOf(live)+3*getNumberOf(live2) < popMars/5){
		happyInc -= 2;
	}
	energyInc -= getNumberOf(live)*.3;
	energyInc -= getNumberOf(live2)*.5;
}
function photoResources(){
	airInc += getNumberOf(photosyn)*.01;
	energyInc += getNumberOf(photosyn)*1;
	console.log(getNumberOf(photosyn));
	console.log("photo: ",energyInc);
}
function gravityResources(){
	energyInc -= getNumberOf(gravity)*5;
	console.log("gravity: ",energyInc);
	atmosInc += getNumberOf(gravity)*.1;
}
function energyConsum(){
	var eFactorInc = 0;
	var dFactorInc = 0;
	switch(getLevel(sust1)){
		case 0:
		break;
		case 4:
		eFactorInc -= .1;
		case 3:
		eFactorInc -= .1;
		case 2:
		eFactorInc -= .1;
		case 1:
		eFactorInc -= .1;
		default:
		break;
	}
	switch(getLevel(sust2)){
		case 0:
		break;
		case 4:
		dFactorInc -= .1;
		eFactorInc -= .05;
		case 3:
		dFactorInc -= .05;
		eFactorInc -= .05;
		case 2:
		dFactorInc -= .1;
		case 1:
		dFactorInc -= .1;
		default:
		break;
	}
	switch(getLevel(sust3)){
		case 0:
		break;
		case 3:
		growthRate -= 0.001;
	    if(growthRate < .001)
	        growthRate = .001;
		case 2:
		eFactorInc -= .05;
		dFactorInc -= .05;
		case 1:
		eFactorInc -= .05;
		default:
		break;
	}
}
 

