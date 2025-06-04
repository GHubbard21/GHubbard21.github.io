
/** Array of words to get type out when a user visits the page. */
const blushLines = ["blush", "JUNE 2025", "Kevin Abstract"];

/** Speed at which those words are type out at. */ 
const speed = 150;

/** Vars that will be used to go through the blushLines array. */
let i = 0;
let char = 0;

/**
 * Function that writes out the whe words from the array, character by character.
 */
function typeOutWords() {
  if (i < blushLines.length) {
    // Set the current line to the index of i in the blushLines array.
    const currentLine = blushLines[i];

    // Check that the char is less than the currentLine length.
    if (char < currentLine.length) {
      // Write the current char on the current line.
      document.getElementById("startTXT").innerHTML += currentLine.charAt(char);
      // Go to the next char.
      char++;
      setTimeout(typeOutWords, speed);
    } 
    else {
      // If the char at given index is longer than the word, start a new line.
      document.getElementById("startTXT").innerHTML += '\n'; 

      // Go to the next element in the blushLines array
      i++;
      // Reset char to zero so it can start from the beginning of the new element.
      char = 0;
      setTimeout(typeOutWords, speed);
    }
  }
}

/** Calls the typeOutCode as soon as the page is loaded. */
typeOutWords();


/**
 * Get the input and output ID's from index.html and set them to new consts.
 */
const input = document.getElementById("input");
const output = document.getElementById("output");


/**
 * Array of commands that the user can input in the make shift terminal.
 * Each command has a response paired with it. 
 */
const commands = {
  artist: "Kevin Abstract",
  album: "Blush",
  date: "June 2025",
  genre: "Texas Pop",
  tracklist: "[locked]",
  "unlock tracklist": "Permission denied.",
  features: "To be revealed.",
  help: `Available commands:
  - artist
  - album
  - date
  - genre
  - tracklist
  - unlock tracklist
  - features
  - blush
  - clear
  - help`
};

/**
 * handleCommand function.
 * Only runs when a command is entered.
 */

function handleCommand(cmd) {
  // Set the given command to lowercase and remove extra spaces if pressed.
  const command = cmd.toLowerCase().trim();

  // If the command entered is "clear", completlely empty the output.
  if (command == "clear") {
    output.innerHTML = "";
    return;
  }

  // If the command entered is blush, make the webpage blush
  if(command == "blush"){
    // Get the blushFade div and set to new constant.
    const blushOverlay = document.getElementById('blushFade');

    blushOverlay.style.opacity = "0.6"; 

    // Fade out after 3 seconds
    setTimeout(() => {
     blushOverlay.style.opacity = "0";
   }, 3000); 


    output.innerHTML += "> " + cmd + "\nblushing...\n\n";
    return;
  }

  // Set response to the response that corresponds with the command.
  let response = commands[command];

  // Checks if the reponse is undefined
  if(response == undefined){
    response = "Command not found";
  }

  // Write the command and its repsonse to the output text area.
  output.innerHTML += "> " + cmd + "\n" + response + "\n\n";


}

/**
 * Event listener for the key presses insde the input box.
 */
input.addEventListener('keydown', function (e) {
  // When the "Enter" key is pressed, calls the handleCommand function and the input value given.
  if (e.key == "Enter") {
    handleCommand(input.value);

    // Clears the input value, so the user can type another command.
    input.value = '';

    // Move down the body for the latest input.
    window.scrollTo(0, document.body.scrollHeight);
  }
});

