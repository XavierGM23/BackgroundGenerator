var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var array = [1,2,3,4,5,6];
console.log('answer', _.without(array, 4));

// console.log(css);
// console.log(col1);
// console.log(col2);
// console.log(body);

var selected = "";

function myNewFunction(sel) {
    selected = sel.options[sel.selectedIndex].text;
    console.log(sel.options[sel.selectedIndex].text);
}

function setGradient() {
    body.style.background = "linear-gradient(" + selected + ", " + col1.value + ", " +
        col2.value + ")";

        css.textContent = "background: " + body.style.background + ";"
};



col1.addEventListener("input", setGradient);

col2.addEventListener("input", setGradient);

