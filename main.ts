//% weight=100 color=#C0392B icon=T

namespace turtlePatern {
    /**
     *  start turtle patern
     */
    //% block
    export function startTurtlePatern(): void {
        turtle.setPositionCartesian(-80, -60)
        forever(function () {
            turtle.moveTurtleDirection(TurtleDirection.Forward, 25)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Left, 90)
            turtle.moveTurtleDirection(TurtleDirection.Forward, 25)
            turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 90)
        })
    }
}
