/* Smooth Scrolling
BY CHRIS COYIER LAST UPDATED ON APRIL 23, 2017
https://css-tricks.com/snippets/jquery/smooth-scrolling/
############################################################################ */

// Scroll to a certain element
document.querySelector('.js-scrollto').addEventListener("click", function(e) {
    var target = this.getAttribute("href");
    e.preventDefault();
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}, false);