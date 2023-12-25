const createIssueButton = document.getElementById("create-issue-btn");
const createIssueInput = document.getElementById("create-issue-input");

const todoContainer = document.getElementById("todo");

const containers = document.querySelectorAll(".container");

createIssueButton.addEventListener("click", (e) => {
    createIssueButton.style.display = "none";
    createIssueInput.style.display = "block";
});

createIssueInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        // entered key is `enter` key
        const card = document.createElement("div");
        card.innerText = e.target.value.trim();
        card.className = "card";
        card.draggable = true;

        card.addEventListener("dragstart", onDragStart);
        todoContainer.appendChild(card);

        createIssueInput.value = "";
        createIssueButton.style.display = "block";
        createIssueInput.style.display = "none";
    }
})


// this variable will hold the element which is currently being dragged
let draggedElement = null;

function onDragStart(event) {
    // as soon as an element is started dragging , assign that element to draggedElement variable
    draggedElement = event.target;
}

function onDragOver(event) {
    // event.currentTarget => TODO, INPROGRESS, DONE
    draggedElement.parentNode

    if (draggedElement.parentNode.id === event.currentTarget.id) {
        // self container 
        return;
    }
    event.preventDefault();
}

function onDrop(event) {
    // drop the draggedElement into drop zone
    // currentTarget = "TODO" , "INPROGRESS", "DONE"
    event.currentTarget.appendChild(draggedElement);
    if (event.currentTarget.id === "done") {
        // add an animation class for the draggedElement
        draggedElement.classList.add("done");
    }
}

for (let i = 0; i < containers.length; i++) {
    // each container should have dragover and drop events 

    containers[i].addEventListener("dragover", onDragOver)
    containers[i].addEventListener("drop", onDrop)
}