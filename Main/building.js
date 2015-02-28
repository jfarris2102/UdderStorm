/* Assuming game time of 5 years per minute */
//Possible resources
//var money;		//Displayed in millions
//var food;		//Displayed in food units (1 unit feeds a human for a year)
//var water;  	//Displayed in water units (1 unit quenches a human for a year)
//var minerals;	//Displayed in thousand tons
//var energy;		//Displayed in million BTU's
//var happiness;	//Displayed as % (50 is content, <50 upset, >50 happy)
//var popEarth;	//Displayed in billions
//var popMars;	//Displayed in ones
//var air;  		//Displayed as % of oxygen in atmosphere

//Resource incrementers
var moneyInc;
var foodInc;
var energyInc;
var happyInc;
var popInc;
var airInc;

init();

function init(){
	setInterval(update, 6000);
}

function update(){
	moneyInc = 0;
	foodInc = 0;
	waterInc = 0;
	mineralInc = 0;
	energyInc = 0;
	happyInc = 0;
	popInc = 0;
	airInc = 0;
	updateBuild();
	updateResource();
	console.log("food:",food);
	console.log("money:",money);
	console.log("energy:",energy);
	console.log("water:",water);
	console.log("minerals:",minerals);
	console.log("air:",air);
	console.log("popEarth:",popEarth);
	console.log("popMars:",popMars);
	console.log("happiness:",happiness);
}
function updateBuild(){ //Every 6 months game time
	energyInc += turbine + 3*solar;
	foodInc += 2*green + 2*hydro;
	if (popMars/5>live)
	    happyInc--;
	airInc += photosyn*.01;
	mineralInc += mine;
	
	energyInc -= live + mine + green + hydro;
	waterInc -= 2*hydro + .5*green + .5*live;
}

function updateResource(){
	money += moneyInc;
	food += foodInc;
	water += waterInc;
	minerals += mineralInc;
	energy += energyInc;
	happiness += happyInc;
	popMars += popInc;
	air += airInc;
}
