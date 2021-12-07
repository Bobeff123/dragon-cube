tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    8 8 8 8 8 
    8 f 8 f 8 
    8 8 8 8 8 
    8 f f f 8 
    8 8 8 8 8 
    `, SpriteKind.Player)
mySprite.ay = 500
mySprite.ay = 20
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 10, 0)
