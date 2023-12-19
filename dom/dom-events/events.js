/**
 * click, scroll, dblclick, mouseover(hover), mouseenter, mouseleave, keydown, keyup, submitting a form,
 * input change, focus, blur, mousedown, mouseleave, dragstart, dragend, drop,resize ...
 */

// function onButtonClick() {
// let container = document.querySelector('.container');
// container.classList.toggle('aravind')

// change the innerText of the paragraph
// const para = document.querySelector(".container > p");
// para.innerText = "Some thing elese";
//     console.log("external js");
// }

// const btn = document.getElementById("btn");
/**
 * For every HTML element we can add Event listeners by using addEventListener function.
 */

// addEventListener function takes two parameters : 1. event type 2. listener function 
// addEventListener( eventType, listenerCallback )
// btn.addEventListener("click", function () {
//     console.log("object");
// });

// btn.addEventListener("click", function () {
//     console.log("second event listener");
// });


// let count = 0;
// const btn = document.getElementById("btn");
// const para = document.getElementById("display");

// btn.addEventListener("click", () => {
//     count++;
//     para.innerText = `${count} times`;
// })

// Remove tha Bold element 
// const boldElement = document.querySelector(".para > b");
// const para = document.querySelector(".para");
// const container = document.getElementById("container");

// function removeBoldElement() {
//     // write the code to remove the boldElement from DOM tree
//     // boldElement.remove();

//     // write the code to remove the para 
//     // para.remove();


//     // write the code to create and add the <i>Aravind</i> inside container .
//     let element = document.createElement("i");
//     element.innerText = "Aravind";

//     let element2 = document.createElement("i");
//     element2.innerText = "Rahul";

//     container.append(element, element2);
//     // append => can add multiple elements at a time 
//     // appendChild => can add only one element at a time.

// }


/*
window.addEventListener("load", () => {
    // this event will be triggered when all the content including media of a webpage is loaded
    console.log("window loaded");
})

window.addEventListener("DOMContentLoaded", () => {
    // will be triggered when the DOM tree construction is done.
    console.log("DOM content loaded");
})
*/