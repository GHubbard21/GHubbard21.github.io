// =============================
// Home.html Script
// =============================


// =============================
// Open / Close Windows Section
// =============================

/**
 * toggleWindow function.
 * Toggles the display of the window based on the id.
 * 
 */
function toggleWindow(id) {
  const folderWindow = document.getElementById(id);
  
  if (folderWindow.style.display === "block") {
    folderWindow.style.display = "none";
  } 
  else {
    folderWindow.style.display = "block";
  }
}


// =============================
// Console Section
// =============================

/**
 * toggleConsole function.
 * Toggles the display of the console window based on the id.
 */
function toggleConsole(id) {
  const consoleWindow = document.getElementById(id);
  
  if (consoleWindow.style.display === "block") {
    consoleWindow.style.display = "none";
  } 
  else {
    consoleWindow.style.display = "block";
  }
}

/**
 * Get the input and output ID's from home.html and set them to new consts.
 */
const input = document.getElementById("input");
const output = document.getElementById("output");

/**
 * Array of commands that the user can input in the console.
 * Each command has a response paired with it.
 */
const consoleCommands = {
    about: "Opening About Folder",
    socials: "Opening Socials",
    date: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }),
    hack: "hacking...",
    logout: "logging out...",
    clear: "",
    help: `Available commands:
    - about
    - socials
    - date
    - logout
    - clear
    - help`
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

  // Opens the About window after 1 second.
  if (command == "about") {
    setTimeout(function() {
       document.getElementById("aboutWindow").style.display = "block";
      }, 1000);
  }

  // Opens the Socials window after 1 second.
  if (command == "socials") {
    setTimeout(function() {
      document.getElementById("socialsWindow").style.display = "block";
    }, 1000);
  }
  
  // Logs out the user, sending them back to index.html after 1 second
  if (command == "logout") {
    setTimeout(function() {
      window.location.href = "lockscreen.html";
    }, 1000);
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

/**
 * setupArtModal function.
 * 
 */
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

/**
 * changeBackgroundColor function.
 * Changes the background color of the desktop to what the user selects.
 */
function changeBackgroundColor(color) {
  document.getElementById('desktop').style.backgroundColor = color;
}

/**
 * changeFont function.
 * Changes the font to what the user selects.
 */
function changeFont(font) {
  if (font === "default") {
    document.body.style.fontFamily = ""; 
  } 
  else {
    document.body.style.fontFamily = font;
  }
}


/**
 * changeBarColor function.
 * Changes the color of the taskbar to what the user selects.
 */
function changeBarColor(color) {
  document.getElementById('taskbar').style.backgroundColor = color;

/** 
 * CODE I DONT UNDERSTAND, BUT IT WORKS. CHANGES THE START BUTTON COLOR 
 * TO A COLOR OFFSET FROM THE TASKBAR.
 
  taskbar.style.backgroundColor = color;

  // Get computed RGB values
  const rgb = window.getComputedStyle(taskbar).backgroundColor;
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // Darken color by subtracting a small value (clamp to 0)
  const darker = (v) => Math.max(0, v - 30);
  const darkerColor = `rgb(${darker(r)}, ${darker(g)}, ${darker(b)})`;

  // Apply to start button
  document.getElementById('start').style.backgroundColor = darkerColor;
  */
}

// =============================
// Drag Windows Section
// =============================

// USING Interact.js for this becuase this shit was confusing the fuck out of me.

interact(".windows").draggable({

  // Only the title bar is draggable portion of the window.
  allowFrom: ".title",

  listeners: {
    // On Start
    start(event) {
      const targetWindow = event.target;

      // Get the inital position of the targetWindow. Using px because of CSS.
      targetWindow.style.top = targetWindow.offsetTop + 'px';
      targetWindow.style.left = targetWindow.offsetLeft + 'px';
    },
    // On Drag
    move(event) {
      const targetWindow = event.target;

      // Get the current top and left values from CSS. 
      // Conver from px ---> int.
      let top = parseInt(targetWindow.style.top);
      let left = parseInt(targetWindow.style.left);

      // Add the distance moved from the drag.
      top += event.dy;
      left += event.dx;

      // Set the new positions to the element.
      targetWindow.style.top = top + 'px';
      targetWindow.style.left = left + 'px';
    }
  }
});

/**
 * Same code as above, just for the console window.
 */
interact(".console").draggable({
  // Only the title bar of the console is draggable
  allowFrom: ".consoleTitle",

  listeners: {
    // On Start
    start(event) {
      const consoleWindow = event.target;

       // Get the inital position of the consoleWindow. Using px because of CSS.
      consoleWindow.style.top = consoleWindow.offsetTop + 'px';
      consoleWindow.style.left = consoleWindow.offsetLeft + 'px';
    },
    // On Drag
    move(event) {
      const consoleWindow = event.target;

      // Get the current top and left values from CSS. 
      // Conver from px ---> int.
      let top = parseInt(consoleWindow.style.top);
      let left = parseInt(consoleWindow.style.left);

      // Add the distance moved from the drag.
      top += event.dy;
      left += event.dx;

       // Set the new positions to the element.
      consoleWindow.style.top = top + 'px';
      consoleWindow.style.left = left + 'px';
    }
  }
});


// =============================
// Clock Section
// =============================
const clock = document.getElementById("clock");

let hour24 = false;

function toggleTime() {
  hour24 = !hour24;
  clockUpdate();
}


/**
 * clockUpdate function that displays the current day and time.
 * Updates the clock every second.
 */
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

/**
 * openMenu function.
 * Opens the context menu at the position of the mouse click.
 */
function openMenu(e) {
  e.preventDefault(); // stop default right-click
  const menu = document.getElementById("rightClickMenu");
  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.style.display = "block";
}

/**
 * closeMenu function.
 * Closes the context menu when clicking anywhere else on the screen.
 */
function closeMenu() {
  const menu = document.getElementById("rightClickMenu");
  menu.style.display = "none";
}

// Attach events to the functions.
document.addEventListener("contextmenu", openMenu);
document.addEventListener("click", closeMenu);

// =============================
// Notepad Section
// =============================

/**
 * saveNote function.
 * Saves the note to local storage.
 */
function saveNote() {
  const newNote = document.getElementById("notepadText").value;

}

/**
 * clearNote function.
 * Clears the note in the notepad.
 */
function clearNote() {
  document.getElementById("notepadText").value = "";
}

/**
 * downloadNote function.
 * Downloads the note as a text file.
 */
function downloadNote() {

}




