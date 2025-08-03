let playerImg; // Imagen para el jugador
let playerGameOverImg; // Imagen para el jugador en Game Over
let fallingObjectImg; // Imagen para los objetos que caen
let backgrounds = []; // Array para diferentes fondos
let player;
let fallingObjects = []; 
let lives = 3; //Contador de vidas
let level = 1; // Nivel inicial
let levelChangeTimer = 0; // Temporizador para aumentar niveles
let isGameOver = false; // Estado del juego
let currentScreen = "inicio"; // Controla la pantalla actual ("inicio", "juego", "gameOver", "creditos")
let gameTime = 0; // Tiempo transcurrido en el juego
let myFont;

function preload() {
  // Cargar imágenes
  playerImg = loadImage('../images/film8bit.png'); // Imagen normal del jugador
  playerGameOverImg = loadImage('../images/netflixlogo.png'); // Imagen para el estado de Game Over
  fallingObjectImg = loadImage('../images/mouseclic.png'); // Imagen de los mouse clics que caen
  myFont = loadFont('8bit.ttf'); // Fuente personalizada

  // Cargar fondos
  for (let i = 1; i < 5; i++) {
    backgrounds.push(loadImage(`../images/fondo${i}.png`)); // Reemplaza con nombres de tus imágenes
  }
}

function setup() {
  createCanvas(600, 600); 
  player = new Player(280, 500); // posición inicial del jugador

  // Crear múltiples clics que caen
  for (let i = 0; i < 8; i++) {
    fallingObjects.push(new FallingObject(random(width), random(-200, -20), 20)); // 
  }
}

function draw() {
  // control de pantallas
  if (currentScreen === "inicio") {
    pantallaInicio();
  } else if (currentScreen === "juego") {
    pantallaJuego();
  } else if (currentScreen === "gameOver") {
    pantallaGameOver();
  } else if (currentScreen === "creditos") {
    pantallaCreditos();
  } else if (currentScreen === "ganaste") {
    pantallaGanaste();
  }
}
