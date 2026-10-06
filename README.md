# Turtle Graphics Simulation

A browser-based turtle graphics simulator built with JavaScript. A turtle moves around a 50x50 grid and can draw trails as it goes, with the grid rendered dynamically as an HTML table.

**🌐 [Live Demo](https://obich1.github.io/Turtle-graphics/)**

## Features

- 50x50 interactive grid rendered dynamically with HTML and CSS
- Directional turtle movement with boundary checking
- Pen up / pen down toggle to control whether movement leaves a trail
- Turtle position displayed on the grid with an image
- One-click reset to restore the default state

## Tech Stack

- HTML
- CSS
- JavaScript (DOM manipulation)

## How It Works

The grid is stored as a 50x50 2D array (`0` = empty, `1` = drawn) and rendered as an HTML table. 
Each movement updates the turtle's position (with boundary checks), marks the current cell if the pen is down, 
and redraws the grid. Drawn cells are styled with a CSS class, and the turtle is shown with an image.

