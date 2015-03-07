/*
store.js by Team UdderStorm
A component of Get Your Ass to Mars
This program manages navigating to the store
*/
var storeActive = false;
function startStore(){
	for(var i = 1; i <= buildingTypes; i++){
		buidlingsAvailable[i]+=5;
	}
	storeActive = true;
	world.addChild(techbg);
	world.removeChild(HUD);
	clearText();
	//canvas.addEventListener("mousemove", mouseHover, false);
}

function stopStore(){
	storeActive = false;
	world.removeChild(techbg);
	startHUD();
	//canvas.removeEventListener("mousemove", mouseHover)
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

