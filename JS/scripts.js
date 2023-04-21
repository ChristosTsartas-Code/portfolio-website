console.log("Hi! Thank you for visiting my Portfolio site")
console.log("Hi! Thank you for visiting my Portfolio site");

// Responsive menu script.
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}