
function getClickCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = {
        "x": x,
        "y": y
    };
    console.log(coor);
    drawCircle(coor);
}

function drawCircle(coords) {
        var newElement = document.createElement("span");
        newElement.className = "circle";
        newElement.style.position = "absolute";
        newElement.style.left = coords.x + "px";
        newElement.style.top = coords.y + "px";
        var par = document.getElementById("canvas");
        par.appendChild(newElement);
}



document.getElementById("canvas").addEventListener("mousemove", function (event) {
    getClickCoords(event)
});

