/*
 * Levels.js by Team UdderStorm
 * A component of Get Your Ass to Mars
 * Used to assess the output/usage of resources by any
 * building, based on its current upgrade level
 */
var live = 1;
var live2 = 2;
//var solar = 3;
var photosyn = 4;
//var green = 5;
var pink = 6;
//var mine = 7;
//var turbine = 8;
var turbine2 = 9;
var lab = 10;
var lab_2 = 11;
var lab_3 = 12;
var factory = 13;
var gravity = 14;
var comms = 15;
var comms_2 = 16;
var area = 144800000 //sq. m. area of Mars
//var reactor = 17;
//var sust1 = 18;
//var sust2 = 19;
//var sust3 = 20;
var researchCap;

function greenResources(){
	switch(getLevel(green)){
		case 0:
		foodInc += getNumberOf(green)*5 + getNumberOf(pink)*6;
		waterInc -= (getNumberOf(green)*3 + getNumberOf(pink)*2);
		airInc += getNumberOf(green)*.01 + getNumberOf(pink)*.02;
		energyInc -= (getNumberOf(green)*1 + getNumberOf(pink)*.5);
		break;
		case 1:
		foodInc += getNumberOf(green)*7 + getNumberOf(pink)*9;
		waterInc -= (getNumberOf(green)*2 + getNumberOf(pink)*1);
		airInc += getNumberOf(green)*.02 + getNumberOf(pink)*.03;
		energyInc -= (getNumberOf(green)*.5 + getNumberOf(pink)*.2);
		break;
		case 2:
		foodInc += getNumberOf(green)*9 + getNumberOf(pink)*11;
		waterInc -= (getNumberOf(green)*1 + getNumberOf(pink)*.5);
		airInc += getNumberOf(green)*.02 + getNumberOf(pink)*.03;
		energyInc -= (getNumberOf(green)*.2 + getNumberOf(pink)*.1);
		break;
		default:
		break;
	}
	
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
function mineResources(){//needs adjusting
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
}
function researchResources(){
    energyInc -= getNumberOf(comms)*.5;
	energyInc -= getNumberOf(comms_2)*1;
    researchCap = 5*getNumberOf(comms) + 10*getNumberOf(comms2);
    resInc += 5*getNumberOf(lab) + 10*getNumberOf(lab_2) + 20*getNumberOf(lab_3);
    if(resInc > researchCap) resInc = researchCap;
}
function liveResources(){
	energyInc -= getNumberOf(live)*.1;
	energyInc -= getNumberOf(live2)*.2;
}
function photoResources(){
	airInc += getNumberOf(photosyn)*.01;
	energyInc += getNumberOf(photosyn)*1;
	console.log(getNumberOf(photosyn));
}
function gravityResources(){
	energyInc -= getNumberOf(gravity)*5;
	gravForce = 3.7 + getNumberOf(gravity);
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

function incPressure(){
	atmosInc += getNumberOf(factory)*200000*gravForce / area;
	atmosInc += getNumberOf(reactor)*100000*gravForce / area;
	atmosInc += getLevel(terra4)*400000*gravForce / area;
	atmosInc += getLevel(terra5)*800000*gravForce / area;
	if(getLevel(terra2)<3 && atmosInc!=0)
	    atmosInc -= .04;
}
 
function incTemperature(){
	if(atmosphere < 1) return;
	tempInc += atmosphere/100;
	tempInc += atmosphere/100*getLevel(terra4)*.1;
}

function getHealth(){
	airInc -= popMars*.001;
	
	if (getLevel(terra2)<1) healthInc -= 2.5;
	healthInc -= gravForce/9.8 - 1;
	if(getNumberOf(live)+3*getNumberOf(live2) < popMars/5){
		healthInc -= 2;
	}
	if (food < popMars*5){
		foodInc -= popMars*.25;
		healthInc -= 1;
	}else foodInc -= popMars*.5;
	if (water < popMars*5){
		waterInc -= popMars*.25;
		healthInc -= 1;
	}else waterInc -= popMars*.5;
	
	if(healthInc == 0) healthInc = 1;
	health += healthInc;
	if(health < 0) health=0;
	if(health > 100) health = 100;
	
	return health;
}
