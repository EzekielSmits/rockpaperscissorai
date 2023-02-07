input.onButtonPressed(Button.A, function () {
	
})
function computerDisplay () {
    if (computer == 0) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
    } else {
        if (computer == 1) {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . # #
                # . # . .
                . # . . .
                # . # . .
                . . . # #
                `)
        }
    }
    basic.pause(2000)
    if (computer == player1_choice) {
        basic.showString(" Draw!")
    } else {
        if (computer < player1_choice) {
            if (computer == 2 && player1_choice == 0) {
                basic.showString(" Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            } else {
                basic.showString(" Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            }
        } else {
            if (player1_choice == 2 && computer == 0) {
                basic.showString(" Lose")
            } else {
                basic.showString(" Lose")
            }
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    game.setScore(0)
})
input.onGesture(Gesture.Shake, function () {
    player1_choice = randint(0, 2)
    computer = randint(0, 2)
    if (player1_choice == 0) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
        basic.pause(1000)
        basic.showString(" vs.")
        computerDisplay()
    }
    if (player1_choice == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showString(" vs.")
        computerDisplay()
    }
    if (player1_choice == 2) {
        basic.showLeds(`
            . . . # #
            # . # . .
            . # . . .
            # . # . .
            . . . # #
            `)
        basic.pause(1000)
        basic.showString(" vs.")
        computerDisplay()
    }
})
let player1_choice = 0
let computer = 0
basic.showString("SHAKE TO PLAY")
game.setScore(0)
