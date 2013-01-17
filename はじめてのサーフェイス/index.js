enchant();
window.onload = function() {
    var game = new Game(320, 480);
    
    game.onload = function() {
        var bgSprite = new Sprite(320, 480);
        
        var bgSurface = new Surface(320, 480);
        bgSurface.context.strokeStyle = 'red';
        bgSurface.context.beginPath();
        bgSurface.context.rect(100, 100, 150, 150);
        bgSurface.context.moveTo(200, 200);
        bgSurface.context.lineTo(300, 300);
        bgSurface.context.stroke();
        
        bgSprite.addEventListener(Event.TOUCH_START, function(event) {
            if (event.x > 160) {
                bgSprite.rotate(90);
            }else { 
                bgSprite.rotate(270);
            }
        });
        
        bgSprite.image = bgSurface;
        
        game.rootScene.addChild(bgSprite);
    };
    
    game.start();
};
                                
                                
