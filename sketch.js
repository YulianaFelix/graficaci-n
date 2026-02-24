let x = 300;       // posición horizontal
let y = 0;         // posición vertical
let velocidad = 5; // velocidad 5
let tamaño = 40;   // tamaño de la pelota

function setup() {
  createCanvas(600, 400); // tamaño del canvas
  frameRate(30);          // 30 FPS
}

function draw() {
  background(220); // limpia la pantalla cada frame

  y += velocidad;  // movimiento vertical

  // rebote arriba y abajo
  if (y > height - tamaño || y < 0) {
    velocidad *= -1;
  }

  ellipse(x, y, tamaño, tamaño); // dibuja la pelota
}
