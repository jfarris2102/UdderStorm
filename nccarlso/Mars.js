//This  program creates a tile engine
use2D = true;
function start(){
	initGame("canvas");
	drawTileEngine();
	canvas.addEventListener("mousemove", drawTileEngine, false);
}

//dimension variables(easy to edit)
var worldSize=12000;
var tileSize=40;
//variable holds the # of tiles per line
var tilesPerLine= Math.floor(worldSize/tileSize);
//Variables for the display functions
//should be how big the canvas is
var drawHeight=640;
var drawWidth=960;
//holds the displayed number visual tiles
var drawTileWidth = Math.floor(drawWidth/tileSize);
var drawTileHeight = Math.floor(drawHeight/tileSize);

//Sprite stuff
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

//manager for sprite dragging
var manager = new Sprite();
world.addChild(manager);
gInput.addMouseDownListener(manager);
gInput.addMouseUpListener(manager);

var highlight  = new Sprite();
highlight.width = tileSize;
highlight.height = tileSize;
highlight.alpha = 0;
highlight.image = Textures.load("images/highlight.png");
world.addChild(highlight);

//constants hold the ids for grid squares
var sandTile=0;
var rockTile=1;
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
        temp.type = Math.floor (Math.random() * totalTileTypes);
		temp.occupied = false; 
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

////////////////////////////////////////////////// Functions /////////////////////////////////////////////////////////////

window.onkeypress = function(event) {
	if(gInput.left && placeBuildingMode){
		selection = Math.max(1, --selection);
		flip = true;
	}else if(gInput.right && placeBuildingMode){
		selection = Math.min(buildingTypes, ++selection);
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

//Check if sprite clicked
manager.onMouseDown = function () {
	dragging = true;
}
manager.onMouseUp = function () {
	placeBuilding = true;
	dragging = false;
	MouseOverFirst = true;
	drawTileEngine();
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
}

var placing  = new Sprite();
placing.alpha = 0.3;
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
	if(flip){
		makeGhost(model);
		placing.alpha = 0.5;
		highlight.alpha = 0.5;
		flip = false;
	}else if(flop){
		placing.alpha = 0;
		highlight.alpha = 0;
	}
	if(placeBuildingMode){
		highlight.width = BuildingSize(model).sx*tileSize;
		highlight.height = BuildingSize(model).sy*tileSize;
		highlight.x = sprites[HighlightX][HighlightY].x-highlight.width+tileSize;
		highlight.y = sprites[HighlightX][HighlightY].y-highlight.height+tileSize;
		placing.x = sprites[HighlightX][HighlightY].x - (Math.floor(placing.width/tileSize)-1)*tileSize;
		placing.y = sprites[HighlightX][HighlightY].y + tileSize-placing.height;
	}
	//Check if occupied by building
	if(!checkOccupied(model, leftTile+HighlightX, topTile+HighlightY)){
		if(placeBuilding && placeBuildingMode && buildingCount < maxBuildings){ //Places a building
			makeBuilding(model); //in Building.js
			buildingCount++;
			sortBuildings();
			for(var i = 0; i < BuildingSize(model).sy; i++){
				for(var j = 0; j < BuildingSize(model).sx; j++){
					tileGrid[leftTile+HighlightX-j][topTile+HighlightY-i].occupied = true;
				}
			}
			highlight.image =  Textures.load("images/highlight2.png");
		}else highlight.image =  Textures.load("images/highlight.png");
	}else highlight.image =  Textures.load("images/highlight2.png");
	if(dragging){
		myX -= MouseCurrX-MousePrevX;
		myY -= MouseCurrY-MousePrevY;
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


