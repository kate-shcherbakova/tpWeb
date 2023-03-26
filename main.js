var canvas = document.getElementById('myCanvas');
// The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null
// "2d", leading to the creation of a two-dimensional rendering context
var ctx = canvas.getContext('2d');

canvas.width = 800
canvas.height = 600

//Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
// var rec1 = new Rectangle(10, 20, 50, 100, '#3498DB', 3);
// drawing.addForm(rec1);
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);