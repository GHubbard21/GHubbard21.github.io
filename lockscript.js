// =============================
// lockscreen.html Script  ===> WILL BECOME SCRIPT FOR INDEX.HTML
// =============================



// =============================
// Loading Screen Section
// =============================


const dots = document.getElementById("dots");

let numDots = 0;

/**
 * loadDots function that starts the dots Animation.
 * 3 dots appear one by one and then disappear.
 * Starts on load of the page.
 */
function loadDots() {
    numDots++;
    if(numDots > 3){
        numDots = 0;
    }
    dots.textContent = ".".repeat(numDots);
}
setInterval(loadDots, 500);

/**
 * starLoadingBar functuion that starts Loading Bar Animation.
 * The bar fills up over 3 seconds, then the loading screen fades out.
 * Starts on load of the page.
 */
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

/**
 * toggleCard function that the Account Card.
 * Opens depending on id of selected account.
 */
function toggleCard(id) {
  const card = document.getElementById(id);

  if (card.style.display === "flex") {
    card.style.display = "none";
  } 
  else {
    card.style.display = "flex"; 
  }
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

/**
 * clockUpdate function that displays the current day and time.
 * Updates the clock every minute.
 */
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



// =============================
// Login Section
// =============================


/**
 * login function that redirects to home.html after 1.5 seconds.
 */
function login() {
  setTimeout(function() {
    window.location.href = "home.html";
  }, 1500);
}

/**
 * denyLogin function that displays the popup restricing access.
 */
function denyLogin() {
    document.getElementById('denyPop').style.display = 'block';
}

/**
 * closePopUp function that closes the popup. when the x is clicked.
 */
function closePopUp() {
     document.getElementById('denyPop').style.display = 'none';
}