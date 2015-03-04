var days = 0;
var mult = 395;
var RocketOffset = 0;
var Launched = false;
var LaunchQueued = false;

function getYears(){
	return Math.floor(days / 365);
}
function getMonths(){
	return Math.floor(days / 12);
}
function getDays(){
	return days;
}
function getTimeToNextLaunch(){
	return 780-(days%780); //Synodic period for Mars/Earth
}

var SolarSystem = new Sprite();
world.addChild(SolarSystem);
var sun = new Sprite();
var rotate88 = new Sprite();
var rotate225 = new Sprite();
var rotate365 = new Sprite();
var rotate27 = new Sprite();
var rotate687 = new Sprite();
var Mercury = new Sprite();
var Venus = new Sprite();
var Earth = new Sprite();
var Moon = new Sprite();
var Mars = new Sprite();
var Rocket = new Sprite();

var solarSprites = [];

function initSolar(){
	SolarSystem.x = 0;
	SolarSystem.y = 0;
	SolarSystem.width = canvas.width;
	SolarSystem.height = canvas.height;
	SolarSystem.visible = false;
	SolarSystem.image = Textures.load("images/SolarSystem.jpg");

	sun.x = (canvas.width-160)/2;
	sun.y = canvas.height/2;
	sun.width = 551;
	sun.height = 553;
	sun.xoffset = -sun.width/2;
	sun.yoffset = -sun.height/2;
	sun.image = Textures.load("images/sun.png");
	sun.visible = false;

	rotate88.x = (canvas.width-160)/2;
	rotate88.y = canvas.height/2;
	SolarSystem.addChild(rotate88);
	rotate225.x = (canvas.width-160)/2;
	rotate225.y = canvas.height/2;
	SolarSystem.addChild(rotate225);
	rotate365.x = (canvas.width-160)/2;
	rotate365.y = canvas.height/2;
	SolarSystem.addChild(rotate365);
	rotate687.x = (canvas.width-160)/2;
	rotate687.y = canvas.height/2;
	SolarSystem.addChild(rotate687);

	Mercury.x = 100;
	Mercury.y = 0;
	Mercury.width = 10;
	Mercury.height = 10;
	Mercury.xoffset = -Mercury.width/2;
	Mercury.yoffset = -Mercury.height/2;
	Mercury.visible = false;
	Mercury.image = Textures.load("images/Mercury.png");
	rotate88.addChild(Mercury);
	
	Venus.x = 165;
	Venus.y = 0;
	Venus.width = 16;
	Venus.height = 16;
	Venus.xoffset = -Venus.width/2;
	Venus.yoffset = -Venus.height/2;
	Venus.visible = false;
	Venus.image = Textures.load("images/Venus.png");
	rotate225.addChild(Venus);
	
	Earth.x = 200;
	Earth.y = 0;
	Earth.width = 18;
	Earth.height = 18;
	Earth.xoffset = -Earth.width/2;
	Earth.yoffset = -Earth.height/2;
	Earth.visible = false;
	Earth.image = Textures.load("images/Earth.png");
	rotate365.addChild(Earth);
	
	Moon.x = 15;
	Moon.y = 0;
	Moon.width = 6;
	Moon.height = 6;
	Moon.xoffset = -Moon.width/2;
	Moon.yoffset = -Moon.height/2;
	Moon.visible = false;
	Moon.image = Textures.load("images/Moon.png");
	rotate27.addChild(Moon);

	rotate27.x = 0;
	rotate27.y = 0;
	Earth.addChild(rotate27);
	
	Mars.x = 307;
	Mars.y = 0;
	Mars.width = 13;
	Mars.height = 12;
	Mars.xoffset = -Mars.width/2;
	Mars.yoffset = -Mars.height/2;
	Mars.visible = false;
	Mars.image = Textures.load("images/Mars.png");
	rotate687.addChild(Mars);
	
	Rocket.x = 20;
	Rocket.y = 0;
	Rocket.rotation = DTR(-30);
	Rocket.width = 70;
	Rocket.height = 10;
	Rocket.xoffset = -Rocket.width/2;
	Rocket.yoffset = -Rocket.height/2;
	Rocket.visible = false;
	Rocket.image = Textures.load("images/Rocket.png");
	Earth.addChild(Rocket);

	SolarSystem.addChild(sun);

	solarSprites.push(SolarSystem);
	solarSprites.push(sun);
	solarSprites.push(Mercury);
	solarSprites.push(Venus);
	solarSprites.push(Earth);
	solarSprites.push(Moon);
	solarSprites.push(Mars);
}

function startSolar() {
	setInterval(solarTime, 1000 / 30);
	for (var i = 0; i < solarSprites.length; i++)
		solarSprites[i].visible = true;
}

function stopSolar() {
	for (var i = 0; i < solarSprites.length; i++)
		solarSprites[i].visible = false;
}
///////////////////////////////////////////////////////
	
function solarTime(){
	rotate88.rotation -= DTR(mult/88);
	rotate225.rotation -= DTR(mult/225);
	rotate365.rotation -= DTR(mult/365);
	rotate27.rotation -= DTR(mult/27);
	rotate687.rotation -= DTR(mult/687);
	if (rotate88.rotation < -2*Math.PI) rotate88.rotation = 0;
	if (rotate225.rotation < -2*Math.PI) rotate225.rotation = 0;
	if (rotate365.rotation < -2*Math.PI) rotate365.rotation = 0;
	if (rotate27.rotation < -2*Math.PI) rotate27.rotation = 0;
	if (rotate687.rotation < -2*Math.PI) rotate687.rotation = 0;
	days++;
	//Mars 45 degrees ahead of earth
	var dif = Math.abs(-0.5233 - rotate687.rotation + rotate365.rotation);
	if(dif < 0.08 && !Launched && LaunchQueued)
		Launch();
	else if(Launched && RocketOffset > 80){
		Rocket.visible = false;
		RocketOffset = 0;
		Launched = false;
	}else if(Launched){ //Rocket flight trajectory
		Rocket.y = RocketOffset*3.5;
		Rocket.x = 20+(((41*RocketOffset)/26)-((RocketOffset*RocketOffset)/26));
		RocketOffset+=(mult)/1000;
	}
}

function Launch(){
	RocketOffset = 0;
	Rocket.visible = true;
	Launched = true;
	LaunchQueued = false;
}


