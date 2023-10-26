const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", function(){

        removeActiveClasses();

        // in css check line 44 we already define active class now we are adding active class to each panel class
        panel.classList.add("active");
    })
})

function removeActiveClasses(){
    panels.forEach(function(panel){
        panel.classList.remove("active");
    })
}