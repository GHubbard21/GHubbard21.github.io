/**
 * Get the Days, Hours, Minutes, and Seconds text area.
 * Set them to new constants that will be used in the countdown function.
 */
const daysTXT = document.getElementById("days");

const hoursTXT = document.getElementById("hours");

const minsTXT = document.getElementById("minutes");

const secondsTXT = document.getElementById("seconds");


/**
 * Countdown Function. Calculates the time between now and the start of the 2026 World Cup.
 */
function countdown(){
    /**
    * Target date of the timer.
    * Kickoff day of 2026 World Cup.
    * */ 
    const targetDate = new Date("June 11, 2026 00:00:000").getTime();

    /**
    * Get current date and time.
    */
    const currentDate = new Date().getTime();

    /**
     * Calculate the distance between the currentDate and targetDate.
     */
    const distanceBetween = targetDate - currentDate;

    /**
    * Time calculations for days, hours, minutes, and seconds.
    */
    const days = Math.floor(distanceBetween / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distanceBetween % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBetween % (1000 * 60)) / 1000);

    /**
     * Update the text of the Days, Hours, Minutes and Seconds.
     */
    daysTXT.textContent = days;
    hoursTXT.textContent = hours;
    minsTXT.textContent = mins;
    secondsTXT.textContent = seconds;

    /**
     * Stop the Timer when the countdown reaches the targetDate.
     * Set the text of the days, hours, minutes, and seconds to 0 when reached.
     */
    if (distanceBetween < 0) {
        clearInterval(timer);
        daysTXT.textContent = "0";
        hoursTXT.textContent = "0";
        minsTXT.textContent = "0";
        secondsTXT.textContent = "0";
     }
}

/**
 * Call the countdown function every second in order
 * for the timer to update every second.
 */
const timer = setInterval(countdown, 1000);

/**
 * Call the countdown function immediately on loading the page.
 */
countdown();

