var mouseClicked = false;

function mouseDown() {
    mouseClicked = true;
}
function mouseUp() {
    mouseClicked = false;
}

function getClickCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = {
        "x": x,
        "y": y
    };
    drawCircle(coor);
}

function drawCircle(coords) {
    if (mouseClicked == true) {
    var newElement = document.createElement("span");
    newElement.className = "circle";
    newElement.style.position = "absolute";
    newElement.style.left = coords.x + "px";
    newElement.style.top = coords.y + "px";
    var par = document.getElementById("canvas");
    par.appendChild(newElement);
/*    } else if (mouseClicked == false) {
        console.log(false); */
    }
}

document.getElementById("canvas").addEventListener("mousedown", mouseDown);
document.getElementById("canvas").addEventListener("mouseup", mouseUp);


document.getElementById("canvas").addEventListener("mousemove", function (event) {
    getClickCoords(event)
});

