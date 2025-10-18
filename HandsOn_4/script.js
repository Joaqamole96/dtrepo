// -----------------------------
// Functions
// -----------------------------

// NOTE: I'll also demonstrate the three different ways to declare functions here hehe

// generateRandomArray() [Function Declaration]
// Generate an array of random whole numbers
function generateRandomArray() {
    const arr = [];
    let i = 0;
    while (i < 15) {
        arr.push(Math.floor(Math.random() * 100) + 1);
        i++;
    }
    return arr;
}

// submitGuess() [Function Expression]
// Submit inputted guess, compare the guess with each element in the array, and output the verdict.
const submitGuess = function() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess <= 1 || guess >= 100) {
        remarks.textContent = "Please enter a valid number between 1 and 100.";
        remarks.style.color = "red";
        return;
    }

    ++tries;
    triesDisplay.textContent = tries;
    answerOutput.textContent = guess;

    let found = false;

    for (const [index, num] of numberCollection.entries()) {
        if (num === guess) {
            remarks.textContent = `Correct! The number ${guess} is at index ${index}.`;
            remarks.style.color = "green";
            found = true;
            break;
        }
    }

    if (!found) {
        remarks.textContent = `The number ${guess} is not in the collection.`;
        remarks.style.color = "red";
    }

    guessInput.value = "";
    guessInput.focus();
}

// revealCollection() [Arrow Expression]
// Reveals the array.
const revealCollection = () => {
    let list = "";

    for (let i = 0; i < numberCollection.length; i++) {
        list += numberCollection[i];
        if (i < numberCollection.length - 1) list += ", ";
    }

    collectionDisplay.textContent = `Current Collection: [ ${list} ]`;
    collectionDisplay.classList.remove("hidden");
};

// resetGame() [Function Declaration]
// Resets the game and regenerates the array.
function resetGame() {
    numberCollection = generateRandomArray();
    tries = 0;
    triesDisplay.textContent = tries;
    answerOutput.textContent = "";
    remarks.textContent = "Game reset! Try again.";
    remarks.style.color = "#333";
    collectionDisplay.classList.add("hidden");
    guessInput.value = "";
    guessInput.focus();
};

// logCollection() [Function Expression]
// Debugging function to display current array.
const logCollection = function() {
    console.log("Current number collection:", numberCollection);
};

// -----------------------------
// Variables
// -----------------------------

// Let variables 
let numberCollection = generateRandomArray();
let tries = 0;

// Const variables
const guessInput = document.getElementById("guess");
const answerOutput = document.getElementById("answer");
const remarks = document.getElementById("remarks");
const triesDisplay = document.getElementById("tries");
const collectionDisplay = document.getElementById("collection");