document.addEventListener("DOMContentLoaded", function(event) {

    // Alle Elemente mit der Klasse js-accordion sammeln …
    var accordions = document.querySelectorAll('.js-accordion'),
        i;

    // Über die Elemente interieren …
    for (i = 0; i < accordions.length; ++i) {

        // Klick Listener anheften
        accordions[i].addEventListener("click", function(e) {

            // Beim Klick Klasse togglen 
            this.classList.toggle("active");
        });
    }

});