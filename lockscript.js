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


function startLoadingBar() {
    var bar = document.getElementById("loadingBar");

    var width = 0;

    var interval = setInterval(loadBar, 30);

    function loadBar() {
      if (width >= 100) {
        clearInterval(interval);
          
        setTimeout(hideScreen, 500);
      }
      else {
        width++;
        bar.style.width = width + '%';
      }

      function hideScreen() {
        document.getElementById('loadingScreen').style.display = 'none';
      }
    }
  }

 startLoadingBar();
   

// =============================
// Open / Close Card Section
// =============================

function toggleCard(id) {
  const card = document.getElementById(id);

  if (card.style.display === "flex") {
    card.style.display = "none";
  } 
  else {
    card.style.display = "flex"; 
  }
}

function openCard(id) {
  document.getElementById(id).style.display = "flex";
}

function closeCard(id) {
  document.getElementById(id).style.display = "none";
}


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
        hour12: !hour24
    });

    clock.innerHTML = day + "<br>" + currentTime;

}

setInterval(clockUpdate, 1000);
clockUpdate();


function login() {
    
  setTimeout(function() {
    window.location.href = "home.html";
  }, 1500);
}

function denyLogin() {
    document.getElementById('denyPop').style.display = 'block';
}

function closePopUp() {
     document.getElementById('denyPop').style.display = 'none';
}