let go = 0
input.onGesture(Gesture.Shake, function () {
    go = randint(1, 3)
    if (go == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (go == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
