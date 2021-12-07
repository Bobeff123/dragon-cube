tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    7 7 7 7 7 
    7 f 7 f 7 
    7 7 7 7 7 
    7 f f f 7 
    7 7 7 7 7 
    `, SpriteKind.Player)
mySprite.ay = 500
