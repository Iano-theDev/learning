#!/usr/bin/node
// Factory Function
// camel case
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// constructor Function
// pascaal notation : capitalize every first letter of every word in the variable
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
const x = {};