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
	//textArr = [];
}
moneyRound = Math.ceil(money*10)/10;
energyRound = Math.ceil(energy*10)/10;
var days = getDays()%31;
var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
var moneyD="MONEY:  "+moneyRound+"mil";
var energyD="ENERGY:  "+energyRound+"mil BTU";
var mineralsD="MINERALS:  "+minerals;
var researchD="REASEARCH:  "+research;
var popMarsD="POPULATION:  "+popMars;
var popEarthD="POPULATION:  "+popEarth;
var airD="AIR:  "+air+"%";
var foodD="FOOD:  "+food;
var waterD="WATER:  "+water;
var atmosphereD="ATMOSPHERE:  "+atmosphere;
var temperatureD="TEMPERATURE:  "+temperature;
var happinessD="HAPPINESS:  "+happiness+"%";
var diplomacyD="DIPLOMACY:  "+diplomacy;
var economyD="ECONOMY:  "+economy;
    
var text1  = new TextBox(timeD);
var text2  = new TextBox(moneyD);
var text3  = new TextBox(energyD);
var text4  = new TextBox(mineralsD);
var text5  = new TextBox(researchD);
var text6  = new TextBox(popEarthD);

var text7  = new TextBox(airD);
var text8  = new TextBox(foodD);
var text9  = new TextBox(waterD);
var text10 = new TextBox(atmosphereD);
var text11 = new TextBox(temperatureD);
var text12 = new TextBox(happinessD);
var text13 = new TextBox(diplomacyD);
var text14 = new TextBox(economyD);
   
textArr.push(text1);
textArr.push(text2);
textArr.push(text3);
textArr.push(text4);
textArr.push(text5);
textArr.push(text6);

textArr.push(text7);
textArr.push(text8);
textArr.push(text9);
textArr.push(text10);
textArr.push(text11);
textArr.push(text12);
textArr.push(text13);
textArr.push(text14);


//draws all of these values on the HUD, should be called every time 
//the world updates or whenever the display values change
function displayHUDtext(){
	
	//Check if time is up
    if(doomsDay-getYears() < 1) gameOverMan();
    
    //clearText();
    
    moneyRound = Math.ceil(money*10)/10;
    energyRound = Math.ceil(energy*10)/10;
    var days = getDays()%31;
    var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
    var moneyD="MONEY:  "+moneyRound+"mil";
    var energyD="ENERGY:  "+energyRound+"mil BTU";
    var mineralsD="MINERALS:  "+minerals;
    var researchD="REASEARCH:  "+research;
    var popMarsD="POPULATION:  "+popMars;
    var popEarthD="POPULATION:  "+popEarth+"bil";
    var airD="AIR:  "+air+"%";
    var foodD="FOOD:  "+food;
    var waterD="WATER:  "+water;
    var atmosphereD="ATMOSPHERE:  "+atmosphere;
    var temperatureD="TEMPERATURE:  "+temperature;
    var happinessD="HAPPINESS:  "+happiness+"%";
    var diplomacyD="DIPLOMACY:  "+diplomacy;
    var economyD="ECONOMY:  "+economy;
    
    text1.text = timeD;
    text2.text = moneyD;
    text3.text = energyD;
    text4.text = mineralsD;
    text5.text = researchD;
    if (marsActive){
        text6.text  = popMarsD;
    }else if (earthActive){
        text6.text = popEarthD;
    }
    text7.text = airD;
    text8.text = foodD;
    text9.text = waterD;
    text10.text = atmosphereD;
    text11.text = temperatureD;
    text12.text = happinessD;
    text13.text = diplomacyD;
    text14.text = economyD;
    
  /*  textArr.push(text1);
    textArr.push(text2);
    textArr.push(text3);
    textArr.push(text4);
    textArr.push(text5);
    if (marsActive || earthActive){
        textArr.push(text6);
    }
    textArr.push(text7);
    textArr.push(text8);
    textArr.push(text9);
    textArr.push(text10);
    textArr.push(text11);
    textArr.push(text12);
    textArr.push(text13);
    textArr.push(text14);*/
    
    if(marsActive || solarActive){
        //Mars/solar activate
      //  for(var i = 0; i < textArr.length; i++){
           /* textArr[i].font = 'BebasNeue';
            textArr[i].fontSize = '20';
            textArr[i].padLeft = canvas.width - 150;
            textArr[i].padTop = 30*(i+1);*/
        //    world.addChild(textArr[i]);
     //   }
    }else if(earthActive){
        //Doomsday stuff
        doomsDay = getLifetime()+getYears();
        var yearsAppend = "";
        var monthsAppend = "";
        var daysAppend = "";
        if(doomsDay-(getYears()+1) < 10) yearsAppend = "00";
        else if(doomsDay-getYears() < 100) yearsAppend = "0";
        if(12-getMonths() < 10) monthsAppend = "0";
        if(31-days < 10) daysAppend = "0";
        
        //Adjust doomsDay variable to set year Earth dies (located at the top of Solar.js)
        Countdown.text = yearsAppend+(doomsDay-(getYears()+1))+":"+monthsAppend+(12-getMonths())+":"+daysAppend+(31-days);
        
        //Earth activate
       // for(var i = 0; i < textArr.length; i++){
            /*textArr[i].font = 'BebasNeue';
            textArr[i].fontSize = '20';
            textArr[i].padLeft = canvas.width - 150;
            textArr[i].padTop = 30*(i+1);*/
      //      world.addChild(textArr[i]);
       // }
    }else if(solarActive){
        //Solar System text
    }else if(techActive){
        updateTechInfo();
    }else if(storeActive){
        updateStoreInfo();
    }
}

function redrawHUD(){
	world.removeChild(HUD);
    world.addChild(HUD);
    for(var i = 0; i < textArr.length; i++){
        textArr[i].font = 'BebasNeue';
        textArr[i].fontSize = '20';
        textArr[i].padLeft = canvas.width - 150;
        textArr[i].padTop = 30*(i+1);
        world.addChild(textArr[i]);
    }
	//displayHUDtext();
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
var storeClickable = false;
manager.onMouseDown = function () {
	if(!storeActive) storeClickable = false;
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
		if(techActive){
			var tmpChk = checkTechMenu(gInput.mouse.x, gInput.mouse.y); //Button clicks in tech menu
			if (tmpChk < 4){
				moveTechScreen(tmpChk);
			}else if (tmpChk != -1){
				unlockTech(tmpChk);
			}
		} else if (storeActive && storeClickable){
			purchaseBuilding(checkStoreClicks(gInput.mouse.x, gInput.mouse.y));
			updateStoreText();
		} else if (storeActive) storeClickable = true;
	}
}
