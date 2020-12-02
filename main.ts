namespace SpriteKind {
    export const pl8 = SpriteKind.create()
    export const jely = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setVelocity(0, -200)
        music.playMelody("G A B C5 - - - - ", 1000)
    }
})
function MAKE_DA_TREEEE () {
    if (DA_TREE_NUMBER == 0) {
        scene.setTileMap(list[DA_TREE_NUMBER])
        MAKE_DA_LEVEL()
    } else if (DA_TREE_NUMBER == 1) {
        BY_BY_GO_DA_LEVEL_WE_MADE_A_MUINITE_AGO()
        scene.setTileMap(list[DA_TREE_NUMBER])
        MAKE_DA_LEVEL()
    } else {
        BY_BY_GO_DA_LEVEL_WE_MADE_A_MUINITE_AGO()
        scene.setTileMap(list[DA_TREE_NUMBER])
        MAKE_DA_LEVEL()
    }
}
function MAKE_DA_LEVEL () {
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . d d d d d . . . . . . . 
            . d d d 5 5 5 5 5 d d d . . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d d . . 
            . d d d 5 5 5 5 5 d d d d d . . 
            . d 5 d d d d d d 5 d d d d . . 
            . d 5 d 5 5 5 d 5 5 d 5 d . . . 
            . d 5 d 5 5 5 d 5 5 d 5 d . . . 
            . d 5 d d 5 5 d 5 d 5 5 d . . . 
            . d 5 5 d 5 5 d 5 d 5 5 d . . . 
            . . d 5 d 5 d d 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . . d d d d d d d d . . . . . 
            `, false)
    }
    for (let value of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 e e e 7 7 7 7 7 7 7 e e 7 
            7 7 7 e e e e 7 7 7 7 7 b b b 7 
            7 7 e e e b e e 7 7 7 e e e e e 
            e e e e e b b b b e e e e e e e 
            e e e e e e e e e b b e e e e e 
            e e e e e e e e e e e e b b b b 
            e b b e e e e e e e e e e e e e 
            e e b b e e e e e e e e e e e e 
            e e e b b b b e e e e e e e e e 
            e e e e e e e b b b b b e e e b 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            e f b e e b f e b e e b e e f b 
            e f b e e b f e b e b b e f e b 
            e f b e b b f e e b b e e f b e 
            e e f e b e f e e b b e f e b e 
            e e f e b e f e e b e e f e b e 
            e e f e b e f e e b e f f e b f 
            e e f e b e f e b b e f e e b f 
            e e f b e e f e b e b f e e b f 
            e e f b e e f b b e b f e e b f 
            e e f b e e f b e e f b e e b f 
            e e f b e e f b e e f b e e f e 
            e e f b e e f b e e f b e e f e 
            e b f b b e f e e f f e b e f e 
            e b f e b f b e e f e e b e f e 
            b b f e b f b e e f e e b f b e 
            b e f e e f b e e f e e b f b e 
            `, true)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(9, img`
            1 1 9 9 9 9 9 1 1 9 9 9 9 9 1 1 
            1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 9 9 9 9 9 9 1 1 9 9 9 9 9 9 1 
            1 9 9 9 9 9 9 1 1 9 9 9 9 9 9 1 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 
            1 1 9 9 9 9 9 1 1 9 9 9 9 9 1 1 
            `, true)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(10, img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, true)
    }
    for (let value of scene.getTilesByType(2)) {
        scene.setTile(4, img`
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 e e e 7 7 7 7 7 7 7 e e 7 
            7 7 7 e e e e 7 7 7 7 7 b b b 7 
            7 7 e e e b e e 7 7 7 e e e e e 
            e e e e e b b b b e e e e e e e 
            e e e e e e e e e b b e e e e e 
            e e e e e e e e e e e e b b b b 
            e b b e e e e e e e e e e e e e 
            e e b b e e e e e e e e e e e e 
            e e e b b b b e e e e e e e e e 
            e e e e e e e b b b b b e e e b 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (true) {
        if (DA_TREE_NUMBER == 2) {
            mySprite.say(":)")
            game.splash("good job u found all the jellys!")
            music.playMelody("F E C D F B C5 A ", 120)
            music.playMelody("C D C5 G F D C5 A ", 120)
        } else {
        	
        }
    }
})
function BY_BY_GO_DA_LEVEL_WE_MADE_A_MUINITE_AGO () {
    for (let value of sprites.allOfKind(SpriteKind.jely)) {
        value.destroy()
    }
}
let DA_TREE_NUMBER = 0
let list: Image[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f . . f f . . . . . f f . . 
    . . . f . . . f . . . f . . . . 
    . e e e e e e e e e f e e . . . 
    e e e e e e e e e f f e e f e . 
    f f f f f f f f f e f e e e e . 
    e e e e e e e e e f f e e f e . 
    . e e e e e e e e e f e e . . . 
    . . . f . . . f . . . f . . . . 
    . f f . . f f . . . . . f f . . 
    `, SpriteKind.Player)
mySprite.ay = 300
mySprite.setPosition(18, 91)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
list = [img`
    ..9...........................
    ..9....7777666666.............
    ..9.777777777777666...........
    ..9777777777777777666.........
    ..9777777777777777766666......
    ..97777777777777777777666.....
    ..97777777777777777777766.....
    ..9777777777777777777766......
    ..9.7777777777777777666.......
    ..9.7777777777777776..........
    ..9...7777775555556...........
    ..9.........555555............
    ..9.........55555.............
    ..9......55.55555.............
    ..9.......5555555.............
    ..9.........55555.............
    ..9.........55555555..........
    ..9555......55555.............
    ..9..555....55555.............
    ..9....555...5555.......5.....
    ..9......55..5555.....555.....
    ..9..........55555...55.......
    ..9..........555555555........
    ..9.........555555............
    ..9.........555555............
    ..9.........555555............
    ..9.........555555............
    ...........55555555...........
    ..........55555555558.........
    222222222222222222222222222222
    `, img`
    ................666666666666..
    ..........7777777776666666666.
    .......7777777777777777776666.
    ....7777777777777777777777766.
    ..7777777777777777777777777666
    ..7777777777777777777777777666
    .77777777755555555557777777666
    .77777777755555555557777777666
    .7777775575555555555777777766.
    ..777777555555555555777777766.
    ..777777775555555555777755566.
    ..77777777755555555775557766..
    ..777557777555555555557666....
    ...777555775555555566666......
    ........55.55555555...........
    ...........55555555...........
    ...........55555555...555.....
    ...........55555555555........
    ......5555.55555555...........
    .........5.55555555....5......
    ...........5555555555555......
    ...........55555555...........
    .......55..55555555...........
    ....666.55555555555........766
    ...77776...555555555555555.776
    ...77576...55555555........757
    ...77576..555555555........757
    ....757..55555555555........5.
    .....5...555555555558.......5.
    222222222222222222222222222222
    `, img`
    ...977777777777777777777777776
    ...977777777755555555555777776
    ...9777777a7755555555555777776
    ...97a777977775555555555777976
    ...977777777775555555555777776
    ...977977a77775555555555777776
    ...9777a7777775555555557777776
    ...9777777777755555555577aa776
    ...9.777779777555555555aaaaaa6
    ...9...777777755555555577666..
    ...9..a..777755555555557aaaaaa
    ...9.........555555555566.....
    ...9......a..5555555555.......
    ...9...9.....5555555555aaaaaa.
    ...9...a.....5555555555.......
    ...9.......9.5555555555.......
    ...9..a..a...5555555555.......
    ...9.........5555555555aa.aaaa
    ...9..9......5555555555.......
    ...9.........5555555555.......
    ...9.....a...5555555555.......
    ...9.........5555555555aaaa.aa
    ...9..a...9..5555555555.......
    ...9.........55555555555......
    ...9.........55555555555......
    ...9..9..a...555555555555aaaa.
    ...9........5555555555555.....
    .......a...55555555555555.aaaa
    ...........55555555555555.....
    222222222222844444444444442222
    `]
MAKE_DA_TREEEE()
