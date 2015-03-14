/*
Mars.js by Team UdderStorm
A component of Get Your Ass to Mars
This program creates a tile engine to represent the surface of mars,
and then interfaces with the building system in Building.js to 
populate it with buildings throughout the game
-the initial state of the surface is a barren landscape consisting 
of sandy soil and rocky soil, with scattered larger rocks. 
*/
var marsActive = false;
var firstBuilding = true;

var sfx=new Audio('sound/Wind.mp3');
sfx.loop=true;

document.oncontextmenu=function (){return false;}

function startMars(){
	marsActive = true;
	drawTileEngine();
	canvas.addEventListener("mousemove", drawTileEngine, false);
	dustStorm.visible = true;
	redrawHUD();
	sfx.play();
}

function stopMars(){
	marsActive = false;
	placeBuildingMode = false;
	flip = false;
	flop = false;
	highlight.alpha = 0;
	placing.alpha = 0;
	highlightM.alpha = 0;
	dustStorm.visible = false;
	canvas.removeEventListener("mousemove", drawTileEngine);
	sfx.pause();
}

function newGameMars(){
	for ( i=0; i< tileGrid.length; i++ ) {
		for ( j = 0; j< tileGrid[i].length; j++ ) {
			if(tileGrid[i][j].type!=blockedTile) {
				tileGrid[i][j].occupied =false;
			}
			else{
				tileGrid[i][j].occupied =true;
			}
		}
	}
	for(var i = 0; i < buildingCount; i++){
		world.removeChild(buildings[i]);
	}
	placeBuildingMode = false;
	flip = false;
	flop = false;
	myX = worldSize/2;
	myY = worldSize/2;
	selection = 1;
	highlight.alpha = 0;
	placing.alpha = 0;
	initBuildings();
}

//dimension variables(easy to edit)
var worldSize=12000;
var tileSize=40;
//variable holds the # of tiles per line
var tilesPerLine= Math.floor(worldSize/tileSize);
//Variables for the display functions
//should be how big the canvas is -160 for HUD
var drawHeight=640;
var drawWidth=800;
//holds the displayed number visual tiles
var drawTileWidth = Math.floor(drawWidth/tileSize);
var drawTileHeight = Math.floor(drawHeight/tileSize);

//Sprite stuff
var dustStorm  = new Sprite();
dustStorm.width = 1920;
dustStorm.height = 1280;
dustStorm.x = -960;
dustStorm.y = -640;
dustStorm.x = 0;
dustStorm.visible = false;
dustStorm.image = Textures.load("images/dustStorm.png");
world.addChild(dustStorm);
var dustPosX = -960;
var dustPosY = -640;

var sandSprite  = new Sprite();
sandSprite.width = tileSize;
sandSprite.height = tileSize;
sandSprite.visible = false;
sandSprite.image = Textures.load("images/sandSprite.png");

var rockSprite  = new Sprite();
rockSprite.width = tileSize;
rockSprite.height = tileSize;
rockSprite.visible = false;
rockSprite.image = Textures.load("images/rockSprite.png");

var blockedSprite  = new Sprite();
blockedSprite.width = tileSize;
blockedSprite.height = tileSize;
blockedSprite.visible = false;
blockedSprite.image = Textures.load("images/blockedSprite.png");

var sprites = [];
for(var i = 0; i < Math.floor(960/tileSize)+2; i++){
	var cols = [];
	for(var j = 0; j < Math.floor(640/tileSize)+2; j++){
		var spriteTemp  = new Sprite();
		spriteTemp.width = tileSize;
		spriteTemp.height = tileSize;
		spriteTemp.x = 0;
		spriteTemp.y = 0;
		world.addChild(spriteTemp);
		cols[j] = spriteTemp;
	}
	sprites[i] = cols;
}

//Mouse movement stuff
var dragging = false;
var placeBuilding = false;
var placeBuildingMode = false;
var flip = false;
var flop = false;
var selection = 1;
var MouseCurrX = 0;
var MouseCurrY = 0;
var MousePrevX = 0;
var MousePrevY = 0;
var MouseOverFirst = true;

var highlightM  = new Sprite(); //Manager for highlight/text position
world.addChild(highlightM);
var highlight  = new Sprite();
highlight.width = tileSize;
highlight.height = tileSize;
highlight.alpha = 0;
highlight.image = Textures.load("images/highlight.png");
highlightM.addChild(highlight);

//Building counter
var buildingOnscreenCount = new TextBox("0");
buildingOnscreenCount.x = -22;
buildingOnscreenCount.y = 0;
buildingOnscreenCount.font = 'BebasNeue';
buildingOnscreenCount.fontSize = '15';
buildingOnscreenCount.color = 'white';
highlightM.addChild(buildingOnscreenCount);

highlightM.alpha = 0;

//constants hold the ids for grid squares
var sandTile=0;
var rockTile=1;
var blockedTile=2;
//creates an array with the respective colors for each grid square
var tileColors= ['#0000DD','#00CC00'];
var totalTileTypes=2;
//these hold the center of the grid and also the center of the draw grid
var myX = worldSize/2;
var myY = worldSize/2;
//Previous
var myXP = myX;
var myYP = myY;
//this array holds a worldsize/tilesize square array of ints 0 through totalTileTypes-1
var tileGrid = [];
var tiles = [];
//assigns a value 0 through totalTileTypes-1 to each grid square
for ( i=0; i<tilesPerLine; i++ ) {
    var column = new Array();
    //creates an array of ints worldsize/tilesize long
    for ( j = 0; j<tilesPerLine; j++ ) {
		var temp = {};
        //creates a random int 0-99
		var typeVAR = Math.floor (Math.random()*100);
		if(typeVAR>98){
			temp.type = blockedTile;//roughly 1%
			temp.occupied = true;//makes this tile occupied
		}
		else if(typeVAR>28){
			temp.type = sandTile;//roughly 72%
			temp.occupied = false;//makes this tile unoccupied
		}
		else{
			temp.type= rockTile;//roughly 27%
			temp.occupied = false;//makes this tile unoccupied
		}
		temp.node = false; //Used for checking adjacent resource nodes
		column[j] = temp;
    }
    //assigns each column to a row in the main 2D array
    tileGrid[i] = column;
}

//A
gInput.addBool(65, "left");
//D
gInput.addBool(68, "right");
//S
gInput.addBool(83, "down");
//Esc
gInput.addBool(27, "escape");
//HAAAAAX
gInput.addBool(72, "HAAAAAX");

////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////

window.onkeydown = function(event) {
	if(gInput.HAAAAAX) {
		for(var i = 1; i <= buildingTypes; i++){
			buidlingUnlocked[i] = true;
			buidlingsAvailable[i] += 25;
		}
		money += 2500;
		researchPoints += 2500;
	}
	if(marsActive){
		if(gInput.left && placeBuildingMode){
			selection--;
			if (selection < 1) selection = buildingTypes;
			flip = true;
		}else if(gInput.right && placeBuildingMode){
			selection++;
			if (selection > buildingTypes) selection = 1;
			flip = true;
		}else if(gInput.down){
			if(placeBuildingMode){
				placeBuildingMode = false;
				flip = false;
				flop = true;
			}
			else{
				placeBuildingMode = true;
				flip = true;
				flop = false;
			}
		}
		drawTileEngine();
	}
	if(gInput.escape){ //Back to menu (Global Esc key functionality)
		stopActive();
		start();
	}
}

function sortBuildings(){
	var temp;
	for(var i = 0; i < buildingCount-1; i++){
		for(var j = 1; j < buildingCount-i; j++){
			if(buildings[j-1].y+buildings[j-1].height > buildings[j].y+buildings[j].height){
				temp = buildings[j-1];
				buildings[j-1]= buildings[j];
				buildings[j] = temp;
			}
		}
	}
	for(var i = 0; i < buildingCount; i++){
		world.removeChild(buildings[i]);
		world.addChild(buildings[i]);
	}
	redrawHUD();
}

var placing  = new Sprite();
placing.alpha = 0.5;
world.addChild(placing);

//setInterval ( drawTileEngine, 1000 / 30 ); //30 FPS
//set up this method so that the center of the grid follows the mouse pointer if the mouse is held down(draggingging)
function drawTileEngine() {
	var model = selection;
	//these vars hold the coordinates of the upper left 
	//corner of the screen
	var leftSide= myX - drawWidth/2; 
	var topSide= myY - drawHeight/2;
	//these vars hold how much of the left and top tiles are drawn   
	var leftTile = Math.floor( leftSide/ tileSize);
	var topTile = Math.floor( topSide/ tileSize);
	//these vars hold the tile at the top left's x and y 
	var tileOffsetX = leftSide % tileSize;
	var tileOffsetY = topSide % tileSize;
	//draws every tile visible on the grid with appropriate offsets
	for ( x = 0; x < drawTileWidth+2; x++ ) {
		for ( y = 0; y < drawTileHeight+2; y++ ) {
			var tileColor = tileGrid[leftTile+x][topTile+y].type;
			if(tileColor == 0){
				sprites[x][y].image = sandSprite.image;
			}else if(tileColor == 1){
				sprites[x][y].image =  rockSprite.image;
			}else if(tileColor == 2){
				sprites[x][y].image =  blockedSprite.image;
			}else{
				alert("Invalid texture code");
			}
			sprites[x][y].x = (x-1) * tileSize - tileOffsetX;
			sprites[x][y].y = (y-1) *  tileSize - tileOffsetY;
		}
	}
	//Update building positions
	for(var i = 0; i < buildingCount; i++){
		buildings[i].x -= myX-myXP;
		buildings[i].y -= myY-myYP;
	}
	myXP = myX;
	myYP = myY;
	if(MouseOverFirst){
		MouseOverFirst = false;
		MousePrevX = gInput.mouse.x;
		MousePrevY = gInput.mouse.y;
	}
	MouseCurrX = gInput.mouse.x;
	MouseCurrY = gInput.mouse.y;
	//Get Tile that Mouse is Over and highlight
	HighlightX = Math.ceil((MouseCurrX+tileOffsetX)/tileSize);
	HighlightY = Math.ceil((MouseCurrY+tileOffsetY)/tileSize);
	if(HighlightX > drawWidth/tileSize+1) HighlightX = drawWidth/tileSize+1;
	else if(HighlightX < 1) HighlightX = 1;
	if(HighlightY > drawHeight/tileSize+1) HighlightY = drawHeight/tileSize+1;
	else if(HighlightY < 1) HighlightY = 1;
	if(flip){ //Highlight and ghost prop toggle
		makeGhost(model);
		placing.alpha = 0.5;
		highlight.alpha = 0.5;
		highlightM.alpha = 1;
		buildingOnscreenCount.text = buidlingsAvailable[model];
		flip = false;
	}else if(flop){
		placing.alpha = 0;
		highlight.alpha = 0;
		highlightM.alpha = 0;
	}
	if(placeBuildingMode){
		highlight.width = BuildingSize(model).sx*tileSize;
		highlight.height = BuildingSize(model).sy*tileSize;
		highlightM.x = sprites[HighlightX][HighlightY].x-highlight.width+tileSize;
		highlightM.y = sprites[HighlightX][HighlightY].y-highlight.height+tileSize;
		placing.x = sprites[HighlightX][HighlightY].x - (Math.floor(placing.width/tileSize)-1)*tileSize;
		placing.y = sprites[HighlightX][HighlightY].y + tileSize-placing.height;
	}
	//Check if occupied by building
	if(!checkOccupied(model, leftTile+HighlightX, topTile+HighlightY) && (checkNode(model, leftTile+HighlightX, topTile+HighlightY) || firstBuilding)){
		if(placeBuilding && placeBuildingMode && buildingCount < maxBuildings && MouseCurrX < 800 && buidlingsAvailable[model] > 0){ //Places a building if possible
			makeBuilding(model); //in Building.js
			buildingCount++;
			buidlingsAvailable[model]--;
			buildingOnscreenCount.text = buidlingsAvailable[model];
			sortBuildings();
			for(var i = 0; i < BuildingSize(model).sy; i++){
				for(var j = 0; j < BuildingSize(model).sx; j++){
					tileGrid[leftTile+HighlightX-j][topTile+HighlightY-i].occupied = true;
					if(getModel(model).isNode == 1) tileGrid[leftTile+HighlightX-j][topTile+HighlightY-i].node = true;
					else if(getModel(model).isNode == 2) tileGrid[leftTile+HighlightX-Math.floor((right/2))][topTile+HighlightY-top].node = true;
				}
			}
			if(numberOf[1] != 0 || numberOf[2] != 0) firstBuilding = false;
			highlight.image =  Textures.load("images/highlight2.png");
		}else highlight.image =  Textures.load("images/highlight.png");
	}else highlight.image =  Textures.load("images/highlight2.png");
	
	if(dragging){
		myX -= MouseCurrX-MousePrevX;
		myY -= MouseCurrY-MousePrevY;
		dustPosX += MouseCurrX-MousePrevX;
		dustPosY += MouseCurrY-MousePrevY;
		//edge of screen
		if(myX < drawWidth/2) myX = drawWidth/2;
		else if(myX > worldSize-(drawWidth)-tileSize*2) myX = worldSize-(drawWidth)-tileSize*2;
		if(myY < drawHeight/2) myY = drawHeight/2;
		else if(myY > worldSize-(drawHeight/2)-tileSize*2) myY = worldSize-(drawHeight/2)-tileSize*2;
	}
	placeBuilding = false;
	//Set previous mouse pos
	MousePrevX = MouseCurrX;
	MousePrevY = MouseCurrY;
}//end of drawTileEngine()

function checkFactoryOver(){
	if (numberOf[13] <= 0) return false;
	for(var i = 0; i < buildingCount; i++) {
		if(buildings[i].id == "factory1") {
			if(MouseCurrX >= buildings[i].x && MouseCurrX < (buildings[i].x+160) && MouseCurrY >= buildings[i].y && MouseCurrY < (buildings[i].y+74))
				return true;
		}
	}
	return false;
}



