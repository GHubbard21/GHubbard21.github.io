
const textContainer = document.getElementById("TXT");

const startLines = [
    "Initializing system</span>...",

    "Loading modules</span>...",

    "Establishing connection </span>...",

    "<br>",

    "<span class='red'>ERROR:</span> Connection failed.",

    "Attempting reconnection... ",

    "<span class='red'>ERROR:</span> Connection failed.",

    "Attempting reconnection... ",

    "<span class='red'>ERROR:</span> Connection failed.",

    "<br>",

    "Complete Connection Timeout...",

    "<br>",

    "<button onclick='changeBG()'> Reboot System</button>",

    "<br>",
];


const hackLines = [ 
    "<h1>Warning! Warning! Warning!</h1>",

    "<h2>--- Unauthorized Access Detected ---</h2>",

    "<br>",
    "<br>",

    "1niti4liz!ng $ystem R3b00t...",

    "<br>",

    "Byp@ss!n9 s3cur!ty pr0t0c0ls...",

    "<br>",

    "M@l!c!0us p@ck@ge l0@d3d...",

    "<br>",

    "Lo@ding...",

    "<div class='square'></div> 25%",

    "<div class='square2'></div> 50%",

    "<div class='square3'></div> 75%",

    "<div class='square4'></div> 100%",

    "<br>",
    "<br>",
    "<br>",

    "R00t @ccess <span class='green'>gr@nt3d </span>...",

    "<input type='text'> "
    


];

let lineIndex = 0;

function typeLine() {
    if (lineIndex < startLines.length) {
        let line = document.createElement("div");
        textContainer.appendChild(line);
        let charIndex = 0;
        let currentLine = startLines[lineIndex];
        
        function typeChar() {
            if (charIndex < currentLine.length) {
                line.innerHTML = currentLine.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, 50);
            } else {
                lineIndex++;
                setTimeout(typeLine, 500);
            }
        }
        typeChar();
    }
}

setTimeout(typeLine, 2000); // Start typing after 2 seconds

function bgSwitch(){
    const colors = ["black", "green", "#003300", "#00FF00", "#001100", "black"];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i >= colors.length) {
            clearInterval(interval);
            document.body.style.backgroundColor = "blue";
        }
    }, 100);
}



function changeBG(){
   // document.body.style.backgroundColor = "blue";
  //  document.body.style.backgroundColor = "red";
  //  document.body.style.backgroundColor = "black";
  //  document.body.style.backgroundColor = "blue";
    bgSwitch();
    setTimeout(typeLine2, 5000)
    textContainer.innerHTML = ""; // Clear existing text
    lineIndex = 0; // Reset index for new lines
   // typeLine2(); // Start writing new text

}

function typeLine2() {
    if (lineIndex < hackLines.length) {
        let line = document.createElement("div");
        textContainer.appendChild(line);
        let charIndex = 0;
        let currentLine = hackLines[lineIndex];
        
        function typeChar2() {
            if (charIndex < currentLine.length) {
                line.innerHTML = currentLine.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar2, 50);
            } else {
                lineIndex++;
                setTimeout(typeLine2, 500);
            }
        }
        typeChar2();
    }
}


let i = 0;

function loadBar(){
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("innerBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
}