// Click event
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', function () {
    alert('Button clicked!');
});

// Input event
const textInput = document.getElementById('textInput');
textInput.addEventListener('input', function () {
    const inputValue = textInput.value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = inputValue;
});

// Mouseover event
const mouseoverButton = document.getElementById('mouseoverButton');
mouseoverButton.addEventListener('mouseover', function () {
    const hoverOutput = document.getElementById('hoverOutput');
    hoverOutput.innerText = 'Mouse over event detected!';
});
mouseoverButton.addEventListener('mouseout', function () {
    const hoverOutput = document.getElementById('hoverOutput');
    hoverOutput.innerText = '';
});


// Change event
const changeButton = document.getElementById('changeButton');
let counter = 0;
changeButton.addEventListener('click', function () {
    const changeOutput = document.getElementById('changeOutput');
    if (counter == 0) {
        changeOutput.innerText = 'Text changed! 1';
        counter++;
    }
    else if (counter == 1) {
        changeOutput.innerText = 'Text changed! 2';
        counter++;
    }
    else if (counter == 2) {
        changeOutput.innerText = 'Text changed! 3';
        counter++;
    }
    else {
        changeOutput.innerText = 'stopit';
    }
});

// Focus event
const focusButton = document.getElementById('focusButton');
const focusInput = document.getElementById('focusInput');
focusButton.addEventListener('click', function () {
    focusInput.focus();
});

// Submit event
const exampleForm = document.getElementById('exampleForm');
exampleForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(exampleForm);
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    alert('Form submitted!');
});
