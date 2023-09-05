radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Skull)
        joystickbit.Vibration_Motor(1000)
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(0)
})
let y = 0
let x = 0
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(1)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 500 || joystickbit.getRockerValue(joystickbit.rockerType.X) > 530) {
        x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
        radio.sendValue("x", x)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 500 || joystickbit.getRockerValue(joystickbit.rockerType.Y) > 530) {
        y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, 100, -100)
        radio.sendValue("y", y)
    } else {
        radio.sendValue("x", 0)
        radio.sendValue("y", 0)
    }
})
