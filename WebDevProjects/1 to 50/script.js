/**
 * Get Grid, Timer Randomize Button and Theme Button by their ID from index.html
 * Set to new constants.
 */


const grid = document.getElementById("grid");

const timer = document.getElementById("timer");

const button = document.getElementById("rando");

const themeButton = document.getElementById("theme");


// Declare an empty Array called Numbers
let numbers = [];

// Declare the nextNumber as one. Will track which number to click next.
let nextNumber = 1;


// Declare a startTime and timerInterval.
let startTime;
let timerInterval;

/** 
 * Start Timer Function
*/ 
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(function () {
    var currentTime = Date.now();
    var elapsed = ((currentTime - startTime) / 1000).toFixed(2);
    timer.textContent = "Time: " + elapsed + "s";
  }, 50);
}

/** 
 * Stop Timer Function
*/ 
function stopTimer() {
  clearInterval(timerInterval);
}

/** 
 * Shuffle Numbers Function
 * Loop through a given array, swapping with an random element before it.
*/ 
function shuffle(array) {
  for (i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


/**
 * Fills the grid with numbers from 1–50
*/
function randomizeNums() {
    /**
     * Clear grid and timer.
     * Stop tiemr if running.
     * Reset numbersArray
     */
    grid.innerHTML = "";
    numbers = [];
    nextNumber = 1;
    timer.textContent = "Time: 0s";
    clearInterval(timerInterval);

  // Create array from 1-50
  for (let i = 1; i <= 50; i++) {
    numbers.push(i);
  }

  // Calls shuffle fucntion with the array called "numbers".
  let shuffled = shuffle(numbers);

  /**
   * For each number: Creates a squre cell with that number in it.
   */
  shuffled.forEach(function (num) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = num;

    /**
     * Adds an event listener that allows it to be clicked.
     * Checks if it is the next number in the sequence.
     * Starts the timer if it is the first number.
     * Increases nextNumber by 1.
     * If the next number clicked is 50, stops the timer. Adds "Finished to timer message."
     */
    cell.addEventListener("click", function () {
      if (parseInt(cell.textContent) == nextNumber) {
        if (nextNumber == 1) startTimer();
        cell.classList.add("clicked");
        nextNumber++;
        if (nextNumber > 50) {
          stopTimer();
          timer.textContent += "Finished!";
        }
      }
    });

    // Add the cell to the grid.
    grid.appendChild(cell);
  });
}

/**
 * Event listener added to Randomize button.
 * Calls the randomizeNums function.
 */
button.addEventListener("click", randomizeNums);

/**
 * Randomizes the numbers everytime the page is intialized.
 */
randomizeNums();


/**
 * Add an event listener to the themeButton when clicked.
 * Calls the changeTheme function when clicked. 
 */

themeButton.addEventListener("click", changeTheme);

/**
 * Changes the theme of the page.
 */
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}
