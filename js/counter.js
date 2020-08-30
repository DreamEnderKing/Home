window.drawPoint = (x, y) => {
    var c = document.getElementById("canvas");
    var can = c.getContext("2d");
    //can.scale(2.5, 2.5);
    //can.fillRect(x, y, x + 2, y + 2);
    can.fillRect(10, 20, 10 + 50, 20 + 50);
    return 0;
}
