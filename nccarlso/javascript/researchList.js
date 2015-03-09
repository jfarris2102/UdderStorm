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
tech102.name = new TextBox("Space Shuttle");
tech102.desc = new TextBox("Unlocked by default");
tech102.avail = true;
tech102.unlocked = true;
tech102.pre = [""];
tech102.cost = 0;
tech102.categ = space;

var tech103 = {};
tech103.name = new TextBox("Plasma Propulsion");
tech103.desc = new TextBox("cost: 100 Research points.");
tech103.avail = true;
tech103.unlocked = false;
tech103.pre = ["Chemical Propulsion"];
tech103.cost = 100;
tech103.categ = space;

var tech104 = {};
tech104.name = new TextBox("Liquid Hydrogen fuel");
tech104.desc = new TextBox("cost: 250 Research points.");
tech104.avail = false;
tech104.unlocked = false;
tech104.pre = ["Plasma Propulsion"];
tech104.cost = 250;
tech104.categ = space;

var tech105 = {};
tech105.name = new TextBox("VASMIR rocket");
tech105.desc = new TextBox("cost: 250 Research points.");
tech105.avail = false;
tech105.unlocked = false;
tech105.pre = ["Plasma Propulsion"];
tech105.cost = 300;
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
//Start Econ/Diplomacy
var tech301 = {};
tech301.name = new TextBox("Budget Reforms");
tech301.desc = new TextBox("Funding increase. cost 100 Research points.");
tech301.avail = true;
tech301.unlocked = false;
tech301.pre = [""];
tech301.cost = 100;
tech301.categ = econ;

var tech302 = {};
tech302.name = new TextBox("Increase international trade");
tech302.desc = new TextBox("International trade is good for business,\nfunding increased. cost: 150 Research points.");
tech302.avail = false;
tech302.unlocked = false;
tech302.pre = ["Budget Reforms"]; //Need to add another
tech302.cost = 150;
tech302.categ = econ;

var tech303 = {};
tech303.name = new TextBox("Space exploring budgeting");
tech303.desc = new TextBox("Constant lobbying has payed off leeding to\nincreased space exploration funding.\ncost: 150 Research points.");
tech303.avail = false;
tech303.unlocked = false;
tech303.pre = ["Budget Reforms"];
tech303.cost = 150;
tech303.categ = econ;

var tech304 = {};
tech304.name = new TextBox("Increase space trade");
tech304.desc = new TextBox("Stimulation in the space materials/technology\nmarket had led to an increase in allocated spending.\ncost: 250 Research points.");
tech304.avail = false;
tech304.unlocked = false;
tech304.pre = ["Increase international trade", "Space exploring budgeting"];
tech304.cost = 250;
tech304.categ = econ;

//End Econ Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Terraforming Tech

var tech401 = {};
tech401.name = new TextBox("Nanochips");
tech401.desc = new TextBox("cost: 100 Research points.");
tech401.avail = true;
tech401.unlocked = false;
tech401.pre = [""];
tech401.cost = 100;

var tech402 = {};
tech402.name = new TextBox("Magnetic field generation");
tech402.desc = new TextBox("cost: 100 Research points.");
tech402.avail = true;
tech402.unlocked = false;
tech402.pre = [""];
tech402.cost = 100;

var tech403 = {};
tech403.name = new TextBox("Photoelectrochemical cells");
tech403.desc = new TextBox("cost: 100 Research points.");
tech403.avail = true;
tech403.unlocked = false;
tech403.pre = [""];
tech403.cost = 100;

var tech404 = {};
tech404.name = new TextBox("Aluminized PET film");
tech404.desc = new TextBox("cost: 100 Research points.");
tech404.avail = true;
tech404.unlocked = false;
tech404.pre = [""];
tech404.cost = 100;

var tech405 = {};
tech405.name = new TextBox("Aluminized PET film");
tech405.desc = new TextBox("cost: 100 Research points.");
tech405.avail = true;
tech405.unlocked = false;
tech405.pre = [""];
tech405.cost = 100;
//End Terraforming Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Mineral Tech

var tech501 = {};
tech501.name = new TextBox("");
tech501.desc = new TextBox("unlocked by default");
tech501.avail = true;
tech501.unlocked = true;
tech501.pre = [""];
tech501.cost = 0;

var tech502 = {};
tech502.name = new TextBox("");
tech502.desc = new TextBox("unlocked by default");
tech502.avail = true;
tech502.unlocked = true;
tech502.pre = [""];
tech502.cost = 0;


//End Mineral Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start Infrastructure
var tech601 = {};
tech601.name = new TextBox("Communications Array");
tech601.desc = new TextBox("cost: 100 Research points.");
tech601.avail = true;
tech601.unlocked = true;
tech601.pre = [""];
tech601.cost = 100;
tech601.categ = comms;

var tech602 = {};
tech602.name = new TextBox("Satellite Dish Communications");
tech602.desc = new TextBox("cost: 100 Research points.");
tech602.avail = true;
tech602.unlocked = false;
tech602.pre = [""];
tech602.cost = 100;
tech602.categ = comms;

var tech603 = {};
tech603.name = new TextBox("Greenhouses");
tech603.desc = new TextBox("cost: 100 Research points.");
tech603.avail = true;
tech603.unlocked = false;
tech603.pre = [""];
tech603.cost = 100;
tech603.categ = green;

var tech604 = {};
tech604.name = new TextBox("Pinkhouses");
tech604.desc = new TextBox("cost: 100 Research points.");
tech604.avail = true;
tech604.unlocked = false;
tech604.pre = [""];
tech604.cost = 100;
tech604.categ = green;

var tech605 = {};
tech605.name = new TextBox("Hydroponics");
tech605.desc = new TextBox("cost: 100 Research points.");
tech605.avail = true;
tech605.unlocked = false;
tech605.pre = [""];
tech605.cost = 100;
tech605.categ = green;

var tech606 = {};
tech606.name = new TextBox("Aquaponic Permaculture");
tech606.desc = new TextBox("cost: 100 Research points.");
tech606.avail = true;
tech606.unlocked = false;
tech606.pre = [""];
tech606.cost = 100;
tech606.categ = green;

var tech607 = {};
tech607.name = new TextBox("Living Quarters");
tech607.desc = new TextBox("cost: 100 Research points.");
tech607.avail = true;
tech607.unlocked = true;
tech607.pre = [""];
tech607.cost = 100;
tech607.categ = live;

var tech608 = {};
tech608.name = new TextBox("Pinkhouses");
tech608.desc = new TextBox("cost: 100 Research points.");
tech608.avail = true;
tech608.unlocked = false;
tech608.pre = [""];
tech608.cost = 100;
tech608.categ = live;

var tech609 = {};
tech609.name = new TextBox("Rovers");
tech609.desc = new TextBox("cost: 100 Research points.");
tech609.avail = true;
tech609.unlocked = false;
tech609.pre = [""];
tech609.cost = 100;

var tech610 = {};
tech610.name = new TextBox("Life Support Units");
tech610.desc = new TextBox("Extracts water from the soil (automatic)");
tech610.avail = true;
tech610.unlocked = false;
tech610.pre = [""];
tech610.cost = 100;
//End Infrastructure
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
EconTree.push(tech301);
EconTree.push(tech302);
EconTree.push(tech303);
EconTree.push(tech304);

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