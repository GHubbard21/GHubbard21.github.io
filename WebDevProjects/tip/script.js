/**
 * Array called roles. each element in the array has a title, tip suggestion amount, and a quote.
 */

const roles = [
    {
      title: "Stripper",
      tipSuggestion: 0,
      quote: "Baby, I'm the only one who should be getting tips."
    },
    {
      title: "Finance Bro",
      tipSuggestion: 15,
      quote: "Impressive, very nice. Let's see Paul Allen's tip."
    },
    {
      title: "Generous Grandma",
      tipSuggestion: 30,
      quote: "You know my grandson is single, you'd love him."
    },
    {
      title: "Mafia Boss",
      tipSuggestion: 20,
      quote: "All this just for a slice of gabagool?"
    },
    {
      title: "Greedy Pirate",
      tipSuggestion: 3,
      quote: "Ye scurvy dog, ye get no gold from me!"
    },
    {
      title: "Jeff Bezos",
      tipSuggestion: 100,
      quote: "Do you know how much I made while eating this meal?"
    },
    {
      title: "Influencer in the Wild",
      tipSuggestion: 10,
      quote: "It's all about exposure hun."
    },
    {
      title: "1940s LA Detective",
      tipSuggestion: 25,
      quote: "Keep the change doll, these streets aren't what they used to be."
    },
    {
      title: "Conspiracy Theorist",
      tipSuggestion: 8,
      quote: "Did you know there's tracking devices in 5 dollar bills?"
    },
    {
      title: "Pyramid Scheme Promoter",
      tipSuggestion: 10,
      quote: "If you let me keep the tip, I'll show you how to double your wages."
    },
    {
      title: "Crypto Bro",
      tipSuggestion: 30,
      quote: "WAGMI"
    },
    {
      title: "OnlyFans Creator",
      tipSuggestion: 20,
      quote: "I guess I'm the paypig now."
    },
    {
      title: "Fitness Influencer",
      tipSuggestion: 15,
      quote: "It's all about the gains!"
    }
  ];

/**
* Get role, tip, result, and theme by their ID.
* Set to new constants that will be used in the generateRole and calculateTip functions.
*/

const roleTXT = document.getElementById("role");

const tipTXT = document.getElementById("tip")

const finalSum = document.getElementById("result");
  
const themeButton = document.getElementById("theme");

/**
 * Set current role to null. 
 */
let currentRole = null;

/**
 * generateRole Function.
 * Sets the current role to a random role and uses the text, tip
 */

function generateRole() {
  // set the currentRole to a random role from the roles array.
  currentRole = roles[Math.floor(Math.random() * roles.length)];

  /**
   * Set the roleTXT to the correct role title and quote.
   * Set the tipTXT to the role suggestion amount.
   * Set the finalSum to empty until the calculateTip function is called.
   */
  roleTXT.textContent = currentRole.title + " says: " + currentRole.quote;
  tipTXT.value = currentRole.tipSuggestion;
  finalSum.textContent = '';

}


/**
 * calcuateTip Function.
 *  
 */
function calculateTip() {
  /**
   * Get the bill value and tip value. Set them to new constants.
   */
  const bill = document.getElementById("bill").value;

  const tipPercent = document.getElementById("tip").value;

  /**
   * Parse the string value of the bll and tipPercent as a number that can be used.
   */
  billVal = parseFloat(bill);
  tipPercentVal = parseFloat(tipPercent);

  /**
   * Check if billVal or tipPercent is not a number.
   * If either return true, set the finalSum text to notify the user to enter valid numbers.
   * 
   */
  if (isNaN(billVal) || isNaN(tipPercentVal)) {
     finalSum.textContent = "Please enter valid numbers.";
    return;
  }
  /**
   * Calclate the tip amount and total amount.
   */
  const tipAmount = billVal * (tipPercentVal / 100);
  const totalAmount = billVal + tipAmount;
  
  /**
   * Set the finalSum text area which is the "result" div.
   * Shows the role, tip amount, and total cost.
   */
  finalSum.textContent = "Role: " + currentRole.title + " | " + "Tip: " + tipAmount + " | " + "Total: " + "$" + totalAmount.toFixed(2);
  }
  

  /**
 * Add an event listener to the themeButton when clicked.
 * Calls the changeTheme function when clicked. 
 */

themeButton.addEventListener("click", changeTheme);

/**
 * Changes the theme of the page.
 */
function changeTheme() {
    document.body.classList.toggle("dark-theme");
}