var container = document.getElementById('container');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);
checkWidth(); // Ensure it runs on load

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else if (w < 901) {
        slidesPerPage = 2;
    } else if (w < 1101) {
        slidesPerPage = 3;
    } else {
        slidesPerPage = 4;
    }

    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition = slidesCount; // Prevent overflow
    }

    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    updateButtonStates();
}

function slideRight() {
	console.log('Slide Left clicked');
    currentPosition = (currentPosition - 1 + slides) % slides; // Decrement and wrap around
    currentMargin = -currentPosition * (100 / slidesPerPage); // Calculate new margin
    slider.style.marginLeft = currentMargin + '%'; // Update margin left
    updateButtonStates();
}

function slideLeft() {
	console.log('Slide Right clicked');
    currentPosition = (currentPosition + 1) % slides; // Increment and wrap around
    currentMargin = -currentPosition * (100 / slidesPerPage); // Calculate new margin
    slider.style.marginLeft = currentMargin + '%'; // Update margin left
    updateButtonStates(); // Update button states
}


function updateButtonStates() {
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    } else {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    } else {
        buttons[1].classList.remove('inactive');
    }
}
