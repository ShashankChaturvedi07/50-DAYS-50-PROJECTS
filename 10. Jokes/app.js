const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// function generateJoke() {
//     fetch("https://hindi-jokes-api.onrender.com", {
//         headers : {
//             'Accept': 'application/json'
//         }
//     })
//     .then(( res ) => res.json())
//     // .then((data )=> console.log(data))
//     .then((data )=> {
//         jokeEl.innerHTML = data.joke
//     })

// }

                           // USING ASYNC / AWAIT

async function generateJoke() {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single", {
        headers : {
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
   
    jokeEl.innerHTML = data.joke;

}
