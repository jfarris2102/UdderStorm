/*
researchList.js by Team UdderStorm
A component of Get Your Ass to Mars
This document contains information about all of the research options currently
present in the game, and creates an array to represent them
The technologies are researchable from the Earth view, and affect
building stats and other important aspects of the game
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Energy Tech
var tech1 = {};
tech1.name = new TextBox("Thermal-neutron Reactor");
tech1.desc = new TextBox("Your standard run of the mill nuclear reactor,\nunlocked by default.");
tech1.avail = true;
tech1.unlocked = true;
tech1.pre = [""];
tech1.cost = 0;

var tech2 = {};
tech2.name = new TextBox("Fast-neutron Reactor");
tech2.desc = new TextBox("A slightly upgraded nuclear reactor utilizing\nnew technology, cost: 100 Research points.");
tech2.avail = true;
tech2.unlocked = false;
tech2.pre = ["Thermal-neutron Reactor"];
tech2.cost = 100;

var tech3 = {};
tech3.name = new TextBox("Liquid Flouride Thorium Reactor");
tech3.desc = new TextBox("A nuclear reactor that utilizes thorium and is\nmore efficient than traditional uranium based\nreactors, cost: 250 Research points.");
tech3.avail = false;
tech3.unlocked = false;
tech3.pre = ["Fast-neutron Reactor"];
tech3.cost = 250;

var tech4 = {};
tech4.name = new TextBox("Nuclear Fusion Reactor");
tech4.desc = new TextBox("Advanced reactor utilizing Nuclear Fusion\ntechnology, outputs extreme amounts of\nenergy, cost: 500 Research points.");
tech4.avail = false;
tech4.unlocked = false;
tech4.pre = ["Liquid Flouride Thorium Reactor"];
tech4.cost = 500;

var tech5 = {};
tech5.name = new TextBox("Wind Turbines");
tech5.desc = new TextBox("unlocked by default.");
tech5.avail = true;
tech5.unlocked = true;
tech5.pre = [""];
tech5.cost = 0;

var tech6 = {};
tech6.name = new TextBox("Increased storage capacity");
tech6.desc = new TextBox("cost: 100 Research points.");
tech6.avail = true;
tech6.unlocked = false;
tech6.pre = ["Wind Turbines"];
tech6.cost = 100;

var tech7 = {};
tech7.name = new TextBox("Space Frame turbine towers");
tech7.desc = new TextBox("cost: 250 Research points.");
tech7.avail = false;
tech7.unlocked = false;
tech7.pre = ["Increased storage capacity"];
tech7.cost = 250;

var tech8 = {};
tech8.name = new TextBox("Bladeless technology");
tech8.desc = new TextBox("cost: 500 Resource points.");
tech8.avail = false;
tech8.unlocked = false;
tech8.pre = ["Space Frame turbine towers"];
tech8.cost = 500;

var tech9 = {};
tech9.name = new TextBox("Bladeless Turbines");
tech9.desc = new TextBox("cost: 1000 Resource points.");
tech9.avail = false;
tech9.unlocked = false;
tech9.pre = ["Bladeless technology"];
tech9.cost = 1000;

var tech10 = {};
tech10.name = new TextBox("Solar Panels");
tech10.desc = new TextBox("Basic energy generating solar panels,\nunlocked by default.");
tech10.avail = true;
tech10.unlocked = true;
tech10.pre = [""];
tech10.cost = 0;

var tech11 = {};
tech11.name = new TextBox("Single-crystal silicon");
tech11.desc = new TextBox("cost: 100 Research points.");
tech11.avail = true;
tech11.unlocked = false;
tech11.pre = ["Solar Panels"];
tech11.cost = 100;

var tech12 = {};
tech12.name = new TextBox("Galnp2 Semiconductors");
tech12.desc = new TextBox("cost: 250 Research points.");
tech12.avail = false;
tech12.unlocked = false;
tech12.pre = ["Single-crystal silicon"];
tech12.cost = 250;

var tech13 = {};
tech13.name = new TextBox("Concentrated photovoltaics");
tech13.desc = new TextBox("cost: 500 Research points.");
tech13.avail = false;
tech13.unlocked = false;
tech13.pre = ["Galnp2 Semiconductors"];
tech13.cost = 500;

var tech14 = {};
tech14.name = new TextBox("Organic photovoltaic cells");
tech14.desc = new TextBox("cost: 1000 Research points.");
tech14.avail = false;
tech14.unlocked = false;
tech14.pre = ["Concentrated photovoltaics"];
tech14.cost = 1000;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var activeTech = [];//
/////////////////////////

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
EnergyTree.push(tech13);
EnergyTree.push(tech14);

var SustTree = [];

var EconTree = [];

var TerraTree = [];

var MineralTree = [];

var InfasTree = [];

///////////////////////////////
setFonts(SpaceTree);
setFonts(EnergyTree);
setFonts(SustTree);
setFonts(EconTree);
setFonts(TerraTree);
setFonts(MineralTree);
setFonts(InfasTree);

function setFonts(x){
	for(var i = 0; i < x.length; i++){
		x[i].name.fontSize = '25';
		x[i].name.font = 'BebasNeue';
		x[i].desc.color = '#00FF00';
		x[i].desc.fontSize = '14';
		x[i].desc.font = 'bitwise';
	}
}