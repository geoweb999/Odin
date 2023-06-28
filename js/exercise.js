// Create the <p> element with red text
var redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey I'm red!";

// Create the <h3> element with blue text
var blueHeading = document.createElement('h3');
blueHeading.style.color = 'blue';
blueHeading.textContent = "I'm a blue h3!";

// Create the <div> element with black border and pink background color
var blackPinkDiv = document.createElement('div');
blackPinkDiv.style.border = '1px solid black';
blackPinkDiv.style.backgroundColor = 'pink';

// Create another <h1> element inside the <div>
var h1InsideDiv = document.createElement('h1');
h1InsideDiv.textContent = "I'm in a div";

// Create a <p> element inside the <div>
var pInsideDiv = document.createElement('p');
pInsideDiv.textContent = "ME TOO!";

// Append the <h1> and <p> elements to the <div>
blackPinkDiv.appendChild(h1InsideDiv);
blackPinkDiv.appendChild(pInsideDiv);

// Get the container element where you want to add the elements
const container = document.querySelector('#container');

// Append the elements to the container
container.appendChild(redParagraph);
container.appendChild(blueHeading);
container.appendChild(blackPinkDiv);
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});