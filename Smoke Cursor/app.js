const root = document.querySelector(".container");

// to store mouse coordinates
let x=0;
let y=0;

window.addEventListener("mousemove", (e) => {
    x=e.clientX;
    y=e.clientY;
})

function draw(){
    const smoke = document.createElement("div"); // create a div of smoke
    smoke.classList.add("smoke"); // add smoke class

    // Set the initial position of the 'smoke' div based on mouse coordinates
    smoke.style.left= x + "px"; 
    smoke.style.top= y + "px";

    // we will add this into container class 
    root.appendChild(smoke);


    // creating animation
    smoke.animate(
        [
            {
                backgroundColor : "",
                filter : "blur(10px)",
            },
            {
                backgroundColor : "yellow", 
                filter : "blur(20px)", 
                top : y - (Math.random() * 400) + "px", // Set the final top position with a random offset for a rising effect
                opacity : 0,
                scale:3,
            }
        ],
        {
            duration: 500 // 500 = 0.5 second
        }
    );

    setTimeout(() => smoke.remove(), 500);

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

