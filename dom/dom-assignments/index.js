const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");

const video = document.querySelector("video");
const activeBar = document.querySelector(".active-bar");
const play = document.querySelector(".play");


// duration, currentTime, volume, muted: boolean, paused: boolean
forward.addEventListener("click", () => {
    if (video.currentTime + 2 <= video.duration)
        video.currentTime += 2;
})

backward.addEventListener("click", () => {
    if (video.currentTime >= 2)
        video.currentTime -= 2;
})
video.volume = 0;
play.addEventListener("click", (e) => {
    if (video.paused) {
        video.play();
        e.target.innerText = "pause";
    }
    else {
        video.pause();
        e.target.innerText = "play_arrow";
    }
})

video.addEventListener("timeupdate", () => {
    // console.log(video.currentTime);
    console.log("update");
    let width = (video.currentTime * 100) / video.duration;
    activeBar.style.width = `${width}%`;
})


const bubble = document.querySelector(".bubble")

let intialX;
let finalX;

function mouseDown(e) {
    intialX = e.pageX;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
    let currentX = e.pageX;

}

function mouseUp(e) {
    finalX = e.pageX;



    // remove the mouse move and mouse up events
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}

bubble.addEventListener("mousedown", mouseDown);



// document.addEventListener("mousemove", (e) => {
//     console.log(e);
// });
// document.addEventListener("mousemove", (e) => {
//     console.log(e.pageX, e.pageY);
// })