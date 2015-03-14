/*
Buildings.js by Team UdderStorm
A component of Get Your Ass to Mars
This document contains the game's building system, including
the characteristics of each building and the affect that they
have on the global game variables. It also supports the placing
of buildings, which requires that its observe the game matrix and
certain variables to ensure the game's primary source of
interaction functions smoothly
*/

/*Building sprites
each of these sprites has several different properties:
-height and width of the visible building
-whether its visible or not
-its internal id, to be used for reference
-its size in the two dimensions
-its Node variable
-its display image
*/
var pop1  = new Sprite();
pop1.width = 40;
pop1.height = 50;
pop1.visible = false;
pop1.id = "pop1";
pop1.sx = 1;
pop1.sy = 1;
pop1.isNode = 1;
pop1.image = Textures.load("images/1.png");
pop1.cost= 100;

var green1  = new Sprite();
green1.width = 120;
green1.height = 170;
green1.visible = false;
green1.id = "green1";
green1.sx = 3;
green1.sy = 4;
green1.isNode = 2;
green1.image = Textures.load("images/2.png");
green1.cost= 200;

var green2  = new Sprite();
green2.width = 120;
green2.height = 170;
green2.visible = false;
green2.id = "green2";
green2.sx = 3;
green2.sy = 4;
green2.isNode = 2;
green2.image = Textures.load("images/pink.png");
green2.cost= 200;

var solar1  = new Sprite();
solar1.width = 40;
solar1.height = 40;
solar1.visible = false;
solar1.id = "solar1";
solar1.sx = 1;
solar1.sy = 1;
solar1.isNode = 0;
solar1.image = Textures.load("images/3.png");
solar1.cost= 50;

var comms1  = new Sprite();
comms1.width = 40;
comms1.height = 64;
comms1.visible = false;
comms1.id = "comms1";
comms1.sx = 1;
comms1.sy = 1;
comms1.isNode = 0;
comms1.image = Textures.load("images/12.png");
comms1.cost= 50;

var comms2  = new Sprite();
comms2.width = 40;
comms2.height = 83;
comms2.visible = false;
comms2.id = "comms2";
comms2.sx = 1;
comms2.sy = 1;
comms2.isNode = 0;
comms2.image = Textures.load("images/4.png");
comms2.cost= 100;

var wind1  = new Sprite();
wind1.width = 40;
wind1.height = 90;
wind1.visible = false;
wind1.id = "wind1";
wind1.sx = 1;
wind1.sy = 1;
wind1.isNode = 0;
wind1.image = Textures.load("images/5.png");
wind1.cost= 75;

var reactor1  = new Sprite();
reactor1.width = 160;
reactor1.height = 165;
reactor1.visible = false;
reactor1.id = "wind1";
reactor1.sx = 4;
reactor1.sy = 3;
reactor1.isNode = 3;
reactor1.image = Textures.load("images/6.png");
reactor1.cost= 250;

var photo1  = new Sprite();
photo1.width = 40;
photo1.height = 40;
photo1.visible = false;
photo1.id = "photo1";
photo1.sx = 1;
photo1.sy = 1;
photo1.isNode = 0;
photo1.image = Textures.load("images/7.png");
photo1.cost= 75;

var grav1  = new Sprite();
grav1.width = 120;
grav1.height = 120;
grav1.visible = false;
grav1.id = "grav1";
grav1.sx = 3;
grav1.sy = 3;
grav1.isNode = 0;
grav1.image = Textures.load("images/grav.png");
grav1.cost= 750;

var mine1  = new Sprite();
mine1.width = 40;
mine1.height = 40;
mine1.visible = false;
mine1.id = "mine1";
mine1.sx = 1;
mine1.sy = 1;
mine1.isNode = 0;
mine1.image = Textures.load("images/drill.png");
mine1.cost= 150;

var lab1  = new Sprite();
lab1.width = 120;
lab1.height = 90;
lab1.visible = false;
lab1.id = "lab1";
lab1.sx = 3;
lab1.sy = 2;
lab1.isNode = 2;
lab1.image = Textures.load("images/tent.png");
lab1.cost= 125;

var lab2  = new Sprite();
lab2.width = 40;
lab2.height = 51;
lab2.visible = false;
lab2.id = "lab2";
lab2.sx = 1;
lab2.sy = 1;
lab2.isNode = 6;
lab2.image = Textures.load("images/lab.png");
lab2.cost= 150;

var lab3  = new Sprite();
lab3.width = 120;
lab3.height = 61;
lab3.visible = false;
lab3.id = "lab3";
lab3.sx = 3;
lab3.sy = 1;
lab3.isNode = 5;
lab3.image = Textures.load("images/research.png");
lab3.cost= 225;

var factory1  = new Sprite();
factory1.width = 160;
factory1.height = 74;
factory1.visible = false;
factory1.id = "factory1";
factory1.sx = 4;
factory1.sy = 1;
factory1.isNode = 4;
factory1.image = Textures.load("images/factory.png");
factory1.cost= 500;

var wind2  = new Sprite();
wind2.width = 40;
wind2.height = 103;
wind2.visible = false;
wind2.id = "factory1";
wind2.sx = 1;
wind2.sy = 1;
wind2.isNode = 0;
wind2.image = Textures.load("images/13.png");
wind2.cost= 125;

var airExchanger  = new Sprite();
airExchanger.width = 80;
airExchanger.height = 107;
airExchanger.visible = false;
airExchanger.id = "airExchanger";
airExchanger.sx = 2;
airExchanger.sy = 1;
airExchanger.isNode = 0;
airExchanger.image = Textures.load("images/air.png");
airExchanger.cost= 750;

var magGen  = new Sprite();
magGen.width = 160;
magGen.height = 53;
magGen.visible = false;
magGen.id = "magGen";
magGen.sx = 4;
magGen.sy = 1;
magGen.isNode = 0;
magGen.image = Textures.load("images/mag.png");
magGen.cost= 750;

var pop2  = new Sprite();
pop2.width = 160;
pop2.height = 132;
pop2.visible = false;
pop2.id = "pop2";
pop2.sx = 4;
pop2.sy = 3;
pop2.isNode = 0;
pop2.image = Textures.load("images/center.png");
pop2.cost= 300;

var drill  = new Sprite();
drill.width = 40;
drill.height = 48;
drill.visible = false;
drill.id = "drill";
drill.sx = 1;
drill.sy = 1;
drill.isNode = 0;
drill.image = Textures.load("images/drill.png");
drill.cost= 100;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var buildings = [];//creates an array to hold all of the placed buildings
var beingBuilt = false;
var buildingCount = 0;//the total number of placed buildings
var maxBuildings = 250;//sets a cap for the number of buildings that can be placed
var buildingTypes = 19; //# of different types of buildings that can be placed
var storeBuildings = 15;
var factoryBuildings = 20;
var buidlingsAvailable = []; //Array of building counts
var numberOf = [];
var level = [];
var launchCargo = [];
var buidlingUnlocked = [];
emptyLaunchCargo();

for(var i = 1; i <= buildingTypes; i++){
	numberOf[i] = 0; //sets the number of each building to 0
	//level[i] = 0;   //sets the level of each building to 0
	buidlingsAvailable[i] = 0; //sets the number of each building that is available to 0
	buidlingUnlocked[i] = false;
}

for(var i = 1; i<=28; i++){
	level[i] = 0;
}
/*level[7] = 0;
level[8] = 0;
level[9] = 0;
level[10] = 0;
level[11] = 0;
level[12] = 0;*/

function emptyLaunchCargo(){
	for(var i = 1; i <= buildingTypes; i++){
		launchCargo[i] = 0;//sets the number of each building that is available to 0
	}
}

//starts the building process
function initBuildings(){
	for(var i = 0; i < maxBuildings; i++){
		var spriteTemp  = new Sprite();
		spriteTemp.id = "null";
		world.addChild(spriteTemp);
		buildings[i] = spriteTemp;
	}
	buildingCount = 0;
}

//adds a new building to the surface of mars
function makeBuilding(model){
	var temp = getModel(model);
	numberOf[model]++;
	if(model==1 && numberOf[model]==1)
	    health = 80;
	buildings[buildingCount].image = temp.image;
	buildings[buildingCount].width = temp.width;
	buildings[buildingCount].height = temp.height;
	buildings[buildingCount].y = sprites[HighlightX][HighlightY].y + tileSize-temp.height;
	buildings[buildingCount].x = sprites[HighlightX][HighlightY].x - (Math.floor(temp.width/tileSize)-1)*tileSize;
	buildings[buildingCount].id = temp.id;
}

//creates a ghost of the building that we are in the process of placing
function makeGhost(model){
	var temp = getModel(model);
	placing.image = temp.image;
	placing.width = temp.width;
	placing.height = temp.height;
}

//Starter buildings
buidlingUnlocked[1] = true;
buidlingUnlocked[3] = true;
buidlingUnlocked[8] = true;
buidlingUnlocked[10] = true;
buidlingUnlocked[14] = true;

//returns a building sprite based on the current model id
function getModel(model){
	switch(model) {
    case 1:
        return pop1;
    case 2:
        return pop2;
    case 3:
        return solar1;
    case 4:
        return photo1;
	case 5:
	    return green1;
	case 6:
        return green2;
	case 7:
	   return mine1;
	case 8:
        return wind1;
    case 9: 
        return wind2;
    case 10: 
        return lab1;
    case 11:
        return lab2;
    case 12:
        return lab3;
	case 13:
        return factory1;
	case 14:
        return comms1;
	case 15:
        return comms2;
	case 16:
        return reactor1;
	case 17:
        return grav1;
	case 18:
        return airExchanger;
	case 19:
        return magGen;
    default:
        return pop1;
	}
}

function getNumberOf(model){
	if(model == 9)
	console.log(numberOf[model]);
	return numberOf[model];
}
function getLevel(model){
	return level[model];
}
function levelUp(model){
	level[model]++;
}
//returns the dimensions that the building "model" has while placed
function BuildingSize(model){
	var building = getModel(model);
	var temp = {};
	temp.sx = building.sx;
	temp.sy = building.sy;
	return temp;
}

//sets all of our increment variables to 0,
//updates them to their proper values, increments our resource values,
//and finally prints the resource variables to the console

function buildResource(){
	foodInc = 0;
	waterInc = 0;
	energyInc = 0;
	mineralInc = 0;
	healthInc = 0;
	popInc = 0;
	airInc = 0;
	resInc = 0;
	atmosInc = 0;
	tempInc = 0;
	updateBuild();
	updateResource();
	/*console.log("food:",food);
	console.log("money:",money);
	console.log("energy:",energy);
	console.log("water:",water);
	console.log("minerals:",minerals);
	console.log("air:",air);
	console.log("popEarth:",popEarth);
	console.log("popMars:",popMars);
	console.log("happiness:",happiness);*/
}

//sets the variables that should be used to increment our overall resource list
function updateBuild(){ //Every 6 months game time
	greenResources();
	solarResources();
	turbineResources();
	reactorResources();
	liveResources();
	photoResources();
	gravityResources();
	mineResources();
	researchResources();
	energyConsum();
	incPressure();
	incTemperature();
	getHealth();
	if(health==0) popMars -=6;
	if (getNumberOf(1)>0 && popMars<0) gameOverMan();
	console.log(energy);
	//increaseTerra(); //increases terra values
}

//increases all resource variables by a predetermined amount
//should be called regularly by a loop to run the game
function updateResource(){
	//health += healthInc;
	food += foodInc;
	if (food<0) food = 0;
	water += waterInc;
	if(water<0) water = 0;
	minerals += mineralInc;
	console.log(energy);
	energy += energyInc;
	if(energy<0) energy = 0;
	console.log(energy);
	popMars += popInc;
	popEarth += popEarth*growthRate;
	air += airInc;
	if(air > 20) air = 20;
	atmosphere += atmosInc;
	if(atmosphere>100) atmosphere = 100;
	temperature += tempInc;
	if(temperature>60) temperature = 60;
}

//resets all of the stored variables to their default values
//useful for starting a new game
function resetVariables(){
	food = 50;
	water = 50;
	air = 0.14;
	minerals = 0; //Displayed in thousand tons
    energy = 100; //Displayed in million BTU's
	money=750; //Displayed in millions
	popEarth=7.3; //Displayed in billions
	atmosphere = 0.6;
	temperature = -67;
	popMars=0; //Displayed in ones
	health=0; //Displayed as % (50 is content, <50 upset, >50 happy)
	numberOf[solar] = 0;
	numberOf[turbine] = 0;
	numberOf[photosyn] = 0;
	numberOf[mine] = 0;
	numberOf[green] = 0;
	numberOf[comms] = 0;
	numberOf[live] = 0;
	numberOf[days] = 0;
	firstBuilding = true;
	researchPoints = 500;
	moneyMult = 1;
	rocketType = 0;
	damageFactor = 1;
	energyFactor = 1;
	growthRate = .012;
	years = 2015;
	months = 0;
	days = 0;
	diplomacyPoints = 0;
	economyPoints = 0;
	sustainabilityPoints = 0;
}

//checks if any component of the building model will hit an occupied grid
function checkOccupied(model, xOff, yOff){
	for(var i = 0; i < BuildingSize(model).sy; i++){
		for(var j = 0; j < BuildingSize(model).sx; j++){
			if(tileGrid[xOff-j][yOff-i].occupied == true) return true;
		}
	}
	return false;
}

function checkNode(model, xOff, yOff){
	if(getModel(model).isNode == 0) return true;
	var top = -1;
	var bot = BuildingSize(model).sy;
	var left = -1;
	var right = BuildingSize(model).sx;
	if(getModel(model).isNode == 2){ //greenhouse
		if(tileGrid[xOff-Math.floor((right/2))][yOff-top].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 3){ //reactor
		if(tileGrid[xOff+1][yOff+top].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 4){ //factory
		if(tileGrid[xOff-4][yOff+top+1].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 5){ //research
		if(tileGrid[xOff+1][yOff+top+1].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 6){ //lab
		if(tileGrid[xOff-Math.floor((right/2))][yOff-bot].node == true) return true;
		if(tileGrid[xOff-Math.floor((right/2))][yOff-top].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 1){
		if(tileGrid[xOff-Math.floor((right/2))][yOff-bot].node == true) return true;
		if(tileGrid[xOff-Math.floor((right/2))][yOff-top].node == true) return true;
		if(tileGrid[xOff-right][yOff-Math.floor((bot/2))].node == true) return true;
		if(tileGrid[xOff-left][yOff-Math.floor((bot/2))].node == true) return true;
	}
	return false;
}
