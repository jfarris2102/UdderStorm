//Building sprites

var pop1  = new Sprite();
pop1.width = 40;
pop1.height = 50;
pop1.visible = false;
pop1.id = "pop1";
pop1.sx = 1;
pop1.sy = 1;
pop1.image = Textures.load("images/1.png");

var green1  = new Sprite();
green1.width = 120;
green1.height = 170;
green1.visible = false;
green1.id = "green1";
green1.sx = 3;
green1.sy = 4;
green1.image = Textures.load("images/2.png");

var solar1  = new Sprite();
solar1.width = 40;
solar1.height = 40;
solar1.visible = false;
solar1.id = "solar1";
solar1.sx = 1;
solar1.sy = 1;
solar1.image = Textures.load("images/3.png");

var comms1  = new Sprite();
comms1.width = 40;
comms1.height = 83;
comms1.visible = false;
comms1.id = "comms1";
comms1.sx = 1;
comms1.sy = 1;
comms1.image = Textures.load("images/4.png");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var buildings = [];
var levels = [];
var buildingCount = 0;
var maxBuildings = 250;
var buildingTypes = 4;

function initBuildings(){
	for(var i = 0; i < maxBuildings; i++){
		if(i<buildingTypes)
		    levels[i] = 0;
		var spriteTemp  = new Sprite();
		spriteTemp.id = "null";
		world.addChild(spriteTemp);
		buildings[i] = spriteTemp;
	}
	buildingCount = 0;
}

function makeBuilding(model){
	var temp = makeModel(model);
	buildings[buildingCount].image = temp.image;
	buildings[buildingCount].width = temp.width;
	buildings[buildingCount].height = temp.height;
	buildings[buildingCount].y = sprites[HighlightX][HighlightY].y + tileSize-temp.height;
	buildings[buildingCount].x = sprites[HighlightX][HighlightY].x - (Math.floor(temp.width/tileSize)-1)*tileSize;
	buildings[buildingCount].id = temp.id;
}

function makeGhost(model){
	var temp = getModel(model);
	placing.image = temp.image;
	placing.width = temp.width;
	placing.height = temp.height;
}

function getModel(model){
	switch(model) {
    case 1:
        return pop1;
        break;
    case 2:
        return green1;
        break;
    case 3:
        return solar1;
        break;
    case 4:
        return comms1;
        break;
    default:
        return pop1;
		break;
	}
}

function makeModel(model){
	switch(model) {
    case 1:
        live++; 
        money -= .01;
        return pop1;
        break;
    case 2:
        green++;
        money -= .05;
        return green1;
        break;
    case 3:
        solar++;
        money -= .01;
        return solar1;
        break;
    case 4:
        comms++;
        money -= .02;
        return comms1;
        break;
    default:
        live++;
        money -=.01;
        return pop1;
		break;
	}
}
function getLevel(model){
	return levels[model];
}
function BuildingSize(model){
	var building = getModel(model);
	var temp = {};
	temp.sx = building.sx;
	temp.sy = building.sy;
	return temp;
}
function buildResource(){
	 moneyInc = 0;
	 foodInc = 0;
	 waterInc = 0;
	 energyInc = 0;
	 mineralInc = 0;
	 happyInc = 0;
	 popInc = 0;
	 airInc = 0;
	 resInc = 0;
	updateBuild();
	//updateResource();
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
//1=living, 2=food prod. 3=solar, 4=comm. 5=turbine 6=reactor
//7=mine, 8=lab, 9=photosyn. 10=gravity 11=magnetic
	energy += turbine + solar;
	food += 2*green + 2*hydro;
	if (popMars/5>live)
	    happy--;
	air += photosyn*.01;
	minerals += mine;
	research += .1*comms;
	
	energy -= (live + mine + green + hydro + comms);
	water -= 2*hydro + .5*green + .5*live;
}
function resetVariables(){
	money = 100;
	food = 50;
	water = 50;
	air = 0.04;
	minerals=1000; //Displayed in thousand tons
    energy=100; //Displayed in million BTU's
	money=100; //Displayed in millions
	popEarth=8; //Displayed in billions
	popMars=10; //Displayed in ones
	happiness=80; //Displayed as % (50 is content, <50 upset, >50 happy)
	solar = 0;
	turbine = 0;
	hydro = 0;
	photosyn = 0;
	mine = 0;
	green = 0;
	comms = 0;
	live = 0;
}
function checkOccupied(model, xOff, yOff){
	for(var i = 0; i < BuildingSize(model).sy; i++){
		for(var j = 0; j < BuildingSize(model).sx; j++){
			if(tileGrid[xOff-j][yOff-i].occupied == true) return true;
		}
	}
	return false;
}

