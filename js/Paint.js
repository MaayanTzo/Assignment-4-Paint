var b = 0;

function getClickCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = {
        "x": x,
        "y": y
    };
    console.log(coor);
    drawCircle(coor)
    return coor;
}

function drawCircle(coords) {
   // drawTheCircle = setInterval(function () {
        var newElement = document.createElement("span");
        newElement.className = "circle";
        newElement.style.position = "absolute";
        newElement.style.left = coords.x + "px";
        newElement.style.top = coords.y + "px";
        var par = document.getElementById("parent");
        par.appendChild(newElement);
       // b += 1;
   // }, 10)
}

/*function keepDrawing() {
    drawTheCircle=setInterval(drawCircle, 10);
}*/

/*function stopDrawCircle() {
    clearInterval(drawTheCircle);
} */

document.getElementById("canvas").addEventListener("mousedown", function (event) {
    getClickCoords(event)
});

//document.getElementById("canvas").addEventListener("mousedown", keepDrawing)




/*

window.addEventListener("mousedown", getClickCoords);
window.addEventListener("mouseup", stopDrawCircle);

*/