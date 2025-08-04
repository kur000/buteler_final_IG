function textosinicio (){
  fill(255); 
  textFont(myFont);
  textSize(48);
  textAlign(CENTER);
  text("Pesadilla Filmica", width / 2, height / 2 - 50);
  textSize(14);
  text("Eres un largometraje orgulloso de su materialidad.", width / 2, height / 2 + 20);
  text("Movete con las teclas izquierda y derecha,", width / 2, height / 2 + 40);
  text("para escapar de las garras de las plataformas de streaming.", width / 2, height / 2 + 60);
  textSize(16);
  textStyle(BOLD);
  text("Presiona cualquier tecla para comenzar a jugar", width / 2, height / 2 + 160);
}
function textoscreditos (){
  fill(255); // Texto blanco
  textFont(myFont);
  textSize(20);
  textAlign(CENTER);
  text("Créditos", width / 2, height / 2 - 50);
  textSize(14);
  text("Artes Multimediales - Universidad Nacional de las Artes", width / 2, height / 2 + 40);
  text("Informática General - Cátedra Drelichman - Examen Final TT 2025", width / 2, height / 2 + 20);
  text("Alumno: Ignacio Buteler", width / 2, height / 2 + 60);
  textStyle(BOLD);
   textSize(20);
  text("Presiona cualquier tecla para volver al inicio", width / 2, height / 2 + 160);
}


// Pantalla de inicio
function pantallaInicio() {
  background(0); 
  textosinicio();
}

// Pantalla del juego
function pantallaJuego() {
  if (!isGameOver) {
    image(backgrounds[level - 1], 0, 0, width, height); // Fondo según el nivel

    // Actualizar el tiempo transcurrido
    gameTime += deltaTime;

    // Mostrar y mover al jugador
    player.display();
    player.move();

    // Mostrar y mover objetos que caen
    for (let obj of fallingObjects) {
      obj.display();
      obj.fall();

      // Verificar colisión
      if (collides(player, obj)) {
        lives--;
        obj.y = -obj.size; // Reiniciar objeto
        if (lives === 0) {
          isGameOver = true; // Cambiar estado del juego
          currentScreen = "gameOver"; // Cambiar a la pantalla de Game Over
        }
      }
    }

    // Mostrar vidas
    fill(255, 0, 0);
    textSize(18);
    text(`Vidas: ${lives}`, 80, 30);

    // Mostrar nivel
    fill(255, 0, 0);
    textSize(18);
    text(`Nivel: ${level}`, width - 100, 30);

    // Cambiar nivel cada 10 segundos (10,000 milisegundos)
    if (gameTime > level * 10000) {
      level++;

      if (level == 5) {
        currentScreen = "ganaste";
      }
      
      if (level > backgrounds.length) level = backgrounds.length; // Máximo nivel
      increaseDifficulty(); // Incrementar dificultad
    }
  }
}

// Pantalla de Game Over
function pantallaGameOver() {
  //background(0); // Fondo negro
  image(playerGameOverImg, player.x - 26, player.y - 11, player.size *1.7, player.size *1.3);
  fill(255,0,0); 
  textFont(myFont);
  textStyle(BOLD);
  textSize(30);
  textAlign(CENTER);
  text("Fuiste atrapado por", width / 2, height / 2 - 85);
  text("una plataforma de streaming!", width / 2, height / 2 - 45);
  textSize(20);
  textStyle(NORMAL);
  text("Presione tecla 1 para ver Créditos", width / 2, height / 2 + 20);
  text("Presione tecla 2 para volver a Inicio", width / 2, height / 2 + 60);
}

// Pantalla de Créditos
function pantallaCreditos() {
  background(0); // Fondo negro
  textoscreditos();
}

// Incrementar dificultad
function increaseDifficulty() {
  for (let obj of fallingObjects) {
    obj.speed += 1; // Aumentar velocidad de caída
  }
}

// Detectar teclas para navegación entre pantallas
function keyPressed() {
  if (currentScreen === "inicio") {
    currentScreen = "juego"; // Comenzar el juego
  } else if (currentScreen === "gameOver") {
    if (key === "1") {
      currentScreen = "creditos"; // Ir a la pantalla de créditos
    } else if (key === "2") {
      resetGame();
      currentScreen = "inicio"; // Volver a la pantalla de inicio
    }
  } else if (currentScreen === "creditos") {
    resetGame();
    currentScreen = "inicio"; // Regresar al inicio
  }
  else if (currentScreen === "ganaste") {
    if (key === "1") {
      currentScreen = "creditos"; // Ir a la pantalla de créditos
    } else if (key === "2") {
      resetGame();
      currentScreen = "inicio"; // Volver a la pantalla de inicio
    }
  }
}

// Reiniciar el juego
function resetGame() {
  lives = 3;
  level = 1;
  isGameOver = false;
  gameTime = 0; // Reiniciar tiempo del juego
  levelChangeTimer = 0;

  // Reiniciar objetos que caen
  for (let obj of fallingObjects) {
    obj.y = random(-200, -20);
    obj.speed = random(3, 6);
  }
}
// Pantalla Ganaste

function pantallaGanaste() {
  
  fill(255,0,0); 
  textFont(myFont);
  textStyle(BOLD);
  textSize(36);
  textAlign(CENTER);
  text("¡GANASTE!", width / 2, height / 2 - 50);
  textSize(14);
  textStyle(NORMAL);
  text("Por ahora, lograste escapar de las plataformas.", width / 2, height / 2);
  
  text("Presione tecla 1 para ver Créditos", width / 2, height / 2 + 20);
  text("Presione tecla 2 para volver a Inicio", width / 2, height / 2 + 60);
  
}

