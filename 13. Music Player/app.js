let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function (){
    progress.max = song.duration;
    progress.value = 0; // Set the initial value to 0
}

song.addEventListener('timeupdate', function () {
    progress.value = song.currentTime;
});

function playPause () {
    if(song.paused || song.ended){
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
    }
    else{
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}

progress.oninput = function(){
    song.currentTime = progress.value;
}

// Update the progress bar while the song is playing
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

