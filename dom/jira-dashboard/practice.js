const source = document.querySelector(".source");
const container = document.querySelector(".container");

// source.addEventListener("dragstart", () => {
//     console.log("dragging started");
// })

// source.addEventListener("dragend", () => {
//     console.log("dragging ended");
// })

container.addEventListener("dragenter", () => {
    container.style.border = "2px dashed gray";
    container.style.transform = "scale(1.02)"
})

container.addEventListener("dragleave", () => {
    container.style.border = "2px solid gray";
    container.style.transform = "scale(1)"
})

container.addEventListener("dragover", (event) => {
    // preventing the default behaviour of dragover event will trigger the drop event
    event.preventDefault();
})

container.addEventListener("drop", () => {
    container.appendChild(source);
    container.style.border = "2px solid gray";
    container.style.transform = "scale(1)"
})

/**
 * 
 * By default the dragover event stops the execution of `drop` event
 * if we want to trigger the drop event then , just prevent the default behaviour in the dragover event
 */