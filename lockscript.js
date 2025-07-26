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
    
    window.location.href = "home.html";

}

function denyLogin() {
    document.getElementById('denyPop').style.display = 'block';
}

function closePopUp() {
     document.getElementById('denyPop').style.display = 'none';
}