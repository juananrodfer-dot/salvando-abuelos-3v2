namespace SpriteKind {
    export const lava = SpriteKind.create()
    export const BlueGhost = SpriteKind.create()
    export const abuelo = SpriteKind.create()
    export const P2 = SpriteKind.create()
    export const IA = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Ataque = SpriteKind.create()
    export const Fantasma = SpriteKind.create()
    export const FantasmaBlanco = SpriteKind.create()
    export const FantasmaCirculo = SpriteKind.create()
    export const ProjectileIA = SpriteKind.create()
}
function CargaNivel (n: number) {
    NivelActual = 2
    music.stopAllSounds()
    music.setVolume(20)
    sprites.destroy(niño_malo)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
    music.play(music.createSong(hex`0078000408020400001c00010a006400f4016400000400000000000000000000000000050000043c0004000800010c08000c00011110001400010a14001800010f1c002000010c24002800010a28002c0001122c003000010f34003800010d38003c00011204001c00100500640000041e000004000000000000000000000000000a040004120008001000011818002000011430003800011405001c000f0a006400f4010a00000400000000000000000000000000000000021e0008000c00010a1400180001111c002000010a28002c00011134003800010c06001c00010a006400f401640000040000000000000000000000000000000002250008000c00010812001300011817001800010820002400021216250026000116320033000106`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("cuidado con los fantasmas, pero puedes matarlos atacando con la B", DialogLayout.Center)
    scene.cameraFollowSprite(jugador)
    fantasma = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff9999ff........
        .......f69999996f.......
        .......f99999996f.......
        ......fd99999999df......
        ......fd99999999df......
        ......fddd9999dddf......
        ......f6dbfddfbd6f......
        ......fcdcf99fcdcf......
        .......f69999996f.......
        ......fffcd696dffff.....
        ....fc999c6f6fc999cf....
        ....f96969ffff9b9b9f....
        ....f6f6f6ffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.BlueGhost)
    fantasmon = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff5555ff........
        .......f55577555f.......
        .......f55755755f.......
        ......f5557557555f......
        ......f5555775555f......
        ......f5555555555f......
        ......f575f77f575f......
        ......fc7cf55fc7cf......
        .......f5555555ffff.....
        ......fffc5757c555cf....
        ....fc555c7f7f57575f....
        ....f57575ffff7f7f7f....
        ....f7f7fffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    fantasmita = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.FantasmaBlanco)
    fantasma.setPosition(160, 0)
    fantasmon.setPosition(25, 85)
    fantasmita.setPosition(67, 90)
    fantasmita.follow(jugador, 30)
    fantasma.follow(jugador, 30)
    fantasmon.follow(jugador, 30)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, jugador)
})
function Nivel0 (núm: number) {
    NivelActual = 1
    scene.setBackgroundImage(assets.image`fondonegro`)
    nivel = 1
    mensajeLaser = 0
    puededisparar = 1
    tiles.setCurrentTilemap(tilemap`nivel1`)
    jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(jugador)
    scene.cameraFollowSprite(jugador)
    niño_malo = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f a a f f f . . . . 
        . . . f f f a a a a f f f . . . 
        . . f f f c c c c c c f f f . . 
        . . f f c a a a a a a c c f . . 
        . . f c a f f f f f f a c f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f c c c c c c f 4 e . . 
        . . 4 d f c c c c c c f d 4 . . 
        . . 4 4 f 4 4 a a 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    niño_malo.setPosition(200, 140)
    info.setLife(15)
    game.showLongText("encuentra el baston magico para pasar de nivel, cuidado con el laser", DialogLayout.Full)
    music.setVolume(20)
    music.play(music.createSong(hex`0078000408030a00001c00010a006400f4016400000400000000000000000000000000050000048800000004000125040008000306142708000c0001220c001000030d242510001400021e2218001c0002111e1c0020000208272400280002122228002c0001242c003000010a30003400012238003c0003060c1e40004400022027440048000308121d48004c00012550005400030c22255400580003141b1e58005c0004050c22255c006000030d161d01001c000f05001202c102c20100040500280000006400280003140006020004060020002100010602001c000c960064006d019001000478002c010000640032000000000a060005060020002400010803001c0001dc00690000045e010004000000000000000000000564000104000325000c00100002061124002800010d30003400010634003800010f4000440001064c005000010f04001c00100500640000041e000004000000000000000000000000000a0400044a0004000800010c08000c00010d14001800010818001c00010d20002400010524002800010a3000340001123400380001083c004000020a0d48004c00010d5000540002081158005c00010d05001c000f0a006400f4010a00000400000000000000000000000000000000027e0000000400011b04000800011e08000c0001220c001000011b10001400011e14001800012220002400012224002800011b28002c00011e2c003000012230003400011934003800011d38003c00012240004400011d44004800012248004c0001194c005000011d50005400012254005800011958005c00011d5c006000012206001c00010a006400f401640000040000000000000000000000000000000002360008000c00011e18001c00012528002c00011930003400012738003c00011948004c00011e4c00500001195400580001225c006000011e07001c00020a006400f40164000004000000000000000000000000000000000306004b004c00010c08001c000e050046006603320000040a002d00000064001400013200020100021e0018001c00012720002400011b38003c0001254c00500001225c006000012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80006004c004d000112`), music.PlaybackMode.LoopingInBackground)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, jugador)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`baston`, function (sprite, location) {
    if (tienebaston == 0) {
        tienebaston = 1
        music.setVolume(255)
        music.play(music.createSoundEffect(WaveShape.Square, 1, 1348, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("Baston magico conseguido ", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(7, 13), sprites.castle.tileGrass2)
    }
})
sprites.onOverlap(SpriteKind.FantasmaCirculo, SpriteKind.Player, function (sprite, otherSprite) {
    if (Ataque == 1) {
        sprites.destroy(fantasma_azul)
    } else {
        info.changeLifeBy(-1)
        if (NivelActual == 2) {
            tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
        }
        if (NivelActual == 3) {
            tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
        }
    }
})
sprites.onOverlap(SpriteKind.FantasmaBlanco, SpriteKind.Player, function (sprite, otherSprite) {
    if (Ataque == 1) {
        sprites.destroy(fantasmita)
    } else {
        info.changeLifeBy(-1)
        if (NivelActual == 2) {
            tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
        }
        if (NivelActual == 3) {
            tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    jugador,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e 3 . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f f . 
        . f d f e 4 d d d d 4 e f . . . 
        . f b f d d e 2 2 4 d d e . . . 
        . f b f d d e 2 2 4 d d 4 . . . 
        . f c f e e f 2 5 5 4 4 . . . . 
        . f f . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico19`, function (sprite, location) {
    if (Tienelibro == 0) {
        Tienelibro = 1
        music.setVolume(255)
        music.play(music.createSoundEffect(WaveShape.Square, 1, 1348, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("Libro de recetas conseguido. Ahora ya puedes pasar de nivel y tu abuela podrá volver a hacer sus recetas junto a ti.", DialogLayout.Top)
        tiles.setTileAt(tiles.getTileLocation(5, 12), sprites.builtin.brick)
    }
})
function nivel3 (núm: number) {
    NivelActual = 3
    music.stopAllSounds()
    music.setVolume(20)
    music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042a000c001000010d10001400011918001c00011820002400011b2c003000011830003400010a34003800011903001c0001dc00690000045e01000400000000000000000000056400010400032a000c001000010d10001400011918001c00011820002400011b2c003000011830003400010a34003800011906001c00010a006400f401640000040000000000000000000000000000000002260014001800010f1c00200002081924002800010d28002c00011938003c0001113c004000021b27`), music.PlaybackMode.LoopingInBackground)
    sprites.destroy(fantasma)
    sprites.destroy(fantasmon)
    sprites.destroy(fantasmita)
    fantasma_azul = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff9999ff........
        .......fb998899bf.......
        .......f99899899f.......
        ......f6998998996f......
        ......f6999889996f......
        ......f6669999666f......
        ......f66bfddfb66f......
        ......f66cf99fc66f......
        .....ffff9999996f.......
        ....f6999668986fff......
        ....f969668f8f89996f....
        ....f6f6f6ffff96969f....
        .........fffffff6f6f....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.FantasmaCirculo)
    fantasma = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff9999ff........
        .......f69999996f.......
        .......f99999996f.......
        ......fd99999999df......
        ......fd99999999df......
        ......fddd9999dddf......
        ......f6dbfddfbd6f......
        ......fcdcf99fcdcf......
        .......f69999996f.......
        ......fffcd696dffff.....
        ....fc999c6f6fc999cf....
        ....f96969ffff9b9b9f....
        ....f6f6f6ffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.BlueGhost)
    fantasmon = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff5555ff........
        .......f55577555f.......
        .......f55755755f.......
        ......f5557557555f......
        ......f5555775555f......
        ......f5555555555f......
        ......f575f77f575f......
        ......fc7cf55fc7cf......
        .......f5555555ffff.....
        ......fffc5757c555cf....
        ....fc555c7f7f57575f....
        ....f57575ffff7f7f7f....
        ....f7f7fffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    fantasmita = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.FantasmaBlanco)
    fantasma_azul.setPosition(99, 63)
    fantasma.setPosition(600, 120)
    fantasmon.setPosition(900, 85)
    fantasmita.setPosition(1400, 20)
    fantasmita.follow(jugador, 30)
    fantasmon.follow(jugador, 30)
    fantasma.follow(jugador, 30)
    fantasma_azul.follow(jugador, 30)
    tiles.setCurrentTilemap(tilemap`nivel0`)
    tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
    game.showLongText("Encuentra la radio de nuestros abuelos para escuchar musica con ellos", DialogLayout.Center)
    controller.moveSprite(jugador, 100, 0)
    jugador.ay = 400
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (NivelActual == 1) {
        info.changeLifeBy(-1)
        tiles.placeOnTile(jugador, tiles.getTileLocation(5, 3))
    } else {
        if (NivelActual == 4) {
            tiles.placeOnTile(jugador, tiles.getTileLocation(35, 2))
            info.changeLifeBy(-1)
        }
    }
})
sprites.onOverlap(SpriteKind.BlueGhost, SpriteKind.Player, function (sprite, otherSprite) {
    if (Ataque == 1) {
        sprites.destroy(fantasma)
    } else {
        info.changeLifeBy(-1)
        if (NivelActual == 2) {
            tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
        }
        if (NivelActual == 3) {
            tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico20`, function (sprite, location) {
    if (tieneradio == 0) {
        tieneradio = 1
        music.setVolume(255)
        music.play(music.createSoundEffect(WaveShape.Square, 1, 1348, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("radio conseguida, ahora ya podreis escuchar musica juntos", DialogLayout.Top)
        tiles.setTileAt(tiles.getTileLocation(53, 2), assets.tile`miMosaico15`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Izquierda = 0
    animation.runImageAnimation(
    jugador,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Izquierda = 1
    animation.runImageAnimation(
    jugador,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico6`, function (sprite, location) {
    if (tieneradio == 1) {
        CargaNivel4(1)
        music.setVolume(167)
        music.play(music.stringPlayable("G B A G C5 B A B ", 400), music.PlaybackMode.UntilDone)
    } else {
        game.showLongText("Necesitas la radio para pasar de nivel", DialogLayout.Bottom)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jugador.isHittingTile(CollisionDirection.Bottom)) {
        jugador.vy = -220
    }
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Ataque = 1
    if (Izquierda == 1) {
        animation.runImageAnimation(
        jugador,
        [img`
            .......ffffff...........
            ......f2feeeeff.........
            .....f222feeeeff........
            cc...feeeeffeeef........
            cdc.fe2222eeffff........
            cddcf2effff222ef........
            .cddcffeeefffffff.......
            ..cddce44fbe44eff.......
            ...cdceddf14d4eef.......
            ...cccdeddd4eeef........
            ....edd4e44eeff.........
            .....ee442222f..........
            ......f2e2222f..........
            ......f554444f..........
            .......ffffff...........
            .........fff............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ............fff.........
            ...........f2fffff......
            .........ff22eeeeeff....
            ........ff222eeeeeeff...
            ........feeeefffeeeef...
            .......fe2222eeefffff...
            .......f2efffff222efff..
            cc.....fffeeefffffffff..
            cdcc...fee44fbbe44efef..
            ccddcc..feddfbb4d4eef...
            ..cdddceefddddd4eeef....
            ...ccdcddee2222222f.....
            ....cccdd44e544444f.....
            .......eeeeffffffff.....
            ...........ff...fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...........ff...........
            .........ff2ffff........
            ........ff2feeeeff......
            .......ff22feeeeeff.....
            .......feeeeffeeeef.....
            ......fe2222eefffff.....
            ......f2effff222efff....
            ......fffeeeffffffff....
            ......fee44fbe44efef....
            .......feddfb4d4eef.....
            ......c.eeddd4eeef......
            ccccccceddee2222f.......
            .dddddcedd44e444f.......
            ..ccccc.eeeefffff.......
            ......c...ffffffff......
            ...........ff..fff......
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ...f2feeeeff............
            ..f222feeeeff...........
            ..feeeeffeeef...........
            .fe2222eeffff...........
            .f2effff222ef...........
            .fffeeefffffff..........
            .fee44fbe44eff..........
            ..feddf14d4eef..........
            ...fdddd4eeef...........
            ...fe444eddf............
            ...ccc22eddf............
            ...cdc22fee.............
            ..cddc4444f.............
            .cddcfffff..............
            cddc..fff...............
            cdc.....................
            cc......................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        jugador,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        true
        )
    }
})
function CargaNivel4 (núm: number) {
    music.stopAllSounds()
    music.setVolume(20)
    music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004450004000800012a0c001000012410001400021b2518001c0001191c00200002252720002400012c24002800011e28002c00012430003400012c340038000219223c004000012c08001c000e050046006603320000040a002d000000640014000132000201000224000c001000010a18001c00010f28002c0001082c003000011230003400010a3c004000010d`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("VAMOS A LUCHAR CONTRA LA IA, ENCUENTRALA y DESTRUYELA", DialogLayout.Bottom)
    NivelActual = 4
    IADerrotada = 0
    sprites.destroy(fantasma_azul)
    sprites.destroy(fantasmon)
    sprites.destroy(fantasma)
    sprites.destroy(fantasmita)
    tiles.setCurrentTilemap(tilemap`nivel7`)
    tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
    IA = sprites.create(img`
        999..99996......................................
        9999.99969......................................
        9999999699.............................999966999
        9899996999...........................99999699999
        9999969999.........................9999666999999
        9999699999........................99996988899999
        999969999........................999966899999999
        99969999........................99966989999.....
        9996...........................9996698999.......
        9996...........................99669999.........
        89966..........................9968999..........
        89966.............999999......9998999...........
        899669...........999999999...9998699............
        899969.......9999999999999..99998699............
        9899969....9999999999999999999999899............
        9899996..99999999889996999999999899.............
        98999969999999998999999999999999899.............
        .9999999111111111999999991111998999.............
        ..999999111111111999999911111998999.............
        ..999999111111111999999111111998999.............
        ..999999991119999998999111111198999.............
        ..999999991119999989911199991198999.............
        ..99999999111999999991199999119899..............
        9999999999111999999911199999119899..............
        9999991111111999999911199999119989999999........
        99999981111111119991111111111199999999999.......
        99969981111111119991199999991199999999999.......
        999968999111111199111999999111999999999999......
        999998999999999999111999999111969999988899......
        9999989999999999991119999999999988888999999.....
        999998999999999999999999999999999666999699999999
        999998999999999999999969999999999999666668999999
        999999899999999999999669999999999999999998889999
        9999999699999999988888899999999999999.9999986666
        9999666999999999999996699999.9999999...999999999
        999969999999999999999669989...999999.......99999
        999999999999999999999699988................99999
        .99999999999..9999666699989.................9999
        ..............99999996999899.................999
        ...............9999996999899....................
        .....................6999899....................
        .....................6999899....................
        .....................6999899....................
        ......................699999....................
        ......................999999....................
        ......................999999....................
        ......................99999.....................
        ......................99999.....................
        `, SpriteKind.IA)
    vidasIA = 5
    BarraIA = statusbars.create(60, 8, StatusBarKind.Health)
    BarraIA.max = 5
    BarraIA.value = vidasIA
    puntos = 0
    info.setScore(puntos)
    BarraIA.setPosition(122, 6)
    IA.ay = 0
    IA.vy = 30
    IA.setBounceOnWall(true)
    abuelo_1 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f b b b b f f . . 
        . f f d d d d d d b f . 
        f f b b 4 d d d b b f f 
        f b b 4 4 4 d d b b b f 
        f b b 4 4 4 4 d d b b f 
        f 4 d 4 4 4 4 4 4 d 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f d 4 d d d d d d 4 d f 
        . f d d d b b d d d f . 
        . f f d 4 4 4 4 d f f . 
        d 4 f b 1 1 1 1 b f 4 d 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.abuelo)
    animation.runImageAnimation(
    abuelo_1,
    [img`
        . . . . f f f f . . . . 
        . . f f b b b b f f . . 
        . f f d d d d d d f f . 
        f f b b 4 d d d b b f f 
        f b b 4 4 4 d d b b b f 
        f b b 4 4 4 4 d d b b f 
        f 4 d 4 4 4 4 4 4 d 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e . 
        . f d d d b b d d d f . 
        . f f d 4 4 4 4 d f f . 
        d 4 f b 1 1 1 1 b f 4 d 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . f f f f . . . . 
        . . f f b b b b f f . . 
        . f f d d d d d d f f . 
        f f b b 4 d d d b b f f 
        f b b 4 4 4 d d b b b f 
        f b b 4 4 4 4 d d b b f 
        f 4 d 4 4 4 4 4 4 d 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e . 
        . f d d d b b d d d f . 
        . f f d 4 b b 4 d f f . 
        d 4 f b 1 1 1 1 b f 4 d 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `],
    50,
    true
    )
    abuelo_1.setPosition(590, 40)
    IA.setPosition(700, 75)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral4, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.abuelo, function (sprite, otherSprite) {
    if (mensajeabuelo == 0) {
        if (IADerrotada == 1) {
            game.showLongText("Gracias por todo", DialogLayout.Top)
            game.gameOver(true)
        }
        if (IADerrotada == 0) {
            game.showLongText("\"Derrota a la IA para salvarme\"", DialogLayout.Top)
            mensajeabuelo = 1
        }
    }
})
sprites.onOverlap(SpriteKind.Fantasma, SpriteKind.Player, function (sprite, otherSprite) {
    if (Ataque == 1) {
        sprites.destroy(fantasmon)
    } else {
        info.changeLifeBy(-1)
        if (NivelActual == 2) {
            tiles.placeOnRandomTile(jugador, sprites.dungeon.doorClosedNorth)
        }
        if (NivelActual == 3) {
            tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(jugador, assets.tile`miMosaico2`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    jugador,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f 2 e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`EXIT`, function (sprite, location) {
    if (tienebaston == 1) {
        CargaNivel(1)
        music.setVolume(167)
        music.play(music.stringPlayable("G B A G C5 B A B ", 400), music.PlaybackMode.UntilDone)
    } else {
        game.showLongText("Necesitas el baston magico para pasar de nivel", DialogLayout.Bottom)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, jugador)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Ataque = 0
    if (Izquierda == 1) {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        false
        )
    } else {
        animation.runImageAnimation(
        jugador,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.IA, function (sprite, otherSprite) {
    if (Ataque == 1) {
        vidasIA += -1
        BarraIA.value = vidasIA
        info.changeScoreBy(10)
        pause(500)
        if (vidasIA <= 0) {
            IADerrotada = 1
            mensajeabuelo = 0
            sprites.destroy(IA, effects.clouds, 2000)
            sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
            game.showLongText("¡¡¡¡CONSEGUIDO, IA MALVADA ELIMINADA!!!!", DialogLayout.Center)
            NivelActual = 0
        }
    } else {
        tiles.placeOnTile(jugador, tiles.getTileLocation(35, 2))
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (Tienelibro == 1) {
        nivel3(1)
        music.setVolume(167)
        music.play(music.stringPlayable("G B A G C5 B A B ", 400), music.PlaybackMode.UntilDone)
    } else {
        game.showLongText("Necesitas el libro de recetas de la abuela para pasar de nivel", DialogLayout.Bottom)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (mensajeLaser == 0) {
        puededisparar = 0
        mensajeLaser = 1
        music.play(music.createSoundEffect(WaveShape.Square, 867, 1, 255, 0, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.setVolume(255)
        game.showLongText("Laser desactivado, ¡bien hecho!", DialogLayout.Bottom)
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, jugador)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let mensajeabuelo = 0
let abuelo_1: Sprite = null
let puntos = 0
let BarraIA: StatusBarSprite = null
let vidasIA = 0
let IA: Sprite = null
let IADerrotada = 0
let Izquierda = 0
let tieneradio = 0
let Tienelibro = 0
let fantasma_azul: Sprite = null
let Ataque = 0
let tienebaston = 0
let puededisparar = 0
let mensajeLaser = 0
let nivel = 0
let fantasmita: Sprite = null
let fantasmon: Sprite = null
let fantasma: Sprite = null
let jugador: Sprite = null
let niño_malo: Sprite = null
let NivelActual = 0
scene.setBackgroundImage(assets.image`portada`)
let objetos = 0
game.showLongText("Hace mucho tiempo, la IA malvada robó los 3 objetos mágicos de nuestros abuelos", DialogLayout.Bottom)
game.showLongText("Solo un héroe llamado Jimmy puede recuperarlos", DialogLayout.Bottom)
game.showLongText("Encuentra los 3 objetos y salva el conocimiento ancestral de nuestros abuelos", DialogLayout.Bottom)
game.showLongText("usa las teclas de flechas para moverte, la A para saltar y la B para luchar", DialogLayout.Bottom)
Nivel0(1)
game.onUpdateInterval(1000, function () {
    if (NivelActual == 4) {
        if (randint(0, 4) == 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . 6 9 9 6 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, IA, 30, 0)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . 6 9 9 6 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, IA, 0, -25)
        } else {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . 6 9 9 6 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, IA, -20, 0)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . 6 9 9 6 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, IA, 0, 25)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . 6 9 9 6 . . . . . . 
                . . . . . . 8 9 9 8 . . . . . . 
                . . . . . . . 8 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, IA, -25, 25)
        }
    }
})
forever(function () {
    music.setVolume(40)
})
game.onUpdateInterval(500, function () {
    if (puededisparar) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, niño_malo, 100, 0)
    }
})
