var mouseClicked = false;

function mouseDown() {
    mouseClicked = true;
}
function mouseUp() {
    mouseClicked = false;
}
var color = "lightcoral";

var AllColors = document.getElementsByClassName("tool-circle");
for (i=0; i<AllColors.length; i++) {
    AllColors[i].addEventListener("click", function(e){
        colorPicker(e);
    })
}

function colorPicker(e){
    color = e.target.id;
}

function getClickCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = {
        "x": x,
        "y": y
    };
    drawCircle(coor, color);
}

function drawCircle(coords, color) {
    if (mouseClicked == true) {
        var newElement = document.createElement("span");
        newElement.style.position = "absolute";
        newElement.style.left = coords.x + "px";
        newElement.style.top = coords.y + "px";
        var par = document.getElementById("canvas");
        newElement.className = "tool-circle";
        newElement.style.backgroundColor = color;
        par.appendChild(newElement);
    }
}



document.getElementById("canvas").addEventListener("mousedown", mouseDown);
document.getElementById("canvas").addEventListener("mouseup", mouseUp);
document.getElementById("canvas").addEventListener("mousemove", function (event) {
    getClickCoords(event);
});