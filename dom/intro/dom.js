/**
 * DOM => Document Object Model
 *
 * D => HTML document
 * O => Javscript Object
 * Model => representation
 *
 * Representation of HTML document in javascript object format is called as DOM.
 *
 * API means Application Programming Interface => function | class | interface | object that does some meaningful task.
 * HTML document loads into browser => document API => JS Objects
 */


let obj = {
    name: "aravind",
    age: 23,
    address: {
        city: "warangal",
        pincode: 38933
    },
    education: {
        name: "NITW",
        course: "BTech",
        branch: "ECE",
    },
    friends: [
        {
            name: "Sonu",
            age: 28
        },
        {
            name: "ramandeep",
            age: 19
        }
    ]
}

obj.friends[1].name = "Rahul";

console.log(obj);

