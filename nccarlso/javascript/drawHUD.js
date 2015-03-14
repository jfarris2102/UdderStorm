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

//Sound
var sfx_off=new Audio("sound/liftoff.wav");
//////////////shit
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
//var happinessD="HAPPINESS:  "+happiness+"%";

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
//var text14 = new TextBox(happinessD);

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
for(var i = 0; i < 10/*textArr.length*/; i++){
	textArr[i].font = 'BebasNeue';
	textArr[i].fontSize = '20';
	textArr[i].padLeft = 960 - 150;
	if(i==1 || i==6)
	    buffer++;
	textArr[i].padTop = 30*(i+1+buffer) - 15;
}
for(var i = 10; i < textArr.length; i++){
	textArr[i].font = 'BebasNeue';
	textArr[i].fontSize = '15';
	textArr[i].padTop = 440;
	textArr[i].padLeft = 810 + 50*(i-10);
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
    
    if (sfx_arr[curr].ended==true) {
        end=true;
    }
    if (end=true) {
        start_song();
    }
	//HUD bars
	//meter.x = 810 + Math.min(135, (1.35*TerraFormed));
	//hmeter.x = 810 + Math.min(135, (1.35*happiness));
	
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
    tempRound = Math.floor(temperature);
    atmosRound = Math.ceil(atmosphere*10)/10;
    airRound = Math.ceil(air*100)/100;
    var days = getDays()%31;
    var timeD = "DATE:  "+ getYears() + "."+ getMonths()+"."+ days;
    var moneyD="MONEY:  "+moneyRound+" mil";
    var researchD="RESEARCH:  "+research;
    var diplomacyD="DIPLOMACY:  "+diplomacy;
    var economyD="ECONOMY:  "+economy;
    var popEarthD="POPULATION:  "+popRound+" bil";
    var popMarsD="POPULATION:  "+popMars;
    var energyD="ENERGY:  "+energyRound+" mil BTU";
    var mineralsD="MINERALS:  "+minerals+" tons";
    var airD=pad+airRound+"%";
    var foodD="FOOD:  "+food+" ppl/yr";
    var waterD="WATER:  "+water+" ppl/yr";
    pad = "";
    if(atmosRound<10) pad = "00";
    else if(atmosRound<100) pad = "0";
    var atmosphereD= pad+atmosRound+" kPa";
    var temperatureD=tempRound+" F";
   // var happinessD="HAPPINESS:  "+happiness+"%";
    
    text1.text = timeD;
    text2.text = moneyD;
    text3.text = researchD;
    text4.text = diplomacyD;
    text5.text = economyD;
    if (marsActive){
        text6.text  = popMarsD;
    }else if (earthActive){
        text6.text = popEarthD;
    }
    text7.text = energyD;
    text8.text = foodD;
    text9.text = waterD;
    text10.text = mineralsD;
    text11.text = airD;
    text12.text = atmosphereD;
    text13.text = temperatureD;
    //text14.text = happinessD;
    
   meter.x = 810+getProgress()*140/100;
   hmeter.x = 810+health*140/100;
    
  /*  textArr.push(text1);
    textArr.push(text2);
    textArr.push(text3);
    textArr.push(text4);
    textArr.push(text5);
    if (marsActive || earthActive){
        textArr.push(text6);
    
    textArr.push(text7);
    textArr.push(text8);
    textArr.push(text9);
    textArr.push(text10);
    textArr.push(text11);
    textArr.push(text12);
    textArr.push(text13);
    textArr.push(text14);*/
    
	if(earthActive){
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
    }else if(techActive){
        updateTechInfo();
    }else if(storeActive){
        updateStoreInfo();
    }
}

function redrawHUD(){
	if(marsActive){ //dust effect
		world.removeChild(dustStorm);
		world.addChild(dustStorm);
	}
	world.removeChild(HUD);
	world.removeChild(terrBar);
	world.removeChild(healthBar);
	world.removeChild(meter);
	world.removeChild(hmeter);
    world.addChild(HUD);
    world.addChild(terrBar);
    world.addChild(healthBar);
    world.addChild(meter);
    world.addChild(hmeter);
    for(var i = 0; i < textArr.length; i++){
		world.removeChild(textArr[i]);
        //textArr[i].font = 'BebasNeue';
        //textArr[i].fontSize = '20';
        //textArr[i].padLeft = canvas.width - 150;
        //textArr[i].padTop = 30*(i+1);
        world.addChild(textArr[i]);
    }
    for(var i = 0; i < titleArr.length; i++){
	    world.removeChild(titleArr[i]);
	    world.addChild(titleArr[i]);
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
    start_song();
	world.addChild(HUD);
	world.addChild(terrBar);
	world.addChild(healthBar);
	world.addChild(meter);
	world.addChild(hmeter);
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
	else if (winActive) stopWin();
	else if (tutorialEActive) stopTutorialE();
	else if (tutorialMActive) stopTutorialM();
	//else stop();
}

//Mouse Click code below
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Check if sprite clicked
var storeClickable = false;
var factoryMDown = false;
manager.onMouseDown = function () {
	if (tutorialEActive){
		stopTutorialE();
		return;
	} else if (tutorialMActive) {
		stopTutorialM();
		return;
	}
	if(!storeActive) storeClickable = false;
	if(marsActive && gInput.mouse.x < (canvas.width-160)){ //Mars
		factoryMDown = checkFactoryOver();
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
};

//When button MouseUp
manager.onMouseUp = function () {
	if(marsActive){
		placeBuilding = true;
		dragging = false;
		MouseOverFirst = true;
		drawTileEngine();
		if(factoryMDown && checkFactoryOver()){
			stopActive();
			factoryMode = true;
			startStore();
			redrawButtons();
		}
	}
	if (startActive){ //If Menu
		for(i = 0; i < spritesDown.length; i++){
			if (spritesDown[i].visible == true){
				if (checkMouseOver(spritesDown[i], gInput.mouse.x, gInput.mouse.y)){
					spritesDown[i].visible = false;
					spritesHover[i].visible = true;
					if(i == 0) { //StartGame;
						stop();
						//sound
						sfx_off.play();
						//end sound
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
					    tut=true;
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
					if(!factoryMode){
						stopActive();
						startEarth();
					} else {
						stopActive();
						startMars();
					}
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
};
//Code for Looping Music
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Music
var sfx_arr=[];
var curr=0;
var end=false;;
var song_1=new Audio('sound/1.mp3');
var song_2=new Audio('sound/2.mp3');
var song_3=new Audio('sound/3.mp3');
var song_4=new Audio('sound/4.mp3');
sfx_arr.push(song_1);
sfx_arr.push(song_2);
sfx_arr.push(song_3);
sfx_arr.push(song_4);
//volume ajust
for (var i=0;i<sfx_arr.length;i++) {
    sfx_arr[i].volume=.7;
}
//looping function
function start_song() {
    if (sfx_arr[curr].ended==true) {
        if (curr<sfx_arr.length) {
            curr++;
        } else {curr=0;}
    }
    sfx_arr[curr].play();
    end=false;
}
function pause_song() {
    sfx_arr[curr].pause();
}


