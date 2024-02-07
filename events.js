// HTML events are "things" that happen to HTML elements.
// <element event='some JavaScript'>


// Run javascript when some events happen

// var change=10;
function myfun() {
    change = setInterval(function () {
        let time = Date();
        document.getElementById('demo').innerHTML = time;
        console.log(change);
    }, 1000);
}
function stop() {
    console.log(change);
    clearInterval(change);
}

function changecolor() {
    let item = document.getElementsByTagName('body')[0];
    let gc = Math.floor(Math.random() * 255);
    let bc = Math.floor(Math.random() * 255);
    let rc = Math.floor(Math.random() * 255);
    let colo = `rgb(${rc},${gc},${bc})`;
    console.log(colo);
    item.style.backgroundColor = colo;

}
// changecolor();

// let str = "Hello  my name is \n dhruvil. I am from \v mehsana."
// console.log(str);

// console.log(Number.MIN_SAFE_INTEGER);

// Get the draggable element and drop zone
document.addEventListener('DOMContentLoaded', function () {

    const dragElement = document.getElementById('dragElement');
    const dropZone = document.getElementById('dropZone');

    // Add event listeners for drag events
    dragElement.addEventListener('dragstart', function (event) {
        // Set data to be transferred
        console.log("dragg start");
        event.dataTransfer.setData('text/plain', 'Dragged element');
    });

    dropZone.addEventListener('dragover', function (event) {
        // Allow element to be dropped
        console.log("dragg over");
        event.preventDefault();
    });

    dropZone.addEventListener('drop', function (event) {
        // Prevent default handling
        console.log("dropped");
        event.preventDefault();

        // Get data being dropped
        const data = event.dataTransfer.getData('text/plain');

        // Update drop zone content
        dropZone.textContent = `Dropped: ${data}`;
    });


    // Get the input field and buttons
    const inputField = document.getElementById('inputField');
    const copyButton = document.getElementById('copyButton');
    const pasteButton = document.getElementById('pasteButton');

    // Add event listener for copy event
    copyButton.addEventListener('click', function () {
        // Select the text in the input field
        inputField.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');

        // Log message to console
        console.log('Text copied to clipboard:', inputField.value);
    });

    // Add event listener for paste event
    pasteButton.addEventListener('click', function () {
        // Focus on the input field
        inputField.focus();

        // Paste the text from the clipboard
        document.execCommand('paste');

        // Log message to console
        console.log('Text pasted from clipboard:', inputField.value);
    });

});

