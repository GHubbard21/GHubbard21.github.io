// =============================
// Home Page Script
// =============================

const clock = document.getElementById("clock");

function clockUpdate(){
    let time = new Date();

    let day = time.toLocaleDateString('en-US', { weekday: 'long' });

    let currentTime = time.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    clock.innerHTML = day + " " + currentTime;

}
setInterval(clockUpdate, 1000);
clockUpdate();


function openWindow(id){
    document.getElementById(id).style.display = "block";
}

function closeWindow(id){
    document.getElementById(id).style.display = "none";
}

function openConsole(id){
    document.getElementById(id).style.display = "block";
}

function closeConsole(id){
    document.getElementById(id).style.display = "none";
}

const input = document.getElementById("input");
const output = document.getElementById("output");

const consoleCommands = {
    help: "jim",
    about: "jim",
    games: "jim"
}

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
  // Set response to the response that corresponds with the command.
  let response = consoleCommands[command];

  // Checks if the reponse is undefined
  if(response == undefined){
    response = "Command not found";
  }

  // Write the command and its response to the output text area.
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










// =============================
// Console Section
// =============================


// =============================
// Notepad Section
// =============================


// =============================
// Games Section
// =============================

// =============================
// Folders Section
// =============================