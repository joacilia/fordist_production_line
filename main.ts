let rpm_counter = 0
basic.forever(function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 150)
    rpm_counter += 1
    if (rpm_counter == 8) {
        robotbit.MotorStop(robotbit.Motors.M1A)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        robotbit.Servo(robotbit.Servos.S1, 0)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S1, 90)
        basic.pause(400)
        rpm_counter = 0
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
