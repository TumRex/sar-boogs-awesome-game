controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    rainbowie.ay = -500
    pause(650)
    rainbowie.ay = 400
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    trophy.destroy()
    pause(1000)
    trophy = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....fffffffffffffffff..........
        .....f5f5f5f5f5f5f5f5f..........
        .....ff5f5f5f5f5f5f5ff..........
        .....f5f5f5f5f5f5f5f5f..........
        .....ff5f5f5f5f5f5f5ff..........
        .....fff5f5f5f5f5f5fff..........
        ......f5f5f5f5f5f5f5f...........
        ......ff5f5f5f5f5f5ff...........
        .......ffff5f5f5ffff............
        .........fffffffff..............
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ......ffffff555ffffff...........
        ......f...ff555ff...f...........
        ......f...ff555ff...f...........
        ......f...ff555ff...f...........
        ......ffffff555ffffff...........
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........fffff................
        `, SpriteKind.Food)
    trophy.setPosition(randint(150, 175), 110)
    trophy.setVelocity(-30, 0)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite2, otherSprite2) {
    trophy.destroy()
    points += 1
    info.changeScoreBy(1)
    music.baDing.play()
    pause(1000)
    trophy = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....fffffffffffffffff..........
        .....f5f5f5f5f5f5f5f5f..........
        .....ff5f5f5f5f5f5f5ff..........
        .....f5f5f5f5f5f5f5f5f..........
        .....ff5f5f5f5f5f5f5ff..........
        .....fff5f5f5f5f5f5fff..........
        ......f5f5f5f5f5f5f5f...........
        ......ff5f5f5f5f5f5ff...........
        .......ffff5f5f5ffff............
        .........fffffffff..............
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ......ffffff555ffffff...........
        ......f...ff555ff...f...........
        ......f...ff555ff...f...........
        ......f...ff555ff...f...........
        ......ffffff555ffffff...........
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........f555f................
        ...........fffff................
        `, SpriteKind.Food)
    trophy.setPosition(randint(140, 175), 110)
    trophy.setVelocity(-30, 0)
    if (50 < points) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite3, otherSprite3) {
    ghostie.destroy()
    points += -0.5
    info.changeScoreBy(-0.5)
    music.smallCrash.play()
    pause(1000)
    ghostie = sprites.create(assets.image`Ghost S`, SpriteKind.Projectile)
    ghostie.setPosition(randint(90, 80), 140)
    ghostie.setVelocity(-30, 0)
    if (-10 > points) {
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    ghostie.destroy()
    pause(1000)
    ghostie = sprites.create(assets.image`Ghost S`, SpriteKind.Projectile)
    ghostie.setPosition(randint(90, 80), 140)
    ghostie.setVelocity(-30, 0)
})
let ghostie: Sprite = null
let rainbowie: Sprite = null
let trophy: Sprite = null
let points = 0
let thing = sprites.create(img`
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    .111111111
    .111111111
    .111111111
    .111111111
    .111111111
    .111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    1111111111
    `, SpriteKind.Enemy)
thing.setPosition(1, 60)
points = 1
info.setScore(1)
tiles.setCurrentTilemap(tilemap`level8`)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff455fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ee5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5cfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5555cccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5557cccccffffcfffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff
    fffffffff55feffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff557cccccccffcccffffffffffffffffffffffffffffffffffffffffffffff45ffffffffffffffffffff
    fffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ccccccccfffffffffffffffffffffffffffffffffffffffffffffffff5555554fffffffffffffffff
    fffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ccccccccffffccfffffffffffffffffffffffffffffffffffffffffff555554ffffffffffffffffff
    fffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccfffccfffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
    fffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff55555efffffffffffffffff
    ffffffff55ff5efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff555ff55fffffffffffffffff
    ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444eccccccceccecccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee444444eeee4cceceeceeec4efeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe5554444eeee444ee44eee4eee44444eefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ee4eeeeee4444ee4444ee44eee44444eeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe444444eeeeee44444eee4444eee444ee44444ee4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444eeeeeee4444ee444444ee444eeee44eee4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444eee44ee4444444ee4444eeeeeee4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee444444eeeee4444eeeeeeeee4eeee44444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444eee44444444eeeeeeeeeee4eeeeeeeeee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444eeeeeee44444ee44444eee444444444444fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee44444444444ee44444444444ee444444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff444444444ee444444444444ee444444444444ee444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444ee4444444444444ee4444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff44444444ee4444444444444ee4444444444444ee4444444ee444444444444effffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffe4444444eee444444444444eee44444444444444ee4444444ee444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411d44444444444444d1d4444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444444111dd444444444444d11ddb444444ee444444444444fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444d115ddd444444444441155ddb44444ee4444444444444ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee44444444444411555dd4444444444115555dd444444ee444444444444efffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff44444444ee444444444441155555dd4444444431555555dd44444ee4444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee4444444444445555555dd4444444445554e45dd444444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444555ee455dd4444444455554ee55dd44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee444444444444454ee44ddd44444444545544eeddb44444ee444444444444effffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4444444ee44444444444444ee44444444444444444444ee444444444ee44444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee444444444444444ee44444444444444444444ee4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444411d444444444e4444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff444444ee44444444444444ee444444444111dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444ee444444444115dd44444444ee444444444ee4444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee444444444444444e44444444411555dd4444444ee4444444444ee444444444eefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee4444444441d555dd4444444ee4444444444ee44444444eeefffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff44444ee44444444444444ee444444445dddddddd444444eed444444444ee44444444eeecccccccccccccc88888888888888888888888888888
    888888888888888888888888888888888888888888888844444e444444444444444e51d4444445dddddddd444444edd4444444444e4444444eeee8888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888c444ee444444444444444e511144444444444444444444ddd4444444444e4444444eeec8888888888888888888888888888888888888888888
    888888866b9999999999999999999999999999999988888444ee44444444444444ee55111d444444444444444454dd44444444444ee444444eee88888888888888888888888888888888888888888888
    99999999999999999999999999999999999999999968888444ee44444444444444ee4555111d444444444444455ddb44444444444ee44444eeee88888888888888888888888888888888888888888888
    99996666688888888888888888888888888888888888888844ee44444444444444ee4455551144444444444445ddde44444444444ee44444eeec88888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888844ee44444444444444ee4445555544455551114445ddee44444444444ee4444eeee888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888884ee44444444444444ee444555555555555555555dddee44444444444ee4444eeec888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888844ee4444444444444e4444455555555555555555dd4ee44444444444ee444eee88888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888884ee4444444444444e444444555555511115555dd44ee44444444444ee44eeeffff88888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ee4444444444444ee44444455dddd511dddddd444ee4444444444ee4eeeeffffffffc8888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888ce4444444444444ee44444445dd444ddddbdd4444ee4444444444eeeeeeffffffffff8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888ee444444444444ee44444444bd44455444db4444ee4444444444eeeecfffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888e444444444444ee444444444444444444444444ee444444444eeeefffffffffffffffc8888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888884444444444ee444444444444444444444444ee4444444eeeeeffffffffffffffffff888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888884444444444ee44444444444444444444444ee44444eeeeefffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888e4444444ee4444444444444444444444ee444eeeeeefffffffffffffffffffff8888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888e4444ee4444444444444444444444eeeeeeeefffffffffffffffffffffff88888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888feeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffc888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888fffffffffeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffff8888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffffffffc888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888888888888888888888888888888888888cffcffffffffffffffffffffcc88888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866666666666b9999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886999999999999999999999999999999999999999999888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999966666666666666688888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
scene.setBackgroundColor(7)
game.splash("use arrow keys to control")
game.splash("if you hit the ghost you lose a point, if you touch the trophy you get a point. If you get to zero points you lose. If you get to 5 points you win!")
trophy = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .....fffffffffffffffff..........
    .....f5f5f5f5f5f5f5f5f..........
    .....ff5f5f5f5f5f5f5ff..........
    .....f5f5f5f5f5f5f5f5f..........
    .....ff5f5f5f5f5f5f5ff..........
    .....fff5f5f5f5f5f5fff..........
    ......f5f5f5f5f5f5f5f...........
    ......ff5f5f5f5f5f5ff...........
    .......ffff5f5f5ffff............
    .........fffffffff..............
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ......ffffff555ffffff...........
    ......f...ff555ff...f...........
    ......f...ff555ff...f...........
    ......f...ff555ff...f...........
    ......ffffff555ffffff...........
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ...........f555f................
    ...........fffff................
    `, SpriteKind.Food)
rainbowie = sprites.create(assets.image`Rainbow S`, SpriteKind.Player)
rainbowie.setScale(2, ScaleAnchor.Left)
ghostie = sprites.create(assets.image`Ghost S`, SpriteKind.Projectile)
ghostie.setPosition(150, 140)
rainbowie.setPosition(25, 140)
trophy.setPosition(200, 110)
scene.cameraFollowSprite(rainbowie)
rainbowie.setStayInScreen(true)
ghostie.setVelocity(-30, 0)
trophy.setVelocity(-30, 0)
forever(function () {
    music.playMelody("C E D - D - D - ", 100)
})
