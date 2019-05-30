var color = "lightcoral";
var mouseClicked = false;
var shape = "tool circle";
var size = "tool-size";

function mouseDown() {
    mouseClicked = true;
}
function mouseUp() {
    mouseClicked = false;
}

var AllColors = document.getElementsByClassName("tool-circle");
for (i = 0; i < AllColors.length; i++) {
    AllColors[i].addEventListener("click", function (e) {
        colorPicker(e);
    })
}

function colorPicker(e) {
    color = e.target.id;
}

var AllShapes = document.getElementsByClassName("tool");
for (i = 0; i < AllShapes.length; i++) {
    AllShapes[i].addEventListener("click", function (e) {
        shapePicker(e);
    })
}

function shapePicker(e) {
    shape = e.target.className;
}

var AllSizes = document.getElementsByClassName("tool-size");
for (i = 0; i < AllSizes.length; i++) {
    AllSizes[i].addEventListener("click", function (e) {
        sizePicker(e);
    })
}

function sizePicker(e) {
    size = {
        h: e.target.style.height,
        w: e.target.style.width
    }
}

function getClickCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = {
        "x": x,
        "y": y
    };
    drawCircle(coor, color, shape, size);
}

function drawCircle(coords, color, shape, size) {
    if (mouseClicked == true) {
        var newElement = document.createElement("span");
        newElement.style.position = "absolute";
        newElement.style.left = coords.x + "px";
        newElement.style.top = coords.y + "px";
        var par = document.getElementById("canvas");
        newElement.className = shape;
        newElement.style.backgroundColor = color;
        newElement.style.height = size.h;
        newElement.style.width = size.w;
        par.appendChild(newElement);
    }
}



document.getElementById("canvas").addEventListener("mousedown", mouseDown);
document.getElementById("canvas").addEventListener("mouseup", mouseUp);
document.getElementById("canvas").addEventListener("mousemove", function (event) {
    getClickCoords(event);
});