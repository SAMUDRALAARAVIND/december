const input = document.querySelector("input");


/**
 * onchange , oninput events
 * focus and blur(unfocus) events
 *
 * focus => the event when the element is ready to take input.
 */

// input.addEventListener("change", () => {
//     // before focus and after unfocus if there's a value change then onchange event will be triggered.
//     console.log("on changing the input");
// })

// input.addEventListener("input", () => {
//     console.log("on input");
// })


// input.addEventListener("focus", () => {
//     console.log("focused on the input");
// })

// input.addEventListener("blur", () => {
//     console.log("blurred on the input");
// })

// event.target > the element on which the event is occured 

// input.addEventListener("change", (event) => {
//     // event.target => the HTML element on which the event is occured
//     console.log(event.target.value);
//     console.log(event.target.placeholder);
//     console.log(event.target.type);
// })

/*
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", (e) => {
    console.log("parent");
    console.log("current target", e.currentTarget);
    console.log("target", e.target);
})


child.addEventListener("click", (e) => {
    console.log("child");
    console.log("current target", e.currentTarget);
    console.log("target", e.target);
})
*/

// Form events 

const form = document.getElementById("test");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     let userInfo = {
//         username: event.target.uname.value,
//         password: event.target.pword.value
//     }
//     if (userInfo.username.length <= 3 || userInfo.password.length <= 3) {
//         alert("username or password can not be lessthan 4chars")
//     }
// })


// form.addEventListener("change", (e) => {
//     console.log("changed inside form", e.target);
// })

form.addEventListener("input", (e) => {
    console.log("input inside form", e.target);
})