// script.js

document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Please enter your name.');
    } else {
        alert('Form submitted!');
    }
});
