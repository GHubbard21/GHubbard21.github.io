/**
 * Getting all buttons on the index.html page by their ID.
 * Sets the buttons to new consants.
 */

const button = document.getElementById("runaway");

const tauntMessage = document.getElementById("taunt-message");

const secretbutton = document.getElementById("secret");

const themeButton = document.getElementById("theme");

/** 
 * Array of taunts that will be printed out when hovering over the runaway button.
 */
const taunts = [
    "Ooooh almost!",
    "Are you even trying?",
    "You can do better",
    "You're joking right?",
    "That's embarrassing",
    "Not even close!",
    "Wow",
    "Is it really that hard?",
    "Better luck next time champ",
    "Just click the button man"
];


/**
 * Add an event listener to the button when moused over.
 * Calls the moveButton function when moused over. 
 * 
*/ 
button.addEventListener("mouseover", moveButton);

/**
 * moveButton function.
 * Gets maxX and maxY coordinate within the screen.
 * Generates a random X and Y coordinate.
 * Places the button at the randomly generated X and Y coordinate.
 * Prints a random taunt from the taunt array.
 */
function moveButton() {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    tauntMessage.innerText = taunts[Math.floor(Math.random() * taunts.length)];

}

/**
 * Add an event listener to the button when clicked.
 * Calls the catchButton function when clicked. 
 * 
*/ 
button.addEventListener("click", catchButton);


/**
 * catchButton function.
 * Creates an alert pop-up.
 */
function catchButton() {
    alert("Wow you actually caught me!");
}


/**
 * Add an event listener to the secretButton when clicked.
 * Calls the secretCatch function when clicked.
 */
secretbutton.addEventListener("click", secretCatch);


/**
 * secretCatch function.
 * Creates an alert pop-up.
 */
function secretCatch() {
    alert("You found the secret Button!");
}


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