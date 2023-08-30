def on_button_pressed_a():
    global Motor_Number
    if System_halted == 0:
        Motor_Number += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    global System_halted
    SuperBit.motor_stop_all()
    System_halted = 1
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

Motor_Number = 0
System_halted = 0
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")
basic.pause(1000)
basic.clear_screen()

def on_forever():
    if System_halted == 1:
        basic.show_string("SYSTEM HALTED, PLEASE REBOOT")
    if System_halted == 0:
        pass
basic.forever(on_forever)
