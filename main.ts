GHBit.onKey(GHBit.enButton.B3, function () {
    radio.sendNumber(8)
})
GHBit.onKey(GHBit.enButton.B1, function () {
    radio.sendNumber(5)
})
GHBit.onKey(GHBit.enButton.B4, function () {
    radio.sendNumber(7)
})
GHBit.onKey(GHBit.enButton.B2, function () {
    radio.sendNumber(6)
})
radio.setGroup(1)
led.plot(0, 2)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendNumber(1)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendNumber(2)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendNumber(3)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendNumber(4)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendNumber(0)
    } else if (GHBit.Rocker(GHBit.enRocker.Press)) {
        radio.sendNumber(9)
    }
})
