var HUD = new Sprite();
HUD.width = 160;
HUD.height = 640;
HUD.x = 800;
HUD.y = 0;
HUD.image = Textures.load("images/highlight.png");

function drawHUD(){
    world.addChild(HUD);
}

function clearHUD(){ //Not necessary
    world.removeChild(HUD);
}
