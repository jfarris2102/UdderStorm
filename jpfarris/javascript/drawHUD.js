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
var terrBar = new Sprite();
terrBar.width = 140;
terrBar.height = 15;
terrBar.x = 810;
terrBar.y = 420;
terrBar.image = Textures.load("images/bar2.png");
var healthBar = new Sprite();
healthBar.width = 140;
healthBar.height = 15;
healthBar.x = 810;
healthBar.y = 520;
healthBar.image = Textures.load("images/bar2.png");
var meter = new Sprite();
meter.width = 5;
meter.height = 17;
meter.x = 810;
meter.y = 419;
meter.image = Textures.load("images/meter.png");
var hmeter = new Sprite();
hmeter.width = 5;
hmeter.height = 17;
hmeter.x = 810;
hmeter.y = 519;
hmeter.image = Textures.load("images/meter.png");

var textArr = [];
var titleArr = [];

function clearText(){
	for(var i = 0; i < textArr.length; i++){
		world.removeChild(textArr[i]);
	}
	//textArr = [];
}

moneyRound = Math.ceil(money*10)/10;
energyRound = Math.ceil(energy*10)/10;
var pad = "";
var days = getDays()%31;
var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
var moneyD="MONEY:  "+moneyRound+"mil";
var researchD="RESEARCH:  "+research;
var diplomacyD="DIPLOMACY:  "+diplomacy;
var economyD="ECONOMY:  "+economy;
var popEarthD="POPULATION:  "+popEarth;
var popMarsD="POPULATION:  "+popMars;
var energyD="ENERGY:  "+energyRound+"mil BTU";
var mineralsD="MINERALS:  "+minerals;
var airD=pad+air+"%";
var foodD="FOOD:  "+food;
var waterD="WATER:  "+water;
var atmosphereD= pad+atmosphere+" kPa";
var temperatureD=temperature+" F";
var happinessD="HAPPINESS:  "+happiness+"%";
   
var tText = new TextBox("TERRAFORM PROGRESS");
var eText = new TextBox("EARTH");
var mText = new TextBox("MARS");
var hText = new TextBox("COLONY HEALTH");

var text1  = new TextBox(timeD);
var text2  = new TextBox(moneyD);
var text3  = new TextBox(researchD);
var text4 = new TextBox(diplomacyD);
var text5 = new TextBox(economyD);
var text6  = new TextBox(popEarthD);
var text7  = new TextBox(energyD);
var text8  = new TextBox(foodD);
var text9  = new TextBox(waterD);
var text10  = new TextBox(mineralsD);
var text11  = new TextBox(airD);
var text12 = new TextBox(atmosphereD);
var text13 = new TextBox(temperatureD);
   
titleArr.push(tText);
titleArr.push(eText);
titleArr.push(mText);
titleArr.push(hText);

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
//textArr.push(text14);
for(var i = 0; i < titleArr.length; i++){
	titleArr[i].font = 'BebasNeue';
    titleArr[i].fontSize = '20';
}
eText.padLeft = 960 - 100;
eText.padTop = 45;
mText.padLeft = 960 - 100;
mText.padTop = 225;
tText.padLeft = 960 - 148;
tText.padTop = 400;
hText.padLeft = 960 - 128;
hText.padTop = 495;
var buffer = 0;
for(var i = 0; i < textArr.length; i++){
	if(i<10){
	    textArr[i].font = 'BebasNeue';
    	textArr[i].fontSize = '20';
    	textArr[i].padLeft = 960 - 150;
	    if(i==1 || i==6)
	        buffer++;
	    textArr[i].padTop = 30*(i+1+buffer) - 15;
	}else{
		textArr[i].font = 'BebasNeue';
	    textArr[i].fontSize = '15';
	    textArr[i].padTop = 440;
	    textArr[i].padLeft = 810 + 50*(i-10);
	}
}
textArr[10].padLeft = 807;
textArr[11].padLeft = 862;
textArr[12].padLeft = 925;

var climateText = new TextBox("oxygen    pressure    temp.");
climateText.fontSize = '12';
climateText.padTop = 457;
climateText.padLeft = 808;
titleArr.push(climateText);
//draws all of these values on the HUD, should be called every time 
//the world updates or whenever the display values change
function displayHUDtext(){
	
	//Check if time is up
   // if(doomsDay-getYears() < 1) 
    if(doomsDay + (12-getMonths()) + (31-getDays()%31) == 0) gameOverMan();
    
    //clearText();
    pad = "";
    if(air<10) pad = "00"; 
    else if(air<100) pad = "0";
    moneyRound = Math.ceil(money*10)/10;
    energyRound = Math.ceil(energy*10)/10;
    popRound = Math.ceil(popEarth*10)/10;
    var days = getDays()%31;
    var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
    var moneyD="MONEY:  "+moneyRound+"mil";
    var researchD="RESEARCH:  "+research;
    var diplomacyD="DIPLOMACY:  "+diplomacy;
    var economyD="ECONOMY:  "+economy;
    var popEarthD="POPULATION:  "+popRound+"bil";
    var popMarsD="POPULATION:  "+popMars;
    var energyD="ENERGY:  "+energyRound+"mil BTU";
    var mineralsD="MINERALS:  "+minerals;
    var airD=pad+air+"%";
    var foodD="FOOD:  "+food;
    var waterD="WATER:  "+water;
    var pad = "";
    if(atmosphere<10) pad = "00";
    else if(atmosphere<100) pad = "0";
    var atmosphereD= pad+atmosphere+" kPa";
    var temperatureD=temperature+" F";
    var happinessD="HAPPINESS:  "+happiness+"%";
    
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
 //   text14.text = economyD;
    
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
        doomsDay = getLifetime();
        var yearsAppend = "";
        var monthsAppend = "";
        var daysAppend = "";
        if(doomsDay < 10) yearsAppend = "00";
        else if(doomsDay < 100) yearsAppend = "0";
        if(12-getMonths() < 10) monthsAppend = "0";
        if(31-days < 10) daysAppend = "0";
        console.log(doomsDay);
        //Adjust doomsDay variable to set year Earth dies (located at the top of Solar.js)
        Countdown.text = yearsAppend+(doomsDay/*-(getYears()+1)*/)+":"+monthsAppend+(12-getMonths())+":"+daysAppend+(31-days);
        console.log(Countdown.text);
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
		world.removeChild(textArr[i]);
        //textArr[i].font = 'BebasNeue';
        //textArr[i].fontSize = '20';
        //textArr[i].padLeft = canvas.width - 150;
        //textArr[i].padTop = 30*(i+1);
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
