// =============================
// Home.html Script
// =============================


// =============================
// Open / Close Windows Section
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

  if (command == "about") {
    setTimeout(function() {
       document.getElementById("aboutWindow").style.display = "block";
      }, 1000);
  }

    if (command == "socials") {
    setTimeout(function() {
       document.getElementById("socialsWindow").style.display = "block";
      }, 1000);
  }

    if (command == "hack") {
    }

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




