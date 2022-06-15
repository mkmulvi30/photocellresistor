let photocellvalue = 0
basic.forever(function () {
    photocellvalue = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(photocellvalue)
    if (photocellvalue > 500) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
