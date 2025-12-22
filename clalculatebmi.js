const { useOptimistic } = require("react");

let inputw = document.getElementById("input-w");
let inputh = document.getElementById("input-h");
let outputw = document.getElementById("out-w");
let outputh = document.getElementById("out-h");

let w = 40;
let height = 40;
inputh.addEventListener("mousedown", (event) => {
    updateh(event);
    inputh.addEventListener("mousemove", updateh);

})

function updateh(event) {
    let h = event.target.value;
    height = h;
    outputh.innerHTML = `${height} cm`;
}