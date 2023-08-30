input.onGesture(Gesture.FreeFall, function () {
    SuperBit.MotorStopAll()
    System_halted = 1
})
input.onButtonPressed(Button.A, function () {
    if (System_halted == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        if (Menu_Item_Opened == 0) {
            if (Motor_Number != 4) {
                Motor_Number += 1
            }
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (System_halted == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        if (Menu_Item_Opened == 0) {
            Menu_Item_Opened = 1
        } else {
            Menu_Item_Opened = 0
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (System_halted == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        if (Menu_Item_Opened == 0) {
            if (Motor_Number != 1) {
                Motor_Number += -1
            }
        }
    }
})
let System_halted = 0
let Menu_Item_Opened = 0
let Motor_Number = 0
Motor_Number = 1
Menu_Item_Opened = 0
music.setVolume(23)
led.setBrightness(33)
// Indikuje úspěšný P.O.S.T
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.clearScreen()
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.forever(function () {
    if (Menu_Item_Opened == 1) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Motor_Number)
    }
})
basic.forever(function () {
    if (System_halted == 1) {
        basic.showString("SYSTEM HALTED, PLEASE REBOOT")
    }
    if (System_halted == 0) {
        if (Menu_Item_Opened == 0) {
            basic.showNumber(Motor_Number)
        }
        if (Menu_Item_Opened == 1) {
            if (input.buttonIsPressed(Button.A)) {
                if (Motor_Number == 1) {
                    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
                }
                if (Motor_Number == 2) {
                    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
                }
                if (Motor_Number == 3) {
                    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
                }
                if (Motor_Number == 4) {
                    SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
                }
            } else {
                SuperBit.MotorStopAll()
            }
            if (input.buttonIsPressed(Button.B)) {
                if (Motor_Number == 1) {
                    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
                }
                if (Motor_Number == 2) {
                    SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
                }
                if (Motor_Number == 3) {
                    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
                }
                if (Motor_Number == 4) {
                    SuperBit.MotorRun(SuperBit.enMotors.M4, -255)
                }
            } else {
                SuperBit.MotorStopAll()
            }
        }
    }
})
