const form = document.querySelector("form");
const videoElement = document.querySelector("video");
const audioElement = document.querySelector("audio");
const timerText = document.querySelector(".timer-text");

const playPauseButton = document.getElementById("play-pause");

let background, duration, isPaused = true;

form.addEventListener("change", (e) => {
    let currentBackground = form["bg"].value
    let currentDuration = form["time"].value;
    background = currentBackground;
    duration = currentDuration;
})

playPauseButton.addEventListener("click", () => {
    if (isPaused && duration && background) {
        // media is in paused state start playing it now.
        timerText.innerText = `${duration} Mins`
        videoElement.src = background + ".mp4";
        audioElement.src = background + ".wav";
        videoElement.play();
        audioElement.play();
        isPaused = false;
    }
    else if (!isPaused) {
        videoElement.pause();
        audioElement.pause();
        isPaused = true;
    }
})