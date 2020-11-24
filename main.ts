let x = 0
input.onGesture(Gesture.Shake, function () {
    x = randint(0, 100)
    basic.showNumber(x)
    if (x <= 59) {
        basic.showIcon(IconNames.No)
        basic.showString("Keep Going!")
    } else if (x >= 60 && x < 100) {
        basic.showIcon(IconNames.Yes)
        basic.showString("Good Job!")
    }
})
