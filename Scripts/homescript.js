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