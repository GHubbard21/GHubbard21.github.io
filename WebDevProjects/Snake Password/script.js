// =============================
//  Snake Password Game Script
// =============================


// =============================
//  DOM Elements
// =============================

// Game canvas where the Snake game will be played.
const canvas = document.getElementById("gameCanvas");

// Theme Toggle Button.
const themeButton = document.getElementById("theme");

// Start Game Button.
const startButton = document.getElementById("startButton");

// Result Overlay.
const resultOverlay = document.getElementById("resultOverlay");

// Result Message.
const resultMessage = document.getElementById("resultMessage");

// Restart Button.
const restartButton = document.getElementById("restartButton");


// =============================
//  Canvas Setup
// =============================
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

// Size of each grid square.
const gridSize = 20; 



// =============================
//  Passwords & Hints Data
// =============================

/**
 * hintsPasswordsList Array.
 * Each element has a password and hint.
 */ 
const hintsPasswordsList = [
    { password: "HACKER", hint: "Bandit on the web" },
    { password: "MONSTER", hint: "Might find it under the bed" },
    { password: "TUXEDO", hint: "James Bond attire" },
    { password: "SHADOWS", hint: "They follow you around" },
    { password: "TOILET", hint: "Porcelain throne" },
    { password: "GNOMES", hint: "Mythical creature found in the garden" },
    { password: "KARAOKE", hint: "Open Mic night" },
    { password: "JALAPENOS", hint: "Spicy green guys" },
    { password: "OCTAGON", hint: "Shape of stop signs" },
    { password: "HATTRICK", hint: "Score 3 in a game" },
    { password: "MATRIX", hint: "Red or blue pill?" },
    { password: "INCREDIBLES", hint: "Friends of Frozone" },
    { password: "HEISENBERG", hint: "Walter White alias" },
    { password: "MFDOOM", hint: "Metal-faced villain" },
    { password: "FADEAWAY", hint: "Tough jumpshot" },
];

// Global var of the chosen Password.
let chosenPW = "";

// Global var of the chosen Hint.
let chosenHint = "";

// Array of letters of the chosen Password.
let pwLetters = [];

// Array of placed password characters.
const pwChars = [];




// =============================
//  Password Game Logic
// =============================


/**
 * getHintPassword function.
 * Randomly selects a password and hint.
 * Updates the document with the text.
 */
function getHintPassword(){
    // Randomly select a password and its corresponding hint from the hitsPasswordList array.
    const randIndex = hintsPasswordsList[Math.floor(Math.random() * hintsPasswordsList.length)];
  
    // Set chosenHint to the hint of the random picked element. Update the Hint on the screen.
    chosenHint = randIndex.hint;
    document.getElementById("hint").innerText = "Hint: "+ chosenHint;
    
    // Set chosenPW to the password of the random picked element.
    chosenPW = randIndex.password;

    // Store the letters of the chosen password in pwLetters.
    pwLetters = chosenPW.split("");
    
}

/**
 * placeLetters function.
 * Generates a random position for each letter in the password.
 * Pushes each letter and their (x, y) positon into the pwChars array.
 */
function placeLetters() {
    // Clear the array.
    pwChars.length = 0;

    // Loop through each letter in the chosen password.
    for (let i = 0; i < pwLetters.length; i++){
       let letter = pwLetters[i];

       // Generate a random X and Y positon for the letter.
       let x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
       let y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
       
       // Finally store the letter and its positon in the array.
       pwChars.push({
        x: x,
        y: y,
        letter: letter
        });

    }
   
}

/**
 * drawLetters function.
 * Renders and draws the letters on the canvas.
 */
function drawLetters() {
    // Clear the canvas before drawing letters.
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    // Letters font and color.
    ctx.font = "20px Workbench";
    ctx.fillStyle = "white";
    ctx.textBaseline = "top";
    ctx.textAlign = "center";

    // Loop through the password characters and draw them on the canvas.
    for (let i = 0; i < pwChars.length; i++) {
        let char = pwChars[i];
        ctx.fillText(char.letter, char.x + gridSize / 2, char.y + 2);
    }
}

/**
 * checkLetterCollision function.
 * 
 */
function checkLetterCollision(){
    // Check for collision with any password character.
    for(let i = 0; i < pwChars.length; i++){
        const charAte = pwChars[i];

        if(snakeHead.x === charAte.x && snakeHead.y === charAte.y){
            // Add the ate letter to typedPassword.
            typedPassword += charAte.letter;

            // Remove the letter from the canvas.
            pwChars.splice(i, 1);
            // Update the typedPassword display.
            updateTypePassword();
            ateLetter = true;
            // Break out to eat another letter.
            return true;
        }
        

    }
    return false;
}
    
/**
 * updateTypePassword function.
 * Update the div called "typedPassword" with the letters being eaten/typed by the snake.
 */
function updateTypePassword(){
    document.getElementById("typedPassword").innerText = typedPassword;
}


/**
 * 
 */
function checkPasswordCorrect(){
    // Check if eaten/typed password length by the Snake is the same as the chosen password length.
    // And the game is running.
    if(typedPassword.length == chosenPW.length && isGameRunning) {
        isGameRunning = false;
        clearInterval(gameInterval);

        // Check if the typed password is equal to the chosen password.
        if(typedPassword == chosenPW) {
            // Set the result overlay if the password is correct.
            resultMessage.innerText = "ACCESS GRANTED";

            resultMessage.style.color = "lime";

            resultOverlay.classList.add("show");
        }
        else {
            // Set the result overlay if the password is incorrect.
            resultMessage.innerText = "ACCESS DENIED";

            resultMessage.style.color = "red";

            resultOverlay.classList.add("show");

        }
    }
}

// =============================
//  Snake Game State
// =============================

// Prevents Snake from running when the page is loaded.
let isGameRunning = false;

// Game loop reference.
let gameInterval;

// Initial Snake positon.
let snakeHead = {x: 200, y: 200};

// Initial Snake Body.
let snakeBody = [{ x: snakeHead.x, y: snakeHead.y }];


// Initial Snake movement direction.
let direction = "";

// Password that will be typed out as the snake eats letters.
let typedPassword = "";


// =============================
//  Snake Game Logic
// =============================


/**
 * drawSnake function.
 * Draws the snake on the canvas.
 */
function drawSnake(){
    ctx.fillStyle = "lime";
    for (let i = 0; i < snakeBody.length; i++) {
        const segment = snakeBody[i];
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    }

}

/**
 * moveSnake function.
 * Moves the snake in the current direction.
 */
function moveSnake() {
    // Move snake head based on current direction.
    if (direction === "RIGHT") {
        snakeHead.x += gridSize;
    } 
    else if (direction === "LEFT") {
        snakeHead.x -= gridSize;
    } 
    else if (direction === "UP") {
        snakeHead.y -= gridSize;
    } 
    else if (direction === "DOWN") {
        snakeHead.y += gridSize;
    }

    // Wrap around the canvas when the snake goes out of bounds.
    if (snakeHead.x >= canvas.width) snakeHead.x = 0;
    if (snakeHead.x < 0) snakeHead.x = canvas.width - gridSize;
    if (snakeHead.y >= canvas.height) snakeHead.y = 0;
    if (snakeHead.y < 0) snakeHead.y = canvas.height - gridSize;

    // Add new head to the front of the snake body
    snakeBody.unshift({ x: snakeHead.x, y: snakeHead.y });

    // Snake and Letter collision detection. Calls checkletterCollision.
    let ateLetter = checkLetterCollision();

    // If didn't eat a letter, remove tail to keep same length
    if (!ateLetter) {
        snakeBody.pop();
    }

    drawLetters(); 
    drawSnake();   

    // Check if the password is correct.
    checkPasswordCorrect();
    
}

/**
 * changeDirection function.
 * Change direction depending on the arrow key pressed.
 * Prevent the snake from reversing.
 */
function changeDirection(event) {
    const keyPressed = event.key;

    if (keyPressed === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (keyPressed === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (keyPressed === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (keyPressed === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
}

/**
 * startGame function.
 * Initialize and start the game loop.
 */
function startGame() {
    // Check to make sure the game isn't already running.
    if (isGameRunning == false) {

        // Set game state to true.
        isGameRunning = true;

        // Reset typedPassword.
        typedPassword = "";

        // Set initial position of the snake and only it's head.
        snakeHead = { x: 200, y: 200 };
        snakeBody = [{ x: snakeHead.x, y: snakeHead.y }];
        
        // Hide the startButton when the game begins.
        startButton.style.display = "none";

        // Start the game loop and update every 100ms.
        gameInterval = setInterval(moveSnake, 100); 
    }
}

/**
 * resetGame function.
 * Completely reset vars so the user can play again instantly.
 */
function restartGame(){
    // Remove the result overlay.
    resultOverlay.classList.remove("show");

    // Stop the game loop.
    clearInterval(gameInterval);


    // Set game state to false;
    isGameRunning = false;

    // Reset the typedPassword 
    typedPassword = "";
    updateTypePassword();

    // Reset the initial position of the snake and only it's head.
    snakeHead = { x: 200, y: 200 };
    snakeBody = [{ x: snakeHead.x, y: snakeHead.y }];

    // Reset the snake's inital direction.
    direction = "";

    // Re-place the password letters on the canvas.
    placeLetters();

    // Redraw the letters and the snake;
    drawLetters();
    drawSnake();

    // Restart the Game loop.
    isGameRunning = true;
    gameInterval = setInterval(moveSnake, 100); 
    
}


// =============================
//  Theme Toggle
// =============================

/**
 * Changes the theme of the page.
 */
function changeTheme() {
    // Set the document to light theme CSS.
    document.body.classList.toggle("light-theme");
}

// =============================
//  Initialization
// =============================


/**
 * Call essential functions on page load.
 */
getHintPassword();

placeLetters();

drawLetters();

drawSnake();


// startButton calls the startGame function.
startButton.addEventListener("click", startGame);

// Keydown calls the changeDirection fucntion.
document.addEventListener("keydown", changeDirection);

// themeButton calls the changeTheme fucntion.
themeButton.addEventListener("click", changeTheme);

// restartButton calls the resetGame fucntion.
restartButton.addEventListener("click", restartGame);