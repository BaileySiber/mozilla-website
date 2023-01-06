const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// Define a Function when fox is clicked
function sayOuch() {
  alert('Ouch! Stop poking me!');
}

//Define a function to hide fox when button one is clicked
function hideFox() {
  foxImage.style.visibility = 'hidden';
}

function showFox() {
  foxImage.style.visibility = 'visible';
}

function toggleFox() {
  if(foxImage.style.visibility == 'visible') {
    foxImage.style.visibility = 'hidden'
  }
  else {
    foxImage.style.visibility = 'visible'
  }
}

function changeColor() {
  var listTwo = document.getElementById('listTwo');
  listTwo.style.color = 'red';
}
// Use a CSS selector to identify an element
var foxImage = document.querySelector('img');

// Assign the function to the onclick event on that element
foxImage.onclick = sayOuch;

// // Use CSS ID to identify button one
// var buttonOne = document.getElementById('buttonOne')
//
// // assign function hide fox when button one clicked
// buttonOne.onclick = hideFox;
//
// // use css ID to identify button two
// var buttonTwo = document.getElementById('buttonTwo')
//
// // assign function show fox when button two clicked
// buttonTwo.onclick = showFox;

// use css ID to identify button toggle
var buttonToggle = document.getElementById('buttonToggle')

// assign function hide / show fox when button toggle clicked
buttonToggle.onclick = toggleFox;

// use css ID to identify button for color change
var buttonColor = document.getElementById('buttonColor')

// assign function show fox when button two clicked
buttonColor.onclick = changeColor;
