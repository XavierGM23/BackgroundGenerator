var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

// console.log(css);
// console.log(col1);
// console.log(col2);
console.log(body);

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

