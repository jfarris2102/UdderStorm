/*
store.js by Team UdderStorm
A component of Get Your Ass to Mars
This program manages navigating to the store
*/

var shopbg=new Sprite();
shopbg.width=960;
shopbg.height=640;
shopbg.x=0;
shopbg.y=0;
shopbg.image=Textures.load("images/terminalShop.png");

var storeActive = false;
var costTexts = [];
var ownedTexts = [];

function startStore(){
	storeActive = true;
	world.addChild(shopbg);
	world.removeChild(HUD);
	if(!LaunchQueued) rocketStatus.text = "Inactive";
	world.addChild(rocketStatus);
	world.addChild(cashStatus);
	clearText();
	generateStoreText();
	updateStoreText();
}

function stopStore(){
	storeActive = false;
	world.removeChild(shopbg);
	world.removeChild(rocketStatus);
	world.removeChild(cashStatus);
	for(var i = 0; i < buildingTypes; i++){
		world.removeChild(costTexts[i]);
		world.removeChild(ownedTexts[i]);
	}
	costTexts = [];
	ownedTexts = [];
	startHUD();
}

function updateStoreInfo(){
	cashStatus.text = "Funds: " + money + " MIL";//   |   Next launch in " + getTimeToNextLaunch() + " days.";
}

var rocketType = 0;
var popLaunch = 0;

function checkStoreClicks(x, y) {
	if(storeActive){
		if (x >= 724 && x <= 828 && y >= 420 && y <= 501){
			if(money >= (250 - (50*rocketType)) || LaunchQueued){ //Checks cash for launch
				if(!LaunchQueued) {
					rocketStatus.text = "Launch\n" + "queued.";
					popLaunch = 5*(rocketType+1);
					LaunchQueued = true;
					money -= (250 - (50*(rocketType)));
				}else{
					rocketStatus.text = "Launch\ncancelled.";
					LaunchQueued = false;
					money += (250 - (50*rocketType));
				}
			}else (alert((250 - (50*rocketType)) + "MIL required for launch."));
			return 0; //Launch clicked
		}
		var xoffset = 0;
		var yoffset = 0;
		var xtemp = 0;
		var ytemp = 0;
		for(var i = 0; i < buildingTypes; i++){
			if(xtemp > 6){xtemp = 0; ytemp++};
			xoffset = 170+(xtemp*91);
			yoffset = 135+(ytemp*146);
			xtemp++;
			if (x >= xoffset && x <= (xoffset+64) && y >= yoffset && y <= (yoffset+64)) return (i+1); //return which building clicked
		}
	}
	return -1; //Nothing clicked
}

function generateStoreText(){
	for(var i = 0; i < buildingTypes; i++){ //Make a new array of textboxes
		var temp = new TextBox("");
		temp.fontSize = costTextGeneric.fontSize;
		temp.font = costTextGeneric.font;
		temp.color = costTextGeneric.color;
		temp.dropShadow = costTextGeneric.dropShadow;
		temp.shadowColorCustom = costTextGeneric.shadowColorCustom;
		temp.shadowBlurCustom = costTextGeneric.shadowBlurCustom;
		var temp2 = new TextBox("");
		temp2.fontSize = ownedTextGeneric.fontSize;
		temp2.font = ownedTextGeneric.font;
		temp2.color = ownedTextGeneric.color;
		temp2.dropShadow = ownedTextGeneric.dropShadow;
		temp2.shadowColorCustom = ownedTextGeneric.shadowColorCustom;
		temp2.shadowBlurCustom = ownedTextGeneric.shadowBlurCustom;
		costTexts[i] = temp;
		ownedTexts[i] = temp2;
		world.addChild(costTexts[i]);
		world.addChild(ownedTexts[i]);
	}
}

function updateStoreText(){
	var xoffset = 0;
	var yoffset = 0;
	var xtemp = 0;
	var ytemp = 0;
	for(var i = 0; i < buildingTypes; i++){
			if(xtemp > 6){xtemp = 0; ytemp++};
			xoffset = 170+(xtemp*91);
			yoffset = 135+(ytemp*146);
			xtemp++;
			costTexts[i].text = (getModel(i+1).cost) +" mil";
			ownedTexts[i].text = launchCargo[i+1];
			costTexts[i].x = xoffset+40;
			ownedTexts[i].x = xoffset+40;
			costTexts[i].y = yoffset+68;
			ownedTexts[i].y = yoffset+81;
	}
}

function purchaseBuilding(x){
	if(x >= 1 && x<= buildingTypes){
		if(!buidlingUnlocked[x]) alert("Building not unlocked, try purchasing some researches to unlock it.");
		else if(money >= getModel(x).cost){
			money -= (getModel(x).cost);
			launchCargo[x]++;
		}else if(money < getModel(x).cost) alert("Insufficient funds.");
	}
}

function checkStoreOver(x, y) {
	if (earthActive){
		if (x > 207 && x < 380 && y > 384 && y < 450) {
			return true;
		}
	}else if(storeActive){
		if (x > 0 && x <= 50 && y > 0 && y <= 50) {
			return true;
		}
	}
    return false;
}

var costTextGeneric = new TextBox("");
costTextGeneric.fontSize = '12';
costTextGeneric.font = 'bitwise';
costTextGeneric.color = '#CCFFCC';
costTextGeneric.dropShadow = true;
costTextGeneric.shadowColorCustom = '#91E8BC';
costTextGeneric.shadowBlurCustom = 4;

var ownedTextGeneric = new TextBox("");
ownedTextGeneric.fontSize = '12';
ownedTextGeneric.font = 'bitwise';
ownedTextGeneric.color = '#CCFFCC';
ownedTextGeneric.dropShadow = true;
ownedTextGeneric.shadowColorCustom = '#91E8BC';
ownedTextGeneric.shadowBlurCustom = 4;

var rocketStatus = new TextBox("Inactive");
rocketStatus.x = 769;
rocketStatus.y = 490;
rocketStatus.fontSize = '14';
rocketStatus.font = 'bitwise';
rocketStatus.color = '#CCFFCC';
rocketStatus.dropShadow = true;
rocketStatus.shadowColorCustom = '#91E8BC';
rocketStatus.shadowBlurCustom = 4;

var cashStatus = new TextBox("Funds: 0 MIL");
cashStatus.x = 650;
cashStatus.y = 95;
cashStatus.fontSize = '16';
cashStatus.font = 'bitwise';
cashStatus.color = '#CCFFCC';
cashStatus.dropShadow = true;
cashStatus.shadowColorCustom = '#91E8BC';
cashStatus.shadowBlurCustom = 4;
