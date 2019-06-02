var color = "lightcoral";
var mouseClicked = false;
var shape = "tool circle";
var size = "tool-size";
//since the canvas element is used often during the whole code, it may be useful to create a variable (const)


function mouseDown() {
    mouseClicked = true;
}
function mouseUp() {
    mouseClicked = false;
}
// very useful to use this function instead of looking for the mouse event

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
}//good idea to use a loop instead of copying several times the document selector

function sizePicker(e) {
    size = {
        h: e.target.style.height,
        w: e.target.style.width
    }
}

function getClickCoords(event) {
    var x = event.clientX - document.getElementById("canvas").offsetLeft;
    var y = event.clientY - document.getElementById("canvas").offsetTop;
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


// code is explicit and easy to read through  good job
// maybe more clear by adding some comments in order to provide structure to your code