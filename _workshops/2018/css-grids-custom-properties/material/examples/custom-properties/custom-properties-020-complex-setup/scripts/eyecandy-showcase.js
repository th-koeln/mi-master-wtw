/* Eyecandy Showcase

Färbt die Showcase Items hübsch ein
############################################################################ */


var eyecandyShowcase = {};
eyecandyShowcase.basecolor = [147, 19, 206];
eyecandyShowcase.colors = [
    [147, 19, 206],
    [221, 17, 102],
    [73, 82, 225]
];
eyecandyShowcase.lastAdd = 0;

eyecandyShowcase.getOpacity = function() {
    return (Math.floor(Math.random() * 4) + 6) / 10;
}

eyecandyShowcase.getColor = function(mode) {
    if (mode === "single") {
        return eyecandyShowcase.basecolor;
    } else {
        var rand = Math.floor(Math.random() * eyecandyShowcase.colors.length);
        return eyecandyShowcase.colors[rand];
    }
}

eyecandyShowcase.getRGBA = function() {
    var a = eyecandyShowcase.getOpacity();
    while (Math.abs(eyecandyShowcase.lastAdd - a) < 0.1) { a = eyecandyShowcase.getOpacity(); }
    eyecandyShowcase.lastAdd = a;
    var color = eyecandyShowcase.getColor();
    return color.join(",") + "," + a;
}

document.addEventListener("DOMContentLoaded", function(event) {

    // Alle Elemente mit der Klasse showcase__item sammeln …
    var showcase__items = document.querySelectorAll('.showcase__item'),
        i;

    // Über die Elemente interieren …
    for (i = 0; i < showcase__items.length; i++) {
        var rgba = eyecandyShowcase.getRGBA();
        showcase__items[i].style.backgroundColor = "rgba(" + rgba + ")";
    }
});