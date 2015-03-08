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
		energyInc -= getNumberOf[green]*1;
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
		default:
		break;
	}
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
        default:
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
		default:
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
		default:
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
		break;
		default:
		break;
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
		default:
		break;
	}
}
function liveResources(){
	switch(getLevel[live]){
		case 0:
		if(getNumberOf[live] < popMars/3){
			happyInc -= 3;
		}
		energyInc -= getNumberOf[live]*.3;
		break;
		case 1:
		if(getNumberOf[live] < popMars/10){
			happyInc -= 3;
		}
		energyInc -= energyInc -= getNumberOf[comms]*.5;
		default:
		break;
	}
}
function photoResources(){
	airInc += getNumberOf[photosyn]*.01;
	energyInc += getNumberOf[photosyn]*1;
}
function gravityResources(){
	energyInc -= getNumberOf[gravity]*5;
}

