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
tech1.desc = new TextBox("Your standard run of the mill nuclear reactor,\noutputs energy. Unlocked by default.");
tech1.avail = true;
tech1.unlocked = true;
tech1.pre = [""];
tech1.cost = 0;
tech1.categ = reactor;

var tech2 = {};
tech2.name = new TextBox("Fast-neutron Reactor");
tech2.desc = new TextBox("A nuclear reactor utilizing new technology,\noutputs substantial energy. cost: 100 Research points.");
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
tech5.desc = new TextBox("Standard wind turbines, generates some energy. \nUnlocked by default.");
tech5.avail = true;
tech5.unlocked = true;
tech5.pre = [""];
tech5.cost = 0;
tech5.categ = turbine;

var tech6 = {};
tech6.name = new TextBox("Increased storage capacity");
tech6.desc = new TextBox("Increase your turbines' battery storage. 50% \nhigher energy output. cost: 100 Research points.");
tech6.avail = true;
tech6.unlocked = false;
tech6.pre = ["Wind Turbines"];
tech6.cost = 100;
tech6.categ = turbine;

var tech7 = {};
tech7.name = new TextBox("Space Frame turbine towers");
tech7.desc = new TextBox("Much lighter construction of turbines with less\nmaterials. Reduces their cost and increases\nefficiency. cost: 250 Research points.");
tech7.avail = false;
tech7.unlocked = false;
tech7.pre = ["Increased storage capacity"];
tech7.cost = 250;
tech7.categ = turbine;

var tech8 = {};
tech8.name = new TextBox("Bladeless technology");
tech8.desc = new TextBox("Unlocks bladeless wind turbines, which output\nmuch more energy. cost: 500 Resource points.");
tech8.avail = false;
tech8.unlocked = false;
tech8.pre = ["Space Frame turbine towers"];
tech8.cost = 500;
//tech8.categ = turbine2;

/*var tech9 = {};
tech9.name = new TextBox("Bladeless Turbines");
tech9.desc = new TextBox("cost: 1000 Resource points.");
tech9.avail = false;
tech9.unlocked = false;
tech9.pre = ["Bladeless technology"];
tech9.cost = 1000;*/

var tech10 = {};
tech10.name = new TextBox("Solar Panels");
tech10.desc = new TextBox("Basic energy generating solar panels, which\nrun at 20% efficiency. Unlocked by default.");
tech10.avail = true;
tech10.unlocked = true;
tech10.pre = [""];
tech10.cost = 0;
tech10.categ = solar;

var tech11 = {};
tech11.name = new TextBox("Single-crystal silicon");
tech11.desc = new TextBox("Upgraded material which boosts solar panel\nefficiency to 30%. cost: 100 Research points.");
tech11.avail = true;
tech11.unlocked = false;
tech11.pre = ["Solar Panels"];
tech11.cost = 100;
tech11.categ = solar;

var tech12 = {};
tech12.name = new TextBox("GaInp2 Semiconductors");
tech12.desc = new TextBox("Even more powerful material, boosting panel\nefficiency to 50%. cost: 250 Research points.");
tech12.avail = false;
tech12.unlocked = false;
tech12.pre = ["Single-crystal silicon"];
tech12.cost = 250;
tech12.categ = solar;

var tech13 = {};
tech13.name = new TextBox("Concentrated photovoltaics");
tech13.desc = new TextBox("Concetrates sunlight into a smaller area,\nallowing for 100% efficient panels.\ncost: 500 Research points.");
tech13.avail = false;
tech13.unlocked = false;
tech13.pre = ["GaInp2 Semiconductors"];
tech13.cost = 500;
tech13.categ = solar;

var tech14 = {};
tech14.name = new TextBox("Organic photovoltaic cells");
tech14.desc = new TextBox("Solar panels created with organic materials, \nreducing cost per panel. cost: 1000 Research points.");
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
tech101.desc = new TextBox("Basic rocket propulsion technology\nunlocked by default");
tech101.avail = true;
tech101.unlocked = true;
tech101.pre = [""];
tech101.cost = 0;
tech101.categ = space;

var tech102 = {};
tech102.name = new TextBox("Space Shuttle");
tech102.desc = new TextBox("Basic rocket ship. Unlocked by default");
tech102.avail = true;
tech102.unlocked = true;
tech102.pre = [""];
tech102.cost = 0;
tech102.categ = space;

var tech103 = {};
tech103.name = new TextBox("Plasma Propulsion");
tech103.desc = new TextBox("More advanced propulsion system, reducing cost \nto launch. Unlocks advanced rocket types. \ncost: 100 Research points.");
tech103.avail = true;
tech103.unlocked = false;
tech103.pre = ["Chemical Propulsion"];
tech103.cost = 100;
tech103.categ = space;

var tech104 = {};
tech104.name = new TextBox("Liquid Hydrogen fuel");
tech104.desc = new TextBox("More powerful and cheaper fuel, reducing cost \n to launch. cost: 250 Research points.");
tech104.avail = false;
tech104.unlocked = false;
tech104.pre = ["Plasma Propulsion"];
tech104.cost = 250;
tech104.categ = space;

var tech105 = {};
tech105.name = new TextBox("VASMIR rocket");
tech105.desc = new TextBox("Variable Specific Impulse Magnetoplasma Rocket\nAdvanced engine with cheaper launch. \ncost: 250 Research points.");
tech105.avail = false;
tech105.unlocked = false;
tech105.pre = ["Plasma Propulsion"];
tech105.cost = 300;
tech105.categ = space;

var tech106 = {};
tech106.name = new TextBox("VTVL rocket");
tech106.desc = new TextBox("Vertical Take-off Vertical Landing. Reusable\nrocket that allows for return missions and\nMars space trade. cost: 500 Research points.");
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
tech201.desc = new TextBox("Generates 50 Sustainability Awareness Points, \n cost: 25 Research points and $5 mil.");
tech201.avail = true;
tech201.unlocked = false;
tech201.pre = [""];
tech201.cost = 25;
//tech201.mcost = 5;

var tech202 = {};
tech202.name = new TextBox("LEED Building Standards");
tech202.desc = new TextBox("LEED is a green building certification program. Makes\nthis a requirement for all buildings, reducing energy\nuse. cost: 100 Sustainabilty Awareness points.");
tech202.avail = true;
tech202.unlocked = false;
tech202.pre = ["Gov't sponsored sust. campaigns"];
//tech202.cost = 100;
tech202.scost = 100;
tech202.categ = sust1;

var tech203 = {};
tech203.name = new TextBox("Subsidize sustainable innovations");
tech203.desc = new TextBox("Apply government subsidies towards technologies \nthat reduce our environmental impact. \ncost: 100 Sustainability Awareness points.");
tech203.avail = true;
tech203.unlocked = false;
tech203.pre = ["Gov't sponsored sust. campaigns"];
tech203.cost = 100;
//tech203.scost = 100;
tech203.categ = sust2;

var tech204 = {};
tech204.name = new TextBox("Mandated Sustainability Education");
tech204.desc = new TextBox("Make eduction on sustainability issues a core\ncurriculum requirement, reducing environmental impact.\ncost: 100 Sustainability Awareness points.");
tech204.avail = true;
tech204.unlocked = false;
tech204.pre = ["Gov't sponsored sust. campaigns"];
tech204.cost = 100;
//tech204.scost = 100;
tech204.categ = sust3;

var tech205 = {};
tech205.name = new TextBox("Perfected electric vehicles");
tech205.desc = new TextBox("Revolutionize the electric vehicle industry, making \nthem affordable, clean, and the new standard. \ncost: 250 Sustainability Awareness points.");
tech205.avail = false;
tech205.unlocked = false;
tech205.pre = ["Subsidize sustainable innovations"];
tech205.cost = 250;
tech205.categ = sust2;

var tech206 = {};
tech206.name = new TextBox("International Sustainability Council");
tech206.desc = new TextBox("Form an international council that will regulate the\nglobal environmental impact. cost: 250 Sustainability \nAwareness points and 250 Diplomacy Points");
tech206.avail = false;
tech206.unlocked = false;
tech206.pre = ["Mandated Sustainability Education\nForeign Relations Campaigns"];
tech206.cost = 250;
//tech206.dcost = 250;
tech206.categ = sust3;

var tech207 = {};
tech207.name = new TextBox("Autonomous vehicles");
tech207.desc = new TextBox("Perfected autonomous vehicle technology, paving\nthe way for a sustainable transportation system\ncost: 500 Sustainability Awareness points.");
tech207.avail = false;
tech207.unlocked = false;
tech207.pre = ["Fully-efficient/clean electrical vehicles"];
tech207.cost = 500;
tech207.categ = sust2;

var tech208 = {};
tech208.name = new TextBox("Replacement Rate");
tech208.desc = new TextBox("Curb the growing population rate and reduce\ncivilization's environmental impact.\ncost: 500 Sustainability Awareness points.");
tech208.avail = false;
tech208.unlocked = false;
tech208.pre = ["International Sustainability Council"];
tech208.cost = 500;
tech208.categ = sust3;

var tech209 = {};
tech209.name = new TextBox("Net-Zero Energy Home standards");
tech209.desc = new TextBox("Require homes to produce all their own energy\nrenewably and on-site. \ncost: 250 Sustainability Awareness points.");
tech209.avail = false;
tech209.unlocked = false;
tech209.pre = ["LEED Building Standards"];
tech209.cost = 250;
tech209.categ = sust1;

var tech210 = {};
tech210.name = new TextBox("Smart Homes");
tech210.desc = new TextBox("Advanced energy metering and remote control,\nreducing energy usage. \ncost: 250 Sustainability Awareness points.");
tech210.avail = false;
tech210.unlocked = false;
tech210.pre = ["LEED Building Standards"];
tech210.cost = 250;
tech210.categ = sust1;

var tech211 = {};
tech211.name = new TextBox("Autonomous transportation network");
tech211.desc = new TextBox("Advanced public transport network that reduces\nenergy use and environmental impact\ncost: 1000 Sustainability Awareness points.");
tech211.avail = false;
tech211.unlocked = false;
tech211.pre = ["Autonomous vehicles"];
tech211.cost = 1000;
tech211.categ = sust2;

var tech212 = {};
tech212.name = new TextBox("Net Zero Cities");
tech212.desc = new TextBox("Integrated infrastructure with shared systems\nand total reliance on clean renewable energy.\ncost: 1000 Sustainability Awareness points.");
tech212.avail = false;
tech212.unlocked = false;
tech212.pre = ["Net-Zero Energy Home standards","Smart Homes","Organic photovoltaic cells","Nuclear Fusion Reactor"];
tech212.cost = 1000;
tech212.categ = sust1;

//End Sustainability Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start Econ/Diplomacy
var tech301 = {};
tech301.name = new TextBox("Budget reforms");
tech301.desc = new TextBox("Generates 50 Economy points. Can be done \nmore than once. cost 50 Research points.");
tech301.avail = true;
tech301.unlocked = false;
tech301.pre = [""];
tech301.cost = 50;
tech301.categ = econ;

var tech302 = {};
tech302.name = new TextBox("Increase international trade");
tech302.desc = new TextBox("International trade is good for business,\nfunding increased. cost: 150 Research points.");
tech302.avail = true;
tech302.unlocked = false;
tech302.pre = ["Budget reforms", "Foreign Relations Campaigns"]; //Need to add another
tech302.cost = 150;
tech302.categ = econ;

var tech303 = {};
tech303.name = new TextBox("Space exploring budgeting");
tech303.desc = new TextBox("Constant lobbying has payed off leading to\nincreased space exploration funding.\ncost: 150 Diplomacy points.");
tech303.avail = true;
tech303.unlocked = false;
tech303.pre = ["Budget reforms"];
tech303.cost = 150;
tech303.categ = econ;

var tech304 = {};
tech304.name = new TextBox("Increase space trade");
tech304.desc = new TextBox("Stimulation in the space materials/technology\nmarket, leads to an increase in funding.\ncost: 250 Diplomacy points.");
tech304.avail = false;
tech304.unlocked = false;
tech304.pre = ["Increase international trade", "Space exploring budgeting"];
tech304.cost = 250;
tech304.categ = econ;

var tech305 = {};
tech305.name = new TextBox("Foreign Relations Campaigns");
tech305.desc = new TextBox("Generates 50 Diplomacy points.\ncost: 50 Research points and $5 mil.");
tech305.avail = true;
tech305.unlocked = false;
tech305.pre = [""];
tech305.cost = 50;
//tech305.mcost = 5;
tech305.categ = econ;

var tech306 = {};
tech306.name = new TextBox("Global Economy Manipulation");
tech306.desc = new TextBox("Use your diplomatic relations to your advantage,\nreforming the global economy and\nincreasing cash flow. cost: 250 Diplomacy points.");
tech306.avail = false;
tech306.unlocked = false;
tech306.pre = ["Increase international trade"];
tech306.cost = 250;
tech306.categ = econ;

var tech307 = {};
tech307.name = new TextBox("Multinational Treaties");
tech307.desc = new TextBox("Push towards world peace and establish better \nforeign relations. Increases cash flow\ncost: 100 Diplomacy points.");
tech307.avail = false;
tech307.unlocked = false;
tech307.pre = ["Increase international trade"];
tech307.cost = 100;
tech307.categ = econ;

var tech308 = {};
tech308.name = new TextBox("Third-World Country Reform");
tech308.desc = new TextBox("Work towards building a better world by supporting\npoor countries, boosting the global market.\nIncreases cash flow. cost: 500 Diplomacy points.");
tech308.avail = false;
tech308.unlocked = false;
tech308.pre = ["Multinational Treaties","International Sustainability Council"];
tech308.cost = 500;
tech308.categ = econ;

var tech309 = {};
tech309.name = new TextBox("Eradicate Terrorism");
tech309.desc = new TextBox("Use your growing global relations to eradicate \nterrorism, diverting military spending and \nincreasing cash flow. cost: 1000 Diplomacy points.");
tech309.avail = false;
tech309.unlocked = false;
tech309.pre = ["Multinational Treaties"];
tech309.cost = 1000;
tech309.categ = econ;

var tech310 = {};
tech310.name = new TextBox("Universal currency");
tech310.desc = new TextBox("Solidify the global economy and global\ncommunity by implementing a universal currency\nIncreases cash flow. cost: 200 Diplomacy points.");
tech310.avail = false;
tech310.unlocked = false;
tech310.pre = ["Global Economy Manipulation"];
tech310.cost = 200;
tech310.categ = econ;

var tech311 = {};
tech311.name = new TextBox("Universal language");
tech311.desc = new TextBox("Get one step closer to world peace and cooperation\nwith a universal language. Increases cash \nflow. cost: 200 Diplomacy points.");
tech311.avail = false;
tech311.unlocked = false;
tech311.pre = ["Eradicate Terrorism","Third-World Country Reform", "Universal currency"];
tech311.cost = 200;
tech311.categ = econ;

var tech312 = {};
tech312.name = new TextBox("World Peace");
tech312.desc = new TextBox("Achieve total world peace. Human civilization\n is now a force to be reckoned with. Increases\nall resource generation. cost: 500 Diplomacy points.");
tech312.avail = false;
tech312.unlocked = false;
tech312.pre = ["Universal language"];
tech312.cost = 500;
tech312.categ = econ;

//End Econ Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Terraforming Tech

var tech401 = {};
tech401.name = new TextBox("Nanochips");
tech401.desc = new TextBox("Preliminary technology in developing artificial\ngravity. cost: 100 Research points.");
tech401.avail = true;
tech401.unlocked = false;
tech401.pre = [""];
tech401.cost = 100;
tech401.categ = terra1;

var tech402 = {};
tech402.name = new TextBox("Quantum Mechanics");
tech402.desc = new TextBox("Invest in quantum mechanics research, to perfect\nthe manipulation of subatomic particles\ncost: 200 Research points.");
tech402.avail = false;
tech402.unlocked = false;
tech402.pre = ["Nanochips"];
tech402.cost = 200;
tech402.categ = terra1;

var tech403 = {};
tech403.name = new TextBox("Force Field Generation");
tech403.desc = new TextBox("Develop the ability to generate very large force\nfields cost: 300 Research points.");
tech403.avail = false;
tech403.unlocked = false;
tech403.pre = ["Quantum Mechanics"];
tech403.cost = 300;
tech403.categ = terra1;

var tech404 = {};
tech404.name = new TextBox("Artificial Gravity");
tech404.desc = new TextBox("Use the latest research in force field generation\nto replicate the force of gravity. Unlocks\ngravity generators. cost: 400 Research points.");
tech404.avail = true;
tech404.unlocked = false;
tech404.pre = ["Force Field Generation"];
tech404.cost = 400;
tech404.categ = terra1;

var tech405 = {};
tech405.name = new TextBox("Magnetic field generation");
tech405.desc = new TextBox("Technology to maintain sizeable magnetic fields to\nprotect buildings, spacecraft, and colonists\nfrom solar radiation. cost: 200 Research points.");
tech405.avail = true;
tech405.unlocked = false;
tech405.pre = [""];
tech405.cost = 200;
tech405.categ = terra2;

var tech406 = {};
tech406.name = new TextBox("Electromagnetic Grids");
tech406.desc = new TextBox("Develop extremely powerful E.M. grids capable of\nproducing a planet-sized magnetic field\n cost: 300 Research points.");
tech406.avail = true;
tech406.unlocked = false;
tech406.pre = ["Magnetic field generation"];
tech406.cost = 300;
tech406.categ = terra2;

var tech407 = {};
tech407.name = new TextBox("Planetary Magnetic Field");
tech407.desc = new TextBox("Unlocks Mag-field generator to protect the atmosphere \nfrom solar wind. Also requires Liquid Thorium \nReactor technology. cost: 500 Research points.");
tech407.avail = true;
tech407.unlocked = false;
tech407.pre = ["Electromagnetic Grids","Liquid Flouride Thorium Reactor"];
tech407.cost = 100;
tech407.categ = terra2;

var tech408 = {};
tech408.name = new TextBox("Photoelectrochemical cells");
tech408.desc = new TextBox("Preliminary technology in developing artificial\nphotosynthesis. cost: 100 Research points.");
tech408.avail = true;
tech408.unlocked = false;
tech408.pre = [""];
tech408.cost = 100;
tech408.categ = terra3;

var tech409 = {};
tech409.name = new TextBox("Photocatalytic water splitting");
tech409.desc = new TextBox("Develop advanced technology that uses light to \nseperate H and O2.Unlocks Photosynthesizers,\ngenerates energy, O2. cost: 200 Research points.");
tech409.avail = true;
tech409.unlocked = false;
tech409.pre = ["Photoelectrochemical cells"];
tech409.cost = 200;
tech409.categ = terra3;

var tech410 = {};
tech410.name = new TextBox("Artifical Photosynthesis");
tech410.desc = new TextBox("Use water splitting technology to mimic photosynthesis\nUnlocks Air Exchanger, which produces oxygen\nfor the atmosphere. cost: 300 Research points.");
tech410.avail = true;
tech410.unlocked = false;
tech410.pre = ["Photocatalytic water splitting"];
tech410.cost = 300;
tech410.categ = terra3;

var tech411 = {};
tech411.name = new TextBox("Aluminized PET film");
tech411.desc = new TextBox("Advanced reflective material that can withstand\nspace weather. cost: 100 Research points.");
tech411.avail = true;
tech411.unlocked = false;
tech411.pre = [""];
tech411.cost = 100;
//tech411.categ = terra4;

var tech412 = {};
tech412.name = new TextBox("Solar Sails");
tech412.desc = new TextBox("Advanced orbiting technology that utilizes\nsolar wind. cost: 200 Research points.");
tech412.avail = true;
tech412.unlocked = false;
tech412.pre = ["Aluminized PET film"];
tech412.cost = 200;
//tech412.categ = terra4;

var tech413 = {};
tech413.name = new TextBox("Statites");
tech413.desc = new TextBox("Satellites that maintain a position in orbit\nrather than rotating around a planet\ncost: 200 Research points.");
tech413.avail = true;
tech413.unlocked = false;
tech413.pre = ["Solar Sails"];
tech413.cost = 200;
//tech413.categ = terra4;

var tech414 = {};
tech414.name = new TextBox("Orbital mirrors");
tech414.desc = new TextBox("Statites fixed with PET film that reflect\nsunlight, sublimating frozen C02 and \nwarming the atmosphere. cost: 300 Research points.");
tech414.avail = true;
tech414.unlocked = false;
tech414.pre = ["Statites"];
tech414.cost = 300;
tech414.categ = terra4;

var tech415 = {};
tech415.name = new TextBox("Chloroflourocarbon Production");
tech415.desc = new TextBox("Produce chloroflourocarbon, a powerful greenhouse\ngas that could be used to increase\natmospheric pressure. cost: 100 Research points.");
tech415.avail = true;
tech415.unlocked = false;
tech415.pre = [""];
tech415.cost = 100;
//tech415.categ = terra5;

var tech416 = {};
tech416.name = new TextBox("CFC Rockets");
tech416.desc = new TextBox("Periodically launch rockets packed with\ncholorflourocarbon at Mars to build up its atmosphere\ncost: 400 Research points.");
tech416.avail = true;
tech416.unlocked = false;
tech416.pre = ["Chloroflourocarbon Production"];
tech416.cost = 400;
tech416.categ = terra5;

//End Terraforming Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Mineral Tech

var tech501 = {};
tech501.name = new TextBox("Mining Drills");
tech501.desc = new TextBox("unlocked by default");
tech501.avail = true;
tech501.unlocked = true;
tech501.pre = [""];
tech501.cost = 0;

var tech502 = {};
tech502.name = new TextBox("Research 'Tent'");
tech502.desc = new TextBox("unlocked by default");
tech502.avail = true;
tech502.unlocked = true;
tech502.pre = [""];
tech502.cost = 0;

var tech503 = {};
tech503.name = new TextBox("Mining Rovers");
tech503.desc = new TextBox("cost: 250 Research points.");
tech503.avail = true;
tech503.unlocked = false;
tech503.pre = ["Mining Drills"];
tech503.cost = 250;

var tech504 = {};
tech504.name = new TextBox("Laboratory");
tech504.desc = new TextBox("cost: 250 Research points.");
tech504.avail = true;
tech504.unlocked = false;
tech504.pre = ["Research 'Tent'"];
tech504.cost = 250;

var tech505 = {};
tech505.name = new TextBox("Subterranean Drill Rigs");
tech505.desc = new TextBox("cost: 450 Research points.");
tech505.avail = false;
tech505.unlocked = false;
tech505.pre = ["Mining Rovers"];
tech505.cost = 450;

var tech506 = {};
tech506.name = new TextBox("Research Center");
tech506.desc = new TextBox("cost: 450 Research points.");
tech506.avail = false;
tech506.unlocked = false;
tech506.pre = ["Laboratory"];
tech506.cost = 450;

var tech507 = {};
tech507.name = new TextBox("Drilling Stations");
tech507.desc = new TextBox("cost: 750 Research points.");
tech507.avail = false;
tech507.unlocked = false;
tech507.pre = ["Subterranean Drill Rigs"];
tech507.cost = 750;

var tech508 = {};
tech508.name = new TextBox("Factory");
tech508.desc = new TextBox("cost: 1200 Research points.");
tech508.avail = false;
tech508.unlocked = false;
tech508.pre = ["Drilling Stations","Research Center"];
tech508.cost = 1200;


//End Mineral Tech
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start Infrastructure
var tech601 = {};
tech601.name = new TextBox("Communications Array");
tech601.desc = new TextBox("An on the ground communications array\nused to contact Earth.");
tech601.avail = true;
tech601.unlocked = true;
tech601.pre = [""];
tech601.cost = 100;

var tech602 = {};
tech602.name = new TextBox("Satellite Dish Communications");
tech602.desc = new TextBox("Satellite Communication Dishes\npositioned in space to\nspeed up contact with Earth.");
tech602.avail = true;
tech602.unlocked = false;
tech602.pre = ["Communications Array"];
tech602.cost = 250;

var tech603 = {};
tech603.name = new TextBox("Greenhouses");
tech603.desc = new TextBox("Glass roofed buildings used\nto produce food and a\nsmall amount of oxygen.");
tech603.avail = true;
tech603.unlocked = false;
tech603.pre = ["Food Supply"];
tech603.cost = 200;
//tech603.categ = green;

var tech604 = {};
tech604.name = new TextBox("Pinkhouses");
tech604.desc = new TextBox("More efficient than Greenhouses,\nPinkhouses use blue and red LEDs\nto decreese prodcution costs.");
tech604.avail = true;
tech604.unlocked = false;
tech604.pre = ["Greenhouses"];
tech604.cost = 400;
//tech604.categ = green;

var tech605 = {};
tech605.name = new TextBox("Hydroponics");
tech605.desc = new TextBox("Technology to grow plants\nwithout need for soil.");
tech605.avail = true;
tech605.unlocked = false;
tech605.pre = ["Pinkhouses"];
tech605.cost = 600;
tech605.categ = green;

var tech606 = {};
tech606.name = new TextBox("Aquaponic Permaculture");
tech606.desc = new TextBox("Growth of fish alongside\nplant production.");
tech606.avail = true;
tech606.unlocked = false;
tech606.pre = ["Hydroponics"];
tech606.cost = 800;
tech606.categ = green;

var tech607 = {};
tech607.name = new TextBox("Living Quarters");
tech607.desc = new TextBox("Basic crew Living Quarters.");
tech607.avail = true;
tech607.unlocked = true;
tech607.pre = [""];
tech607.cost = 100;

var tech608 = {};
tech608.name = new TextBox("Living Centers");
tech608.desc = new TextBox("Upgraded Living Quarters.");
tech608.avail = true;
tech608.unlocked = false;
tech608.pre = ["Living Quarters"];
tech608.cost = 250;

var tech609 = {};
tech609.name = new TextBox("Rovers");
tech609.desc = new TextBox("Mars side rover that\nperform surface tasks.");
tech609.avail = true;
tech609.unlocked = true;
tech609.pre = [""];
tech609.cost = 100;

var tech610 = {};
tech610.name = new TextBox("Life Support Units");
tech610.desc = new TextBox("Extracts water from the soil (automatic)");
tech610.avail = true;
tech610.unlocked = false;
tech610.pre = ["Rovers"];
tech610.cost = 1000;

var tech611 = {};
tech611.name = new TextBox("Food Supply");
tech611.desc = new TextBox("The food supply brought\nover on initial launch.");
tech611.avail = true;
tech611.unlocked = true;
tech611.pre = [""];
tech611.cost = 100;
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
//EnergyTree.push(tech9);
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
SustTree.push(tech209);
SustTree.push(tech210);
SustTree.push(tech212);
SustTree.push(tech203);
SustTree.push(tech205);
SustTree.push(tech207);
SustTree.push(tech211);
SustTree.push(tech204);
SustTree.push(tech206);
SustTree.push(tech208);

var EconTree = [];
EconTree.push(tech301);
EconTree.push(tech305);
EconTree.push(tech303);
EconTree.push(tech302);
EconTree.push(tech304);
//EconTree.push(tech305);
EconTree.push(tech306);
EconTree.push(tech307);
EconTree.push(tech308);
EconTree.push(tech309);
EconTree.push(tech310);
EconTree.push(tech311);
EconTree.push(tech312);

var TerraTree = [];
TerraTree.push(tech401);
TerraTree.push(tech402);
TerraTree.push(tech403);
TerraTree.push(tech404);
TerraTree.push(tech405);
TerraTree.push(tech406);
TerraTree.push(tech407);
TerraTree.push(tech408);
TerraTree.push(tech409);
TerraTree.push(tech410);
TerraTree.push(tech411);
TerraTree.push(tech412);
TerraTree.push(tech413);
TerraTree.push(tech414);
TerraTree.push(tech415);
TerraTree.push(tech416);

var MineralTree = [];
MineralTree.push(tech501);
MineralTree.push(tech502);
MineralTree.push(tech503);
MineralTree.push(tech504);
MineralTree.push(tech505);
MineralTree.push(tech506);
MineralTree.push(tech507);
MineralTree.push(tech508);

var InfasTree = [];
InfasTree.push(tech601);
InfasTree.push(tech602);
InfasTree.push(tech604);
InfasTree.push(tech605);
InfasTree.push(tech606);
InfasTree.push(tech607);
InfasTree.push(tech608);
InfasTree.push(tech609);
InfasTree.push(tech610);
InfasTree.push(tech611);

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