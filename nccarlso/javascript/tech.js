
var techActive = false;
function startTech(){
	techActive = true;
	world.addChild(techbg);
	world.addChild(currentTreeTextbox);
	world.addChild(researchPointsTextbox);
	world.removeChild(HUD);
	clearText();
	generateTech();
	//canvas.addEventListener("mousemove", techHover, false);
}

function stopTech(){
	techActive = false;
	world.removeChild(techbg);
	world.removeChild(currentTreeTextbox);
	world.removeChild(researchPointsTextbox);
	startHUD();
	clearTech();
	//canvas.removeEventListener("mousemove", techHover)
}

var currentTreeTextbox = new TextBox("Space Flight Technology");
currentTreeTextbox.x = 150;
currentTreeTextbox.y = 150;
currentTreeTextbox.fontSize = '25';
currentTreeTextbox.font = 'bitwise';
currentTreeTextbox.color = '#CCFFCC';
var researchPointsTextbox = new TextBox("Points: 14500");
researchPointsTextbox.x = 500;
researchPointsTextbox.y = 150;
researchPointsTextbox.fontSize = '25';
researchPointsTextbox.font = 'bitwise';
researchPointsTextbox.color = '#CCFFCC';

/////////////////////////////////////////////////////////////
//Tech Arrays
var activeTech = [];

var SpaceTree = [];

var EnergyTree = [];
EnergyTree.push(tech1);
EnergyTree.push(tech2);
EnergyTree.push(tech3);
EnergyTree.push(tech4);
EnergyTree.push(tech5);
EnergyTree.push(tech6);
EnergyTree.push(tech7);
EnergyTree.push(tech8);
EnergyTree.push(tech9);
EnergyTree.push(tech10);
EnergyTree.push(tech11);
EnergyTree.push(tech12);

var SustTree = [];

var EconTree = [];

var TerraTree = [];

var MineralTree = [];

var InfasTree = [];


for(var i = 0; i < EnergyTree.length; i++){
	EnergyTree[i].name.fontSize = '25';
	EnergyTree[i].name.font = 'BebasNeue';
	EnergyTree[i].desc.color = '#00FF00';
	EnergyTree[i].desc.fontSize = '14';
	EnergyTree[i].desc.font = 'bitwise';
}
////////////////////////////////////////////////////////////

function pickColor(x){
	if (x.unlocked == true) x.name.color = '#00FF00';
	else if (x.avail == true) x.name.color = '#85C285';
	else x.name.color = '#507450';
}

var currTech = 1;
function getCurrentTechTree(){
	switch(currTech) {
	case 0:
        return SpaceTree;
        break;
    case 1:
        return EnergyTree;
        break;
    case 2:
        return SustTree;
        break;
    case 3:
        return EconTree;
        break;
    case 4:
        return TerraTree;
        break;
	case 5:
        return MineralTree;
        break;
	case 6:
        return InfasTree;
        break;
    default:
        return SpaceTree;
		break;
	}
}

function generateTech(){
	activeTech = [];
	scrollOffset = 0;
	var curr = getCurrentTechTree();
	for(var i = 0; i < 6; i++){
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
	for(var i = 0; i < 6; i++){
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 200 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 200 + (50*i);
	}
}

var scrollOffset = 0;
function moveTechScreen(x) {
	var curr = getCurrentTechTree();
	if (x == 0 && scrollOffset > 0){
		scrollOffset--;
		var temp =  activeTech.pop();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  curr[scrollOffset];
		activeTech.unshift(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		reDrawActiveTech();
	} else if (x == 1 && scrollOffset < (curr.length-6)) {
		var temp =  activeTech.shift();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  curr[6+scrollOffset];
		activeTech.push(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		scrollOffset++;
		reDrawActiveTech();
	}
}

function clearTech(){
	for(var i = 0; i < 6; i++){
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

function checkTechScroll(x, y) {
	if (x > 426 && x < 527 && y > 103 && y < 126) {
		return 0;
	}else if (x > 426 && x < 527 && y > 510 && y < 533) {
		return 1;
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
