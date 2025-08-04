// Clase Player 
class Player {
  constructor(x, y) {
    this.x = x; // Posición horizontal
    this.y = y; // Posición vertical
    this.size = 75; // Tamaño del Player
    this.collisionDetected = false; // Estado de colisión
  }

  display() {
    // Dibujar círculo translúcido detrás del Player (solo si hay vidas restantes)
    if (lives > 0) {
      noStroke();
      fill(255, 255, 255, 100); // Blanco translúcido
      let collisionRadius = this.size * 0.5; // Radio ajustado al 50%
      ellipse(this.x + this.size / 2, this.y + this.size / 2, collisionRadius * 2);
    }
      
    

    // Dibujar imagen del Player o imagen de Game Over
    if (lives > 0) {
      image(playerImg, this.x, this.y, this.size, this.size);
    } else {
      image(playerGameOverImg, this.x, this.y, this.size, this.size);
    }
    if (currentScreen === "gameOver")
      {
         image(playerGameOverImg, this.x, this.y, this.size, this.size);
        
      }
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 7; // Mover a la izquierda
    if (keyIsDown(RIGHT_ARROW)) this.x += 7; // Mover a la derecha
    this.x = constrain(this.x, 0, width - this.size); // Limitar dentro del canvas
  }
}

// Clase mouse clics que caen
class FallingObject {
  constructor(x, y, size) {
    this.x = x; // Posición inicial en X
    this.y = y; // Posición inicial en Y
    this.size = size; // Tamaño 
    this.speed = random(3, 6); // Velocidad
  }

  display() {
    image(fallingObjectImg, this.x, this.y, this.size, this.size); // Dibujar objeto como imagen
  }

  fall() {
    this.y += this.speed; // Hacer que caiga
    if (this.y > height) {
      this.y = -this.size; // Reiniciar arriba
      this.x = random(0, width); // Cambiar posición horizontal
    }
  }
}

// Función para verificar colisiones 
function collides(player, obj) {
  return (
  return (
  obj.x + obj.size / 2 > player.x &&
  obj.x - obj.size / 2 < player.x + player.size &&
  obj.y + obj.size / 2 > player.y &&
  obj.y - obj.size / 2 < player.y + player.size
);

}
