input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
