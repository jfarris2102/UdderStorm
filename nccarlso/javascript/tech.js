
var techActive = false;
function startTech(){
	techActive = true;
	world.addChild(techbg);
	world.removeChild(HUD);
	clearText();
	generateTech();
	//canvas.addEventListener("mousemove", techHover, false);
}

function stopTech(){
	techActive = false;
	world.removeChild(techbg);
	startHUD();
	clearTech();
	//canvas.removeEventListener("mousemove", techHover)
}

/////////////////////////////////////////////////////////////
//Tech objects
var activeTech = [];
var techObjects = [];

var tech1 = {};
tech1.name = new TextBox("Thermal-neutron Reactor");
tech1.desc = new TextBox("Your standard run of the mill nuclear reactor,\nunlocked by default");
tech1.avail = true;
tech1.unlocked = true;

var tech2 = {};
tech2.name = new TextBox("Fast-neutron Reactor");
tech2.desc = new TextBox("A slightly upgraded nuclear reactor utilizing\nnew technology, cost: 100 Research points.");
tech2.avail = true;
tech2.unlocked = false;

var tech3 = {};
tech3.name = new TextBox("Liquid Flouride Thorium Reactor");
tech3.desc = new TextBox("A nuclear reactor that utilizes thorium and is\nmore efficient than traditional uranium based\nreactors, cost: 250 Research points.");
tech3.avail = false;
tech3.unlocked = false;

var tech4 = {};
tech4.name = new TextBox("Nuclear Fusion Reactor");
tech4.desc = new TextBox("Advanced reactor utilizing Nuclear Fusion technology,\noutputs 500 BTU of energy per second,\ncost: 500 Research points.");
tech4.avail = false;
tech4.unlocked = false;

var tech5 = {};
tech5.name = new TextBox("Thermal-neutron Reactor");
tech5.desc = new TextBox("Your standard run of the mill nuclear reactor,\nunlocked by default");
tech5.avail = false;
tech5.unlocked = false;

var tech6 = {};
tech6.name = new TextBox("Fast-neutron Reactor");
tech6.desc = new TextBox("A slightly upgraded nuclear reactor utilizing\nnew technology, cost: 100 Research points.");
tech6.avail = false;
tech6.unlocked = false;

var tech7 = {};
tech7.name = new TextBox("Liquid Flouride Thorium Reactor");
tech7.desc = new TextBox("A nuclear reactor that utilizes thorium and is\nmore efficient than traditional uranium based\nreactors, cost: 250 Research points.");
tech7.avail = false;
tech7.unlocked = false;

var tech8 = {};
tech8.name = new TextBox("Nuclear Fusion Reactor");
tech8.desc = new TextBox("Advanced reactor utilizing Nuclear Fusion technology,\noutputs 500 BTU of energy per second,\ncost: 500 Research points.");
tech8.avail = false;
tech8.unlocked = false;

var tech9 = {};
tech9.name = new TextBox("Thermal-neutron Reactor");
tech9.desc = new TextBox("Your standard run of the mill nuclear reactor,\nunlocked by default");
tech9.avail = false;
tech9.unlocked = false;

var tech10 = {};
tech10.name = new TextBox("Fast-neutron Reactor");
tech10.desc = new TextBox("A slightly upgraded nuclear reactor utilizing\nnew technology, cost: 100 Research points.");
tech10.avail = false;
tech10.unlocked = false;

var tech11 = {};
tech11.name = new TextBox("Liquid Flouride Thorium Reactor");
tech11.desc = new TextBox("A nuclear reactor that utilizes thorium and is\nmore efficient than traditional uranium based\nreactors, cost: 250 Research points.");
tech11.avail = false;
tech11.unlocked = false;

var tech12 = {};
tech12.name = new TextBox("Nuclear Fusion Reactor");
tech12.desc = new TextBox("Advanced reactor utilizing Nuclear Fusion technology,\noutputs 500 BTU of energy per second,\ncost: 500 Research points.");
tech12.avail = false;
tech12.unlocked = false;

techObjects.push(tech1);
techObjects.push(tech2);
techObjects.push(tech3);
techObjects.push(tech4);
techObjects.push(tech5);
techObjects.push(tech6);
techObjects.push(tech7);
techObjects.push(tech8);
techObjects.push(tech9);
techObjects.push(tech10);
techObjects.push(tech11);
techObjects.push(tech12);

for(var i = 0; i < techObjects.length; i++){
	techObjects[i].name.fontSize = '25';
	techObjects[i].name.font = 'BebasNeue';
	techObjects[i].desc.color = '#00FF00';
	techObjects[i].desc.fontSize = '14';
	techObjects[i].desc.font = 'bitwise';
}
////////////////////////////////////////////////////////////

function pickColor(x){
	if (x.unlocked == true) x.name.color = '#00FF00';
	else if (x.avail == true) x.name.color = '#85C285';
	else x.name.color = '#507450';
}

function generateTech(){
	activeTech = [];
	scrollOffset = 0;
	for(var i = 0; i < 7; i++){
		activeTech.push(techObjects[i]);
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 150 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 150 + (50*i);
		world.addChild(activeTech[i].name);
		world.addChild(activeTech[i].desc);
	}
}

function reDrawActiveTech(){
	for(var i = 0; i < 7; i++){
		activeTech[i].name.x = 150;
		activeTech[i].name.y = 150 + (50*i);
		pickColor(activeTech[i]);
		activeTech[i].desc.x = 500;
		activeTech[i].desc.y = 150 + (50*i);
	}
}

var scrollOffset = 0;
function moveTechScreen(x) {
	if (x == 0 && scrollOffset > 0){
		scrollOffset--;
		var temp =  activeTech.pop();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  techObjects[scrollOffset];
		activeTech.unshift(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		reDrawActiveTech();
	} else if (x == 1 && scrollOffset < (techObjects.length-7)) {
		var temp =  activeTech.shift();
		world.removeChild(temp.name);
		world.removeChild(temp.desc);
		temp =  techObjects[7+scrollOffset];
		activeTech.push(temp);
		world.addChild(temp.name);
		world.addChild(temp.desc);
		scrollOffset++;
		reDrawActiveTech();
	}
}

function clearTech(){
	for(var i = 0; i < 7; i++){
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
