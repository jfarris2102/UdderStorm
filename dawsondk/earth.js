
//dadkelly
use2D=true;
initGame('canvas');
//load background image
var back="http://people.ucsc.edu/~dadkelly/source/paint_center.png";
var bg=new Sprite(); {
    bg.width=960;
    bg.height=640;
    bg.x=0;
    bg.y=0;
    bg.image=Textures.load(back);
} world.addChild(bg);

