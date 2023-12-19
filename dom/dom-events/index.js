/**
 * Element Properties
 *  1. built in attributes and custom attributes
 *  2. style attribute , getComputedStyle will give the finalised styles of an element.
 *  3.
 * DOM manipulation (update, create, delete nodes from DOM tree)
 * DOM events
 */

// {
//     name: "",
//     type: "",
//     id: ""
// }

// const input = document.querySelector("input");


// attributeValue = element.getAttribute(attributeName);
// console.log(input.type, input.getAttribute("data-rollnumber"));


const bold = document.querySelector("b");
// border, fontSize, color 

// bold.style.border = "2px solid red";
// bold.style.color = "blue";
// bold.style.fontSize = "24px";

bold.className = "aravind amar";

//<element class="one two three"></element>

// let str = "one two three";
// let updatedClassName = str.split(" ").filter((className) => {
//     return className !== "two"
// }).join(" ");
// console.log(updatedClassName);
// updatedClassName += " four";
// console.log(updatedClassName);

// classList => is a property available on all the HTML elements 

/**
 * classList property on HTML element objects is handy property used to do className manipulations easily.
 *
 * 1. contains => boolean
 * 2. add("new") => adds a new classname to the element
 * 3. remove() => removes an existing classname from the classes list
 * 4. toggle() => toggles a classname from the element.
 */


/**
 * innerText, innerHTML, textContent
 *
 */

// const container = document.getElementsByClassName("container")[0];

// console.log(container);// [div.container] 
// container.innerHTML = `
//     <input id="custom-input" name="email" />
//     <pre>Some text inside pre tag</pre>
//     <i>Italic text</i>
// `;

// const para = document.querySelector("div > p");
// para.innerText = "Rahul"