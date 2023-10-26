const loveme = document.querySelector('.loveme');
const times = document.querySelector('#times');

let timesClicked = 0;

loveme.addEventListener('dblclick', (e) => {
    createHeart(e);
    timesClicked++;
    times.textContent = timesClicked;
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');

    const x = e.clientX - loveme.offsetLeft;
    const y = e.clientY - loveme.offsetTop;

    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;

    loveme.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
};
