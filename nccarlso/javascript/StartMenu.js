
/*
StartMenu.js by Team UdderStorm
A component of Get Your Ass to Mars
This program creates and governs the main menu
of the game, and allows the player to navigate from it 
to the tutorial or a game.
It also manages end conditions and the different stages of the game
*/
var sfx_theme=new Audio("sound/Mars 2.mp3");
sfx_theme.loop=true;
//sets several important variables
use2D=true;
var first = true;
var canLoad = false;
var tutorialActive = false;
var tutorialEActive = false;
var tutorialMActive = false;
var winActive = false;
var startActive = true;
var gameOverActive = false;
var win = false;

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

var TutorialPageE = new Sprite();
TutorialPageE.width = 960;
TutorialPageE.height = 640;
TutorialPageE.x = 0;
TutorialPageE.y = 0;
TutorialPageE.image = Textures.load("images/TutorialE.png");

var TutorialPageM = new Sprite();
TutorialPageM.width = 960;
TutorialPageM.height = 640;
TutorialPageM.x = 0;
TutorialPageM.y = 0;
TutorialPageM.image = Textures.load("images/TutorialM.png");

var gameOver = new Sprite();
gameOver.width = 960;
gameOver.height = 640;
gameOver.x = 0;
gameOver.y = 0;
gameOver.image = Textures.load("images/gameOver.jpg");

var win = new Sprite();
win.width = 960;
win.height = 640;
win.x = 0;
win.y = 0;
win.image = Textures.load("images/win.jpg");

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

/* Buttons */
var buttonEarth  = new Sprite();
buttonEarth.image = Textures.load("images/bEarth_up.png");
var buttonMars  = new Sprite();
buttonMars.image = Textures.load("images/bMars_up.png");
var buttonSolar  = new Sprite();
buttonSolar.image = Textures.load("images/bSpace_up.png");
var buttonEarthDown  = new Sprite();
buttonEarthDown.image = Textures.load("images/bEarth_down.png");
var buttonMarsDown  = new Sprite();
buttonMarsDown.image = Textures.load("images/bMars_down.png");
var buttonSolarDown  = new Sprite();
buttonSolarDown.image = Textures.load("images/bSpace_down.png");

var buttons = new Array();
buttons.push(buttonEarth);
buttons.push(buttonMars);
buttons.push(buttonSolar);

var buttonsDown = new Array();
buttonsDown.push(buttonEarthDown);
buttonsDown.push(buttonMarsDown);
buttonsDown.push(buttonSolarDown);
/* End Buttons*/

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
	/* Buttons */
	for(var i = 0; i < buttons.length; i++){
		buttons[i].visible = false;
		buttonsDown[i].visible = false;
		buttons[i].width = 40;
		buttons[i].height = 40;
		buttonsDown[i].width = 40;
		buttonsDown[i].height = 40;
		buttons[i].x = (canvas.width-150) + (i*50);
		buttons[i].y = canvas.height - 50;
		buttonsDown[i].x = (canvas.width-150) + (i*50);
		buttonsDown[i].y = canvas.height - 50;
		world.addChild(buttons[i]);
		world.addChild(buttonsDown[i]);
	}
	/* End Buttons */
}
//////////////////////////////////////////////////////////////////

//manager for sprite dragging
var manager = new Sprite(); //For all

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
    pause_song();
	startActive = true;
	if (tut==false) {
	    sfx_theme.load();
	    sfx_theme.play();
	} else {tut=false;}
	if(first){
		initGame("canvas");
		first = false;
		world.addChild(manager);
		gInput.addMouseDownListener(manager);
		gInput.addMouseUpListener(manager);
	} else {
		world.removeChild(HUD);
	}
	world.addChild(MainMenu);
	initSprites();
	canvas.addEventListener("mousemove", mouseHover, false);
	if(typeof timer != "undefined") {
		clearInterval(timer);
	}
	if(typeof resourceTimer != "undefined") {
		clearInterval(resourceTimer);
	}
}

function stop(){
	startActive = false;
	if (tut==false) {
	   sfx_theme.pause();
	}
	canvas.removeEventListener("mousemove", mouseHover);
	for(var i = 0; i < spritesMenu.length; i++){
		world.removeChild(spritesMenu[i]);
		world.removeChild(spritesDown[i]);
		world.removeChild(spritesHover[i]);
		world.removeChild(MainMenu);
	}
	//resourceTimer = setInterval(buildResource,6000);
}

function startTutorial(){
	tutorialActive = true;
	world.addChild(TutorialPage);
}

function stopTutorial(){
	tutorialActive = false;
	world.removeChild(TutorialPage);
}

function stopGameOver(){
	gameOverActive = false;
	world.removeChild(gameOver);
}

function gameOverMan(){
	stopActive();
	world.removeChild(HUD);
	if(typeof timer != "undefined")
		clearInterval(timer);
	if(typeof resourceTimer != "undefined")
		clearInterval(resourceTimer);
	world.addChild(gameOver);
	gameOverActive = true;
	canLoad = false;
}

function stopWin(){
	winActive = false;
	world.removeChild(win);
}

function Win(){
	stopActive();
	world.removeChild(HUD);
	if(typeof timer != "undefined")
		clearInterval(timer);
	if(typeof resourceTimer != "undefined")
		clearInterval(resourceTimer);
	world.addChild(win);
	winActive = true;
	canLoad = false;
}

function startTutorialE(){
	//stopActive();
	//world.addChild(TutorialPageE);
	//tutorialEActive = true;
}

function stopTutorialE(){
	//tutorialEActive = false;
	//world.removeChild(TutorialPageE);
	//startEarth();
}

function startTutorialM(){
	//stopActive();
	//world.addChild(TutorialPageM);
	//tutorialMActive = true;
}

function stopTutorialM(){
	//tutorialMActive = false;
	//world.removeChild(TutorialPageM);
	//startMars();
}