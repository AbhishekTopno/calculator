let display = document.getElementById('display');

// Appends the given value to the display
function appendValue(value) {
    display.value += value;
}

// Clears the entire display
function clearDisplay() {
    display.value = '';
}

// Removes the last character from the display
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Evaluates the expression in the display
function calculate() {
    try {
        // Use eval() to compute the result from the string.
        // The string is pre-formatted with Math object calls.
        let result = eval(display.value);
        display.value = result;
    } catch (e) {
        // If an error occurs (e.g., invalid expression), show 'Error'
        display.value = 'Error';
    }
}
