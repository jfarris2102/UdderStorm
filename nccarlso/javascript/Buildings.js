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
grav1.width = 40;
grav1.height = 80;
grav1.visible = false;
grav1.id = "grav1";
grav1.sx = 1;
grav1.sy = 1;
grav1.isNode = 0;
grav1.image = Textures.load("images/8.png");
grav1.cost= 750;

var mine1  = new Sprite();
mine1.width = 40;
mine1.height = 40;
mine1.visible = false;
mine1.id = "mine1";
mine1.sx = 1;
mine1.sy = 1;
mine1.isNode = 0;
mine1.image = Textures.load("images/9.png");
mine1.cost= 150;

var lab1  = new Sprite();
lab1.width = 40;
lab1.height = 40;
lab1.visible = false;
lab1.id = "lab1";
lab1.sx = 1;
lab1.sy = 1;
lab1.isNode = 0;
lab1.image = Textures.load("images/10.png");
lab1.cost= 100;

var factory1  = new Sprite();
factory1.width = 40;
factory1.height = 40;
factory1.visible = false;
factory1.id = "factory1";
factory1.sx = 1;
factory1.sy = 1;
factory1.isNode = 0;
factory1.image = Textures.load("images/11.png");
factory1.cost= 350;

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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var buildings = [];//creates an array to hold all of the placed buildings
var beingBuilt = false;
var buildingCount = 0;//the total number of placed buildings
var maxBuildings = 250;//sets a cap for the number of buildings that can be placed
var buildingTypes = 20; //# of different types of buildings that can be placed
var buidlingsAvailable = []; //Array of building counts
var numberOf = [];
var level = [];
var launchCargo = [];
var buidlingUnlocked = [];
emptyLaunchCargo();

for(var i = 1; i <= buildingTypes; i++){
	numberOf[i] = 0; //sets the number of each building to 0
	//level[i] = 0;   //sets the level of each building to 0
	buidlingsAvailable[i] = 0;//sets the number of each building that is available to 0
	buidlingUnlocked[i] = false;
}

for(var i = 1; i<=15; i++){
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
buidlingUnlocked[5] = true;
buidlingUnlocked[8] = true;
buidlingUnlocked[10] = true;
buidlingUnlocked[15] = true;
buidlingUnlocked[17] = true;

//returns a building sprite based on the current model id
function getModel(model){
	switch(model) {
    case 1:
        return pop1;
    case 2:
        return pop1; //later pop2
    case 3:
        return solar1;
    case 4:
        return photo1;
	case 5:
	    return green1;
	case 6:
        return green1; //later green2
	case 7:
	   return mine1;
	case 8:
        return wind1;
    case 9: 
        return wind2;
    case 10: 
        return lab1;
    case 11:
        return lab1; //later lab2
    case 12:
        return lab1; //later lab3
	case 13:
        return factory1;
	case 14:
        return grav1;
	case 15:
        return comms1;
	case 16:
        return comms2;
	case 17:
        return reactor1;
	case 18:
        return reactor1; //later reactor2
	case 19:
        return reactor1; //later reactor3
	case 20:
        return reactor1; //later reactor4
    default:
        return pop1;
	}
}

//sets the building model to the correct one based on the number provided
function makeModel(model){ //currently unused, will use later for mars factory based construction?
	numberOf[model]++;
	switch(model) {
    case 1:
        money -= .01;
        return pop1;
    case 2:
        money -= .05;
        return green1;
    case 3:
        money -= .01;
        return solar1;
    case 4:
        money -= .02;
        return comms1;
	case 5:
        money -= .01;
        return wind1;
    case 6:
        money -= .05;
        return reactor1;
    default:
        money -=.01;
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
var moneyMult = 1;
var up=0;
function buildResource(){
	moneyInc = 5 * moneyMult;
	researchPoints += 10;
	foodInc = 0;
	waterInc = 0;
	energyInc = 0;
	mineralInc = 0;
	happyInc = 0;
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
	//1=living, 2=food prod. 3=solar, 4=comm. 5=turbine 6=reactor
//7=mine, 8=lab, 9=photosyn. 10=gravity 11=factory
/*	energyInc += numberOf[turbine] + 3*numberOf[solar];
	foodInc += 2*numberOf[green];
	if (popMars/5>numberOf[live])
	    happyInc--;
	airInc += numberOf[photosyn]*.01;
	mineralInc += numberOf[mine];
	resInc += .1*numberOf[comms];
	
	energyInc -= numberOf[live] + numberOf[mine] + numberOf[green] + numberOf[comms];
	waterInc -= .5*numberOf[green] + .5*numberOf[live];*/
	greenResources();
	solarResources();
	turbineResources();
	reactorResources();
	liveResources();
	photoResources();
	gravityResources();
	mineResources();
	commsResources();
	energyConsum();
	console.log(energy);
}

//increases all resource variables by a predetermined amount
//should be called regularly by a loop to run the game
function updateResource(){
	money += moneyInc;
	food += foodInc;
	water += waterInc;
	minerals += mineralInc;
	console.log(energy);
	energy += energyInc;
	console.log(energy);
	happiness += happyInc;
	popMars += popInc;
	//if(up%2==0)
	popEarth += popEarth*growthRate;
	up++;
	air += airInc;
	atmosphere += atmosInc;
	temperature += tempInc;
}

//resets all of the stored variables to their default values
//useful for starting a new game
function resetVariables(){
	food = 50;
	water = 50;
	air = 0.14;
	minerals=1000; //Displayed in thousand tons
    energy=100; //Displayed in million BTU's
	money=250; //Displayed in millions
	popEarth=7.3; //Displayed in billions
	atmosphere = 0.6;
	temperature = -67;
	popMars=0; //Displayed in ones
	happiness=80; //Displayed as % (50 is content, <50 upset, >50 happy)
	numberOf[solar] = 0;
	numberOf[turbine] = 0;
	numberOf[photosyn] = 0;
	numberOf[mine] = 0;
	numberOf[green] = 0;
	numberOf[comms] = 0;
	numberOf[live] = 0;
	numberOf[days] = 0;
	firstBuilding = true;
	researchPoints = 250;
	moneyMult = 1;
	rocketType = 0;
	damageFactor = 1;
	energyFactor = 1;
	growthRate = .012;
	years = 2015;
	months = 0;
	days = 0;
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
	if(getModel(model).isNode == 2){
		if(tileGrid[xOff-Math.floor((right/2))][yOff-top].node == true) return true;
		else return false;
	} else if(getModel(model).isNode == 3){
		if(tileGrid[xOff+1][yOff+top].node == true) return true;
		else return false;
	}
	if(tileGrid[xOff-Math.floor((right/2))][yOff-bot].node == true) return true;
	if(tileGrid[xOff-Math.floor((right/2))][yOff-top].node == true) return true;
	if(tileGrid[xOff-right][yOff-Math.floor((bot/2))].node == true) return true;
	if(tileGrid[xOff-left][yOff-Math.floor((bot/2))].node == true) return true;
	return false;
}
