/* Viewmode Showcase

Ändert die Anordnung der Showcase Items
############################################################################ */


var viewmodeShowcase = {};
viewmodeShowcase.activeMode = false;
viewmodeShowcase.lastButton = false;

document.addEventListener("DOMContentLoaded", function(event) {

    var activeElement = document.querySelector("#viewmodeSwitcher .is-active");
    viewmodeShowcase.lastButton = activeElement;

    document.querySelector("#viewmodeSwitcher").addEventListener("click", function(ev) {
        var zielElementId = ev.target.dataset.element;
        var viewmode = ev.target.dataset.viewmode;
        var ele = document.querySelector(zielElementId);

        if (viewmodeShowcase.activeMode) {
            ele.classList.remove(viewmodeShowcase.activeMode);
        }
        ele.classList.add(viewmode);
        viewmodeShowcase.activeMode = viewmode;

        if (viewmodeShowcase.lastButton) {
            viewmodeShowcase.lastButton.classList.remove("is-active");
        }
        ev.target.parentNode.classList.add("is-active");
        viewmodeShowcase.lastButton = ev.target.parentNode;
    });

});