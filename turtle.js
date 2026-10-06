var x = 0;
var y = 0;
var floor = new Array(50);
var pendown = false;
var direction = "right";
var length = floor.length;

function start() 
{
    create_floor();
    drawFloor();
    controlTurtle();
}

function create_floor() 
{
    for (var row = 0; row < length; ++row) 
	{
        floor[row] = [];
        for (var col = 0; col < length; ++col) 
		{
            floor[row][col] = 0;
        }
    }
}

function drawFloor() 
{
    var output = "<table border='1'>";
    for (var i = 0; i < length; i++) 
	{
        output += "<tr>";
        for (var j = 0; j < length; j++) 
		{
            if (i == y && j == x)
                output += "<td class = 'nodec'><img src = 'turtle.png' width ='10' height = '10'></td>";
            else if (floor[i][j] == 1)
                output += "<td class = 'special'></td>";
            else
                output += "<td></td>";
        }
        output += "</tr>";
    }
    output += "</table>";
    document.getElementById("output").innerHTML = output;
}

function move() 
{
    if (pendown)
        floor[y][x] = 1;
    if (direction == "right" && x < length - 1)
        x++;
    else if (direction == "left" && x > 0)
        x--;
    else if (direction == "up" && y > 0)
        y--;
    else if (direction == "down" && y < length - 1)
        y++;
    drawFloor();
}

function resetFloor() 
{
    create_floor();
    x = 0;
    y = 0;
    pendown = false;
    direction = "right";
    drawFloor();
}
function controlTurtle() 
{
    document.getElementById("Penup").addEventListener("click", function() 
	{
        pendown = false;
        return false;
    });

    document.getElementById("Pendown").addEventListener("click", function() 
	{
        pendown = true;
        return false;
    });

    document.getElementById("Right").addEventListener("click", function() 
	{
        direction = "right";
        return false;
    });

    document.getElementById("Left").addEventListener("click", function() 
	{
        direction = "left";
        return false;
    });

    document.getElementById("Up").addEventListener("click", function() 
	{
        direction = "up";
        return false;
    });

    document.getElementById("Down").addEventListener("click", function() 
	{
        direction = "down";
        return false;
    });

    document.getElementById("Move").addEventListener("click", function() 
	{
        move();
        return false;
    });

    document.getElementById("Reset").addEventListener("click", function() 
	{
        resetFloor();
        return false;
    });
}
window.addEventListener("load", start, false);