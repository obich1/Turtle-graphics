Turtle Graphics Simulation

This program implements a simple turtle graphics system using a 50x50 
two-dimensional array and dynamic HTML table rendering.

On page load, the start() function runs. It calls create_floor() to 
initialize a 50x50 array named "floor" and fill it with 0 values. The drawFloor() 
function then generates an HTML table representing the grid and displays it inside the 
"output" div. The controlTurtle() function attaches event listeners to all control links.

The turtle position is stored in variables x and y. The current movement direction is stored 
in the variable "direction". The boolean variable "pendown" determines whether movement leaves a trail.

When move() is called:
If pendown is true, the current cell is marked as 1.

The turtle position updates based on direction, with boundary checks.
The grid is redrawn.

Cells with value 1 are displayed using the CSS class "special". The turtle’s current location is shown using an image.

The resetFloor() function reinitializes the grid and restores default values.