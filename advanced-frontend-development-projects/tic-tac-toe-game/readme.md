# Canvas edu

## Drawing path

A path is a list of points, connected by segments of lines that can be of different shapes, curved or not, of different width and of different color. A path, or even a subpath, can be closed. To make shapes using paths takes some extra steps:

1. First, you create the path

2. Use drawing commands to draw into the path

3. Close the path

4. once the path is created, fill the path to render it.

Functions to perform this steps:

* ```beginPath()``` create the path

* ```closePath()``` close the path

* ```stroke()``` draw the shape by stroking its outline

* ```fill()``` draw solid shape by filling the path content area

* ```moveTo(x, y)``` moving the pen to coordinates specifed by x and y

* ```lineTo(x, y)``` draw line from current position to specifed x y

* ```arc(x, y, radius, startAngle, endAngle, anticlockwise)``` draw an arc centerd at (x, y) with radius started at startAngle and ended at endAngle.

* ```arcTo(x1, x2, y1, y2)``` draw an cicrcle with given control points and radius, connected to previous point by a straight line.

* ```rect(x, y, width, heigth)``` draws the rectangle whose top-left is specified by (x, y) with specified ```width``` and ```heigth```.

* ```quadraticCurveTo(cp1x, cp1y, x, y)``` draws a quadratic Bézier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y.

* ```bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)``` Draws a cubic Bézier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x, cp1y) and (cp2x, cp2y).

* ```Path2D()``` return new instancly Path2D object.

### Drawing triangle

```javascript
function drawingTriangle(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();
}
```

## Aplyng styles and colors

fillstyle = color

strokestyle = color

### Line styles

* ```lineWidth = value``` set width of lines drawn in future

* ```lineCap = type``` set end of line. Can be ```but, round, square```.

* ```lineJoin = type``` set appearance of points where lines meet

* ```mitterLimit = value``` set limit of corners width

* ```getLineDash()``` return the current line dash pattern

* ```setLineDash(segments)``` set current line dash pattern

* ```lineDashOffset = value``` specify where to start a dash array to start
