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
var buildingCount = 0;
var maxBuildings = 250;
var buildingTypes = 4;
for(var i = 0; i < maxBuildings; i++){
	var spriteTemp  = new Sprite();
	spriteTemp.id = "null";
	world.addChild(spriteTemp);
	buildings[i] = spriteTemp;
}

function makeBuilding(model){
	var temp = getModel(model);
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

function BuildingSize(model){
	var building = getModel(model);
	var temp = {};
	temp.sx = building.sx;
	temp.sy = building.sy;
	return temp;
}

function checkOccupied(model, xOff, yOff){
	for(var i = 0; i < BuildingSize(model).sy; i++){
		for(var j = 0; j < BuildingSize(model).sx; j++){
			if(tileGrid[xOff-j][yOff-i].occupied == true) return true;
		}
	}
	return false;
}