//Start Menu Code
use2D=true;
var first = true;
var tutorialActive = false;

var MainMenu = new Sprite();
MainMenu.width = 960;
MainMenu.height = 640;
MainMenu.x = 0;
MainMenu.y = 0;
MainMenu.image = Textures.load("images/MainMenu.jpg");

var TutorialPage = new Sprite();
TutorialPage.width = 960;
TutorialPage.height = 640;
TutorialPage.x = 0;
TutorialPage.y = 0;
TutorialPage.image = Textures.load("images/Tutorial.jpg");

//////////////////////////////////////////////////////////////////
//Sprite Textures
var StartGame  = new Sprite();
StartGame.image = Textures.load("images/StartGame.png");
var LoadGame  = new Sprite();
LoadGame.image = Textures.load("images/LoadGame.png");
var Tutorial  = new Sprite();
Tutorial.image = Textures.load("images/Tutorial.png");

var StartGameDown  = new Sprite();
StartGameDown.image = Textures.load("images/StartGameDown.png");
var LoadGameDown  = new Sprite();
LoadGameDown.image = Textures.load("images/LoadGameDown.png");
var TutorialDown  = new Sprite();
TutorialDown.image = Textures.load("images/TutorialDown.png");

var StartGameHover  = new Sprite();
StartGameHover.image = Textures.load("images/StartGameHover.png");
var LoadGameHover  = new Sprite();
LoadGameHover.image = Textures.load("images/LoadGameHover.png");
var TutorialHover  = new Sprite();
TutorialHover.image = Textures.load("images/TutorialHover.png");

//////////////////////////////////////////////////////////////////
//Sprite Arrays
var spritesMenu = new Array();
spritesMenu.push(StartGame);
spritesMenu.push(LoadGame);
spritesMenu.push(Tutorial);

var spritesDown = new Array();
spritesDown.push(StartGameDown);
spritesDown.push(LoadGameDown);
spritesDown.push(TutorialDown);

var spritesHover = new Array();
spritesHover.push(StartGameHover);
spritesHover.push(LoadGameHover);
spritesHover.push(TutorialHover);

//Sprite Positions
function initSprites(){
	var canvas = document.getElementById('canvas');
	for(var i = 0; i < spritesMenu.length; i++){
		spritesMenu[i].visible = true;
		spritesMenu[i].width = 250;
		spritesMenu[i].height = 40;
		spritesMenu[i].x = (canvas.width/2) - (spritesMenu[i].width/2);
		spritesMenu[i].y = 200 + (i*100);
		world.addChild(spritesMenu[i]);
	}
	for(var i = 0; i < spritesDown.length; i++){
		spritesDown[i].visible = false;
		spritesDown[i].width = 250;
		spritesDown[i].height = 40;
		spritesDown[i].x = (canvas.width/2) - (spritesDown[i].width/2);
		spritesDown[i].y = 200 + (i*100);
		world.addChild(spritesDown[i]);
	}
	for(var i = 0; i < spritesHover.length; i++){
		spritesHover[i].visible = false;
		spritesHover[i].width = 250;
		spritesHover[i].height = 40;
		spritesHover[i].x = (canvas.width/2) - (spritesHover[i].width/2);
		spritesHover[i].y = 200 + (i*100);
		world.addChild(spritesHover[i]);
	}
}
//////////////////////////////////////////////////////////////////

//manager for sprite dragging
var manager = new Sprite();

//Check if sprite clicked
manager.onMouseDown = function () {
    for(i = 0; i < spritesHover.length; i++){
        if (checkMouseOver(spritesHover[i], gInput.mouse.x, gInput.mouse.y)){
            spritesHover[i].visible = false;
            spritesDown[i].visible = true;
            break;
        }
    }
}

manager.onMouseUp = function () {
    for(i = 0; i < spritesDown.length; i++){
        if (spritesDown[i].visible == true){
            if (checkMouseOver(spritesDown[i], gInput.mouse.x, gInput.mouse.y)){
                spritesDown[i].visible = false;
                spritesHover[i].visible = true;
                if(i == 0) { //StartGame;
					stop();
					newGameMars();
					resetVariables();
					startMars();
					startHUD();
				}
                else if(i == 1) {
					stop();
					startMars();
					startHUD();
				} //LoadGame;
                else {
					stop();
					startTutorial();
				} //Tutorial;
            }else{
                spritesDown[i].visible = false;
                spritesMenu[i].visible = true;
            }
            break;
        }
    }
}

//Check if mouse position over sprite
function checkMouseOver(sprite, x, y) {
    var xMax = sprite.x + sprite.width;
    var yMax = sprite.y + sprite.height;
    if (x >= sprite.x && x <= xMax && y >= sprite.y && y <= yMax) {
        return true;
    }
    return false;
}

function mouseHover(){
    for(i = 0; i < spritesMenu.length; i++){
        if(spritesMenu[i].visible == true){
            if (checkMouseOver(spritesMenu[i], gInput.mouse.x, gInput.mouse.y)){
                spritesMenu[i].visible = false;
                spritesHover[i].visible = true;
                break;
            }
        }else if(spritesHover[i].visible == true){
            if(!checkMouseOver(spritesHover[i], gInput.mouse.x, gInput.mouse.y)){
                spritesHover[i].visible = false;
                spritesMenu[i].visible = true;
            }
        }
    }    
}

function start(){
	if(first) initGame("canvas");
	first = false;
	world.addChild(MainMenu);
	initSprites();
	world.addChild(manager);
	gInput.addMouseDownListener(manager);
	gInput.addMouseUpListener(manager);
	canvas.addEventListener("mousemove", mouseHover, false);
	if(typeof timer != "undefined") {
		clearInterval(timer);
	}
	if(typeof resourceTimer != "undefined") {
		clearInterval(resourceTimer);
	}
}

function stop(){
	canvas.removeEventListener("mousemove", mouseHover);
	gInput.removeMouseDownListener(manager);
	gInput.removeMouseUpListener(manager);
	for(var i = 0; i < spritesMenu.length; i++){
		world.removeChild(spritesMenu[i]);
		world.removeChild(spritesDown[i]);
		world.removeChild(spritesHover[i]);
		world.removeChild(manager);
		world.removeChild(MainMenu);
	}
	resourceTimer = setInterval(buildResource,6000);
}

function startTutorial(){
	tutorialActive = true;
	world.addChild(TutorialPage);
}