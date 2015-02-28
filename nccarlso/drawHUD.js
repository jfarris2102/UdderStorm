var HUD = new Sprite();
HUD.width = 160;
HUD.height = 640;
HUD.x = 800;
HUD.y = 0;
HUD.image = Textures.load("http://people.ucsc.edu/~dadkelly/source/HUD.png");

var textArr = [];

function displayHUDtext(){
	//creating the text
	moneyRound = Math.ceil(money*10)/10;
	energyRound = Math.ceil(energy*10)/10;
	var moneyD="MONEY     : "+moneyRound+" mil";
	var foodD="FOOD      : "+food;
	var energyD="ENERGY    : "+energyRound + " mil BTU";
	var popMarsD="POPULATION: "+popMars;
	
	var text1 = new TextBox(moneyD);
	var text2 = new TextBox(foodD);
	var text3 = new TextBox(energyD);
	var text4 = new TextBox(popMarsD);
	
	text1.padTop = 25;
	text2.padTop = 45;
	text3.padTop = 65;
	text4.padTop = 85;
	
	for(var i = 0; i < textArr.length; i++){
		world.removeChild(textArr[i]);
	}
	textArr = [];
	
	textArr.push(text1);
	textArr.push(text2);
	textArr.push(text3);
	textArr.push(text4);
	
	for(var i = 0; i < textArr.length; i++){
		textArr[i].font = "Courier New";
		textArr[i].font = 15;
		textArr[i].padLeft = 805;
		world.addChild(textArr[i]);
}
	if(marsActive){
		//creating the text
		var moneyD="MONEY     : "+money;
		var foodD="FOOD      : "+food;
		var energyD="ENERGY    : "+energy;
		var popMarsD="POPULATION: "+popMars;
		
		var text1 = new TextBox(moneyD);
		var text2 = new TextBox(foodD);
		var text3 = new TextBox(energyD);
		var text4 = new TextBox(popMarsD);
		
		text1.padTop = 25;
		text2.padTop = 45;
		text3.padTop = 65;
		text4.padTop = 85;
		
		for(var i = 0; i < textArr.length; i++){
			world.removeChild(textArr[i]);
		}
		textArr = [];
		
		textArr.push(text1);
		textArr.push(text2);
		textArr.push(text3);
		textArr.push(text4);
		
		for(var i = 0; i < textArr.length; i++){
			textArr[i].font = "Courier New";
			textArr[i].font = 15;
			textArr[i].padLeft = 805;
			world.addChild(textArr[i]);
		}
	}else{
		
		//Earth stuff
		
	}
	
}

function drawHUD(){
    world.addChild(HUD);
	displayHUDtext();
}

function clearHUD(){ //Not necessary
    world.removeChild(HUD);
}

function startHUD(){
	displayHUDtext();
	if(typeof timer != "undefined") {
		clearInterval(timer);
	}
	timer = setInterval(displayHUDtext, 1000);
}

