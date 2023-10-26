function show_clock () {
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30* hours + minutes/2}deg)`;  // 30 * hours: Each hour corresponds to a 30-degree rotation (360 degrees divided by 12 hours).

    m.style.transform = `rotate(${6 * minutes}deg)`; //6 * minutes: Each minute corresponds to a 6-degree rotation (360 degrees divided by 60 minutes)

    s.style.transform = `rotate(${6 * seconds}deg)`; //6 * seconds: Each second corresponds to a 6-degree rotation (360 degrees divided by 60 seconds).

    // Get the audio element
    let sound = document.getElementById('clockAudio');
    // Play the audio
     sound.play();
}

setInterval(show_clock, 1000)