// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//     counter.innerText = '0';

//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerText;

//         const increment = target / 400;

//         if(c < target) {
//             counter.innerText= `${Math.ceil(c + increment)}`;
//             setTimeout(updateCount , 1 );
//         }
//         else {
//             counter.innerText = target ;
//         }
//     }

//     updateCount();
// })

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100; // Adjust the speed of the animation by changing the divisor (e.g., 100)

    const updateCount = () => {
        count += increment;
        counter.innerText = Math.ceil(count);

        if (count < target) {
              requestAnimationFrame(updateCount);    //for smoother animation 
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
