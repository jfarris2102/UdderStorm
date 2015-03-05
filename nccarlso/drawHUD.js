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

function displayHUDtext(){

	clearText();

	if(marsActive){
		//Mars text
		moneyRound = Math.ceil(money*10)/10;
		energyRound = Math.ceil(energy*10)/10;
		var days = getDays()%31;
		var moneyD="MONEY     : "+moneyRound+" mil";
		var foodD="FOOD        : "+food;
		var energyD="ENERGY   : "+energyRound + " mil BTU";
		var popMarsD="POPULATION: "+popMars;
		var timeD = "CURRENT DATE: "+ getYears() + "."+ getMonths() +"."+ days;
		
		var text1 = new TextBox(moneyD);
		var text2 = new TextBox(foodD);
		var text3 = new TextBox(energyD);
		var text4 = new TextBox(popMarsD);
		var text5 = new TextBox(timeD);
		
		text1.padTop = 25;
		text2.padTop = 45;
		text3.padTop = 65;
		text4.padTop = 85;
		text5.padTop = 105;
		
		//for(var i = 0; i < textArr.length; i++){
		//	world.removeChild(textArr[i]);
		//}
		//textArr = [];
		
		textArr.push(text1);
		textArr.push(text2);
		textArr.push(text3);
		textArr.push(text4);
		textArr.push(text5);
		
		for(var i = 0; i < textArr.length; i++){
			textArr[i].font = "Courier New";
			textArr[i].font = 15;
			textArr[i].padLeft = canvas.width - 150;
			world.addChild(textArr[i]);
		}
	}else if(earthActive||solarActive){
		//Earth text
		moneyRound = Math.ceil(money*10)/10;
		energyRound = Math.ceil(energy*10)/10;
		var days = getDays() % 31;
		var moneyD="MONEY     : "+moneyRound+" mil";
		var foodD="FOOD        : "+food;
		var energyD="ENERGY   : "+energyRound + " mil BTU";
		var popMarsD="POPULATION: "+popMars;
		var timeD = "CURRENT DATE: "+ getYears() + "."+ getMonths()+"."+ days;
		
		var text1 = new TextBox(moneyD);
		var text2 = new TextBox(foodD);
		var text3 = new TextBox(energyD);
		var text4 = new TextBox(popMarsD);
		var text5 = new TextBox(timeD);
		
		text1.padTop = 25;
		text2.padTop = 45;
		text3.padTop = 65;
		text4.padTop = 85;
		text5.padTop = 105;
		
		//for(var i = 0; i < textArr.length; i++){
		//	world.removeChild(textArr[i]);
		//}
		//textArr = [];
		
		textArr.push(text1);
		textArr.push(text2);
		textArr.push(text3);
		textArr.push(text4);
		textArr.push(text5);
		for(var i = 0; i < textArr.length; i++){
			textArr[i].font = 'Courier New';
			textArr[i].font = 15;
			textArr[i].padLeft = canvas.width - 150;
			world.addChild(textArr[i]);
		}
	}else{
		//Solar System text
	}
	
}

function redrawHUD(){
	world.removeChild(HUD);
    world.addChild(HUD);
	displayHUDtext();
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

function stopActive(){
	if (earthActive) stopEarth();
	else if (marsActive) stopMars();
	else if (solarActive) stopSolar();
	else if(tutorialActive){
		world.removeChild(TutorialPage);
		tutorialActive = false;
	} else if(techActive) stopTech();
}

//Button code below
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check if sprite clicked
manager.onMouseDown = function () {
	if(marsActive){ //Mars
		dragging = true;
	}
	if (!earthActive && !solarActive && !tutorialActive && !marsActive && !techActive){ //If Menu
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
	if (!earthActive && !solarActive && !tutorialActive && !marsActive && !techActive){ //If Menu
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
					else if(i == 1) { //LoadGame;
						stop();
						startEarth();
						startHUD();
					}
					else { //Tutorial
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
						if (marsActive || earthActive){
							stopActive();
							startSolar();
						}
					} 
				}else{
					buttonsDown[i].visible = false;
					buttons[i].visible = true;
					console.log("test");
				}
				break;
			}
		} //Switch to tech and back
		if(checkTechClicked(gInput.mouse.x, gInput.mouse.y)){
			if(earthActive){
				stopActive();
				startTech();
			}else if(techActive){
				stopActive();
				startEarth();
			}
		}
	}
}
