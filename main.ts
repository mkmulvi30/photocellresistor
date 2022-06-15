basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 400) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
