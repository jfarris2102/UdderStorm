/*
researchList.js by Team UdderStorm
A component of Get Your Ass to Mars
This document contains information about all of the research options currently
present in the game, and creates an array to represent them
The technologies are researchable from the Earth view, and affect
building stats and other important aspects of the game
*/
var activeTech = [];
/*
copy-able code

var tech = {};
tech.name = new TextBox("");
tech.desc = new TextBox("cost:  Research points.");
tech.avail = false;
tech.unlocked = false;
tech.pre = [""];
tech.cost = ;

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
tech1.categ = reactor;

var tech2 = {};
tech2.name = new TextBox("Fast-neutron Reactor");
tech2.desc = new TextBox("A slightly upgraded nuclear reactor utilizing\nnew technology, cost: 100 Research points.");
tech2.avail = true;
tech2.unlocked = false;
tech2.pre = ["Thermal-neutron Reactor"];
tech2.cost = 100;
tech2.categ = reactor;

var tech3 = {};
tech3.name = new TextBox("Liquid Flouride Thorium Reactor");
tech3.desc = new TextBox("A nuclear reactor that utilizes thorium and is\nmore efficient than traditional uranium based\nreactors, cost: 250 Research points.");
tech3.avail = false;
tech3.unlocked = false;
tech3.pre = ["Fast-neutron Reactor"];
tech3.cost = 250;
tech3.categ = reactor;

var tech4 = {};
tech4.name = new TextBox("Nuclear Fusion Reactor");
tech4.desc = new TextBox("Advanced reactor utilizing Nuclear Fusion\ntechnology, outputs extreme amounts of\nenergy, cost: 500 Research points.");
tech4.avail = false;
tech4.unlocked = false;
tech4.pre = ["Liquid Flouride Thorium Reactor"];
tech4.cost = 500;
tech4.categ = reactor;

var tech5 = {};
tech5.name = new TextBox("Wind Turbines");
tech5.desc = new TextBox("unlocked by default.");
tech5.avail = true;
tech5.unlocked = true;
tech5.pre = [""];
tech5.cost = 0;
tech5.categ = turbine;

var tech6 = {};
tech6.name = new TextBox("Increased storage capacity");
tech6.desc = new TextBox("cost: 100 Research points.");
tech6.avail = true;
tech6.unlocked = false;
tech6.pre = ["Wind Turbines"];
tech6.cost = 100;
tech6.categ = turbine;

var tech7 = {};
tech7.name = new TextBox("Space Frame turbine towers");
tech7.desc = new TextBox("cost: 250 Research points.");
tech7.avail = false;
tech7.unlocked = false;
tech7.pre = ["Increased storage capacity"];
tech7.cost = 250;
tech7.categ = turbine;

var tech8 = {};
tech8.name = new TextBox("Bladeless technology");
tech8.desc = new TextBox("cost: 500 Resource points.");
tech8.avail = false;
tech8.unlocked = false;
tech8.pre = ["Space Frame turbine towers"];
tech8.cost = 500;
tech8.categ = turbine;

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
tech10.categ = solar;

var tech11 = {};
tech11.name = new TextBox("Single-crystal silicon");
tech11.desc = new TextBox("cost: 100 Research points.");
tech11.avail = true;
tech11.unlocked = false;
tech11.pre = ["Solar Panels"];
tech11.cost = 100;
tech11.categ = solar;

var tech12 = {};
tech12.name = new TextBox("GaInp2 Semiconductors");
tech12.desc = new TextBox("cost: 250 Research points.");
tech12.avail = false;
tech12.unlocked = false;
tech12.pre = ["Single-crystal silicon"];
tech12.cost = 250;
tech12.categ = solar;

var tech13 = {};
tech13.name = new TextBox("Concentrated photovoltaics");
tech13.desc = new TextBox("cost: 500 Research points.");
tech13.avail = false;
tech13.unlocked = false;
tech13.pre = ["GaInp2 Semiconductors"];
tech13.cost = 500;
tech13.categ = solar;

var tech14 = {};
tech14.name = new TextBox("Organic photovoltaic cells");
tech14.desc = new TextBox("cost: 1000 Research points.");
tech14.avail = false;
tech14.unlocked = false;
tech14.pre = ["Concentrated photovoltaics"];
tech14.cost = 1000;
tech14.categ = solar;

//End Energy Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Space Tech
var tech101 = {};
tech101.name = new TextBox("Chemical Propulsion");
tech101.desc = new TextBox("unlocked by default");
tech101.avail = true;
tech101.unlocked = true;
tech101.pre = [""];
tech101.cost = 0;
tech101.categ = space;

var tech102 = {};
tech102.name = new TextBox("Plasma Propulsion");
tech102.desc = new TextBox("cost: 100 Research points.");
tech102.avail = true;
tech102.unlocked = false;
tech102.pre = ["Chemical Propulsion"];
tech102.cost = 100;
tech102.categ = space;

var tech103 = {};
tech103.name = new TextBox("Liquid Hydrogen fuel");
tech103.desc = new TextBox("cost: 250 Research points.");
tech103.avail = false;
tech103.unlocked = false;
tech103.pre = ["Plasma Propulsion"];
tech103.cost = 250;
tech103.categ = space;

var tech104 = {};
tech104.name = new TextBox("Space Shuttle");
tech104.desc = new TextBox("Unlocked by default");
tech104.avail = true;
tech104.unlocked = true;
tech104.pre = [""];
tech104.cost = 0;
tech104.categ = space;

var tech105 = {};
tech105.name = new TextBox("VASMIR rocket");
tech105.desc = new TextBox("cost: 250 Research points.");
tech105.avail = false;
tech105.unlocked = false;
tech105.pre = ["Plasma Propulsion"];
tech105.cost = 250;
tech105.categ = space;

var tech106 = {};
tech106.name = new TextBox("VTVL rocket");
tech106.desc = new TextBox("cost: 500 Research points.");
tech106.avail = false;
tech106.unlocked = false;
tech106.pre = ["VASMIR rocket"];
tech106.cost = 500;
tech106.categ = space;
//End Space Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sustainability Tech
var tech201 = {};
tech201.name = new TextBox("Gov't sponsored sust. campaigns");
tech201.desc = new TextBox("unlocked by default");
tech201.avail = true;
tech201.unlocked = true;
tech201.pre = [""];
tech201.cost = 0;

var tech202 = {};
tech202.name = new TextBox("LEED Building Standards");
tech202.desc = new TextBox("cost: 100 Research points.");
tech202.avail = true;
tech202.unlocked = false;
tech202.pre = ["Gov't sponsored sust. campaigns"];
tech202.cost = 100;
tech202.categ = sust1;

var tech203 = {};
tech203.name = new TextBox("Subsidize sustainable innovations");
tech203.desc = new TextBox("cost: 100 Research points.");
tech203.avail = true;
tech203.unlocked = false;
tech203.pre = ["Gov't sponsored sust. campaigns"];
tech203.cost = 100;
tech203.categ = sust2;

var tech204 = {};
tech204.name = new TextBox("Mandated Sustainability Education");
tech204.desc = new TextBox("cost: 100 Research points.");
tech204.avail = true;
tech204.unlocked = false;
tech204.pre = ["Gov't sponsored sust. campaigns"];
tech204.cost = 100;
tech204.categ = sust3;

var tech205 = {};
tech205.name = new TextBox("Fully-efficient/clean electrical vehicles");
tech205.desc = new TextBox("cost: 250 Research points.");
tech205.avail = false;
tech205.unlocked = false;
tech205.pre = ["Subsidize sustainable innovations"];
tech205.cost = 250;
tech205.categ = sust2;

var tech206 = {};
tech206.name = new TextBox("International Sustainability Council");
tech206.desc = new TextBox("cost: 250 Research points.");
tech206.avail = false;
tech206.unlocked = false;
tech206.pre = ["Mandated Sustainability Education\nForeign Relations Campaigns"];
tech206.cost = 250;
tech206.categ = sust3;

var tech207 = {};
tech207.name = new TextBox("Autonomous vehicles");
tech207.desc = new TextBox("cost: 500 Research points.");
tech207.avail = false;
tech207.unlocked = false;
tech207.pre = ["Fully-efficient/clean electrical vehicles"];
tech207.cost = 500;
tech207.categ = sust2;

var tech208 = {};
tech208.name = new TextBox("Ability to Mandate and un-Mandate Replacement Rate");
tech208.desc = new TextBox("cost: 500 Research points.");
tech208.avail = false;
tech208.unlocked = false;
tech208.pre = ["International Sustainability Council"];
tech208.cost = 500;
tech208.categ = sust3;

var tech209 = {};
tech209.name = new TextBox("Net-Zero Energy Home standards");
tech209.desc = new TextBox("cost: 250 Research points.");
tech209.avail = false;
tech209.unlocked = false;
tech209.pre = ["LEED Building Standards"];
tech209.cost = 250;
tech209.categ = sust1;

var tech210 = {};
tech210.name = new TextBox("Smart Homes");
tech210.desc = new TextBox("cost: 250 Research points.");
tech210.avail = false;
tech210.unlocked = false;
tech210.pre = ["LEED Building Standards"];
tech210.cost = 250;
tech210.categ = sust1;

var tech211 = {};
tech211.name = new TextBox("Public Autonomous transportation network");
tech211.desc = new TextBox("cost: 1000 Research points.");
tech211.avail = false;
tech211.unlocked = false;
tech211.pre = ["Autonomous vehicles"];
tech211.cost = 1000;
tech211.categ = sust3;

var tech212 = {};
tech212.name = new TextBox("Net Zero Cities");
tech212.desc = new TextBox("cost: 1000 Research points.");
tech212.avail = false;
tech212.unlocked = false;
tech212.pre = ["Net-Zero Energy Home standards","Smart Homes","Organic photovoltaic cells","Nuclear Fusion Reactor"];
tech212.cost = 1000;
tech212.categ = sust1;

//End Sustainability Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////


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

var SpaceTree = [];
SpaceTree.push(tech101);
SpaceTree.push(tech102);
SpaceTree.push(tech103);
SpaceTree.push(tech104);
SpaceTree.push(tech105);
SpaceTree.push(tech106);

var SustTree = [];
SustTree.push(tech201);
SustTree.push(tech202);
SustTree.push(tech204);
SustTree.push(tech205);
SustTree.push(tech206);
SustTree.push(tech207);
SustTree.push(tech208);
SustTree.push(tech209);
SustTree.push(tech210);
SustTree.push(tech211);
SustTree.push(tech212);

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