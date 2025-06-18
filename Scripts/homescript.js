// =============================
// Home Page Script
// =============================

const clock = document.getElementById("clock");

function clockUpdate(){
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

}
setInterval(clockUpdate, 1000);
clockUpdate();