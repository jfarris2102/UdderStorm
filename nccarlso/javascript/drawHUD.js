/*
drawHUD.js by Team UdderStorm
A component of Get Your Ass to Mars
This program provides a graphical heads up display 
for all parts of the game.
It should draw different values and images in the appropriate
places based on which stage of the game is active
and what is currently happening in the game
*/
var HUD = new Sprite();
HUD.width = 160;
HUD.height = 640;
HUD.x = 800;
HUD.y = 0;
HUD.image = Textures.load("images/menu.png");

var textArr = [];

function clearText(){
	for(var i = 0; i < textArr.length; i++){
		world.removeChild(textArr[i]);
	}
	textArr = [];
}

//draws all of these values on the HUD, should be called every time 
//the world updates or whenever the display values change
function displayHUDtext(){
	
	//Check if time is up
	if(doomsDay-getYears() < 1) gameOverMan();
	
	clearText();
	if(marsActive || solarActive){
		//Mars text
		moneyRound = Math.ceil(money*10)/10;
		energyRound = Math.ceil(energy*10)/10;
		var days = getDays()%31;
		var moneyD="MONEY:  "+moneyRound+"mil";
		var foodD="FOOD:  "+food;
		var energyD="ENERGY:  "+energyRound + "mil BTU";
		var popMarsD="POPULATION:  "+popMars;
		var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
		
		var text1 = new TextBox(moneyD);
		var text2 = new TextBox(foodD);
		var text3 = new TextBox(energyD);
		var text4 = new TextBox(popMarsD);
		var text5 = new TextBox(timeD);
		
		textArr.push(text1);
		textArr.push(text2);
		textArr.push(text3);
		textArr.push(text4);
		textArr.push(text5);
		
		for(var i = 0; i < textArr.length; i++){
			textArr[i].font = 'BebasNeue';
			textArr[i].fontSize = '20';
			textArr[i].padLeft = canvas.width - 150;
			textArr[i].padTop = 30*(i+1);
			world.addChild(textArr[i]);
		}
	}else if(earthActive){
		//Earth text
		moneyRound = Math.ceil(money*10)/10;
		energyRound = Math.ceil(energy*10)/10;
		var days = Math.floor(getDays()%30.4375) + 1;
		var moneyD="MONEY:  "+moneyRound+"mil";
		var foodD="FOOD:  "+food;
		var energyD="ENERGY:  "+energyRound + "mil BTU";
		var popEarthD="POPULATION:  "+popEarth;
		var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
		var yearsAppend = "";
		var monthsAppend = "";
		var daysAppend = "";
		if(doomsDay-(getYears()+1) < 10) yearsAppend = "00";
		else if(doomsDay-getYears() < 100) yearsAppend = "0";
		if(12-getMonths() < 10) monthsAppend = "0";
		if(31-days < 10) daysAppend = "0";
		
		//Adjust doomsDay variable to set year Earth dies (located at the top of Solar.js)
		Countdown.text = yearsAppend+(doomsDay-(getYears()+1))+":"+monthsAppend+(12-getMonths())+":"+daysAppend+(31-days);
		
		var text1 = new TextBox(moneyD);
		var text2 = new TextBox(foodD);
		var text3 = new TextBox(energyD);
		var text4 = new TextBox(popEarthD);
		var text5 = new TextBox(timeD);

		textArr.push(text1);
		textArr.push(text2);
		textArr.push(text3);
		textArr.push(text4);
		textArr.push(text5);
		for(var i = 0; i < textArr.length; i++){
			textArr[i].font = 'BebasNeue';
			textArr[i].fontSize = '20';
			textArr[i].padLeft = canvas.width - 150;
			textArr[i].padTop = 30*(i+1);
			world.addChild(textArr[i]);
		}
	}else if(solarActive){
		//Solar System text
	}else if(techActive){
		updateTechInfo();
	}else if(storeActive){
		//updateStoreInfo();
	}
}

function redrawHUD(){
	world.removeChild(HUD);
    world.addChild(HUD);
	displayHUDtext();
	redrawButtons();
}

function redrawButtons(){
	for(var i = 0; i < buttons.length; i++){
		world.removeChild(buttons[i]);
		world.removeChild(buttonsDown[i]);
		world.addChild(buttons[i]);
		world.addChild(buttonsDown[i]);
	}
}

function startHUD(){
	world.addChild(HUD);
	redrawHUD();
	for(var i = 0; i < buttons.length; i++){
		buttons[i].visible = true;
	}
	if(typeof timer != "undefined") {
		clearInterval(timer);
	}
	timer = setInterval(displayHUDtext, 200);
}

//stops whatever part of the game is active, effectively a pause
function stopActive(){
	if (earthActive) stopEarth();
	else if (marsActive) stopMars();
	else if (solarActive) stopSolar();
	else if(tutorialActive) stopTutorial();
	else if(techActive) stopTech();
	else if(storeActive) stopStore();
	else if (gameOverActive) stopGameOver();
	//else stop();
}

//Mouse Click code below
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check if sprite clicked
manager.onMouseDown = function () {
	if(marsActive && gInput.mouse.x < (canvas.width-160)){ //Mars
		dragging = true;
	}
	if (startActive){ //If Menu
		for(i = 0; i < spritesHover.length; i++){
			if (checkMouseOver(spritesHover[i], gInput.mouse.x, gInput.mouse.y)){
				spritesHover[i].visible = false;
				spritesDown[i].visible = true;
				break;
			}
		}
	} else { //Buttons
		for(i = 0; i < buttons.length; i++){
			if (checkMouseOver(buttons[i], gInput.mouse.x, gInput.mouse.y)){
				buttons[i].visible = false;
				buttonsDown[i].visible = true;
				break;
			}
		}
	}
}

//When button MouseUp
manager.onMouseUp = function () {
	if(marsActive){
		placeBuilding = true;
		dragging = false;
		MouseOverFirst = true;
		drawTileEngine();
	}
	if (startActive){ //If Menu
		for(i = 0; i < spritesDown.length; i++){
			if (spritesDown[i].visible == true){
				if (checkMouseOver(spritesDown[i], gInput.mouse.x, gInput.mouse.y)){
					spritesDown[i].visible = false;
					spritesHover[i].visible = true;
					if(i == 0) { //StartGame;
						stop();
						newGameMars();
						resetVariables();
						startEarth();
						startHUD();
					}
					else if(i == 1 && canLoad) { //LoadGame;
						stop();
						startEarth();
						startHUD();
					}
					else if (i == 2) { //Tutorial
						stop();
						startTutorial();
					}
				}else{
					spritesDown[i].visible = false;
					spritesMenu[i].visible = true;
				}
				break;
			}
		}
	} else { // Not in menu
		for(i = 0; i < buttonsDown.length; i++){ //Check buttons
			if (buttonsDown[i].visible == true){
				if (checkMouseOver(buttonsDown[i], gInput.mouse.x, gInput.mouse.y)){
					buttonPressed = true;
					buttonsDown[i].visible = false;
					buttons[i].visible = true;
					if(i == 0) { //Earth
						if (!earthActive){
							stopActive();
							startEarth();
						}
					}
					else if(i == 1) { //Mars
						if (!marsActive){
							stopActive();
							startMars();
						}
					} 
					else { //Space
						if (!solarActive){
							stopActive();
							startSolar();
						}
					} 
				}else{
					buttonsDown[i].visible = false;
					buttons[i].visible = true;
				}
				break;
			}
			//Tech and Store menus
			if(checkTechOver(gInput.mouse.x, gInput.mouse.y)){ //Swith to and from tech
				if(earthActive){
					stopActive();
					startTech();
					redrawButtons();
				}else if(techActive){
					stopActive();
					startEarth();
				}
			}else if(checkStoreOver(gInput.mouse.x, gInput.mouse.y)){
				if(earthActive){
					stopActive();
					startStore();
					redrawButtons();
				}else if(storeActive){
					stopActive();
					startEarth();
				}
			}
		}
		var tmpChk = checkTechMenu(gInput.mouse.x, gInput.mouse.y); //Button clicks in tech menu
		if (techActive && tmpChk < 4){
			moveTechScreen(tmpChk);
		} else if (techActive && tmpChk != -1){
			unlockTech(tmpChk);
		} else if (storeActive && tmpChk != -1){
			//moveStoreScreen(tmpChk);
		}
	}
}