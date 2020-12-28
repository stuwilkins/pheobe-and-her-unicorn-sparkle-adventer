sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
info.onLifeZero(function () {
    scene.setBackgroundColor(15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    Sparkles.startEffect(effects.coolRadial)
    info.stopCountdown()
    myEnemy = 0
})
let myEnemy = 0
let Sparkles: Sprite = null
let Marigold = sprites.create(img`
    . 1 . . . . . . . . . . . . . . 
    . 1 1 1 1 1 . . . . . . . . . . 
    . . 1 1 1 1 1 1 . . . . . . . . 
    . . 1 1 1 . 1 1 1 . . . . . . . 
    . . . 1 1 . . . 1 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 . 1 1 
    . . . 1 . . 1 . . 1 . . 1 . 1 1 
    . . . 1 . . 1 . . 1 . . 1 . 1 1 
    . . . 1 . . 1 . . 1 . . 1 . 1 1 
    . . . 1 . . 1 . . 1 . . 1 . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Goblen = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 . . . . 7 . . . . . . . 
    . . . . 7 . . 7 . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . 7 7 7 7 7 7 . . . . . . . 
    . . . 7 . 7 7 . 7 . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 . . 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(Marigold, 100, 100)
scene.setBackgroundColor(3)
info.setLife(5)
Sparkles = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Goblen.follow(Marigold, 10)
info.startCountdown(180)
forever(function () {
    effects.blizzard.startScreenEffect(500)
})
forever(function () {
    music.playMelody("A C5 G G B B C F ", 120)
})
