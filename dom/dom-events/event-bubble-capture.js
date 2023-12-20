// const button = document.getElementById("btn");


// const listner1 = () => { // #450
//     console.log("click listener 1");
// }

// const listner2 = () => { // #500
//     console.log("click listener 2");
// }
// // button { click: [ #450, #500 ] }
// button.addEventListener("click", listner1);
// button.addEventListener("click", listner2);

// button.removeEventListener("click", listner2)

/*
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const count = document.getElementById("count");

let itemsCount = 1;

function updateCount(updateType) {
    // updateType = "inc" | "dec"
    if (
        (updateType === "inc" && itemsCount === 5) ||
        (updateType === "dec" && itemsCount === 1)) {
        alert("Can not update");
        return;
    }
    updateType === "inc" ? itemsCount++ : itemsCount--;
    count.innerText = itemsCount;
}

inc.addEventListener("click", () => {
    updateCount("inc");
})

dec.addEventListener("click", () => {
    updateCount("dec");
})
*/

/**
 * 1. Event capturing and bubbling
 */

const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

// addEventListener(eventType, callback, boolean)
// if the 3rd argument is false(default) => callback will be triggered in the bubbling phase
// if the 3rd argument is true => callback will be triggered in the capturing phase
// 
/*
Event lifecycle: 
1. Capturing phase
2. Target phase
3. bubbling phase 


For an element we can add events in two ways i. capturing phase ii. bubbling phase(default)

if the 3rd argument of addEventListener() function is true (capturing phase) , else bubbling phase(default)


parent.addEventListener("click", () => {
    // this callback will be executed in the bubbling phase
    console.log(1);
}, false)

parent.addEventListener("click", () => {
    // this callback will be executed in the capturing phase
    console.log(2);
}, true)

child.addEventListener("click", () => {
    console.log(3);
}, false)

child.addEventListener("click", () => {
    console.log(10);
}, true)

document.body.addEventListener("click", () => {
    console.log(4);
}, false)

document.body.addEventListener("click", () => {
    console.log(5);
}, true)
*/


/**
 * Event object: 
 * an object passed when ever eventlistener callback gets executed
 * 
 * event.target => the element where the event occured 
 * event.currentTarget =>the element whose event listener triggered the event(self element)
 * 
 * in the capturing phase the event propagation will be from `parent` to `child`
 * in the bubbling phase the event propagation will be from `child` to `parent`
 * 
 * event.stopPropagation() => stops propagating event to it's parent / children 
 * event.stopImmediatePropagation() => stops the event propagation immediately there 
 */

/*
btn.addEventListener("click", (event) => {
    console.log(1);
})

child.addEventListener("click", (event) => {
    console.log(2);
    // event.stopPropagation();
    // event.stopImmediatePropagation();
}, true)

child.addEventListener("click", (event) => {
    console.log(10);
    event.stopImmediatePropagation();
}, false)


child.addEventListener("click", (event) => {
    console.log(11);
}, false)

parent.addEventListener("click", (event) => {
    console.log(3);
}, false)
*/

/**
 * form events , input events  => employee management project
 * Jira dashboard clone => drag and drop events
 * 
 * 
 * submit, input, change, focus , blur, keyup and keydown
 */