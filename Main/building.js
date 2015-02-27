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

//Possible building types
var tunnel = [];
var tunnelLvl;
var mine = [];
var mineLvl;
var solar = [];
var solarLvl;
var photosyn = [];
var photosynLvl;
var hydro = [];
var hyrdoLvl;
var turbine = [];
var turbineLvl;
var living = [];
var livingLvl;
var greenhouse = [];
var greenhouseLvl;

initGame();

function initGame(){
	setInterval(update, 6000);
}

function draw(){
	/*Insert code to draw sprites*/
	
	if(building){
		
	}
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
	energyInc += turbine.length + 3*solar.length;
	foodInc += 2*greenhouse.length + 2*hydro.length;
	if (popMars/5>living.length)
	    happyInc--;
	airInc += photosyn.length*.01;
	mineralInc += mine.length;
	
	energyInc -= living.length + mine.length + greenhouse.length + hydro.length;
	waterInc -= 2*hydro.length + .5*greenhouse.length + .5*living.length;
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

var Building = function(x,y){
	this.x = x;
	this.y = y;
};
