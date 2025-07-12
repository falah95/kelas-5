input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
    led.plot(2, 2)
})
basic.showIcon(IconNames.Heart)
music.play(music.stringPlayable("F - A G B E - - ", Math.cos(input.acceleration(Dimension.X))), music.PlaybackMode.UntilDone)
if (true) {
    continue;
} else {
    let sprite: game.LedSprite = null
    sprite.turn(Direction.Right, 45)
}
basic.forever(function () {
    game.pause()
})
