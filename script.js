let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function calculateResult() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    display.value = '';
}
