/*
tech.js by Team UdderStorm
A component of Get Your Ass to Mars
This program manages the store's technology options, and 
also draws the interior of the store and makes it possible 
to interact with the options
*/
var techActive = false;
function startTech(){
	techActive = true;
	world.addChild(techbg);
	world.addChild(currentTreeTextbox);
	world.addChild(researchPointsTextbox);
	world.removeChild(HUD);
	clearText();
	generateTech();
}

function stopTech(){
	techActive = false;
	world.removeChild(techbg);
	world.removeChild(currentTreeTextbox);
	world.removeChild(researchPointsTextbox);
	startHUD();
	clearTech();
}

var currentTreeTextbox = new TextBox("");
currentTreeTextbox.x = 150;
currentTreeTextbox.y = 150;
currentTreeTextbox.fontSize = '25';
currentTreeTextbox.font = 'bitwise';
currentTreeTextbox.color = '#CCFFCC';
currentTreeTextbox.dropShadow = true;
currentTreeTextbox.shadowColorCustom = '#91E8BC';
currentTreeTextbox.shadowBlurCustom = 4;
var researchPointsTextbox = new TextBox("Points: 0");
researchPointsTextbox.x = 500;
researchPointsTextbox.y = 150;
researchPointsTextbox.fontSize = '25';
researchPointsTextbox.font = 'bitwise';
researchPointsTextbox.color = '#CCFFCC';
researchPointsTextbox.dropShadow = true;
researchPointsTextbox.shadowColorCustom = '#91E8BC';
researchPointsTextbox.shadowBlurCustom = 4;
////////////////////////////////////////////////////////////

function pickColor(x){
	if (x.unlocked == true){
		x.name.color = '#00FF00';
	}
	else if (x.avail == true){
		x.name.color = '#85C285';
	}
	else{
		x.name.color = '#507450';
	}
	x.name.dropShadow = true;
	x.desc.dropShadow = true;
	x.name.shadowBlurCustom = 4;
	x.desc.shadowBlurCustom = 6;
}

var researchPoints = 1000;
function updateTechInfo(){
	researchPointsTextbox.text = "Points: " + researchPoints;
}

var currTech = 0;
function getCurrentTechTree(){
	switch(currTech) {
	case 0:
		currentTreeTextbox.text = "Space Flight Technology";
        return SpaceTree;
    case 1:
		currentTreeTextbox.text = "Energy Upgrades";
        return EnergyTree;
    case 2:
		currentTreeTextbox.text = "Sustainability Research";
        return SustTree;
    case 3:
		currentTreeTextbox.text = "Economy / Diplomacy";
        return EconTree;
    case 4:
		currentTreeTextbox.text = "Terraforming";
        return TerraTree;
	case 5:
		currentTreeTextbox.text = "Mineral Production";
        return MineralTree;
	case 6:
		currentTreeTextbox.text = "Infrastructure Development";
        return InfasTree;
    default:
		currentTreeTextbox.text = "Space Flight Technology";
        return SpaceTree;
	}
}

function generateTech(){
	activeTech = [];
	scrollOffset = 0;
	var curr = getCurrentTechTree();
	for(var i = 0; i < 6 && i < curr.length; i++){
		activeTech.push(curr[i]);
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 200 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 200 + (50*i);
		world.addChild(activeTech[i].name);
		world.addChild(activeTech[i].desc);
	}
}

function swapTech(){
	for(var i = 0; i < 6 && i < activeTech.length; i++){
		world.removeChild(activeTech[i].name);
		world.removeChild(activeTech[i].desc);
	}
	activeTech = [];
	var curr = getCurrentTechTree();
	for(var i = 0; i < 6 && i < curr.length; i++){
		activeTech.push(curr[i]);
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 200 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 200 + (50*i);
		world.addChild(activeTech[i].name);
		world.addChild(activeTech[i].desc);
	}
}

function reDrawActiveTech(){
	for(var i = 0; i < 6 && i < activeTech.length; i++){
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 200 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 200 + (50*i);
	}
}

var scrollOffset = 0;
function moveTechScreen(x) { //Used for text screen scrolling and navigation
	if(x == -1) return;
	var curr = getCurrentTechTree();
	if (x == 0 && scrollOffset > 0){ //Scroll up
		scrollOffset--;
		var temp =  activeTech.pop();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  curr[scrollOffset];
		activeTech.unshift(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		reDrawActiveTech();
	} else if (x == 1 && scrollOffset < (curr.length-6)) { //Scroll down
		var temp =  activeTech.shift();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  curr[6+scrollOffset];
		activeTech.push(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		scrollOffset++;
		reDrawActiveTech();
	} else if (x == 2){ //Prev tree
		if(currTech <= 0) currTech = 6;
		else currTech--;
		swapTech();
	} else if (x == 3){ //Next tree
		if(currTech >= 6) currTech = 0;
		else currTech++;
		swapTech();
	}
}

function updateUnlockTree(x){
	var curr = getCurrentTechTree();
	for(var i = 0; i < curr.length; i++){
		if(x.name.text.localeCompare(curr[i].name.text) == 0){
			curr[i].unlocked = true;
			if(typeof curr[i].categ !== 'undefined'){
				levelUp(curr[i].categ);
			}
			researchPoints -= curr[i].cost;
		}
	}
}

function updateAvailTree(x, y){
	var match = [];
	for (var i = 0; i < y.length; i++){
		for (var j = 0; j < y[i].pre.length; j++){
			if(x.name.text.localeCompare(y[i].pre[j]) == 0) match.push(true);
			if (match.length == y[i].pre.length){
				y[i].avail = true;
				match = [];
			}
		}
	}
}

function updateAvailTech(x){
	updateAvailTree(x, SpaceTree);
	updateAvailTree(x, EnergyTree);
	updateAvailTree(x, SustTree);
	updateAvailTree(x, EconTree);
	updateAvailTree(x, TerraTree);
	updateAvailTree(x, MineralTree);
	updateAvailTree(x, InfasTree);
	var curr = getCurrentTechTree();
	for(var i = 0; i < 6 && i < curr.length; i++){
		pickColor(activeTech[i]);
	}
}

function unlockTech(x){
	var indx = x-4;
	if(indx < activeTech.length){
		if(activeTech[indx].avail == true && activeTech[indx].unlocked == false && activeTech[indx].cost <= researchPoints){
			updateUnlockTree(activeTech[indx]);
			updateAvailTech(activeTech[indx]);
		}
	}
}

function clearTech(){
	for(var i = 0; i < 6 && i < activeTech.length; i++){
		world.removeChild(activeTech[i].name);
		world.removeChild(activeTech[i].desc);
	}
	activeTech = [];
}

function checkTechOver(x, y) {
	if (earthActive){
		if (x > 437 && x < 762 && y > 119 && y < 180) {
			return true;
		}
	}else if(techActive){
		if (x > 0 && x <= 50 && y > 0 && y <= 50) {
			return true;
		}
	}
    return false;
}

function checkTechMenu(x, y) {
	if (x > 426 && x < 527 && y > 103 && y < 126) {
		return 0;
	}else if (x > 426 && x < 527 && y > 510 && y < 533) {
		return 1;
	}else if (x > 150 && x < 268 && y > 107 && y < 130) {
		return 2;
	}else if (x > 290 && x < 355 && y > 107 && y < 130) {
		return 3;
	}else if (x > 150 && x < 430 && y > 200 && y < 224) {
		return 4;
	}else if (x > 150 && x < 430 && y > 250 && y < 274) {
		return 5;
	}else if (x > 150 && x < 430 && y > 300 && y < 324) {
		return 6;
	}else if (x > 150 && x < 430 && y > 350 && y < 374) {
		return 7;
	}else if (x > 150 && x < 430 && y > 400 && y < 424) {
		return 8;
	}else if (x > 150 && x < 430 && y > 450 && y < 474) {
		return 9;
	}
    return -1;
}

var techBG="images/terminal.png";
var techbg=new Sprite(); {
    techbg.width=960;
    techbg.height=640;
    techbg.x=0;
    techbg.y=0;
    techbg.image=Textures.load(techBG);
}
