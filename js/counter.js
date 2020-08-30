window.drawPoint = (x, y) => {
    var c = document.getElementById("canvas");
    var can = c.getContext("2d");
    can.scale(2.5, 2.5);
    can.fillRect(x, y, x + 2, y + 2);
    return 0;
}
