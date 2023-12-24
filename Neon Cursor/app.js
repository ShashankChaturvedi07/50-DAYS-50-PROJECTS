import {neonCursor} from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const root = document.getElementById("box");

const options = {
    el : root,
    shaderPoints: 16,
    curvePoints: 80, // points that define the curve of the cursor.

    
    curveLerp: 0.8 , // responsible for adding smoothing factor to the cursor movement 


    radius1 : 1, // radius of the cursor at its initial position
    radius2 : 5, // // radius of the cursor at its final position


    velocityThresold : 10, // the speed at which the cursor is considered to be moving.


    sleepRadiusY: 10, //  how far the cursor can move up or down before going into sleep mode.
    sleepRadiusX: 50, // how far the cursor can move left or right before going into sleep mode.


    sleepTimeCofeX : 0.0025, // how quickly the cursor goes to sleep when not moving horizontally.
    sleepTimeCofeY : 0.001, // how quickly the cursor goes to sleep when not moving vertically.
}

neonCursor(options)