// =============================
// Home.html Script
// =============================


// =============================
// Loading Screen Section
// =============================

const dots = document.getElementById("dots");

let numDots = 0;

function loadDots() {
    numDots++;
    if(numDots > 3){
        numDots = 0;
    }
    dots.textContent = ".".repeat(numDots);
}
setInterval(loadDots, 500);



// =============================
// Open/ Close Windows Section
// =============================

function toggelWindow(id) {
  const folderWindow = document.getElementById(id);
  
  if (folderWindow.style.display === "block") {
    folderWindow.style.display = "none";
  } 
  else {
    folderWindow.style.display = "block";
  }
}

function openWindow(id) {
  document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
  document.getElementById(id).style.display = "none";
}


// =============================
// Console Section
// =============================
function closeConsole(id) {
  document.getElementById(id).style.display = "none";
}

function toggleConsole(id) {
  const consoleWindow = document.getElementById(id);
  
  if (consoleWindow.style.display === "block") {
    consoleWindow.style.display = "none";
  } 
  else {
    consoleWindow.style.display = "block";
  }
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
// Open Modals Section
// =============================

function setupArtModal() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('artModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');

  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = img.src;

      modalTitle.textContent = img.dataset.title || '';


    });
  });

  window.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function closeModal() {
  document.getElementById('artModal').style.display = "none";
}


window.onload = function() {
  clockUpdate();
  setupArtModal();
};

// =============================
// Settings Section
// =============================
function changeBackgroundColor(color) {
  document.getElementById('desktop').style.backgroundColor = color;
}

function changeFont(font) {
  if (font === "default") {
    document.body.style.fontFamily = ""; 
  } 
  else {
    document.body.style.fontFamily = font;
  }
}

function changeBarColor(color) {
  document.getElementById('taskbar').style.backgroundColor = color;
}

// =============================
// Drag Windows Section
// =============================

// USING Interact.js for this becuase this shit was confusing the fuck out of me.

interact('.windows').draggable({

})

// =============================
// Clock Section
// =============================
const clock = document.getElementById("clock");

let hour24 = false;

function toggleTime() {
  hour24 = !hour24;
  clockUpdate();
}

function clockUpdate(){
    let time = new Date();

    let day = time.toLocaleDateString('en-US', { weekday: 'long' });

    let currentTime = time.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !hour24
    });

    clock.innerHTML = day + " " + currentTime;

}

setInterval(clockUpdate, 1000);
clockUpdate();

// =============================
// Right Click Menu Section
// =============================

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  const menu = document.getElementById("rightClickMenu");

  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.style.display = "block";
});


document.addEventListener("click", function () {
  document.getElementById("rightClickMenu").style.display = "none";
});

// =============================
// Notepad Section
// =============================

function saveNote() {
  const newNote = document.getElementById("notepadText").value;

}

function clearNote() {
  document.getElementById("notepadText").value = "";
}


function downloadNote() {

}




