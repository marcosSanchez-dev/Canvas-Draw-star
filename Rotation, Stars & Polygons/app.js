"use strict";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.fillStyle = "#eaac8b";
ctx.lineWidth = 2;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = "#355070";
let hue = 0;
let drawing = false;

function drawShape(x, y, radius, inset, n) {
  ctx.strokeStyle = "hsl(" + hue + ", 70%, 66%)";
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.moveTo(0, 0 - radius);

  for (let i = 0; i < n; i++) {
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius * inset);
    ctx.rotate(Math.PI / n);
    ctx.lineTo(0, 0 - radius);
  }

  ctx.restore();
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

let angle = 0;
window.addEventListener("mousemove", function (e) {
  if (drawing) {
    ctx.save();
    ctx.translate(e.x, e.y);
    ctx.rotate(angle);
    hue += 3;
    angle += 0.009;
    drawShape(0, 0, 150, 0.2, 20);
    ctx.restore();
  }
});

window.addEventListener("mousedown", function () {
  drawing = true;
});
window.addEventListener("mouseup", function () {
  drawing = false;
});

/*
ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.height/2, canvas.width/2);
ctx.save() // guarda el 1° estado

ctx.fillStyle = "blue";
ctx.fillRect(15, 15, canvas.height/2 - 30, canvas.width/2 - 30);
ctx.save(); // guarda el 2° estado

ctx.fillStyle = "green";
ctx.fillRect(30, 30, canvas.height/2 - 60, canvas.width/2 - 60);
ctx.save(); // guarda el 3° estado

ctx.fillStyle = "black";
ctx.fillRect(45, 45, canvas.height/2 - 90, canvas.width/2 - 90);

ctx.restore(); // recupera el 3° estado
ctx.fillRect(60, 60, canvas.height/2 - 120, canvas.width/2 - 120);

ctx.restore(); // recupera el 2° estado
ctx.fillRect(75, 75, canvas.height/2 - 150, canvas.width/2 - 150);

ctx.restore(); // recupera el 1° estado
ctx.fillRect(290, 90, canvas.height/2 - 180, canvas.width/2 - 180);

*/
