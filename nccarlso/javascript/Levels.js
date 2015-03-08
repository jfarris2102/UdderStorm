/*
 * Levels.js by Team UdderStorm
 * A component of Get Your Ass to Mars
 * Used to assess the output/usage of resources by any
 * building, based on its current upgrade level
 */

function greenResources(){
	switch(getLevel[green]){
		case 0:
		foodInc += getNumberOf[green]*5;
		waterInc -= getNumberOf[green]*3;
		airInc += getNumberOf[green]*.01;
		energyInc -= getNumberOf[green]*1
		break;
		case 1:
		foodInc += getNumberOf[green]*7;
		waterInc -= getNumberOf[green]*2;
		airInc += getNumberOf[green]*.02;
		energyInc -= getNumberOf[green]*.5;
		break;
		case 2:
		foodInc += getNumberOf[green]*9;
		waterInc -= getNumberOf[green]*1;
		airInc += getNumberOf[green]*.02;
		energyInc -= getNumberOf[green]*.2;
		break;
		case 3:
		foodInc += getNumberOf[green]*10;
		waterInc -= getNumberOf[green]*.5;
		airInc += getNumberOf[green]*.03;
		energyInc -= getNumberOf[green]*.1;
		break;
	}
}
function (){
	var total = 0;
}
function solarResources(){
	switch(getLevel[solar]){
		case 0:
		energyInc += getNumberOf[solar]*1;
		break;
		case 1:
		energyInc += getNumberOf[solar]*1.5;
		break;
		case 2:
		energyInc += getNumberOf[solar]*2.5;
		break;
		case 3:
		energyInc += getNumberOf[solar]*5;
		break;
        case 4:
        energyInc += getNumberOf[solar]*5;
        break;
	}
}
function turbineResources(){
	switch(getLevel[turbine]){
		case 0:
		energyInc += getNumberOf[turbine]*1;
		break;
		case 1:
		energyInc += getNumberOf[turbine]*1.5;
		break;
		case 3:
		energyInc += getNumberOf[turbine]*1.75;
		break;
		case 4:
		energyInc += getNumberOf[turbine]*3.5;
		break;
	}
}
function reactorResources(){
	switch(getLevel[reactor]){
		case 0:
		energyInc += getNumberOf[reactor]*5;
		break;
		case 1:
		energyInc += getNumberOf[reactor]*8;
		break;
		case 2:
		energyInc += getNumberOf[reactor]*10;
		break;
		case 3:
		energyInc += getNumberOf[reactor]*15;
		break;
	}
}
function mineResources(){
	switch(getLevel[mine]){
		case 0:
		mineInc += getNumberOf[mine]*.25;
		energyInc -= getNumberOf[mine]*.5;
		break;
		case 1:
		mineInc += getNumberOf[mine]*.5;
		energyInc -= getNumberOf[mine]*.75;
		break;
		case 2:
		mineInc += getNumberOf[mine]*.5;
		energyInc -= getNumberOf[mine]*.75;
		break;
		case 3:
		mineInc += getNumberOf[mine]*2;
		energyInc -= getNumberOf[mine]*3;
	}
}
function commsResources(){
	switch(getLevel[comms]){
		case 0:
		energyInc -= getNumberOf[comms]*.5;
		break;
		case 1:
		energyInc -= getNumberOf[comms]*1;
		break;
	}
}
function liveResources(){
/*	switch(getLevel[live]){
		case 0:
		if()
	}
}*/
function photoResources(){
	var total = 0;
}
function gravityResources(){
	
}

