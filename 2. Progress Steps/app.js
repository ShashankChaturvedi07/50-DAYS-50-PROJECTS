
// Select the progress bar element by its ID and store it in the "progress" variable.
const progress = document.getElementById("progress");

// Select the previous button element by its ID and store it in the "prev" variable.
const prev = document.getElementById("prev");

// Select the next button element by its ID and store it in the "next" variable.
const next = document.getElementById("next");

// Select all HTML elements with the class "circle" and store them in the "circles" variable.
const circles = document.querySelectorAll(".circle");

// Initialize a variable called "currentActive" to keep track of the currently active circle. Start with the first circle.
let currentActive = 1;

// Add a click event listener to the "Next" button.
next.addEventListener("click", function(){
    // Increase the value of "currentActive" by 1.
    currentActive++;

    // If "currentActive" becomes greater than the total number of circles, limit it to the maximum number of circles.
    if(currentActive > circles.length){
        currentActive = circles.length;
    }

    // Call the "update" function to update the display.
    update();
});

// Add a click event listener to the "Prev" button.
prev.addEventListener("click", function(){
    // Decrease the value of "currentActive" by 1.
    currentActive--;

    // If "currentActive" becomes less than 1, limit it to the first circle.
    if(currentActive < 1){
        currentActive = 1;
    }

    // Call the "update" function to update the display.
    update();
});

// Define the "update" function to handle updating the circles, progress bar, and button states.
function update(){
    // Loop through all the circles.
    circles.forEach((circle, idx) => {
        // If the circle's index is less than the current active circle, make it appear as active.
        if(idx < currentActive){
            circle.classList.add("active");
        }
        else{
            // If the circle's index is greater than or equal to the current active circle, make it appear as inactive.
            circle.classList.remove("active");
        }
    });

    // Select all circles that are marked as active and store them in the "actives" variable.
    const actives = document.querySelectorAll(".active");

    // Calculate the width of the progress bar based on the number of active circles and the total number of circles.
    // This represents your progress.
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    // Disable or enable the "Prev" and "Next" buttons based on your current position.
    if(currentActive === 1 ){
        // If you're at the first circle, disable the "Prev" button.
        prev.disabled = true;
    }
    else if( currentActive === circles.length){
        // If you're at the last circle, disable the "Next" button.
        next.disabled = true ;
    }
    else {
        // If you're in the middle, enable both "Prev" and "Next" buttons.
        prev.disabled = false;
        next.disabled = false ;
    }
}
