sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(randint(0, 150), randint(0, 120))
})
let mySprite2: Sprite = null
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e 3 3 3 3 3 e . . . . . 
    . . . . e 3 f 3 f 3 e . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 f f f 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . . 8 . . 8 . . 8 . . . . . 
    . . . . 8 . . 8 . . 8 . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 . . . 5 . . . . 5 . . . 
    . . . 5 5 . . 5 . . . 5 . . . . 
    . . . . 5 5 . 5 . . 5 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . 5 . . 5 5 5 . . 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 . 5 . 5 5 . . . . . 
    . . . . 5 . . 5 . . 5 5 . . . . 
    . . . 5 5 . . 5 . . . 5 . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(122, 87)
